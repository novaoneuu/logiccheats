window.addEventListener("pageshow", () => {
  const el = document.querySelector(".content");

  el.classList.remove("animate");
  void el.offsetWidth;
  el.classList.add("animate");
});
