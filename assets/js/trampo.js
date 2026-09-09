const botao = document.getElementById("botaoTrabalhar");

const resultado = document.getElementById("resultado");

const saldoElemento = document.getElementById("saldo");


let saldo = 0;


const trabalhos = [

    {
        nome: "Entregador",
        emoji: "🛵",
        minimo: 100,
        maximo: 350
    },

    {
        nome: "Garçom",
        emoji: "🍽️",
        minimo: 120,
        maximo: 400
    },

    {
        nome: "Programador",
        emoji: "💻",
        minimo: 250,
        maximo: 600
    },

    {
        nome: "Mecânico",
        emoji: "🔧",
        minimo: 180,
        maximo: 450
    },

    {
        nome: "Professor",
        emoji: "📚",
        minimo: 150,
        maximo: 380
    },

    {
        nome: "Fotógrafo",
        emoji: "📸",
        minimo: 200,
        maximo: 500
    },

    {
        nome: "Padeiro",
        emoji: "🥖",
        minimo: 130,
        maximo: 320
    },

    {
        nome: "Motorista",
        emoji: "🚗",
        minimo: 180,
        maximo: 420
    },

    {
        nome: "Eletricista",
        emoji: "⚡",
        minimo: 220,
        maximo: 550
    },

    {
        nome: "Designer",
        emoji: "🎨",
        minimo: 200,
        maximo: 500
    }

];


function numeroAleatorio(min, max) {

    return Math.floor(
        Math.random() * (max - min + 1)
    ) + min;

}


function formatarNumero(numero) {

    return numero.toLocaleString("pt-BR");

}


botao.addEventListener("click", function () {


    botao.disabled = true;


    botao.textContent = "⏳ Trabalhando...";


    resultado.innerHTML = `
        💼 Você está trabalhando...
        <br>
        <em>Aguarde um pouquinho...</em>
    `;


    document
        .querySelector(".trabalho-icon")
        .classList.add("trabalhando");


    setTimeout(function () {


        const trabalho =
            trabalhos[
                numeroAleatorio(
                    0,
                    trabalhos.length - 1
                )
            ];


        const dinheiro =
            numeroAleatorio(
                trabalho.minimo,
                trabalho.maximo
            );


        saldo += dinheiro;


        saldoElemento.textContent =
            formatarNumero(saldo);


        resultado.innerHTML = `

            ${trabalho.emoji}
            Você trabalhou como
            <strong>${trabalho.nome}</strong>!

            <br>

            💰 Você recebeu
            <strong>${formatarNumero(dinheiro)} moedas</strong>!

        `;


        botao.disabled = false;


        botao.textContent = "💼 Trabalhar";


        document
            .querySelector(".trabalho-icon")
            .classList.remove("trabalhando");


    }, 1500);


});