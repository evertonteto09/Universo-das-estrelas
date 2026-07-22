const imagem = document.querySelector(".icone-menu");

const botaoMenu = document.querySelector(".menu-toggle");

const menu = document.querySelector(".menu-lateral");

const body = document.querySelector("body");

const botoesTema = document.querySelectorAll(".opcoes-tema button");

const cards = document.querySelectorAll(".card");

const capitulos = document.querySelectorAll(".historia");

const noticias = document.querySelectorAll(".noticia");

const cartas = document.querySelectorAll(".carta");

const temaSalvo = localStorage.getItem("tema") || "galaxia";

aplicarTema(temaSalvo);

const observer = new IntersectionObserver(function (entries) {

    for (const entry of entries) {

        if (entry.isIntersecting) {

            entry.target.classList.add("mostrar");

        }

    }

});

for (const card of cards) {

    observer.observe(card);

}


for (const historia of capitulos) {

    observer.observe(historia);

}

for (const noticia of noticias) {

    observer.observe(noticia);

}

for (const carta of cartas) {

    observer.observe(carta);

}

function aplicarTema(tema){

    body.classList.remove("claro", "escuro");

    if (tema !== "galaxia") {

        body.classList.add(tema);

    }

    if (tema === "claro") {

        imagem.src = "assets/images/menu.png";

    } else {

        imagem.src = "assets/images/menu2.png";

    }

    localStorage.setItem("tema", tema);

}

botaoMenu.addEventListener("click", function(){

    menu.classList.toggle("aberto");

});

const botao = document.getElementById("explorar");

botao.addEventListener("click", function () {

    document.getElementById("convite").scrollIntoView({
        behavior: "smooth"
    });

});

botoesTema.forEach(function(botao){

    botao.addEventListener("click", function(){

        const tema = botao.dataset.tema;

        aplicarTema(tema);

    });

});
