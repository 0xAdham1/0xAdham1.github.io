/* 0xAdham Field Notes published technical articles archive */
window.FIELD_NOTES_POSTS = [
  {
    "slug": "krayin-crm-three-cves",
    "title": "A Patch Is Not a Fix: Chaining Krayin CRM's Blind Spots",
    "summary": "A white-box review of Krayin CRM turned up three CVEs: an incomplete-fix IDOR in the Quote module, a write-path BOLA in Mail, and a DNS-rebinding bypass of the webhook SSRF filter. Root cause, PoCs and fixes for all three, fixed in 2.2.7.",
    "excerpt": "A white-box review of Krayin CRM turned up three CVEs: an incomplete-fix IDOR in the Quote module, a write-path BOLA in Mail, and a DNS-rebinding bypass of the webhook SSRF filter. Root cause, PoCs and fixes for all three, fixed in 2.2.7.",
    "date": "2026-10-19 00:00:00+00:00",
    "url": "/writing/krayin-crm-three-cves/",
    "topics": [
      "Responsible disclosure",
      "Web security research"
    ],
    "tags": [
      "krayin",
      "laravel",
      "idor",
      "bola",
      "ssrf",
      "dns-rebinding",
      "cve",
      "appsec"
    ]
  },
  {
    "slug": "api-hacking-rest-graphql",
    "title": "API Hacking for Beginners: Breaking REST and GraphQL",
    "summary": "A simple, beginner friendly guide to how REST and GraphQL APIs get hacked, how to test them, how defenders fix the bugs, and where to practice legally.",
    "excerpt": "A simple, beginner friendly guide to how REST and GraphQL APIs get hacked, how to test them, how defenders fix the bugs, and where to practice legally.",
    "date": "2026-10-07",
    "url": "/writing/api-hacking-rest-graphql/",
    "topics": [
      "Bug bounty",
      "Web security research"
    ],
    "tags": [
      "api security",
      "rest",
      "graphql",
      "bug bounty",
      "pentesting",
      "web security"
    ]
  },
  {
    "slug": "0xvoid-loopback-lens",
    "title": "0xVoid: Loopback Lens",
    "summary": "A URL fetcher blocks the obvious localhost names but never resolves the host, so a decimal-encoded 127.0.0.1 walks straight past the blocklist to an internal-only route. A tour of SSRF loopback bypasses.",
    "excerpt": "A URL fetcher blocks the obvious localhost names but never resolves the host, so a decimal-encoded 127.0.0.1 walks straight past the blocklist to an internal-only route. A tour of SSRF loopback bypasses.",
    "date": "2026-08-17 20:58:02.227000+00:00",
    "url": "/writing/0xvoid-loopback-lens/",
    "topics": [
      "CTF",
      "Web security research"
    ],
    "tags": []
  },
  {
    "slug": "messageboard",
    "title": "gaslightCTF: messageboard",
    "summary": "A Bun + Postgres stories app whitelists every input to alphanumerics — which kills classic SQLi, but is exactly enough to name columns in an ORDER BY. We turn the sort order into a blind boolean oracle, binary-search admin's password character by character, then walk in through the front door.",
    "excerpt": "A Bun + Postgres stories app whitelists every input to alphanumerics — which kills classic SQLi, but is exactly enough to name columns in an ORDER BY. We turn the sort order into a blind boolean oracle, binary-search admin's password character by character, then walk in through the front door.",
    "date": "2026-08-14 00:00:00+00:00",
    "url": "/writing/messageboard/",
    "topics": [
      "CTF",
      "Web security research"
    ],
    "tags": []
  },
  {
    "slug": "eycc-mall-albostan",
    "title": "EYCC: Mall Albostan",
    "summary": "A search box concatenates SQL, so we UNION out the JWT secret, forge an admin token, sneak a .phtml shell past a blacklist, and pivot through a UTF-16 XXE to find where it landed. SQLi to RCE, end to end.",
    "excerpt": "A search box concatenates SQL, so we UNION out the JWT secret, forge an admin token, sneak a .phtml shell past a blacklist, and pivot through a UTF-16 XXE to find where it landed. SQLi to RCE, end to end.",
    "date": "2026-07-31 00:00:00+00:00",
    "url": "/writing/eycc-mall-albostan/",
    "topics": [
      "CTF",
      "Web security research"
    ],
    "tags": []
  },
  {
    "slug": "eycc-edu-svg",
    "title": "EYCC: EduSVG",
    "summary": "The ID-card renderer trusted client-side SVG dimensions and piped them straight into a shell. rsvg-convert never stood a chance.",
    "excerpt": "The ID-card renderer trusted client-side SVG dimensions and piped them straight into a shell. rsvg-convert never stood a chance.",
    "date": "2026-07-27 00:00:00+00:00",
    "url": "/writing/eycc-edu-svg/",
    "topics": [
      "CTF"
    ],
    "tags": []
  },
  {
    "slug": "flagyard-tech-shop",
    "title": "FlagYard — Tech Shop",
    "summary": "Broken access control lets any user rewrite a product's description and top up their balance — then a second, unsafe render of that description in the order-history page turns it into Jinja2 SSTI and RCE.",
    "excerpt": "Broken access control lets any user rewrite a product's description and top up their balance — then a second, unsafe render of that description in the order-history page turns it into Jinja2 SSTI and RCE.",
    "date": "2026-07-23 13:43:11+00:00",
    "url": "/writing/flagyard-tech-shop/",
    "topics": [
      "CTF",
      "Web security research"
    ],
    "tags": [
      "ctf",
      "web",
      "flagyard",
      "idor",
      "ssti",
      "jinja2",
      "rce",
      "flask"
    ]
  },
  {
    "slug": "byuctf-power-tower",
    "title": "BYUCTF: Power Tower",
    "summary": "Multi-prime RSA where every factor is ≤ 2^16 and the exponent is a 25-high right-associative power tower. Factoring is trivial trial division; the real trick is inverting the tower via Euler's theorem applied recursively. The whole modulus chain stays 2^16-smooth.",
    "excerpt": "Multi-prime RSA where every factor is ≤ 2^16 and the exponent is a 25-high right-associative power tower. Factoring is trivial trial division; the real trick is inverting the tower via Euler's theorem applied recursively. The whole modulus chain stays 2^16-smooth.",
    "date": "2026-05-31 11:21:48.118000+00:00",
    "url": "/writing/byuctf-power-tower/",
    "topics": [
      "CTF"
    ],
    "tags": [
      "ctf",
      "crypto",
      "rsa",
      "multi-prime",
      "eulers-theorem",
      "tetration",
      "byuctf"
    ]
  },
  {
    "slug": "byuctf-mixed-signals",
    "title": "BYUCTF: Mixed Signals",
    "summary": "Two Go binaries: a process that turns 15 OS signals into VM opcodes via signal.Notify, and a driver that sends it 1817 signals. Recover the ISA from the dispatch, scrape the unrolled signal list, and since the VM is straight-line, let z3 hand you the flag.",
    "excerpt": "Two Go binaries: a process that turns 15 OS signals into VM opcodes via signal.Notify, and a driver that sends it 1817 signals. Recover the ISA from the dispatch, scrape the unrolled signal list, and since the VM is straight-line, let z3 hand you the flag.",
    "date": "2026-05-31 11:21:47.741000+00:00",
    "url": "/writing/byuctf-mixed-signals/",
    "topics": [
      "CTF"
    ],
    "tags": [
      "ctf",
      "rev",
      "golang",
      "signals",
      "vm",
      "z3",
      "symbolic-execution",
      "byuctf"
    ]
  },
  {
    "slug": "byuctf-angr-management",
    "title": "BYUCTF: Angr Management",
    "summary": "The name baits you toward symbolic execution. But a 'maze of gotos' built from literal cmp-imm → jmp edges is a static CFG. Parse the disassembly, BFS room 0 to the win room, replay 72 moves. No SMT, instant.",
    "excerpt": "The name baits you toward symbolic execution. But a 'maze of gotos' built from literal cmp-imm → jmp edges is a static CFG. Parse the disassembly, BFS room 0 to the win room, replay 72 moves. No SMT, instant.",
    "date": "2026-05-31 11:21:47.142000+00:00",
    "url": "/writing/byuctf-angr-management/",
    "topics": [
      "CTF"
    ],
    "tags": [
      "ctf",
      "rev",
      "control-flow",
      "static-analysis",
      "byuctf"
    ]
  },
  {
    "slug": "byuctf-intro-2",
    "title": "BYUCTF: Intro 2",
    "summary": "A PIE binary disguised as a rev chal. Both branches call printf(buf) with no format string. Leak the PIE base via %39$p, then a manual %hn GOT overwrite points puts@got at win(), and the very next puts() fires the shell.",
    "excerpt": "A PIE binary disguised as a rev chal. Both branches call printf(buf) with no format string. Leak the PIE base via %39$p, then a manual %hn GOT overwrite points puts@got at win(), and the very next puts() fires the shell.",
    "date": "2026-05-31 11:21:46.705000+00:00",
    "url": "/writing/byuctf-intro-2/",
    "topics": [
      "CTF"
    ],
    "tags": [
      "ctf",
      "pwn",
      "format-string",
      "got-overwrite",
      "pie",
      "info-leak",
      "byuctf"
    ]
  },
  {
    "slug": "byuctf-incontinent",
    "title": "BYUCTF: Incontinent",
    "summary": "Looks like a format-string bug, but printf uses a fixed %s. The real flaw: read() never null-terminates, so 32 bytes of padding bridge the gap to the flag buffer and %s over-reads straight into the secret.",
    "excerpt": "Looks like a format-string bug, but printf uses a fixed %s. The real flaw: read() never null-terminates, so 32 bytes of padding bridge the gap to the flag buffer and %s over-reads straight into the secret.",
    "date": "2026-05-31 11:21:46.404000+00:00",
    "url": "/writing/byuctf-incontinent/",
    "topics": [
      "CTF"
    ],
    "tags": [
      "ctf",
      "pwn",
      "info-leak",
      "missing-null-terminator",
      "byuctf"
    ]
  },
  {
    "slug": "byuctf-hex-to-int",
    "title": "BYUCTF: Hex to Int",
    "summary": "A 'hex converter' with a signed table index and idx*4 addressing turns 'expand the table' into an arbitrary 4-byte write. Partial RELRO means a writable GOT, so point exit@got at win() and trigger it from the menu. Classic ret2win, no leak.",
    "excerpt": "A 'hex converter' with a signed table index and idx*4 addressing turns 'expand the table' into an arbitrary 4-byte write. Partial RELRO means a writable GOT, so point exit@got at win() and trigger it from the menu. Classic ret2win, no leak.",
    "date": "2026-05-31 11:21:46.095000+00:00",
    "url": "/writing/byuctf-hex-to-int/",
    "topics": [
      "CTF"
    ],
    "tags": [
      "ctf",
      "pwn",
      "oob-write",
      "got-overwrite",
      "partial-relro",
      "ret2win",
      "byuctf"
    ]
  },
  {
    "slug": "byuctf-heap2win",
    "title": "BYUCTF: heap2win",
    "summary": "A C++ button app with a 16-byte %s overflow and a never-reachable WinnerButton::push that calls system(\"/bin/sh\"). tcache reuse drops a Custom button right before a live Hype button, turning a forward-only overflow into a vtable-pointer overwrite. No leak, all constants.",
    "excerpt": "A C++ button app with a 16-byte %s overflow and a never-reachable WinnerButton::push that calls system(\"/bin/sh\"). tcache reuse drops a Custom button right before a live Hype button, turning a forward-only overflow into a vtable-pointer overwrite. No leak, all constants.",
    "date": "2026-05-31 11:21:45.738000+00:00",
    "url": "/writing/byuctf-heap2win/",
    "topics": [
      "CTF"
    ],
    "tags": [
      "ctf",
      "pwn",
      "heap",
      "c++",
      "vtable-hijack",
      "tcache",
      "byuctf"
    ]
  },
  {
    "slug": "flagyard-ohmyql",
    "title": "FlagYard: OhMyQL",
    "summary": "A GraphQL login mutation that signs whatever username you hand it. The DB layer concatenates strings into SQL. The flag gate just compares your JWT to your own input.",
    "excerpt": "A GraphQL login mutation that signs whatever username you hand it. The DB layer concatenates strings into SQL. The flag gate just compares your JWT to your own input.",
    "date": "2026-05-26 00:00:00+00:00",
    "url": "/writing/flagyard-ohmyql/",
    "topics": [
      "CTF",
      "Web security research"
    ],
    "tags": [
      "ctf",
      "web",
      "graphql",
      "sqli",
      "jwt"
    ]
  },
  {
    "slug": "webverselabs-vellichor-press",
    "title": "WebVerse Labs — Vellichor Press",
    "summary": "The engineer left a TODO in the HTML. He never came back to finish it.",
    "excerpt": "The engineer left a TODO in the HTML. He never came back to finish it.",
    "date": "2026-05-25 15:15:00+00:00",
    "url": "/writing/webverselabs-vellichor-press/",
    "topics": [
      "CTF",
      "Web security research"
    ],
    "tags": [
      "ctf",
      "web"
    ]
  },
  {
    "slug": "webverselabs-redirect-run",
    "title": "WebVerse Labs — Redirect Run",
    "summary": "The browser followed the redirect. Burp didn't.",
    "excerpt": "The browser followed the redirect. Burp didn't.",
    "date": "2026-05-24 04:17:22+00:00",
    "url": "/writing/webverselabs-redirect-run/",
    "topics": [
      "CTF",
      "Web security research"
    ],
    "tags": [
      "ctf",
      "web"
    ]
  },
  {
    "slug": "webverselabs-session-swap",
    "title": "WebVerse Labs — Session Swap",
    "summary": "The staff portal trusts the browser to tell the truth about who's logged in. It shouldn't.",
    "excerpt": "The staff portal trusts the browser to tell the truth about who's logged in. It shouldn't.",
    "date": "2026-05-23 00:00:00+00:00",
    "url": "/writing/webverselabs-session-swap/",
    "topics": [
      "CTF",
      "Web security research"
    ],
    "tags": [
      "ctf",
      "web"
    ]
  },
  {
    "slug": "takeover",
    "title": "TryHackMe — TakeOver Writeup",
    "summary": "Subdomain enumeration challenge on TryHackMe. Finding a hidden subdomain via SSL certificate inspection to grab the flag.",
    "excerpt": "Subdomain enumeration challenge on TryHackMe. Finding a hidden subdomain via SSL certificate inspection to grab the flag.",
    "date": "2026-02-09 00:00:00+00:00",
    "url": "/writing/takeover/",
    "topics": [
      "Bug bounty",
      "Web security research",
      "CTF"
    ],
    "tags": [
      "ctf",
      "web"
    ]
  },
  {
    "slug": "0xl4ugh-sca1-aes",
    "title": "0xL4ugh CTF v5 — Cracking AES with a Multimeter: Side-Channel Analysis",
    "summary": "Breaking AES-128 without touching the algorithm — Correlation Power Analysis on a black-box hardware target using power traces and Hamming weight correlation.",
    "excerpt": "Breaking AES-128 without touching the algorithm — Correlation Power Analysis on a black-box hardware target using power traces and Hamming weight correlation.",
    "date": "2026-01-26 00:00:00+00:00",
    "url": "/writing/0xl4ugh-sca1-aes/",
    "topics": [
      "CTF"
    ],
    "tags": [
      "ctf",
      "hardware",
      "crypto"
    ]
  },
  {
    "slug": "olicyber-dependency-hell",
    "title": "OliCyber — Dependency Hell: Racing SQLite Session Store",
    "summary": "Exploiting a TOCTOU race condition in a SQLite-backed Express session store to bypass balance checks and chain key purchases to get the flag.",
    "excerpt": "Exploiting a TOCTOU race condition in a SQLite-backed Express session store to bypass balance checks and chain key purchases to get the flag.",
    "date": "2026-01-24 00:00:00+00:00",
    "url": "/writing/olicyber-dependency-hell/",
    "topics": [
      "CTF",
      "Web security research"
    ],
    "tags": [
      "ctf",
      "web"
    ]
  },
  {
    "slug": "hackerdna-hack-the-cookie",
    "title": "HackerDNA — Hack the Cookie: Insecure Session Management",
    "summary": "Privilege escalation from guest to admin by decoding and modifying an unsigned Base64 session cookie. A classic case of client-side trust gone wrong.",
    "excerpt": "Privilege escalation from guest to admin by decoding and modifying an unsigned Base64 session cookie. A classic case of client-side trust gone wrong.",
    "date": "2025-12-08 00:00:00+00:00",
    "url": "/writing/hackerdna-hack-the-cookie/",
    "topics": [
      "CTF",
      "Web security research"
    ],
    "tags": [
      "ctf",
      "web"
    ]
  },
  {
    "slug": "tamuctf-pittrap-onnx-blackbox",
    "title": "TAMU CTF 2025 — pittrap: Black-Box ONNX Neural Network Optimization",
    "summary": "Solving a black-box neural network challenge at TAMU CTF (gigem) by treating the ONNX model as an oracle and applying simulated annealing to find the winning input.",
    "excerpt": "Solving a black-box neural network challenge at TAMU CTF (gigem) by treating the ONNX model as an oracle and applying simulated annealing to find the winning input.",
    "date": "2025-03-29 00:00:00+00:00",
    "url": "/writing/tamuctf-pittrap-onnx-blackbox/",
    "topics": [
      "CTF",
      "Web security research"
    ],
    "tags": [
      "ctf",
      "web",
      "rev"
    ]
  }
];
