
document.querySelectorAll(".dropdown").forEach(dropdown => {
  const button = dropdown.querySelector(".dropbtn");

  button.addEventListener("click", (e) => {
    e.stopPropagation();

    document.querySelectorAll(".dropdown").forEach(d => {
      if (d !== dropdown) d.classList.remove("open");
    });

    dropdown.classList.toggle("open");
  });
});

document.addEventListener("click", () => {
  document.querySelectorAll(".dropdown").forEach(d => d.classList.remove("open"));
});
