function go(path) {
  window.location.href = path;
}

window.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".title");
  const buttons = document.querySelector(".buttons");

  title.classList.remove("play");
  buttons.classList.remove("play");

  void title.offsetWidth; // force reset

  title.classList.add("play");
  buttons.classList.add("play");
});
