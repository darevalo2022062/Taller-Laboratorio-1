function mostrarInfo(langua) {

    const language = document.getElementById(langua);

    let info = "";
    switch (langua) {
        case "cs":
            info = "C# es un lenguaje de programación desarrollado por Microsoft que se utiliza principalmente para el desarrollo de aplicaciones en el entorno de la plataforma .NET";
            break;
        case "java":
            info = "Java es un lenguaje de programación orientado a objetos que es conocido por su portabilidad y su amplio uso en el desarrollo de aplicaciones empresariales, aplicaciones móviles y desarrollo web.";
            break;
        case "javaScript":
            info = "JavaScript es un lenguaje de programación utilizado principalmente en el desarrollo web para agregar interactividad y dinamismo a las páginas HTML. Es el lenguaje de programación del lado del cliente más comúnmente utilizado.";
            break;
        case "kotlin":
            info = "Kotlin es un lenguaje de programación moderno y conciso que se utiliza principalmente para el desarrollo de aplicaciones Android. Es compatible con Java y se ha vuelto popular entre los desarrolladores de Android.";
            break;
        case "python":
            info = "Python es un lenguaje de programación versátil y fácil de aprender que se utiliza en una amplia variedad de aplicaciones, incluyendo desarrollo web, análisis de datos, inteligencia artificial y automatización de tareas.";
            break;
        case "flutter":
            info = "Flutter es un framework de desarrollo de aplicaciones móviles creado por Google que permite a los desarrolladores construir aplicaciones nativas para iOS y Android desde una sola base de código.";
            break;
        default:
            info = "Información no disponible.";
    }

    const infoDiv = document.getElementById("informacion");
    infoDiv.textContent = info;
    infoDiv.style.display = "block";

}

document.getElementById('toggle-menu').addEventListener('click', function() {
    document.querySelector('.menu-list').classList.toggle('active');
  });