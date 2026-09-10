const cards = document.querySelectorAll(".card");

const capitulos = document.querySelectorAll(".historia");

const cartas = document.querySelectorAll(".carta");

const status = document.querySelectorAll(".statuscard");


/* =========================================
   OBSERVER DAS ANIMAÇÕES
========================================= */

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


for (const carta of cartas) {

    observer.observe(carta);

}


for (const statuscard of status) {

    observer.observe(statuscard);

}


/* =========================================
   NOVIDADES
========================================= */

async function carregarNovidades() {

    try {

        const resposta = await fetch("./pages/novidades.html");

        if (!resposta.ok) {
            throw new Error(`HTTP ${resposta.status}`);
        }

        const html = await resposta.text();

        console.log(
            "Página de novidades carregada:",
            resposta.url
        );

        const parser = new DOMParser();

        const documento =
            parser.parseFromString(html, "text/html");


        /* =================================
           PEGAR SOMENTE AS NOVIDADES
           DA SEÇÃO #novidades
        ================================= */

        const felipe =
            documento.querySelector(
                "#novidades .nov.lipe"
            );

        const felipa =
            documento.querySelector(
                "#novidades .nov.lipa"
            );

        const sophia =
            documento.querySelector(
                "#novidades .nov.soph"
            );


        /* =================================
           CONTAINER DO INDEX
        ================================= */

        const container =
            document.getElementById("noticias");


        if (!container) {

            console.error(
                "Container #noticias não encontrado."
            );

            return;

        }


        container.innerHTML = "";


        /* =================================
           ASSOCIAR CADA BOT
        ================================= */

        const novidades = [

            {
                origem: felipe,
                classe: "felipe"
            },

            {
                origem: felipa,
                classe: "felipa"
            },

            {
                origem: sophia,
                classe: "sophia"
            }

        ];


        /* =================================
           CRIAR AS CARDS
        ================================= */

        for (const novidade of novidades) {

            if (!novidade.origem) {

                continue;

            }


            /* Link */

            const link =
                document.createElement("a");

            link.href =
                "pages/novidades.html";

            link.className =
                "card-link";


            /* Card */

            const noticia =
                document.createElement("article");

            noticia.className =
                `noticia ${novidade.classe}`;


            /* =================================
               TÍTULO
            ================================= */

            const titulo =
                novidade.origem.querySelector("h3");


            if (titulo) {

                const h4 =
                    document.createElement("h4");

                h4.textContent =
                    titulo.textContent;

                noticia.appendChild(h4);

            }


            /* =================================
               PARÁGRAFOS
            ================================= */

            const paragrafos =
                novidade.origem.querySelectorAll("p");


            for (const paragrafo of paragrafos) {

                const p =
                    document.createElement("p");

                p.textContent =
                    paragrafo.textContent;


                if (
                    paragrafo.classList.contains("data")
                ) {

                    p.className = "data";

                }


                noticia.appendChild(p);

            }


            /* =================================
               ADICIONAR AO INDEX
            ================================= */

            link.appendChild(noticia);

            container.appendChild(link);


            /* Ativar animação */

            observer.observe(noticia);

        }

    } catch (erro) {

        console.error(
            "Erro ao carregar novidades:",
            erro
        );

    }

}


carregarNovidades();


/* =========================================
   BOTÃO EXPLORAR
========================================= */

const botao =
    document.getElementById("explorar");


if (botao) {

    botao.addEventListener("click", function () {

        document
            .getElementById("convite")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

}


/* =========================================
   STATUS DA SQUARE CLOUD
========================================= */

async function atualizarStatus() {

    try {

        const resposta = await fetch(
            "https://universo-das-estrelas.squareweb.app/status"
        );


        if (!resposta.ok) {

            throw new Error(
                `HTTP ${resposta.status}`
            );

        }


        const dados =
            await resposta.json();


        const statusElemento =
            document.getElementById("square-status");


        statusElemento.textContent =
            dados.online ? "online" : "offline";


        /* =================================
           CPU
        ================================= */

        const cpuValor =
            parseFloat(dados.cpu);


        document.getElementById(
            "square-cpu"
        ).textContent =
            dados.cpu;


        const cpuPercent =
            Math.min(
                Math.max(cpuValor, 0),
                100
            );


        const cpuProgress =
            document.querySelector(
                ".cpu-progress"
            );


        if (cpuProgress) {

            cpuProgress.style.setProperty(
                "--progress",
                `${cpuPercent}%`
            );

        }


        /* =================================
           RAM
        ================================= */

        const RAM_TOTAL = 512;


        const ramValor =
            parseFloat(dados.ram);


        document.getElementById(
            "square-ram"
        ).textContent =
            dados.ram;


        const ramPercent =
            (ramValor / RAM_TOTAL) * 100;


        const ramProgressPercent =
            Math.min(
                Math.max(ramPercent, 0),
                100
            );


        const ramProgress =
            document.querySelector(
                ".ram-progress"
            );


        if (ramProgress) {

            ramProgress.style.setProperty(
                "--progress",
                `${ramProgressPercent}%`
            );

        }


        /* =================================
           PING
        ================================= */

        document.getElementById(
            "square-ping"
        ).textContent =
            `${dados.processamento_ms} ms`;


        /* =================================
           STORAGE
        ================================= */

        const storageElemento =
            document.getElementById(
                "square-storage"
            );


        if (storageElemento) {

            storageElemento.textContent =
                dados.storage;

        }


        /* =================================
           UPTIME
        ================================= */

        const uptimeElemento =
            document.getElementById(
                "square-uptime"
            );


        if (uptimeElemento) {

            uptimeElemento.textContent =
                dados.uptime;

        }


        /* =================================
           LOGS
        ================================= */

        console.log(
            "Status da API:",
            dados
        );


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

setInterval(
    atualizarStatus,
    30000
);

document.querySelectorAll(".noticia")