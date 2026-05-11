function go(path) {
  window.location.href = path;
}

window.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".title");
  const buttons = document.querySelector(".buttons");

  title.classList.add("play");
  buttons.classList.add("play");
});
