const botao = document.getElementById("botaoYoutube");

const nomeCanal = document.getElementById("nomeCanal");

const likes = document.getElementById("likes");

const inscritos = document.getElementById("inscritos");

const views = document.getElementById("views");

const icone = document.getElementById("icone");

const resultadoArea =
    document.getElementById("resultadoArea");

const imagemYoutube =
    document.getElementById("imagemYoutube");


botao.addEventListener("click", function () {

    const nome = nomeCanal.value.trim();

    const quantidadeLikes = likes.value.trim();

    const quantidadeInscritos = inscritos.value.trim();

    const quantidadeViews = views.value.trim();

    const urlIcone = icone.value.trim();


    if (!nome) {

        alert("Digite o nome do canal!");

        return;

    }


    if (!quantidadeLikes) {

        alert("Digite a quantidade de likes!");

        return;

    }


    if (!quantidadeInscritos) {

        alert("Digite a quantidade de inscritos!");

        return;

    }


    if (!quantidadeViews) {

        alert("Digite a quantidade de visualizações!");

        return;

    }


    if (!urlIcone) {

        alert("Digite a URL do ícone!");

        return;

    }


    /*
        Monta a URL da API.

        Equivalente ao comando:

        /youtube?nm=...
        &lk=...
        &in=...
        &vw=...
        &ic=...
    */


    const apiURL =
        "https://universo-das-estrelas.squareweb.app/youtube" +

        "?nm=" + encodeURIComponent(nome) +

        "&lk=" + encodeURIComponent(quantidadeLikes) +

        "&in=" + encodeURIComponent(quantidadeInscritos) +

        "&vw=" + encodeURIComponent(quantidadeViews) +

        "&ic=" + encodeURIComponent(urlIcone);


    /*
        Coloca a imagem gerada pela API
        dentro da demonstração.
    */


    imagemYoutube.src = apiURL;


    imagemYoutube.onload = function () {

        resultadoArea.classList.remove("escondido");

        resultadoArea.scrollIntoView({

            behavior: "smooth",

            block: "center"

        });

    };


    imagemYoutube.onerror = function () {

        alert(
            "Não foi possível gerar a imagem. " +
            "Verifique os dados informados."
        );

    };

});