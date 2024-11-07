document.addEventListener('DOMContentLoaded', function() {

    const menuHamburguer = document.getElementById('menu-hamburguer');
    const containerLinks = document.querySelector('.container-links');

    menuHamburguer.addEventListener('click', () => {
    containerLinks.classList.toggle('active');
});

});