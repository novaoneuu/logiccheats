function go(path) {
  window.location.href = path;
}

window.addEventListener("load", () => {
  const title = document.querySelector(".title");
  const buttons = document.querySelector(".buttons");

  // force restart animation safely
  title.classList.remove("play");
  buttons.classList.remove("play");

  void title.offsetWidth;

  title.classList.add("play");
  buttons.classList.add("play");
});
