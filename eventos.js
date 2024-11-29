
document.getElementById('miDiv').addEventListener('click', function () {
    alert('Hola! Soy el div');
});

  // Manejador para el botón
document.querySelector('button').addEventListener('click', function (event) {
    alert('Hola!');
    event.stopPropagation(); // Detiene la propagación del evento hacia el div
});

