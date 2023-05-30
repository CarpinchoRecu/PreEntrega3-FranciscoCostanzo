// Hacer que cada vez que vea la img se active la animacion

const card2 = document.querySelectorAll('.card2');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('activado');
      entry.target.style.animationPlayState = 'running'; // Iniciar la animación
    } else {
      entry.target.classList.remove('activado');
      entry.target.style.animationPlayState = 'paused'; // Pausar la animación
    }
  });
}, { threshold: 0 });

card2.forEach(card2 => {
  observer.observe(card2);
});
