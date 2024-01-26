document.getElementById('toggle-menu').addEventListener('click', function () {
    document.querySelector('.menu-list').classList.toggle('active');
});

function mostrarSeccion(idSeccion) {
    var secciones = document.querySelectorAll('.hidden');
    secciones.forEach(function (seccion) {
        seccion.style.display = 'none';
    });

    var seccion = document.getElementById(idSeccion);
    seccion.style.display = 'flex';
}

