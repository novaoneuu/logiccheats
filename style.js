window.addEventListener("pageshow", () => {
  const card = document.querySelector(".card");

  card.classList.remove("animate");
  void card.offsetWidth;
  card.classList.add("animate");
});


function scrollProducts() {
  document.querySelector("#products").scrollIntoView({
    behavior: "smooth"
  });
}


window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero");

  const blur = Math.min(window.scrollY / 40, 10);
  const opacity = Math.max(1 - window.scrollY / 500, 0);

  hero.style.filter = `blur(${blur}px)`;
  hero.style.opacity = opacity;
});
