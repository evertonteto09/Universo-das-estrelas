/* ====================================
        SALDO
==================================== */

let saldo = 1000;


/* ====================================
        INVENTÁRIO
==================================== */

let inventario = {

    pedra: 0,

    cobre: 0,

    ouro: 0,

    diamante: 0,

    rubi: 0

};



/* ====================================
        PREÇOS
==================================== */

const precos = {

    pedra: 5,

    cobre: 15,

    ouro: 50,

    diamante: 150,

    rubi: 300

};



/* ====================================
        ELEMENTOS
==================================== */

const saldoElemento =
    document.getElementById("saldo");


const resultado =
    document.getElementById("resultado");


const botaoMinerar =
    document.getElementById("botaoMinerar");


const botaoVender =
    document.getElementById("botaoVender");



/* ====================================
        ATUALIZAR INTERFACE
==================================== */

function atualizarInterface() {


    saldoElemento.textContent =
        saldo.toLocaleString("pt-BR");


    document.getElementById("pedra").textContent =
        inventario.pedra;


    document.getElementById("cobre").textContent =
        inventario.cobre;


    document.getElementById("ouro").textContent =
        inventario.ouro;


    document.getElementById("diamante").textContent =
        inventario.diamante;


    document.getElementById("rubi").textContent =
        inventario.rubi;

}



/* ====================================
        MINERAÇÃO
==================================== */

botaoMinerar.addEventListener("click", function () {


    const sorteio = Math.random();


    let minerio;

    let quantidade;


    /*
        Raridades:

        Pedra       40%
        Cobre       30%
        Ouro        18%
        Diamante     9%
        Rubi         3%
    */


    if (sorteio < 0.40) {

        minerio = "pedra";

        quantidade = Math.floor(Math.random() * 4) + 1;

    }

    else if (sorteio < 0.70) {

        minerio = "cobre";

        quantidade = Math.floor(Math.random() * 3) + 1;

    }

    else if (sorteio < 0.88) {

        minerio = "ouro";

        quantidade = Math.floor(Math.random() * 3) + 1;

    }

    else if (sorteio < 0.97) {

        minerio = "diamante";

        quantidade = 1;

    }

    else {

        minerio = "rubi";

        quantidade = 1;

    }



    inventario[minerio] += quantidade;


    atualizarInterface();



    const nomes = {

        pedra: "🪨 Pedra",

        cobre: "🪙 Cobre",

        ouro: "🟡 Ouro",

        diamante: "💎 Diamante",

        rubi: "❤️ Rubi"

    };


    resultado.innerHTML =

        `⛏️ Você encontrou **${quantidade}x ${nomes[minerio]}**!<br><br>` +

        `🎒 O minério foi adicionado ao seu inventário.`;

});



/* ====================================
        VENDA
==================================== */

botaoVender.addEventListener("click", function () {


    let total = 0;

    let quantidadeTotal = 0;



    /*
        Calcula o valor de todos
        os minérios armazenados.
    */

    for (const minerio in inventario) {

        const quantidade =
            inventario[minerio];


        total +=
            quantidade * precos[minerio];


        quantidadeTotal +=
            quantidade;

    }



    /* =================================
            NADA PARA VENDER
    ================================= */

    if (quantidadeTotal === 0) {

        resultado.innerHTML =

            "💰 Você não possui minérios para vender.<br><br>" +

            "⛏️ Vá minerar primeiro!";

        return;

    }



    /* =================================
            VENDA
    ================================= */

    saldo += total;



    inventario.pedra = 0;

    inventario.cobre = 0;

    inventario.ouro = 0;

    inventario.diamante = 0;

    inventario.rubi = 0;



    atualizarInterface();



    resultado.innerHTML =

        `💰 **Venda realizada!**<br><br>` +

        `Você vendeu **${quantidadeTotal} minério(s)** ` +

        `e recebeu **${total.toLocaleString("pt-BR")} moedas**! 🤑<br><br>` +

        `💰 Seu novo saldo: **${saldo.toLocaleString("pt-BR")} moedas**`;

});



/* ====================================
        INICIALIZAÇÃO
==================================== */

atualizarInterface();