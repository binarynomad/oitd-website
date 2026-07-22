// Open IT Design — minimal vanilla JS. No dependencies.
// Mobile menu toggle (keyboard + aria), close-on-link/escape, active nav link, copyright year.

(function () {
  "use strict";

  var toggle = document.getElementById("menu-toggle");
  var nav = document.getElementById("nav");
  var yearEl = document.getElementById("year");

  // Copyright year (computed, never hard-coded)
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Mobile menu open/close
  function isOpen() { return nav.classList.contains("open"); }
  function setOpen(open) {
    nav.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () { setOpen(!isOpen()); });

    // Close after choosing a destination
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setOpen(false);
    });

    // Esc closes, returns focus to toggle
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && isOpen()) {
        setOpen(false);
        toggle.focus();
      }
    });

    // Close if resized to desktop
    window.addEventListener("resize", function () {
      if (window.innerWidth > 860 && isOpen()) setOpen(false);
    });
  }

  // Active nav link via IntersectionObserver
  var links = Array.prototype.slice.call(document.querySelectorAll(".nav-list a"));
  var sections = links
    .map(function (l) {
      var id = l.getAttribute("href");
      return id && id.charAt(0) === "#" ? document.querySelector(id) : null;
    })
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    var byId = {};
    links.forEach(function (l) {
      var id = l.getAttribute("href");
      if (id) byId[id.slice(1)] = l;
    });
    var active = null;
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          var id = en.target.id;
          var link = byId[id];
          if (!link) return;
          if (active) active.classList.remove("active");
          link.classList.add("active");
          active = link;
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
    sections.forEach(function (s) { obs.observe(s); });
  }
})();

/* Theme toggle: explicit choice persists in localStorage; if the visitor has
   never chosen, the theme follows the OS preference live. */
(function () {
  var btn = document.getElementById('theme-toggle');
  if (!btn) return;
  var root = document.documentElement;

  function current() { return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'; }
  function syncLabel() {
    btn.setAttribute('aria-label', current() === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
  }
  syncLabel();

  btn.addEventListener('click', function () {
    var next = current() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
    syncLabel();
  });

  // Follow OS changes only while the visitor hasn't made an explicit choice
  var mq = window.matchMedia('(prefers-color-scheme: dark)');
  (mq.addEventListener ? mq.addEventListener.bind(mq, 'change') : mq.addListener.bind(mq))(function (e) {
    var stored = null;
    try { stored = localStorage.getItem('theme'); } catch (err) {}
    if (stored !== 'light' && stored !== 'dark') {
      root.setAttribute('data-theme', e.matches ? 'dark' : 'light');
      syncLabel();
    }
  });
})();
