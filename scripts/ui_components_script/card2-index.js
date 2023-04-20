// Hacer que cada vez que vea la img se active la animacion

const card2 = document.querySelectorAll('.card2');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('activado');
    } else {
      entry.target.classList.remove('activado');
    }
  });
}, { threshold: 0 });

card2.forEach(card2 => {
  observer.observe(card2);
  card2.addEventListener('animationend', () => {
    card2.classList.remove('activado');
  });
});