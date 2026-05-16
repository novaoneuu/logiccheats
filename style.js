window.addEventListener("pageshow", () => {
  const card = document.querySelector(".card");

  card.classList.remove("animate");
  void card.offsetWidth;
  card.classList.add("animate");
});
