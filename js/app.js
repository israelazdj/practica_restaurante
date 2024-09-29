//menu desplegable

let btnMenuOpen = document.getElementById("btnMenuOpen");
let btnmenuclosed = document.getElementById("btnMenuClosed");
let menuresponsive = document.getElementById("menu-bar");
let enlaces = document.getElementById("enlaces");

//click abrir

btnMenuOpen.addEventListener("click", function () {
  menuresponsive.classList.add("active");
});

btnmenuclosed.addEventListener("click", function () {
  menuresponsive.classList.remove("active");
});
