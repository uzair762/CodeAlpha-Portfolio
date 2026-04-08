// Smooth scroll
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Typing animation
let text = "A Web Developer | Frontend Designer | Programmer";
let i = 0;
function typingEffect() {
  document.querySelector(".typing").textContent = text.slice(0, i);
  i++;
  if (i <= text.length) setTimeout(typingEffect, 80);
}
typingEffect();

// Scroll reveal
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 80) {
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
    }
  });
});

// MODAL POPUP
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close");

document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {
    modal.style.display = "flex";
    document.getElementById("modal-title").textContent = card.children[0].textContent;
    document.getElementById("modal-text").textContent =
      "This is a detailed description of: " + card.children[0].textContent;
  });
});

closeBtn.onclick = () => modal.style.display = "none";

// Back to top
const btnTop = document.getElementById("backToTop");

window.onscroll = () => {
  btnTop.style.display = window.scrollY > 300 ? "block" : "none";
};

btnTop.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });