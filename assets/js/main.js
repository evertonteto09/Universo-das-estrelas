const cards = document.querySelectorAll(".card");

const capitulos = document.querySelectorAll(".historia");

const noticias = document.querySelectorAll(".noticia");

const cartas = document.querySelectorAll(".carta");

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

const botao = document.getElementById("explorar");

botao.addEventListener("click", function () {

    document.getElementById("convite").scrollIntoView({
        behavior: "smooth"
    });

});