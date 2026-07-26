const botaoMenu = document.querySelector(".menu-toggle");

const menu = document.querySelector(".menu-lateral");

const nav = document.querySelector("nav");

const header = document.querySelector("header");

const voltar = document.querySelector(".voltar-menu");

const destino = document.querySelector(".nav-menu");

function atualizarMenu(){

    if(window.innerWidth <= 768){

        menu.prepend(nav);

        destino.appendChild(nav);

    }else{

        header.insertBefore(nav, menu);

    }

}

window.addEventListener("resize", atualizarMenu);

atualizarMenu();

botaoMenu.addEventListener("click", function(){

    menu.classList.toggle("aberto");

});

voltar.addEventListener("click", ()=>{

    menu.classList.remove("aberto");

});