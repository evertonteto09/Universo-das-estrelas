const cards = document.querySelectorAll(".card");

const capitulos = document.querySelectorAll(".historia");

const noticias = document.querySelectorAll(".noticia");

const cartas = document.querySelectorAll(".carta");

const status = document.querySelectorAll(".statusuniverso");

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

for (const statusuniverso of status) {

    observer.observe(statusuniverso);

}

const botao = document.getElementById("explorar");

botao.addEventListener("click", function () {

    document.getElementById("convite").scrollIntoView({
        behavior: "smooth"
    });

});

async function atualizarStatus() {
    try {
        const resposta = await fetch(
            "https://universo-das-estrelas.squareweb.app/status"
        );

        if (!resposta.ok) {
            throw new Error(`HTTP ${resposta.status}`);
        }

        const dados = await resposta.json();

        document.getElementById("square-status").textContent =
            dados.online ? "online" : "offline";

        document.getElementById("square-cpu").textContent =
            dados.cpu;

        document.getElementById("square-ram").textContent =
            dados.ram;

        document.getElementById("square-ping").textContent =
            `${dados.processamento_ms} ms`;

    } catch (erro) {
        console.error("Erro ao consultar a API:", erro);
    }
}

atualizarStatus();
setInterval(atualizarStatus, 30000);