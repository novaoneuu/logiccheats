window.addEventListener("pageshow", () => {
  document.body.classList.remove("play");
  void document.body.offsetWidth;
  document.body.classList.add("play");
});
