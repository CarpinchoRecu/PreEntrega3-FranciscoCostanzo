const cartBtn = document.querySelector(".cartBtn");
const closeCartBtn = document.querySelector(".closeCartBtn");
const cartOffCanvas = document.querySelector(".cartOffCanvas");
const lineSpan = document.querySelector(".cartBtn span");

cartBtn.addEventListener("click", () => {
    cartBtn.classList.toggle("close");
    cartOffCanvas.classList.toggle("show");
    lineSpan.classList.toggle("hide");
});

closeCartBtn.addEventListener("click", () => {
    cartBtn.classList.toggle("close");
    cartOffCanvas.classList.toggle("show");
    lineSpan.classList.toggle("hide");
});