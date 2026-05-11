const glow = document.querySelector(".glow");
const glow2 = document.querySelector(".glow2");

document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;

  glow.style.transform = `translate(${x}px, ${y}px)`;
  glow2.style.transform = `translate(${-x}px, ${-y}px)`;
});

function go(path) {
  window.location.href = path;
}
