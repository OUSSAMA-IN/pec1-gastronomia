const botones = document.querySelectorAll('.platos__boton');

botones.forEach((boton) => {
  boton.addEventListener('click', () => {
    const info = boton.nextElementSibling;

    info.classList.toggle('activo');

    if (info.classList.contains('activo')) {
      boton.textContent = 'Ver menos';
    } else {
      boton.textContent = 'Ver más';
    }
  });
});