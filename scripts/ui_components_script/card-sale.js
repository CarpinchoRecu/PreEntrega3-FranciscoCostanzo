const cardsale = document.querySelector('.card-sale');
cardsale.addEventListener('click', function () {
    if (this.getAttribute('data-state') === 'front') {
        this.setAttribute('data-state', 'back');
    } else {
        this.setAttribute('data-state', 'front');
    }
});