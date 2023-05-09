// Funcionamiento del boton del carrito

const cartBtn = document.querySelector(".cartBtn");
const closeCartBtn = document.querySelector(".closeCartBtn");
const cartOffCanvas = document.querySelector(".cartOffCanvas");

cartBtn.addEventListener("click", () => {
    cartBtn.classList.toggle("close");
    cartOffCanvas.classList.toggle("show");
});

closeCartBtn.addEventListener("click", () => {
    cartBtn.classList.toggle("close");
    cartOffCanvas.classList.toggle("show");
});
