document.addEventListener('DOMContentLoaded', function () {
    const beneficiosSection = document.querySelector('.beneficios');

    function handleVisibility() {
        const scrollPosition = window.scrollY;
        const sectionPosition = beneficiosSection.offsetTop;

        if (scrollPosition + window.innerHeight > sectionPosition) {
            beneficiosSection.classList.add('visible');
            window.removeEventListener('scroll', handleVisibility);
        }
    }

    window.addEventListener('scroll', handleVisibility);
    handleVisibility(); // Asegura que la función se ejecute al cargar la página
});