const botao = document.getElementById("botaoAndamento");

const nomeCanal = document.getElementById("nomeCanal");

const inscritos = document.getElementById("inscritos");

const views = document.getElementById("views");

const icone = document.getElementById("icone");

const resultadoArea =
    document.getElementById("resultadoArea");

const imagemTwitch =
    document.getElementById("imagemTwitch");


botao.addEventListener("click", function () {

    const nome = nomeCanal.value.trim();

    const seguidores = inscritos.value.trim();

    const visualizacoes = views.value.trim();

    const urlIcone = icone.value.trim();


    if (!nome) {

        alert("Digite o nome do canal!");

        return;

    }


    if (!seguidores) {

        alert("Digite a quantidade de seguidores!");

        return;

    }


    if (!visualizacoes) {

        alert("Digite a quantidade de visualizações!");

        return;

    }


    if (!urlIcone) {

        alert("Digite a URL do ícone!");

        return;

    }


    /*
        Monta a URL da API do Universo das Estrelas.

        Equivalente ao comando:

        /twitch?nm=...
        &in=...
        &vw=...
        &ic=...
    */


    const apiURL =
        "https://universo-das-estrelas.squareweb.app/twitch" +

        "?nm=" + encodeURIComponent(nome) +

        "&in=" + encodeURIComponent(seguidores) +

        "&vw=" + encodeURIComponent(visualizacoes) +

        "&ic=" + encodeURIComponent(urlIcone);


    /*
        Mostra a imagem gerada pela API.
    */


    imagemTwitch.src = apiURL;


    imagemTwitch.onload = function () {

        resultadoArea.classList.remove("escondido");

        resultadoArea.scrollIntoView({

            behavior: "smooth",

            block: "center"

        });

    };


    imagemTwitch.onerror = function () {

        alert(
            "Não foi possível gerar a imagem. " +
            "Verifique os dados informados."
        );

    };

});