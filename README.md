# 0xAdham Field Notes

Static site build of **0xAdham Field Notes** populated with all 23 technical writeups, research records, and images from `adham.dev`.

## Structure

- `index.html` — Homepage featuring the editorial cover, Krayin CRM research highlight, and latest field notes
- `writing/` — Full searchable writing archive with topic filters (`CTF`, `Web security research`, `Responsible disclosure`, `Bug bounty`), search input, and responsive post cards
- `writing/<slug>/` — Individual responsive article pages for all 23 published writeups
- `research/` — Documented CVEs (CVE-2026-112286, CVE-2026-112287, CVE-2026-112288) in Krayin CRM, responsible disclosure record, and platform profiles
- `about/` — Bio, research philosophy, methodology, and verified platform links
- `blog/` — All 41 local writeup images, screenshots, SVGs, and GIFs
- `assets/` — CSS styling (`site.css`), scripts (`site.js`), and favicon mark (`mark.svg`)

## Run Locally

To preview the site locally, run from this directory:

```bash
python3 -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000) in your browser.

## Deployment to GitHub Pages

To serve this static site directly from GitHub Pages (`0xAdham1.github.io`):

1. Copy the contents of this folder to the root of your `0xAdham1.github.io` repository (or commit and push to your `main` branch).
2. Under repository **Settings > Pages**, select **Deploy from a branch**, set Branch to `main` and folder to `/ (root)`.
