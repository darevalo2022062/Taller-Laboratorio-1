
function mostrarOtraSeccion(idSeccion) {
    var seccionPrincipal = document.getElementById('principal');
    seccionPrincipal.style.display = 'none';
    var otraSeccion = document.getElementById(idSeccion);
    otraSeccion.style.display = 'block';
    if (idSeccion == "Quienes-Somos") {
        var quinesSomos = document.getElementById('educacion');
        quinesSomos.style.display = 'none';
        var quinesSomos = document.getElementById('sponsors');
        quinesSomos.style.display = 'none';
        var quinesSomos = document.getElementById('trabajo');
        quinesSomos.style.display = 'none';
    } else if (idSeccion == "educacion") {
        var quinesSomos = document.getElementById('sponsors');
        quinesSomos.style.display = 'none';
        var quinesSomos = document.getElementById('Quienes-Somos');
        quinesSomos.style.display = 'none';
        var quinesSomos = document.getElementById('trabajo');
        quinesSomos.style.display = 'none';
    } else if (idSeccion == "sponsors") {
        var quinesSomos = document.getElementById('Quienes-Somos');
        quinesSomos.style.display = 'none';
        var quinesSomos = document.getElementById('educacion');
        quinesSomos.style.display = 'none';
        var quinesSomos = document.getElementById('trabajo');
        quinesSomos.style.display = 'none';
    }else if(idSeccion == "trabajo"){
        var quinesSomos = document.getElementById('Quienes-Somos');
        quinesSomos.style.display = 'none';
        var quinesSomos = document.getElementById('educacion');
        quinesSomos.style.display = 'none';
        var quinesSomos = document.getElementById('sponsors');
        quinesSomos.style.display = 'none';
    }




}

