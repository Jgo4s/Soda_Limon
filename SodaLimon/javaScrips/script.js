function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
  const bloque = document.querySelector(".quienes-somos .contenido");
  if (bloque) {
    bloque.style.animation = "flotar 3s ease-in-out infinite";
  }
});
