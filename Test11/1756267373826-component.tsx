<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Modern SPA Landing - Clean UI with Smooth Animations</title>
  <meta name="description" content="A minimal, accessible, single-file landing page with a clean UI, responsive layout, and smooth animations." />
  <style>
    :root {
      --bg: #f6f7fb;
      --surface: #ffffff;
      --text: #0f1220;
      --muted: #5b6470;
      --primary: #4f8af7;
      --secondary: #7bd389;
      --ring: rgba(79,138,247,.4);
      --shadow: 0 6px 20px rgba(15,18,32,.08);
      --radius: 14px;
      --gap: 1.25rem;
      --card: 0 6px 24px rgba(0,0,0,.06);
    }

    /* Dark mode (optional) */
    [data-theme="dark"] {
      --bg: #0b1020;
      --surface: #141a2b;
      --text: #e7eaf6;
      --muted: #a5aec7;
      --primary: #7aa8ff;
      --secondary: #58d6a5;
      --ring: rgba(122,168,255,.45);
      --shadow: 0 6px 24px rgba(0,0,0,.55);
      --card: 0 6px 20px rgba(0,0,0,.6);
    }

    * { box-sizing: border-box; }
    html, body { height: 100%; }
    html { scroll-behavior: smooth; }
    body {
      margin: 0;
      font-family: ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto;
      color: var(--text);
      background: radial-gradient(1200px circle at 10% -10%, rgba(79,138,247,.08), transparent 40%),
                  radial-gradient(900px circle at 100% 0%, rgba(123,211,137,.08), transparent 40%),
                  var(--bg);
    }

    /* Accessibility: Respect reduced motion preferences */
    @media (prefers-reduced-motion: reduce) {
      * { animation: none !important; transition: none !important; }
    }

    /* Layout scaffolding */
    .container {
      width: min(1120px, 92%);
      margin: 0 auto;
    }

    .sr-only {
      position: absolute;
      width: 1px; height: 1px;
      padding: 0; margin: -1px;
      overflow: hidden; clip: rect(0,0,0,0);
      white-space: nowrap; border: 0;
    }

    /* Header + navigation */
    .site-header {
      position: sticky;
      top: 0;
      z-index: 50;
      background: color-m-mix(in srgb, var(--surface) 90%, #fff);
      backdrop-filter: saturate(1.2) blur(6px);
      border-bottom: 1px solid rgba(0,0,0,.05);
    }
    .brand {
      display: inline-flex; align-items: center; gap: .75rem;
      text-decoration: none; color: inherit;
    }
    .brand-logo {
      width: 34px; height: 34px; display: inline-block;
    }
    .brand-name { font-weight: 700; letter-spacing:.2px; font-size: 1rem; }

    .nav {
      display: flex; align-items: center; justify-content: space-between;
      gap: 1rem;
    }

    .nav-links {
      display: flex; gap: 1rem; align-items: center; list-style: none; padding: 0; margin: 0;
    }
    .nav-links a {
      text-decoration: none; color: var(--text);
      padding: .5rem 0.75rem; border-radius: 999px;
      transition: color .2s ease;
    }
    .nav-links a:hover, .nav-links a:focus-visible {
      color: var(--primary); outline: 2px solid transparent;
      background: rgba(79,138,247,.08);
    }

    .menu-toggle {
      display: none;
      background: transparent; border: 0; font-size: 1.375rem;
      padding: .25rem .5rem; border-radius: .5rem;
    }

    /* Hero */
    .hero {
      padding: 6rem 0 3rem;
      display: grid; grid-template-columns: 1.05fr .95fr; align-items: center; gap: 2rem;
    }
    .hero h1 {
      font-size: clamp(2rem, 2.6vw + 1rem, 3.5rem);
      line-height: 1.05;
      margin: 0 0 .75rem;
      letter-spacing: -0.5px;
    }
    .hero p { color: var(--muted); font-size: 1.05rem; margin: 0 0 1.25rem; }
    .cta {
      display: inline-flex; align-items: center; gap: .75rem;
      padding: .8rem 1.25rem; border-radius: 999px; text-decoration: none;
      color: white; background: var(--primary);
      border: 0; cursor: pointer; font-weight: 600;
      box-shadow: 0 6px 14px rgba(79,138,247,.35);
    }
    .cta.secondary {
      background: transparent; color: var(--text);
      border: 1px solid rgba(0,0,0,.08); box-shadow: none;
    }

    .hero-art {
      position: relative; height: 420px; min-height: 320px;
      border-radius: var(--radius);
      background: linear-gradient(135deg, #e8f2ff 0%, #eafaf0 60%, #fcefe8 100%);
      overflow: hidden; border: 1px solid rgba(0,0,0,.05);
      box-shadow: var(--shadow);
    }
    .orb {
      position: absolute; width: 240px; height: 240px; border-radius: 50%;
      background: radial-gradient(circle at 30% 30%, rgba(255,255,255,.9), rgba(255,255,255,.0) 40%),
                  radial-gradient(circle at 70% 70%, rgba(125,216,137,.85), rgba(125,216,137,.0) 40%);
      filter: blur(0.2px);
      animation: float 8s ease-in-out infinite;
      mix-blend-mode: multiply;
      opacity: .9;
    }
    .orb.one { top: 10%; left: -40px; transform: rotate(15deg); animation-duration: 9s; }
    .orb.two { bottom: 6%; right: -40px; transform: rotate(-10deg); animation-duration: 11s; }
    @keyframes float {
      0%, 100% { transform: translateY(0) translateX(0) scale(1); }
      50% { transform: translateY(-8px) translateX(6px) scale(1.03); }
    }

    /* Sections common styling */
    .section {
      padding: 4rem 0;
    }
    .section-header {
      display: flex; align-items: baseline; justify-content: space-between; gap: 1rem;
      margin-bottom: 1.25rem;
    }
    .section h2 { font-size: 1.75rem; margin: 0; }
    .section p.lead { color: var(--muted); margin: .25rem 0 0; }

    .grid {
      display: grid; gap: var(--gap);
    }

    /* Features grid (3 cards) */
    .features-grid {
      grid-template-columns: repeat(3, 1fr);
    }
    .card {
      background: var(--surface); border-radius: 14px; padding: 1.25rem;
      box-shadow: var(--shadow); border: 1px solid rgba(0,0,0,.05);
    }
    .card h3 { margin: .25rem 0 .5rem; font-size: 1.1rem; }
    .card p { margin: 0; color: var(--muted); font-size: .95rem; }

    .icon {
      width: 28px; height: 28px; display: inline-block; vertical-align: middle;
      margin-right: .5rem;
    }

    /* Testimonials */
    .testimonials {
      display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--gap);
    }
    .testi {
      padding: 1rem; border-radius: 12px; background: #fff; border: 1px solid rgba(0,0,0,.05);
    }
    .testi p { margin: .25rem 0; color: var(--muted); }
    .testi small { color: var(--text); font-weight: 600; }

    /* Pricing */
    .pricing-grid {
      grid-template-columns: repeat(3, 1fr);
    }
    .pricing-card {
      padding: 1.25rem; border-radius: 14px; background: var(--surface);
      border: 1px solid rgba(0,0,0,.05); box-shadow: var(--shadow);
    }
    .price { font-size: 2rem; font-weight: 700; margin: .25rem 0; }
    .tag { display: inline-block; padding: .25rem .55rem; border-radius: 999px; background: #eef4ff; color: var(--primary); font-weight: 600; font-size: .75rem; }

    /* Contact form */
    form .row { display: grid; grid-template-columns: 1fr 1fr; gap: var(--gap); }
    label { display: block; margin-bottom: .25rem; font-weight: 600; }
    input, textarea {
      width: 100%; padding: .75rem .9rem; border-radius: 8px;
      border: 1px solid #d6dbe7; background: white;
      font: inherit; color: var(--text);
    }
    textarea { min-height: 140px; resize: vertical; }
    .form-actions { display: flex; align-items: center; justify-content: space-between; gap: .5rem; margin-top: .75rem; }
    .error { color: #d33; font-size: .85rem; }

    /* Footer */
    footer {
      padding: 2rem 0; text-align: center; color: var(--muted); font-size: .9rem;
      border-top: 1px solid rgba(0,0,0,.05);
    }

    /* Responsive tweaks */
    @media (max-width: 1024px) {
      .features-grid { grid-template-columns: repeat(2, 1fr); }
      .pricing-grid { grid-template-columns: repeat(2, 1fr); }
      .testimonials { grid-template-columns: repeat(2, 1fr); }
      .hero { grid-template-columns: 1fr; padding-top: 2rem; }
      .hero-art { height: 360px; }
    }
    @media (max-width: 640px) {
      .nav-links { display: none; }
      .menu-toggle { display: inline-flex; }
      .hero { padding: 3rem 0; grid-template-columns: 1fr; }
      .hero-art { height: 320px; }
      .features-grid { grid-template-columns: 1fr; }
      .pricing-grid { grid-template-columns: 1fr; }
      .testimonials { grid-template-columns: 1fr; }
      form .row { grid-template-columns: 1fr; }
      .section { padding: 2.5rem 0; }
    }
    /* Focus visibility for keyboard users */
    :focus-visible { outline: 2px solid var(--primary); outline-offset: 2px; }
  </style>
</head>
<body>
  <!-- Skip link for accessibility -->
  <a href="#main" class="sr-only" aria-label="Skip to main content">Skip to content</a>

  <header class="site-header" role="banner">
    <div class="container nav" style="display:flex; justify-content:space-between; align-items:center; padding: .75rem 0;">
      <a href="#" class="brand" aria-label="Brand home">
        <span class="brand-logo" aria-hidden="true">
          <!-- Inline SVG logo -->
          <svg width="34" height="34" viewBox="0 0 100 100" role="img" aria-label="Logo">
            <defs>
              <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
                <stop stop-color="#4f8af7" offset="0"/>
                <stop stop-color="#7bd389" offset="1"/>
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="40" fill="url(#g)" opacity="0.25"/>
            <path d="M20 60 L50 20 L80 60 Z" fill="url(#g)"/>
          </svg>
        </span>
        <span class="brand-name">NovaUI</span>
      </a>

      <nav class="nav" aria-label="Main navigation">
        <button class="menu-toggle" aria-label="Toggle menu" aria-expanded="false" id="menuToggle">☰</button>
        <ul class="nav-links" id="navLinks">
          <li><a href="#hero" data-nav="hero">Home</a></li>
          <li><a href="#features" data-nav="features">Features</a></li>
          <li><a href="#testimonials" data-nav="testimonials">Testimonials</a></li>
          <li><a href="#pricing" data-nav="pricing">Pricing</a></li>
          <li><a href="#contact" data-nav="contact">Contact</a></li>
          <li><button id="themeToggle" class="cta" aria-label="Toggle color theme" style="padding:.5rem 1rem; font-size:.95rem; height: 38px;">Theme</button></li>
        </ul>
      </nav>
    </div>
  </header>

  <main id="main" role="main" style="outline:0;">
    <!-- Hero -->
    <section id="hero" class="hero" aria-label="Hero section" >
      <div class="container" style="padding-right:0;">
        <h1>Beautiful, modern UI with polished interactions</h1>
        <p class="lead">A clean, responsive single-page design with accessible markup, smooth animations, and a scalable design system. Placeholder content ready for custom assets.</p>
        <div style="margin-top:.75rem;">
          <a href="#pricing" class="cta" aria-label="Get started with pricing">Get started</a>
          <a href="#features" class="cta secondary" aria-label="View features" style="margin-left:.75rem;">Explore features</a>
        </div>
      </div>
      <div class="container hero-art" aria-label="Decorative hero artwork" style="min-height:320px; display:flex; align-items:center; justify-content:center;">
        <span class="orb one" aria-hidden="true"></span>
        <span class="orb two" aria-hidden="true"></span>
        <!-- Minimal abstract SVG illustration as part of hero art -->
        <svg width="260" height="180" viewBox="0 0 260 180" role="img" aria-label="Abstract illustration">
          <defs>
            <linearGradient id="grad" x1="0" x2="1" y1="0" y2="1">
              <stop stop-color="#4f8af7" offset="0"/>
              <stop stop-color="#7bd389" offset="1"/>
            </linearGradient>
          </defs>
          <rect x="0" y="0" width="260" height="180" fill="url(#grad)" opacity="0.08"/>
          <circle cx="60" cy="70" r="28" fill="url(#grad)" opacity="0.8"/>
          <circle cx="190" cy="110" r="34" fill="url(#grad)" opacity="0.6"/>
          <rect x="100" y="40" width="60" height="100" rx="12" fill="white" opacity="0.9"/>
        </svg>
      </div>
    </section>

    <!-- Features -->
    <section id="features" class="section" aria-label="Features" style="scroll-margin-top: 90px;">
      <div class="container">
        <div class="section-header">
          <div>
            <h2>Design system & features</h2>
            <p class="lead">A cohesive token-driven approach with responsive components and accessible interactions.</p>
          </div>
        </div>

        <div class="grid features-grid" aria-label="Feature list">
          <article class="card" aria-label="Feature one">
            <div style="display:flex; align-items:flex-start; gap:.5rem;">
              <span class="icon" aria-hidden="true">
                <!-- Icon: lightning bolt -->
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M13 2L3 14h7l-1 7 10-12h-7l1-7z"/>
                </svg>
              </span>
              <h3 style="margin:0; font-size:1.05rem;">Responsive Grid System</h3>
            </div>
            <p>Fluid layouts with predefined tokens ensure consistency across breakpoints and devices.</p>
          </article>

          <article class="card" aria-label="Feature two">
            <div style="display:flex; align-items:flex-start; gap:.5rem;">
              <span class="icon" aria-hidden="true">
                <!-- Icon: palette -->
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20.38 7.62A5 5 0 0 0 7.62 0C5.4 0 3.63 1.2 2.5 2.95A7 7 0 0 0 9 7a7 7 0 0 0 8.38-.38z"/>
                  <circle cx="9" cy="14" r="1"/>
                  <circle cx="12" cy="11" r="1"/>
                  <circle cx="18" cy="14" r="1"/>
                </svg>
              </span>
              <h3 style="margin:0; font-size:1.05rem;">Accessible by Default</h3>
            </div>
            <p>Semantic HTML, ARIA roles, keyboard navigation, and readable color contrast.</p>
          </article>

          <article class="card" aria-label="Feature three">
            <div style="display:flex; align-items:flex-start; gap:.5rem;">
              <span class="icon" aria-hidden="true">
                <!-- Icon: chart -->
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M3 3h18v18H3z"/>
                  <path d="M7 13h3v6H7zM14 7h3v12h-3z"/>
                </svg>
              </span>
              <h3 style="margin:0; font-size:1.05rem;">Performance Friendly</h3>
            </div>
            <p>Lightweight CSS with tasteful animations that respect motion preferences.</p>
          </article>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section id="testimonials" class="section" aria-label="Testimonials">
      <div class="container">
        <div class="section-header">
          <div>
            <h2>What designers say</h2>
            <p class="lead">Clear, scalable patterns that boost velocity and quality.</p>
          </div>
        </div>

        <div class="testimonials" aria-label="User testimonials">
          <blockquote class="testi" aria-label="Testimonial one">
            <p>"A polished starting point. The component system makes it easy to ship and iterate."</p>
            <small>— Alex, Product Designer</small>
          </blockquote>
          <blockquote class="testi" aria-label="Testimonial two">
            <p>"Accessible markup and thoughtful defaults save time on audits and reviews."</p>
            <small>— Priya, Frontend Engineer</small>
          </blockquote>
          <blockquote class="testi" aria-label="Testimonial three">
            <p>"Responsive,