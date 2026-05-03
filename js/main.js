
document.addEventListener("DOMContentLoaded", function () {
  const nav = document.getElementById("mainNav");
  const burger = document.getElementById("hamburger");
  const links = document.getElementById("navLinks");

  // scroll-triggered reveals (categories + showcase sections)
  const revealNodes = document.querySelectorAll("[data-reveal]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) {
    revealNodes.forEach(function (el) {
      el.classList.add("is-inview");
    });
  } else {
    const io = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-inview");
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -28px 0px" }
    );
    revealNodes.forEach(function (el) {
      io.observe(el);
    });
  }

  // nav scroll state
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });

  // mobile nav toggle
  burger.addEventListener("click", function () {
    links.classList.toggle("open");
  });

  links.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function () {
      links.classList.remove("open");
    });
  });

  // circular stack slider
  const cards = Array.from(document.querySelectorAll(".slider .card"));
  const pos = ["pos0", "pos1", "pos2", "pos3", "pos4", "pos5", "pos6"];
  let offset = 0;

  function render() {
    cards.forEach((card, i) => {
      card.className = "card " + pos[(i + offset) % pos.length];
    });
  }

  render();
  setInterval(() => {
    offset = (offset + 1) % pos.length;
    render();
  }, 3200);
});

