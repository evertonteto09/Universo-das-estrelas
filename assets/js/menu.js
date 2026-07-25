const botaoMenu = document.querySelector(".menu-toggle");

const menu = document.querySelector(".menu-lateral");

const nav = document.querySelector("nav");

const header = document.querySelector("header");

function atualizarMenu(){

    if(window.innerWidth <= 768){

        menu.prepend(nav);

    }else{

        header.insertBefore(nav, menu);

    }

}

window.addEventListener("resize", atualizarMenu);

atualizarMenu();

botaoMenu.addEventListener("click", function(){

    menu.classList.toggle("aberto");

});