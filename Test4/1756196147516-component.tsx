<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Real-Time Chat UI - Single File Demo</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    :root {
      --bg: #0b1020;
      --surface: #141a2a;
      --surface-2: #1e2340;
      --text: #e9ecf5;
      --muted: #a5adcb;
      --bubble-me: #4c6cff;
      --bubble-other: #2a2f41;
      --avatar: #7a8cff;
      --accent: #7c5cff;
      --online: #34d399;
      --offline: #64748b;
      --shadow: 0 6px 18px rgba(0,0,0,.25);
      --radius: 14px;
    }

    /* Brand variant: brandA theme */
    [data-theme="brandA"] {
      --bubble-me: #3b82f6;
      --bubble-other: #1f2540;
      --accent: #a855f7;
      --avatar: #8b5cf6;
      --bg: #0b0e1a;
      --surface: #141b2b;
      --surface-2: #1e2540;
    }

    * { box-sizing: border-box; }
    html, body { height: 100%; margin: 0; font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif; background: radial-gradient(circle at 20% -10%, rgba(124,92,255,.15), transparent 40%), radial-gradient(circle at 90% 0%, rgba(56,189,248,.15), transparent 40%), var(--bg); color: var(--text); }
    #app { height: 100%; display: grid; place-items: center; padding: 20px; }

    .chat-app {
      width: min(1100px, 100%);
      height: 75vh;
      display: grid;
      grid-template-columns: 1fr;
      gap: 0;
      border-radius: var(--radius);
      overflow: hidden;
      background: linear-gradient(180deg, rgba(255,255,255,.04), rgba(255,255,255,.02)), var(--surface);
      box-shadow: var(--shadow);
      border: 1px solid rgba(255,255,255,.08);
    }

    .chat-header {
      display: flex; align-items: center; gap: 12px;
      padding: 12px 14px;
      background: linear-gradient(180deg, rgba(255,255,255,.05), rgba(255,255,255,.02));
      border-bottom: 1px solid rgba(255,255,255,.08);
    }
    .avatar {
      width: 38px; height: 38px; border-radius: 50%;
      background: var(--avatar); display: grid; place-items: center;
      color: white; font-weight: bold;
      flex: 0 0 auto;
    }
    .chat-title { display: flex; flex-direction: column; line-height: 1.1; }
    .chat-title .name { font-weight: 600; }
    .presence { font-size: 12px; color: var(--muted); }
    .presence .dot { width: 8px; height: 8px; border-radius: 50%; display: inline-block; margin-right: 6px; vertical-align: middle; }

    .presence.online .dot { background: var(--online); }
    .presence.offline .dot { background: var(--offline); }

    .branding-controls { margin-left: auto; display: flex; gap: 8px; }

    .theme-btn {
      border: 1px solid rgba(255,255,255,.15);
      background: rgba(255,255,255,.04);
      color: var(--text);
      padding: 6px 10px;
      border-radius: 8px;
      cursor: pointer;
    }
    .theme-btn:hover { background: rgba(255,255,255,.08); }

    .chat-window {
      display: grid; grid-template-rows: 1fr auto;
      height: calc(100% - 0px);
      min-height: 420px;
    }

    .message-area {
      padding: 14px; overflow-y: auto; height: 100%; display: flex; flex-direction: column; gap: 8px;
    }
    .dl { height: 6px; }

    .bubble {
      display: inline-flex; align-items: flex-end; max-width: 72%;
      padding: 8px 12px; border-radius: 14px;
      position: relative; word-wrap: break-word;
      line-height: 1.25;
    }
    .bubble.me {
      margin-left: auto; background: var(--bubble-me); color: white;
      border-top-right-radius: 4px;
    }
    .bubble.other {
      margin-right: auto; background: var(--bubble-other); color: #e7e9f5;
      border-top-left-radius: 4px;
    }
    .bubble .meta {
      display: flex; gap: 6px; align-items: center; margin-top: 4px;
      font-size: 11px; opacity: .85;
    }
    .bubble .avatar-xs {
      width: 20px; height: 20px; border-radius: 50%; background: var(--avatar);
      display: inline-grid; place-items: center; color: white; font-size: 11px; margin-right: 6px;
    }
    .bubble.me { position: relative; }
    .read-receipt {
      display: inline-block; font-size: 11px; margin-left: 6px; vertical-align: bottom;
      color: rgba(255,255,255,.9);
    }
    .bubble .attach { display: block; margin-top: 6px; font-size: 12px; opacity: .8; }

    .typing-indicator {
      padding: 6px 14px; font-size: 13px; color: var(--muted);
      display: flex; align-items: center; gap: 6px;
    }
    .dots > span { display: inline-block; width: 6px; height: 6px; border-radius: 50%; background: #ccc; margin-right: 3px; animation: blink 1.2s infinite; }
    .dots > span:nth-child(2) { animation-delay: 0.15s; }
    .dots > span:nth-child(3) { animation-delay: 0.3s; }
    @keyframes blink { 0%, 80%, 100% { opacity: .2; } 40% { opacity: 1; } }

    .composer {
      display: flex; gap: 8px; padding: 8px; border-top: 1px solid rgba(255,255,255,.08);
      background: rgba(0,0,0,.15);
    }
    .composer input[type="text"] {
      flex: 1; padding: 12px 14px; border-radius: 10px; border: 1px solid rgba(255,255,255,.25);
      background: rgba(255,255,255,.06); color: var(--text);
    }
    .composer button {
      padding: 12px 16px; border-radius: 10px; border: none; cursor: pointer;
      background: var(--accent); color: white; font-weight: 600;
    }
    .composer button:disabled { opacity: .5; cursor: not-allowed; }

    .status-bar {
      font-size: 12px; color: var(--muted); padding: 6px 14px;
      display: flex; align-items: center; justify-content: space-between;
      border-top: 1px solid rgba(255,255,255,.08);
      background: rgba(0,0,0,.08);
    }

    .ragged-scroll {
      scroll-behavior: smooth;
    }

    @media (min-width: 860px) {
      .chat-app { grid-template-columns: 420px 1fr; }
      .chat-list { display: none; } /* placeholder for future multi-chat UI */
    }

  </style>
</head>
<body>
  <div id="app" aria-label="Real-time chat demo">
    <div class="chat-app" id="chatRoot" data-theme="classic" aria-label="Chat UI">
      <main class="chat-window" role="main" aria-label="Chat window">
        <header class="chat-header" aria-label="Chat header">
          <div class="avatar" aria-label="Avatar">A</div>
          <div class="chat-title">
            <span class="name" id="chatName">Chat with Alex</span>
            <span class="presence online" id="presenceIndicator" aria-live="polite">
              <span class="dot"></span> Online
            </span>
          </div>
          <div class="branding-controls" aria-label="Branding controls">
            <button class="theme-btn" id="themeBtn" title="Toggle theme">Brand</button>
            <button class="theme-btn" id="reloadBtn" title="Reload demo">Reset</button>
          </div>
        </header>

        <section class="chat-window-content" role="region" aria-label="Messages" style="height: calc(100% - 0px);">
          <div class="message-area ragged-scroll" id="messageArea" tabindex="0" aria-label="Message history">
            <!-- messages will be injected here -->
          </div>
          <div class="typing-indicator" id="typingIndicator" aria-live="polite" hidden>
            <span>Alex is typing</span>
            <span class="dots" aria-label="Typing indicator" style="display:flex; align-items:center;">
              <span></span><span></span><span></span>
            </span>
          </div>
        </section>

        <form class="composer" id="composer" autocomplete="off" aria-label="Message composer">
          <input type="text" id="input" placeholder="Write a message… (Enter to send)" aria-label="Message input" />
          <button type="submit" aria-label="Send message">Send</button>
        </form>

        <div class="status-bar" id="statusBar" aria-live="polite">
          <span id="statusText">Connecting…</span>
          <span id="onlineBadge" aria-label="Online status" style="font-weight:600;">●</span>
        </div>
      </main>
    </div>
  </div>

  <script>
    // A self-contained, runnable real-time chat demo
    // - Mock backend simulates WebSocket-like realtime events (presence, typing, messages)
    // - UI is a minimal React-free component library-like structure
    // - Minimal theming/branding tokens via data-theme
    // - Supports offline queue, reconnection with backoff, read receipts, and typing indicator

    // 1) Simple in-file "library" surface to instantiate a chat UI
    (function(){
      // Theme helper
      const root = document.documentElement;
      const chatRoot = document.getElementById('chatRoot');
      const themeBtn = document.getElementById('themeBtn');
      const reloadBtn = document.getElementById('reloadBtn');
      const statusText = document.getElementById('statusText');
      const onlineBadge = document.getElementById('onlineBadge');
      const chatNameEl = document.getElementById('chatName');
      const presenceEl = document.getElementById('presenceIndicator');
      const messageArea = document.getElementById('messageArea');
      const inputEl = document.getElementById('input');
      const typingIndicator = document.getElementById('typingIndicator');
      const composerForm = document.getElementById('composer');
      const statusBar = document.getElementById('statusBar');

      // Branding data
      const BRANDING = [
        { name: 'classic', label: 'Classic', cl: 'var(--bubble-me)' },
        { name: 'brandA', label: 'Brand A', cl: 'var(--bubble-me)' }
      ];

      // Current user and partner
      const currentUser = { id: 'u-me', name: 'You' };
      const partnerUser = { id: 'u-alex', name: 'Alex' };

      // Simple in-memory message store
      class Message {
        constructor({ id, chatId, senderId, content, timestamp, status = 'sent' }) {
          this.id = id;
          this.chatId = chatId;
          this.senderId = senderId;
          this.content = content;
          this.timestamp = timestamp;
          this.status = status; // 'sending' | 'sent' | 'delivered' | 'read'
        }
      }

      // A lightweight, mock WebSocket backend
      class MockBackend {
        constructor(onIncoming, onTyping, onPresence) {
          this.onIncoming = onIncoming;
          this.onTyping = onTyping;
          this.onPresence = onPresence;
          this.connected = true;
          this.typing = false;
          this.partnerOnline = true;
          this.incomingTimer = null;
        }
        start() {
          // simulate presence
          this.simulatePresence(true);
          // simulate incoming messages and typing occasionally
          this.scheduleNextIncoming();
        }
        stop() {
          this.connected = false;