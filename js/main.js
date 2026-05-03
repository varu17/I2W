
document.addEventListener("DOMContentLoaded", function () {
  const nav = document.getElementById("mainNav");
  const burger = document.getElementById("hamburger");
  const links = document.getElementById("navLinks");

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

