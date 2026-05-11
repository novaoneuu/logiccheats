function initParallax() {
  const glow = document.querySelector(".glow");
  const glow2 = document.querySelector(".glow2");

  if (!glow || !glow2) {
    console.log("Glow elements not found");
    return;
  }

  document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;

    glow.style.transform = `translate(${x}px, ${y}px)`;
    glow2.style.transform = `translate(${-x}px, ${-y}px)`;
  });

  // reset on load
  glow.style.transform = "translate(0px, 0px)";
  glow2.style.transform = "translate(0px, 0px)";
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initParallax);
} else {
  initParallax();
}

window.go = (path) => {
  window.location.href = path;
};
