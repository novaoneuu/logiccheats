function go(path) {
  window.location.href = path;
}

/* force reload animation replay */
window.addEventListener("load", () => {
  document.body.classList.remove("loaded");
  void document.body.offsetWidth;
  document.body.classList.add("loaded");
});
