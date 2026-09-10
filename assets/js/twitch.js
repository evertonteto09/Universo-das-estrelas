const botao = document.getElementById("botaoGravar");

const categoria = document.getElementById("categoria");

const resultadoArea = document.getElementById("resultadoArea");

const mensagemResultado =
    document.getElementById("mensagemResultado");

const views =
    document.getElementById("views");

const seguidores =
    document.getElementById("seguidores");

const monetizacao =
    document.getElementById("monetizacao");

const categoriaResultado =
    document.getElementById("categoriaResultado");


botao.addEventListener("click", function () {

    const categoriaEscolhida = categoria.value;


    if (!categoriaEscolhida) {

        alert("Escolha uma categoria para gravar sua Live!");

        return;

    }


    /*
        Dados demonstrativos.

        Eles simulam o resultado do comando
        da Sophia no Discord.
    */

    const viewsGeradas =
        Math.floor(Math.random() * 30000) + 5000;

    const seguidoresGerados =
        Math.floor(Math.random() * 300) + 50;

    const monetizacaoGerada =
        Math.floor(Math.random() * 10) + 1;


    mensagemResultado.innerHTML =
        `Você gravou uma 🎮 <strong>${categoriaEscolhida}</strong> ` +
        `em formato Live e ganhou ` +
        `👁️ <strong>${viewsGeradas}</strong> views ` +
        `e 👥 <strong>${seguidoresGerados}</strong> seguidores.`;


    views.textContent =
        viewsGeradas.toLocaleString("pt-BR");


    seguidores.textContent =
        seguidoresGerados.toLocaleString("pt-BR");


    monetizacao.textContent =
        monetizacaoGerada;


    categoriaResultado.textContent =
        categoriaEscolhida;


    resultadoArea.classList.remove("escondido");


    resultadoArea.scrollIntoView({

        behavior: "smooth",

        block: "center"

    });

});