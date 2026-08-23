const cards = document.querySelectorAll(".card");

const capitulos = document.querySelectorAll(".historia");

const noticias = document.querySelectorAll(".noticia");

const cartas = document.querySelectorAll(".carta");

const status = document.querySelectorAll(".statuscard");

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

for (const statuscard of status) {

    observer.observe(statuscard);

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

        const statusElemento = document.getElementById("square-status");

        statusElemento.textContent =
            dados.online ? "online" : "offline";

        const cpuValor = parseFloat(dados.cpu);

        document.getElementById("square-cpu").textContent =
            dados.cpu;

        const cpuPercent = Math.min(Math.max(cpuValor, 0), 100);

        const cpuProgress = document.querySelector(".cpu-progress");

        if (cpuProgress) {
            cpuProgress.style.setProperty(
                "--progress",
                `${cpuPercent}%`
            );
        }

        const RAM_TOTAL = 512;

        const ramValor = parseFloat(dados.ram);

        document.getElementById("square-ram").textContent =
            dados.ram;

        const ramPercent =
            (ramValor / RAM_TOTAL) * 100;

        const ramProgressPercent =
            Math.min(Math.max(ramPercent, 0), 100);

        const ramProgress =
            document.querySelector(".ram-progress");

        if (ramProgress) {
            ramProgress.style.setProperty(
                "--progress",
                `${ramProgressPercent}%`
            );
        }

        document.getElementById("square-ping").textContent =
            `${dados.processamento_ms} ms`;

        const storageElemento =
            document.getElementById("square-storage");

        if (storageElemento) {
            storageElemento.textContent =
                dados.storage;
        }

        const uptimeElemento =
            document.getElementById("square-uptime");

        if (uptimeElemento) {
            uptimeElemento.textContent =
                dados.uptime;
        }

        console.log("Status da API:", dados);

        console.log(
            `CPU: ${cpuPercent.toFixed(2)}%`
        );

        console.log(
            `RAM: ${ramPercent.toFixed(2)}%`
        );

    } catch (erro) {

        console.error(
            "Erro ao consultar a API:",
            erro
        );
    }
}

atualizarStatus();
setInterval(atualizarStatus, 30000);