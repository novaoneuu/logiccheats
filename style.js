function go(path) {
  window.location.href = path;
}

window.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".title");
  const buttons = document.querySelector(".buttons");

  title.style.animation = "none";
  buttons.style.animation = "none";

  // force reflow (this is the magic fix)
  void title.offsetWidth;

  title.style.animation = "popIn 0.5s ease-out forwards";
  buttons.style.animation = "popIn 0.5s ease-out forwards";
  buttons.style.animationDelay = "0.12s";
});
