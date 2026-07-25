const botaoMenu = document.querySelector(".menu-toggle");

const menu = document.querySelector(".menu-lateral");

botaoMenu.addEventListener("click", function(){

    menu.classList.toggle("aberto");

});