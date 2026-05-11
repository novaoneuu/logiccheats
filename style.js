console.log("JS loaded");

window.addEventListener("DOMContentLoaded", () => {
  const glow = document.querySelector(".glow");
  const glow2 = document.querySelector(".glow2");

  console.log("glow:", glow, "glow2:", glow2);

  document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 25;
    const y = (e.clientY / window.innerHeight - 0.5) * 25;

    glow.style.transform = `translate(${x}px, ${y}px)`;
    glow2.style.transform = `translate(${-x}px, ${-y}px)`;
  });

  window.go = (path) => {
    window.location.href = path;
  };
});
