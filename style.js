window.addEventListener("pageshow", () => {

  const card = document.querySelector(".card");

  card.classList.remove("animate");

  void card.offsetWidth;

  card.classList.add("animate");

});



function scrollHome() {

  window.scrollTo({

    top:0,

    behavior:"smooth"

  });

}



function scrollShop() {

  document
  .querySelector("#shop")
  .scrollIntoView({

    behavior:"smooth"

  });

}



function scrollSupport() {

  document
  .querySelector("#support")
  .scrollIntoView({

    behavior:"smooth"

  });

}



function scrollStatus() {

  document
  .querySelector("#status")
  .scrollIntoView({

    behavior:"smooth"

  });

}




window.addEventListener("scroll", () => {


  const hero =
  document.querySelector(".hero");


  const navbar =
  document.querySelector(".navbar");


  let scroll =
  window.scrollY;



  let blur =
  Math.min(scroll / 18, 18);



  let opacity =
  Math.max(1 - scroll / 450, 0);



  hero.style.filter =
  `blur(${blur}px)`;


  hero.style.opacity =
  opacity;



  if(scroll > 150) {

    navbar.classList.add("show");

  }

  else {

    navbar.classList.remove("show");

  }


});
