window.addEventListener("DOMContentLoaded", () => {
  const glow = document.querySelector(".glow");
  const glow2 = document.querySelector(".glow2");

  // reset any stuck transform (THIS fixes refresh bug)
  glow.style.transform = "translate(0px, 0px)";
  glow2.style.transform = "translate(0px, 0px)";

  document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 25;
    const y = (e.clientY / window.innerHeight - 0.5) * 25;

    glow.style.transform = `translate(${x}px, ${y}px)`;
    glow2.style.transform = `translate(${-x}px, ${-y}px)`;
  });

  window.go = function (path) {
    window.location.href = path;
  };
});
