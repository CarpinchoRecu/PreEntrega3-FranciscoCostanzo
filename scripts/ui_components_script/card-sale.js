const cardsSale = document.querySelectorAll(".card-sale");

cardsSale.forEach((cardsSale) => {
    cardsSale.addEventListener("click", function () {
        if (this.getAttribute("data-state") === "front") {
            this.setAttribute("data-state", "back");
        } else {
            this.setAttribute("data-state", "front");
        }
    });
});
