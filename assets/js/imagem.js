document.addEventListener("DOMContentLoaded", function() {
    // Seleciona a imagem principal da casa (casa-normal)
    const mainImage = document.querySelector(".casa-normal img");

    // Seleciona todas as imagens pequenas (casas-pequenas)
    const smallImages = document.querySelectorAll(".casas-pequenas .wt-casas img");

    // Adiciona o evento de clique em cada imagem pequena
    smallImages.forEach(img => {
        img.addEventListener("click", function() {
            // Troca o src e o alt da imagem principal pela imagem clicada
            mainImage.src = this.src;
            mainImage.alt = this.alt;
        });
    });
});
