/**
 * main.js — VitalTrek Landing
 * Handles: mobile menu, FAQ accordion, smooth scroll,
 * language toggle, header scroll elevation, reveal animation,
 * copyright year.
 */

(function () {
  "use strict";

  /* ── Helpers ── */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const prefersReducedMotion = () =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ─────────────────────────────────────────────
     1. MOBILE MENU
     ───────────────────────────────────────────── */
  function initMobileMenu() {
    const toggle = $("#menu-toggle");
    const mobileNav = $("#mobile-nav");
    if (!toggle || !mobileNav) return;

    function openMenu() {
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", window.VitalTrekI18n
        ? window.VitalTrekI18n.translations[
            document.documentElement.lang || "en"
          ].menuCloseLabel
        : "Close navigation menu");
      mobileNav.classList.add("is-open");
      document.body.style.overflow = "hidden";
    }

    function closeMenu() {
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", window.VitalTrekI18n
        ? window.VitalTrekI18n.translations[
            document.documentElement.lang || "en"
          ].menuOpenLabel
        : "Open navigation menu");
      mobileNav.classList.remove("is-open");
      document.body.style.overflow = "";
    }

    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      isOpen ? closeMenu() : openMenu();
    });

    /* Close on Escape */
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        closeMenu();
        toggle.focus();
      }
    });

    /* Close when any nav link is clicked */
    $$((".mobile-nav a"), mobileNav).forEach((link) => {
      link.addEventListener("click", () => closeMenu());
    });
  }

  /* ─────────────────────────────────────────────
     2. SMOOTH SCROLLING
     ───────────────────────────────────────────── */
  function initSmoothScroll() {
    document.addEventListener("click", (e) => {
      const anchor = e.target.closest("a[href^='#']");
      if (!anchor) return;

      const id = anchor.getAttribute("href");
      if (id === "#") return;

      const target = document.querySelector(id);
      if (!target) return;

      e.preventDefault();

      if (prefersReducedMotion()) {
        target.scrollIntoView();
      } else {
        target.scrollIntoView({ behavior: "smooth" });
      }

      /* Update focus for accessibility */
      target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
      target.addEventListener(
        "blur",
        () => target.removeAttribute("tabindex"),
        { once: true }
      );
    });
  }

  /* ─────────────────────────────────────────────
     3. HEADER SCROLL ELEVATION
     ───────────────────────────────────────────── */
  function initHeaderScroll() {
    const header = $(".site-header");
    if (!header) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        header.classList.toggle("is-scrolled", !entry.isIntersecting);
      },
      { rootMargin: "-72px 0px 0px 0px", threshold: 0 }
    );

    const sentinel = document.createElement("div");
    sentinel.setAttribute("aria-hidden", "true");
    sentinel.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;pointer-events:none;";
    document.body.prepend(sentinel);
    observer.observe(sentinel);
  }

  /* ─────────────────────────────────────────────
     4. FAQ ACCORDION
     ───────────────────────────────────────────── */
  function initFAQ() {
    const items = $$(".faq-item");
    items.forEach((item) => {
      const btn = $(".faq-question", item);
      const answer = $(".faq-answer", item);
      if (!btn || !answer) return;

      btn.addEventListener("click", () => {
        const isOpen = btn.getAttribute("aria-expanded") === "true";

        /* Close all others */
        items.forEach((other) => {
          const otherBtn = $(".faq-question", other);
          const otherAns = $(".faq-answer", other);
          if (otherBtn && otherAns && other !== item) {
            otherBtn.setAttribute("aria-expanded", "false");
            otherAns.classList.remove("is-open");
          }
        });

        /* Toggle current */
        btn.setAttribute("aria-expanded", isOpen ? "false" : "true");
        answer.classList.toggle("is-open", !isOpen);
      });
    });
  }

  /* ─────────────────────────────────────────────
     5. LANGUAGE TOGGLE
     ───────────────────────────────────────────── */
  function initLanguageToggle() {
    $$(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const lang = btn.getAttribute("data-lang");
        if (lang && window.VitalTrekI18n) {
          window.VitalTrekI18n.setLanguage(lang);
        }
      });
    });
  }

  /* ─────────────────────────────────────────────
     6. REVEAL ON SCROLL (IntersectionObserver)
     ───────────────────────────────────────────── */
  function initReveal() {
    if (prefersReducedMotion()) return;

    const revealEls = $$(".reveal");
    if (!revealEls.length) return;

    revealEls.forEach((el) => el.classList.add("reveal--hidden"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("reveal--hidden");
            entry.target.classList.add("reveal--visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -48px 0px" }
    );

    revealEls.forEach((el) => observer.observe(el));
  }

  /* ─────────────────────────────────────────────
     7. COPYRIGHT YEAR
     ───────────────────────────────────────────── */
  function initCopyrightYear() {
    $$(".js-year").forEach((el) => {
      el.textContent = new Date().getFullYear();
    });
  }

  /* ─────────────────────────────────────────────
     INIT — runs after DOM is ready
     ───────────────────────────────────────────── */
  function init() {
    /* Initialize i18n first */
    if (window.VitalTrekI18n) {
      window.VitalTrekI18n.initLanguage();
    }

    initMobileMenu();
    initSmoothScroll();
    initHeaderScroll();
    initFAQ();
    initLanguageToggle();
    initReveal();
    initCopyrightYear();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
