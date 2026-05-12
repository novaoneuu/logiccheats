window.addEventListener("pageshow", () => {
  const el = document.querySelector(".container");

  el.classList.remove("animate");
  void el.offsetWidth;
  el.classList.add("animate");
});
