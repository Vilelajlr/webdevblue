document.addEventListener("DOMContentLoaded", function() {

    AOS.init();

    function removeAOSOnMobile() {
        if (window.innerWidth < 768) { // Define a largura máxima para remover as animações
            document.querySelectorAll("[data-aos]").forEach(element => {
                element.removeAttribute("data-aos");
                element.removeAttribute("data-aos-delay");
            });
        }
    }

    // Executa a função ao carregar a página
    removeAOSOnMobile();

    // Executa a função sempre que a tela for redimensionada
    window.addEventListener("resize", removeAOSOnMobile);
});
