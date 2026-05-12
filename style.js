window.addEventListener("pageshow", () => {
  const el = document.querySelector(".glass");

  el.classList.remove("animate");
  void el.offsetWidth;
  el.classList.add("animate");
});
