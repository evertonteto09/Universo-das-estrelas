let saldo = 1000;


const saldoElemento = document.getElementById("saldo");

const saldoLimite = document.getElementById("saldoLimite");

const valorAposta = document.getElementById("valorAposta");

const botaoApostar = document.getElementById("botaoApostar");

const resultado = document.getElementById("resultado");



function atualizarSaldo() {

    saldoElemento.textContent =
        saldo.toLocaleString("pt-BR");

    saldoLimite.textContent =
        saldo.toLocaleString("pt-BR");

}



botaoApostar.addEventListener("click", function () {


    const aposta = Number(valorAposta.value);


    /* ================================
            VALIDAÇÃO
    ================================= */

    if (!aposta || aposta <= 0) {

        resultado.innerHTML =
            "❌ Digite um valor válido para apostar.";

        return;

    }


    if (aposta > saldo) {

        resultado.innerHTML =
            "❌ Você não possui moedas suficientes para essa aposta.";

        return;

    }



    /* ================================
            SORTEIO
    ================================= */

    const sorteio = Math.random();


    let mensagem = "";


    if (sorteio < 0.45) {

        /*
            DERROTA
        */

        saldo -= aposta;


        mensagem =
            `💔 Você perdeu **${aposta.toLocaleString("pt-BR")} moedas**.<br><br>` +
            `A sorte não estava do seu lado dessa vez... 😭`;

    }


    else if (sorteio < 0.90) {

        /*
            VITÓRIA
            lucro = valor apostado
            retorno total = 2x
        */

        saldo += aposta;


        mensagem =
            `🎉 Você ganhou!<br><br>` +
            `Sua aposta de **${aposta.toLocaleString("pt-BR")} moedas** ` +
            `rendeu **${(aposta * 2).toLocaleString("pt-BR")} moedas**! 💰`;

    }


    else {

        /*
            GRANDE VITÓRIA
            lucro = 2x
            retorno total = 3x
        */

        saldo += aposta * 2;


        mensagem =
            `🍀✨ QUE SORTE!<br><br>` +
            `Você acertou uma grande vitória!<br>` +
            `Sua aposta de **${aposta.toLocaleString("pt-BR")} moedas** ` +
            `rendeu **${(aposta * 3).toLocaleString("pt-BR")} moedas**! 💰💰💰`;

    }



    /* ================================
            ATUALIZAÇÃO
    ================================= */

    atualizarSaldo();


    resultado.innerHTML = mensagem;


    valorAposta.value = "";


});