window.addEventListener("pageshow", () => {
  const card = document.querySelector(".card");

  card.classList.remove("animate");
  void card.offsetWidth;
  card.classList.add("animate");
});


function scrollHome() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


function scrollShop() {
  document.querySelector("#shop").scrollIntoView({
    behavior: "smooth"
  });
}


function scrollSupport() {
  document.querySelector("#support").scrollIntoView({
    behavior: "smooth"
  });
}


function scrollStatus() {
  document.querySelector("#status").scrollIntoView({
    behavior: "smooth"
  });
}


window.addEventListener("scroll", () => {

  const card = document.querySelector(".card");
  const navbar = document.querySelector(".navbar");

  const scroll = window.scrollY;


  const blurAmount = Math.min(scroll / 15, 20);
  const opacityAmount = Math.max(1 - scroll / 400, 0);


  card.style.filter = `blur(${blurAmount}px)`;
  card.style.opacity = opacityAmount;


  if (scroll > 150) {
    navbar.classList.add("show");
  } else {
    navbar.classList.remove("show");
  }

});
