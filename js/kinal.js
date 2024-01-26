document.getElementById('toggle-menu').addEventListener('click', function () {
    document.querySelector('.menu-list').classList.toggle('active');
});

function mostrarSeccion(idSeccion) {
    // Ocultar todas las secciones
    var secciones = document.querySelectorAll('.hidden');
    secciones.forEach(function (seccion) {
        seccion.style.display = 'none';
    });

    // Mostrar la sección específica
    var seccion = document.getElementById(idSeccion);
    seccion.style.display = 'block';
}

