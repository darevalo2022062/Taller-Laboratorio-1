
function mostrarOtraSeccion(idSeccion) {
    var seccionPrincipal = document.getElementById('principal');
    var otraSeccion = document.getElementById(idSeccion);

    otraSeccion.style.display = 'block';
    seccionPrincipal.style.display = 'none';

    
}

