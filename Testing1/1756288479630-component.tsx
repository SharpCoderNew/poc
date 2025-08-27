<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Unified Design System Demo — MPA & SPA in One</title>
  <meta name="description" content="A minimal, runnable single-file demonstration of an adaptable design system supporting both MPA and SPA modes with accessible, responsive components using a cohesive color palette." />
  <style>
    /* Design Tokens (color, typography, spacing, radii, breakpoints) */
    :root{
      /* Palette (brand-ready) */
      --color-primary: #2A9D8F;      /* teal-green (primary) */
      --color-primary-dark: #264653; /* dark teal (brand dark) */
      --color-accent: #E9C46A;        /* gold accent (secondary/cta) */
      --color-warn: #F4A261;          /* warm accent */
      --color-danger: #E76F51;        /* danger/cta */
      --color-bg: #f3f5f7;            /* page background (soft) */
      --color-surface: #ffffff;        /* cards / panels */
      --color-text: #1f2937;           /* base text */
      --color-text-soft: #4b5563;      /* muted text for accessibility */
      --radius: 12px;
      --shadow: 0 6px 18px rgba(0,0,0,.08);
    }

    /* Responsive spacing tokens */
    :root{
      --space-1: 8px;
      --space-2: 12px;
      --space-3: 16px;
      --space-4: 24px;
      --space-5: 32px;
      --space-6: 48px;
    }

    /* Breakpoints (mobile-first) */
    :root{
      --bp-sm: 600px;
      --bp-md: 960px;
      --bp-lg: 1280px;
    }

    /* Typography */
    :root{
      --font-sans: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, Arial, "Noto Sans", sans-serif;
      --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Courier New", monospace;
      --font-scale-1: 1rem;
      --font-scale-2: 1.125rem;
      --font-scale-3: 1.25rem;
      --font-scale-4: 1.75rem;
      --font-scale-5: 2.25rem;
    }

    /* Base */
    * { box-sizing: border-box; }
    html, body { height: 100%; }
    body {
      margin: 0;
      font-family: var(--font-sans);
      background: var(--color-bg);
      color: var(--color-text);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    /* Reduced motion policy */
    @media (prefers-reduced-motion: reduce) {
      * { animation: none !important; transition: none !important; }
    }

    /* Accessibility helpers */
    .skip-link {
      position: absolute;
      left: -999px;
      top: 10px;
      background: #111;
      color: #fff;
      padding: 8px 12px;
      border-radius: 6px;
      z-index: 1000;
    }
    .skip-link:focus { left: 12px; }

    /* Layout wrappers */
    .site {
      display: grid;
      grid-template-rows: auto 1fr;
      min-height: 100vh;
    }

    /* Header / Navbar */
    .site-header {
      position: sticky;
      top: 0;
      z-index: 100;
      background: #fff;
      border-bottom: 1px solid rgba(0,0,0,.08);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 20px;
      gap: 12px;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 12px;
      text-decoration: none;
      color: var(--color-text);
    }

    .brand-logo {
      width: 34px; height: 34px;
      border-radius: 10px;
      background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
      display: grid; place-items: center;
      color: #fff;
      font-weight: 700;
      font-size: 14px;
    }

    .brand-name {
      font-weight: 700;
      font-size: 1.05rem;
      letter-spacing: .2px;
    }

    nav[aria-label="Main navigation"] {
      display: flex;
      gap: 8px;
      align-items: center;
      flex-wrap: wrap;
    }

    .nav-link {
      appearance: none;
      border: 0;
      background: none;
      color: var(--color-primary-dark);
      padding: 10px 12px;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 600;
      font-size: .95rem;
      cursor: pointer;
    }
    .nav-link:hover, .nav-link:focus-visible {
      background: rgba(42,157,143,.08);
      outline: 2px solid rgba(42,157,143,.4);
      outline-offset: 2px;
    }

    /* Mode switch (MPA <-> SPA) */
    .mode-switch {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px;
      border-radius: 999px;
      border: 1px solid #dbe7ef;
      background: #fff;
      font-size: .85rem;
    }
    .mode-switch button {
      border: 0;
      background: transparent;
      padding: 6px 12px;
      border-radius: 999px;
      font-weight: 700;
      cursor: pointer;
      color: var(--color-text);
    }
    .mode-switch button.active {
      background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
      color: white;
    }

    /* Main content areas */
    main {
      width: min(1100px, 92vw);
      margin: 0 auto;
      padding: 20px 0 60px;
    }

    /* SPA Sections (in-page navigation) */
    #spa { display: block; }
    .section {
      padding: 40px 0;
    }

    .hero {
      display: grid;
      grid-template-columns: 1fr;
      gap: 24px;
      align-items: center;
      padding: 40px 0;
    }

    .hero h1 {
      font-size: var(--font-scale-4);
      margin: 0 0 8px 0;
      line-height: 1.15;
      color: var(--color-primary-dark);
    }

    .hero p {
      font-size: 1rem;
      color: var(--color-text-soft);
      max-width: 60ch;
    }

    .cta-row {
      display: flex; gap: 12px; flex-wrap: wrap; align-items: center;
    }

    .btn {
      appearance: none;
      border: 0;
      padding: 12px 18px;
      border-radius: 999px;
      background: var(--color-primary);
      color: #fff;
      font-weight: 700;
      cursor: pointer;
      transition: transform .2s ease;
    }
    .btn.secondary {
      background: #fff;
      color: var(--color-primary);
      border: 2px solid var(--color-primary);
    }
    .btn:hover { transform: translateY(-1px); }

    .grid {
      display: grid;
      gap: 16px;
      grid-template-columns: repeat(3, 1fr);
    }

    .card {
      background: var(--color-surface);
      border-radius: var(--radius);
      padding: 16px;
      box-shadow: var(--shadow);
      border: 1px solid rgba(0,0,0,.05);
    }

    .card h3 { margin: 6px 0 8px; font-size: 1.1rem; }
    .card p { margin: 0; color: var(--color-text-soft); font-size: .95rem; }

    .section-title {
      font-size: 1.4rem; margin: 0 0 12px;
      color: var(--color-primary-dark);
    }

    /* SPA: Portfolio grid, blog preview, contact form styling */
    .portfolio-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 14px;
    }
    .portfolio-item {
      height: 120px;
      background: linear-gradient(135deg, #eaf2f5, #fff);
      border-radius: 8px;
      display: grid; place-items: center;
      border: 1px solid #e6e6e6;
    }

    form .field {
      display: grid;
      gap: 6px;
      margin-bottom: 12px;
    }
    form input, form textarea {
      padding: 10px 12px;
      border-radius: 8px;
      border: 1px solid #d6d6d6;
      font: inherit;
    }
    form input:focus, form textarea:focus { outline: 2px solid var(--color-primary); }

    /* MPA Content area (simulated multiple pages) */
    #mpa {
      display: none;
    }
    #mpa .mpa-page {
      background: var(--color-surface);
      border-radius: var(--radius);
      padding: 20px;
      border: 1px solid rgba(0,0,0,.08);
      box-shadow: var(--shadow);
      max-width: 100%;
    }
    #mpa .mpa-page h2 { margin-top: 0; color: var(--color-primary-dark); }

    /* Shared footer (within MPA placeholder) */
    .site-footer {
      margin-top: 40px;
      padding: 20px;
      text-align: center;
      color: var(--color-text-soft);
      font-size: .9rem;
    }

    /* Responsive adjustments */
    @media (max-width: 1024px) {
      .grid { grid-template-columns: repeat(2, 1fr); }
      .portfolio-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 640px) {
      .grid { grid-template-columns: 1fr; }
      .portfolio-grid { grid-template-columns: 1fr; }
      .hero { padding: 20px 0; }
      .brand { gap: 8px; }
      nav[aria-label="Main navigation"] { gap: 6px; }
      .btn { padding: 10px 14px; }
      #mpa { padding: 0 0; }
      #spa { padding: 0; }
    }

    /* Simple visual separator between SPA sections when scrolling via hash */
    .spacer { height: 6px; background: #eef2f7; margin: 8px 0 0; border-radius: 6px; }

    /* Data-mode attribute styling (for quick visual debugging if needed) */
    body[data-mode="SPA"] .mode-tag { content: "SPA"; }
    body[data-mode="MPA"] .mode-tag { content: "MPA"; }
  </style>
</head>
<body data-mode="SPA">
  <a class="skip-link" href="#spa" aria-label="Skip to main content">Skip to content</a>

  <header class="site-header" role="banner" aria-label="Site header">
    <a class="brand" href="#" aria-label="Brand home">
      <span class="brand-logo" aria-label="Brand mark">B</span>
      <span class="brand-name" style="color:var(--color-primary-dark)">BrandNova</span>
      <span class="mode-tag" aria-label="Current mode" style="font-size:.9rem; color:#6b7280; margin-left:6px; padding:2px 6px; border-radius:6px; background:#f1f5f9;">SPA</span>
    </a>

    <nav aria-label="Main navigation" class="site-nav" role="navigation">
      <button class="nav-link" data-target="home" aria-label="Navigate to Home">Home</button>
      <button class="nav-link" data-target="about" aria-label="Navigate to About">About</button>
      <button class="nav-link" data-target="services" aria-label="Navigate to Services">Services</button>
      <button class="nav-link" data-target="portfolio" aria-label="Navigate to Portfolio">Portfolio</button>
      <button class="nav-link" data-target="blog" aria-label="Navigate to Blog">Blog</button>
      <button class="nav-link" data-target="contact" aria-label="Navigate to Contact">Contact</button>
      <!-- Mode switcher (MPA vs SPA) -->
      <span class="mode-switch" role="group" aria-label="Mode switch">
        <button id="modeSpa" class="active" aria-pressed="true" title="Switch to SPA mode" type="button">SPA</button>
        <button id="modeMpa" aria-pressed="false" title="Switch to MPA mode" type="button">MPA</button>
      </span>
    </nav>
  </header>

  <main id="main" class="site" role="main" aria-label="Main content">
    <!-- SPA layout: in-page sections -->
    <section id="spa" aria-labelledby="spa-title">
      <div class="section hero" id="home">
        <div>
          <h1 style="margin:0; font-size: clamp(1.6rem, 4vw, 2.5rem); color:var(--color-primary-dark);">
            Modern, Responsive Architecture for MPA and SPA
          </h1>
          <p>Design with a cohesive design system, accessible interactions, and a flexible pattern that works for both multi-page navigation and single-page experiences.</p>
          <div class="cta-row">
            <button class="btn" onclick="scrollToSection('about')">Learn about the system</button>
            <button class="btn secondary" onclick="scrollToSection('services')">See capabilities</button>
          </div>
        </div>
        <div aria-label="Illustration" style="min-height:140px; display:grid; place-items:center;">
          <div style="width:320px; height:180px; border-radius:14px; background: linear-gradient(135deg, #eaf6f3, #fff); border:1px solid #e6f0ed; display:grid; place-items:center;">
            <span style="font-family:var(--font-mono); color:#6b7280;">Design System Visualization</span>
          </div>
        </div>
      </div>

      <div class="spacer" aria-hidden="true"></div>

      <section id="about" class="section" aria-labelledby="about-title">
        <h2 id="about-title" class="section-title" style="margin-top:0;">About the Design System</h2>
        <div class="grid" style="align-items: stretch;">
          <div class="card" style="display:flex; flex-direction:column; min-height:120px;">
            <h3>Token-driven UI</h3>
            <p>Colors, typography, spacing, and radii are centralized into tokens for scalable theming.</p>
          </div>
          <div class="card" style="display:flex; flex-direction:column; min-height:120px;">
            <h3>Accessible by Default</h3>
            <p>WCAG-conscious color contrast, keyboard focus, and semantic landmarks.</p>
          </div>
          <div class="card" style="display:flex; flex-direction:column; min-height:120px;">
            <h3>Performance-minded</h3>
            <p>Lightweight components with progressive enhancement and lazy-loading patterns.</p>
          </div>
        </div>
      </section>

      <section id="services" class="section" aria-labelledby="services-title">
        <h2 id="services-title" class="section-title" style="margin-top:0;">Core Features</h2>
        <div class="grid" aria-label="Core features grid">
          <div class="card">
            <h3>Responsive Grid & Cards</h3>
            <p>Fluid layouts using CSS Grid and Flexbox with consistent card visuals.</p>
          </div>
          <div class="card">
            <h3>Theming & Tokens</h3>
            <p>Switch between design tokens to recolor the theme for MPA or SPA contexts.</p>
          </div>
          <div class="card">
            <h3>Progressive Interactions</h3>
            <p>Smooth transitions, micro-interactions, and respect for reduced motion.</p>
          </div>
        </div>
      </section>

      <section id="portfolio" class="section" aria-labelledby="portfolio-title">
        <h2 id="portfolio-title" class="section-title" style="margin-top:0;">Portfolio Preview</h2>
        <div class="portfolio-grid" aria-label="Portfolio items">
          <div class="portfolio-item">Item 1</div>
          <div class="portfolio-item">Item 2</div>
          <div class="portfolio-item">Item 3</div>
        </div>
      </section>

      <section id="blog" class="section" aria-labelledby="blog-title">
        <h2 id="blog-title" class="section-title" style="margin-top:0;">News & Blog</h2>
        <div class="card" style="margin-bottom:12px;">
          <h3 style="margin:0 0 6px;">Design tokens in practice</h3>
          <p style="margin:0; color:var(--color-text-soft);">A quick post on how tokens unify color, typography, and spacing across layouts.</p>
        </div>
      </section>

      <section id="contact" class="section" aria-labelledby="contact-title">
        <h2 id="contact-title" class="section-title" style="margin-top:0;">Get in touch</h2>
        <form aria-label="Contact form" onsubmit="event.preventDefault(); alert('Thanks! This is a placeholder form.');" style="max-width: 520px;">
          <div class="field">
            <label for="name">Name</label>
            <input id="name" name="name" required placeholder="Your name" />
          </div>
          <div class="field">
            <label for="email">Email</label>
            <input id="email" name="email" type="email" required placeholder="you@example.com" />
          </div>
          <div class="field">
            <label for="message">Message</label>
            <textarea id="message" name="message" rows="4" placeholder="Your message"></textarea>
          </div>
          <button class="btn" type="submit">Send Message</button>
        </form>
      </section>
    </section>

    <!-- SPA end: spacer to give room for scrolling -->
    <div class="spacer" aria-hidden="true" style="height:40px;"></div>

    <!-- MPA container (single-page substitute) -->
    <section id="mpa" aria-label="MPA content container" hidden>
      <div id="mpa-content" class="mpa-page" aria-label="MPA page content">
        <!-- Content injected by JavaScript (loadMPAPage) -->
      </div>
      <div class="site-footer" aria-label="Footer">
        This is the MPA area. The header is shared; each "page" is rendered inside this container for demonstration.
      </div>
    </section>
  </main>

  <script>
    // Minimal SPA/MPA mode handling in a single HTML file
    // Modes: SPA (default) or MPA
    const modeButtons = {
      spa: document.getElementById('modeSpa'),
      mpa: document.getElementById('modeMpa')
    };
    const spaContainer = document.getElementById('spa');
    const mpaContainer = document.getElementById('mpa');
    const mpaContent = document.getElementById('mpa-content');
    const modeTag = document.querySelector('.mode-tag');
    let currentMode = 'SPA'; // SPA or MPA

    // Map target IDs to human-friendly titles
    const pageTitles = {
      home: 'Home',
      about: 'About',
      services: 'Services',
      portfolio: 'Portfolio',
      blog: 'Blog',
      contact: 'Contact'
    };

    // Simple helper: smooth scroll to SPA section
    function scrollToSection(id) {
      const el = document.getElementById(id);
      if (!el) return;
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Render a pseudo-MPA page into the mpa-content container
    function renderMPAPage(slug) {
      const title = pageTitles[slug] || slug;
      mpaContent.innerHTML = `
        <h2 style="margin-top:0;">${title} (MPA)</h2>
        <p style="color:var(--color-text-soft); margin-top:6px;">
          This is a standalone MPA-style page rendered inside the single-file demo. The header and footer are shared, but the content area changes per page.
        </p>
        <section aria-label="MPA content section" style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-top:14px;">
          <div class="card" style="padding:14px;">
            <h3 style="margin:0 0 6px;">${title} Overview</h3>
            <p style="margin:0;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel ipsum at lacus efficitur.</p>
          </div>
          <div class="card" style="padding:14px;">
            <h3 style="margin:0 0 6px;">Details</h3>
            <p style="margin:0;">Curabitur at nibh vitae arcu efficitur vehicula. Praesent bibendum, nisl non tincidunt efficitur.</p>
          </div>
        </section>
        <div class="spacer" aria-hidden="true" style="height:10px"></div>
        <section aria-label="MPA contact quick form" class="card" style="padding:14px;">
          <h3 style="margin-top:0;">Quick Inquiry</h3>
          <p style="margin-top:0; color:var(--color-text-soft);">This inline form mirrors a typical MPA contact block.</p>
          <form onsubmit="event.preventDefault(); alert('MPA form placeholder submitted.');" style="display:flex; flex-direction:column; gap:8px; max-width:520px;">
            <input placeholder="Your name" aria-label="Your name" required style="padding:10px 12px; border-radius:8px; border:1px solid #ddd;">
            <input placeholder="Email" aria-label="Email" type="email" required style="padding:10px 12px; border-radius:8px; border:1px solid #ddd;">
            <textarea placeholder="Message" aria-label="Message" rows="3" style="padding:10px 12px; border-radius:8px; border:1px solid #ddd;"></textarea>
            <button class="btn" type="submit" style="align-self:flex-start;">Send</button>
          </form>
        </section>
      `;
      document.title = `BrandNova — ${title}`;
    }

    // Update visible sections per mode
    function updateView() {
      const mode = currentMode;
      if (mode === 'SPA') {
        document.body.setAttribute('data-mode', 'SPA');
        spaContainer.style.display = 'block';
        mpaContainer.style.display = 'none';
        modeTag.textContent = 'SPA';
        // Ensure SPA "home" is visible and hash routing works
        // If no hash present, scroll to home
        if (!location.hash) {
          // Nothing to do; the in-page sections are visible
        } else {
          const targetId = location.hash.replace('#','');
          const el = document.getElementById(targetId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        document.body.setAttribute('data-mode', 'MPA');
        spaContainer.style.display = 'none';
        mpaContainer.style.display = 'block';
        modeTag.textContent = 'MPA';
        // Load current page content into MPA area if a route is known
        // Default to Home on first switch
        const slug = location.hash ? location.hash.replace('#','') : 'home';
        renderMPAPage(slug);
        // Push a pseudo-history state to reflect page load
        history.replaceState({mpa: slug}, '', `#${slug}`);
      }
    }

    // Initialize event listeners for mode switching
    function initModeSwitch() {
      modeButtons.spa.addEventListener('click', () => {
        if (currentMode === 'SPA') return;
        currentMode = 'SPA';
        // Update UI
        modeButtons.spa.classList.add('active');
        modeButtons.mpa.classList.remove('active');
        updateView();
        // Reset SPAs URL hash (optional)
      });
      modeButtons.mpa.addEventListener('click', () => {
        if (currentMode === 'MPA') return;
        currentMode = 'MPA';
        modeButtons.mpa.classList.add('active');
        modeButtons.spa.classList.remove('active');
        updateView();
      });
    }

    // Attach SPA nav handlers (in-page navigation)
    function bindSpaNav() {
      const links = document.querySelectorAll('.nav-link');
      links.forEach(link => {
        link.addEventListener('click', (e) => {
          const target = link.getAttribute('data-target');
          if (!target) return;
          if (currentMode === 'SPA') {
            // SPA: hash-like in-page navigation
            e.preventDefault();
            if (target === 'home') {
              // Scroll to top hero area (home)
              document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
            } else {
              const el = document.getElementById(target);
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }
            // Update hash for accessibility
            location.hash = target;
          } else {
            // In MPA mode, emulate page navigation
            e.preventDefault();
            renderMPAPage(target);
            // Reflect in URL for MPA routing
            location.hash = target;
            history.pushState({mpa: target}, '', `#${target}`);
          }
        });
      });
    }

    // Helper: navigate to a SPA section programmatically (used by Hero CTA)
    function navigateTo(target) {
      const el = document.getElementById(target);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }

    // Initialize
    document.addEventListener('DOMContentLoaded', () => {
      initModeSwitch();
      bindSpaNav();
      // Start in SPA mode visual; hide MPA area
      updateView();
      // Optional: ensure the SPA area has a visible initial state
      // If there's a hash on first load, scroll to it
      if (location.hash) {
        const id = location.hash.replace('#','');
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    });

    // Expose a couple of helper hooks (not required for SPA)
    window.scrollToSection = scrollToSection;
  </script>
</body>
</html>