console.log("script running");

window.addEventListener("mousemove", (e) => {
  const glow = document.querySelector(".glow");
  const glow2 = document.querySelector(".glow2");

  if (!glow || !glow2) return;

  const x = (e.clientX / window.innerWidth - 0.5) * 15;
  const y = (e.clientY / window.innerHeight - 0.5) * 15;

  glow.style.transform = `translate(${x}px, ${y}px)`;
  glow2.style.transform = `translate(${-x}px, ${-y}px)`;
});
