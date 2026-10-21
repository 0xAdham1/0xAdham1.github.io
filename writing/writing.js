(() => {
  const search = document.querySelector('#post-search');
  const topic = document.querySelector('#topic-filter');
  const list = document.querySelector('#post-list');
  const empty = document.querySelector('#archive-empty');
  const status = document.querySelector('#archive-status');
  const reset = document.querySelector('#clear-filters');
  if (!search || !topic || !list || !empty || !status) return;

  const posts = Array.isArray(window.FIELD_NOTES_POSTS) ? window.FIELD_NOTES_POSTS : [];
  const normalize = (value) => String(value || '').toLocaleLowerCase().trim();
  const matches = (post, query, selectedTopic) => {
    const haystack = normalize([post.title, post.summary, post.excerpt, ...(post.topics || []), ...(post.tags || [])].join(' '));
    const topicMatch = !selectedTopic || (post.topics || []).some((item) => normalize(item) === selectedTopic);
    return (!query || haystack.includes(query)) && topicMatch;
  };
  const addText = (parent, tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    node.textContent = text;
    parent.append(node);
    return node;
  };
  const renderCard = (post) => {
    const link = document.createElement('a');
    link.className = 'post-card';
    link.href = post.url;
    const date = post.date ? new Date(post.date) : null;
    const dateText = date && !Number.isNaN(date.valueOf()) ? new Intl.DateTimeFormat('en', { dateStyle: 'medium', timeZone: 'UTC' }).format(date) : 'Date not supplied';
    addText(link, 'span', 'post-meta', dateText);
    const content = document.createElement('div');
    addText(content, 'h2', 'post-title', post.title || 'Untitled');
    addText(content, 'p', 'post-excerpt', post.summary || post.excerpt || '');
    link.append(content);
    const tags = document.createElement('span');
    tags.className = 'post-tags';
    (post.topics || []).forEach((label) => addText(tags, 'span', 'tag', label));
    link.append(tags);
    return link;
  };
  const render = () => {
    const query = normalize(search.value);
    const selectedTopic = normalize(topic.value);
    const filtered = posts.filter((post) => matches(post, query, selectedTopic));
    list.replaceChildren(...filtered.map(renderCard));
    if (posts.length === 0) {
      empty.hidden = false;
      empty.querySelector('[data-empty-title]').textContent = 'No posts published yet.';
      empty.querySelector('p').textContent = "The supplied portfolio describes Adham's research and CTF work, but it doesn't include article titles, summaries, or publication dates. Nothing is fabricated here; this archive is ready for the first verified write-up.";
      status.textContent = query || selectedTopic ? 'No published entries match these filters. The archive has no imported post records yet.' : '0 published entries · archive ready for the first verified write-up';
      return;
    }
    const noMatches = filtered.length === 0;
    empty.hidden = !noMatches;
    status.textContent = filtered.length === posts.length ? `${posts.length} published ${posts.length === 1 ? 'entry' : 'entries'}` : `${filtered.length} of ${posts.length} entries match`;
    if (noMatches) {
      empty.querySelector('[data-empty-title]').textContent = 'No matching notes';
      empty.querySelector('p').textContent = 'Try another title, keyword, or topic—or clear the filters to see the full archive.';
    }
  };
  search.addEventListener('input', render);
  topic.addEventListener('change', render);
  reset?.addEventListener('click', () => {
    search.value = '';
    topic.value = '';
    render();
    search.focus();
  });
  document.querySelectorAll('.topic-pills a').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const val = link.textContent.trim().toLowerCase();
      topic.value = val;
      render();
      const tools = document.querySelector('.archive-tools');
      if (tools) tools.scrollIntoView({ behavior: 'smooth' });
    });
  });
  render();
})();
