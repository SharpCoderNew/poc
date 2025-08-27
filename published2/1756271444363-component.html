<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Me — AI Software Engineer Portfolio</title>
  <meta name="description" content="Professional portfolio for an AI Software Engineer focusing on AI/ML, MLOps, and scalable systems." />
  <style>
    /* Design Tokens (theme-agnostic, easy to customize) */
    :root {
      --bg: #0b1020;
      --bg-soft: #11172a;
      --fg: #e9f0ff;
      --fg-dim: #cbd9ff;
      --surface: #141b2e;
      --surface-2: #1e2541;
      --primary: #6cc5ff;
      --secondary: #8a7dff;
      --accent: #4ee6a6;
      --muted: #93a4d6;
      --radius: 12px;
      --shadow: 0 6px 18px rgba(0,0,0,.25);
      --grid-gap: 1.25rem;
      --font-s: 15px;
      --font-m: 17px;
      --font-l: 21px;
      --font-xl: 32px;
    }

    /* Light mode (optional toggle could switch root variables) */
    @media (prefers-color-scheme: light) {
      :root {
        --bg: #f7f9fc;
        --bg-soft: #eef3f9;
        --fg: #0b1b2b;
        --fg-dim: #4a647a;
        --surface: #ffffff;
        --surface-2: #f2f4f8;
        --primary: #2266ff;
        --secondary: #7a3af5;
        --accent: #0c8a5d;
        --muted: #5c6b82;
      }
    }

    /* Global styles */
    * { box-sizing: border-box; }
    html, body { height: 100%; }
    body {
      margin: 0;
      font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto;
      background: radial-gradient(circle at 20% -10%, rgba(108,197,255,.15), transparent 40%), 
                  radial-gradient(circle at 100% 0%, rgba(78,230,166,.12), transparent 40%), 
                  var(--bg);
      color: var(--fg);
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    a { color: var(--primary); text-decoration: none; }
    a:focus-visible { outline: 2px solid var(--primary); outline-offset: 2px; border-radius: 4px; }
    img { max-width: 100%; display: block; }

    /* Layout helpers */
    .container { width: min(1100px, 92%); margin: 0 auto; }
    header.site-header {
      position: sticky; top: 0; z-index: 1000;
      background: rgba(10,12,25,.85);
      backdrop-filter: saturate(1.2) blur(6px);
      border-bottom: 1px solid rgba(255,255,255,.08);
    }
    .site-header .inner { display: flex; align-items: center; justify-content: space-between; padding: 14px 0; }

    .brand { display: flex; align-items: center; gap: 12px; }
    .brand-logo {
      width: 38px; height: 38px; border-radius: 9px;
      background: conic-gradient(from 180deg at 50% 50%, var(--primary), var(--secondary), var(--accent), var(--primary));
      display: grid; place-items: center; color: white; font-weight: 700;
    }
    nav ul { list-style: none; display: flex; gap: 14px; padding: 0; margin: 0; }
    nav a { color: var(--fg-dim); padding: 6px 10px; border-radius: 6px; }
    nav a:hover, nav a:focus { background: rgba(255,255,255,.08); color: white; }

    /* Hero */
    .hero {
      padding: 64px 0 26px;
    }
    .hero-grid { display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 28px; align-items: center; }
    @media (max-width: 900px) {
      .hero-grid { grid-template-columns: 1fr; padding-top: 6px; }
      .avatar { justify-self: center; }
    }
    .headline { font-size: 2.2rem; font-weight: 700; margin: 8px 0 6px; letter-spacing: .2px; }
    .tagline { color: var(--fg-dim); font-size: 1.05rem; margin-bottom: 14px; }
    .cta-row { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 6px; }
    .btn { padding: 11px 16px; border-radius: 999px; border: 1px solid rgba(255,255,255,.25);
           background: rgba(255,255,255,.08); color: #fff; cursor: pointer; font-weight: 600; }
    .btn.primary { background: var(--primary); border: none; color: white; }
    .btn.secondary { background: transparent; color: var(--fg); border: 1px solid rgba(255,255,255,.25); }

    .hero-card {
      background: linear-gradient(135deg, rgba(20,26,60,.9), rgba(20,26,60,.6));
      border-radius: var(--radius);
      padding: 18px;
      box-shadow: var(--shadow);
      display: grid; gap: 10px;
      align-items: start;
    }
    .avatar {
      width: 180px; height: 180px; border-radius: 50%;
      overflow: hidden; border: 2px solid rgba(255,255,255,.6);
      display: grid; place-items: center; background: #111;
    }
    .avatar svg { width: 100%; height: 100%; display: block; }

    /* Sections */
    section { padding: 56px 0; border-bottom: 1px solid rgba(255,255,255,.06); }
    section:last-of-type { border-bottom: none; }
    h2.section-title { font-size: 1.8rem; margin-bottom: 14px; }

    .grid { display: grid; gap: var(--grid-gap); }
    .grid.cols-2 { grid-template-columns: 1fr 1fr; }
    @media (max-width: 800px) { .grid.cols-2 { grid-template-columns: 1fr; } }

    .card {
      background: var(--surface);
      border-radius: var(--radius);
      padding: 16px;
      box-shadow: var(--shadow);
    }
    .card h3 { margin: 0 0 6px; font-size: 1.15rem; }
    .muted { color: var(--muted); }

    ul.bullets { padding-left: 1.1em; margin: .25rem 0; }
    ul.bullets li { margin: .25rem 0; }

    /* Project deep dive (accordion/details) */
    details { border: 1px solid rgba(255,255,255,.08); border-radius: 8px; padding: 8px; margin: 8px 0; background: rgba(255,255,255,.02); }
    details summary { cursor: pointer; font-weight: 600; }
    .project-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 6px; }
    .tag { padding: 4px 8px; border-radius: 999px; background: rgba(108,197,255,.15); color: #eaf6ff; font-size: .8rem; }

    /* Contact form */
    form { display: grid; gap: 12px; }
    label { font-size: .9rem; color: var(--fg-dim); }
    input[type="text"], input[type="email"], textarea {
      width: 100%; padding: 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,.25);
      background: rgba(0,0,0,.15); color: white;
    }
    textarea { min-height: 120px; resize: vertical; }

    .toast { padding: 10px 14px; background: rgba(0,0,0,.6); color: white; border-radius: 8px; display: inline-block; }

    /* Design Tokens panel (footer-ish) */
    .tokens { padding: 14px; border-radius: 12px; background: rgba(255,255,255,.04); }
    .tok-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; align-items: center; }
    .tok-name { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas; opacity:.9;}
    .tok-swatch { height: 20px; border-radius: 6px; }

    /* Print-friendly */
    @media print {
      header, nav, .cta-row, .toast { display: none; }
      body { background: white; color: #000; }
      section { page-break-inside: avoid; }
    }

    /* Accessibility helper: focus ring for keyboard nav */
    :focus-visible { outline: 3px solid var(--primary); outline-offset: 2px; border-radius: 6px; }
  </style>
</head>
<body>
  <!-- Skip link for accessibility -->
  <a href="#content" class="skip-link" style="position:absolute;left:-999px;top:auto;width:1px;height:1px;overflow:hidden;">Skip to content</a>

  <!-- Header -->
  <header class="site-header" role="banner" aria-label="Site header">
    <div class="container inner" aria-label="Site navigation">
      <div class="brand" aria-label="Brand">
        <div class="brand-logo" aria-label="Logo">ME</div>
        <div>
          <div style="font-weight:700; letter-spacing:.3px;">Me</div>
          <div style="font-size:.85rem; color:var(--fg-dim);">AI Software Engineer</div>
        </div>
      </div>

      <nav aria-label="Main navigation" id="main-nav">
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#publications">Publications</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div class="cta-row" aria-label="Actions">
        <button class="btn" id="btn-export-json" title="Export JSON data">Export JSON</button>
        <button class="btn" id="btn-resume" title="Print resume">Print Resume</button>
      </div>
    </div>
  </header>

  <main id="content" role="main" aria-label="Main content">

    <!-- HERO -->
    <section id="hero" class="hero" aria-label="Intro">
      <div class="container hero-grid">
        <div class="left">
          <div class="headline" id="nameLine">Me — AI Software Engineer</div>
          <div class="tagline" id="subtitleLine">Hi, I’m Me (they/them). I design and deploy AI-powered software systems at scale.</div>
          <div id="bioSnippet" class="muted" style="max-width: 70ch;"></div>

          <div class="cta-row" aria-label="Primary actions">
            <a href="#contact" class="btn primary" style="white-space:nowrap;">Hire Me</a>
            <a href="#projects" class="btn" style="white-space:nowrap;">View Projects</a>
            <button class="btn secondary" id="btn-export-md">Export Markdown</button>
          </div>
        </div>

        <div class="avatar" aria-label="Portrait placeholder">
          <!-- Inline SVG avatar (no external assets) -->
          <svg role="img" aria-label="Avatar placeholder" viewBox="0 0 160 160" width="180" height="180">
            <defs>
              <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                <stop stop-color="#6cc5ff" offset="0"/>
                <stop stop-color="#8a7dff" offset="1"/>
              </linearGradient>
            </defs>
            <circle cx="80" cy="80" r="72" fill="url(#g)" opacity="0.25"/>
            <circle cx="60" cy="60" r="18" fill="#fff" opacity="0.85"/>
            <circle cx="100" cy="60" r="14" fill="#fff" opacity="0.85"/>
            <rect x="40" y="92" width="80" height="28" rx="14" fill="#fff" opacity="0.9"/>
          </svg>
        </div>
      </div>
    </section>

    <!-- ABOUT -->
    <section id="about" aria-label="About" class="about">
      <div class="container grid" style="align-items:start;">
        <div class="card" aria-label="About me">
          <h2 class="section-title">About</h2>
          <p id="aboutIntro" class="muted" style="font-size:1.05rem;"></p>
          <p id="aboutDetail" class="muted" style="font-size:1rem;"></p>
        </div>
        <div class="card" aria-label="Engagement & contact">
          <h3 style="margin:0 0 6px;">Engagement</h3>
          <ul class="bullets" id="engagementList">
            <!-- populated by JS -->
          </ul>
          <h3 style="margin:12px 0 6px;">Contact</h3>
          <p class="muted" id="contactEmailLine" style="margin:0