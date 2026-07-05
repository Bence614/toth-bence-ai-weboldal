(() => {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Mobile nav ---------- */
  const header = document.getElementById("site-header");
  const navToggle = document.getElementById("nav-toggle");
  const mainNav = document.getElementById("main-nav");

  if (navToggle && header) {
    navToggle.addEventListener("click", () => {
      const isOpen = header.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        header.classList.remove("nav-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Sticky header elevation ---------- */
  const onScroll = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Scroll reveal ---------- */
  const revealTargets = document.querySelectorAll(
    ".service-card, .persona-card, .benefit-item, .process-list li, .faq-item, .compare-col"
  );
  revealTargets.forEach((el) => el.classList.add("reveal"));

  if (!reduceMotion && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    revealTargets.forEach((el) => observer.observe(el));
  } else {
    revealTargets.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------- Hero signature line draw-in ---------- */
  const heroLine = document.querySelector("#hero-signature path");
  if (heroLine) {
    if (reduceMotion) {
      heroLine.style.strokeDasharray = "none";
    } else {
      const length = heroLine.getTotalLength();
      heroLine.style.strokeDasharray = String(length);
      heroLine.style.strokeDashoffset = String(length);
      heroLine.style.transition = "stroke-dashoffset 1.6s cubic-bezier(0.16,1,0.3,1) 0.2s";
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          heroLine.style.strokeDashoffset = "0";
        });
      });
    }
  }

  /* ---------- Calendly popup buttons ---------- */
  document.querySelectorAll(".js-calendly-popup").forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const url = btn.getAttribute("data-calendly-url");
      if (window.Calendly && url) {
        event.preventDefault();
        window.Calendly.initPopupWidget({ url });
      }
      // If Calendly's script hasn't loaded yet, the link's native href
      // still opens the booking page directly, so the CTA never dead-ends.
    });
  });

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById("footer-year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
