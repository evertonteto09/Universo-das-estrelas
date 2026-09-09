const botao = document.getElementById("botaoEscolher");

const opcoesInput = document.getElementById("opcoes");

const resultado = document.getElementById("resultado");


botao.addEventListener("click", escolher);



function escolher() {


    const texto = opcoesInput.value.trim();


    /* =========================
       VERIFICA SE ESTÁ VAZIO
    ========================= */

    if (texto === "") {


        resultado.innerHTML = `

            <span class="erro">

                ❌ Você precisa colocar algumas opções!

            </span>

        `;


        return;

    }



    /* =========================
       SEPARA AS OPÇÕES
    ========================= */

    const opcoes = texto

        .split(",")

        .map(opcao => opcao.trim())

        .filter(opcao => opcao !== "");



    /* =========================
       VERIFICA QUANTIDADE
    ========================= */

    if (opcoes.length < 2) {


        resultado.innerHTML = `

            <span class="erro">

                ❌ Coloque pelo menos 2 opções!

            </span>

        `;


        return;

    }



    /* =========================
       DESABILITA BOTÃO
    ========================= */

    botao.disabled = true;


    resultado.innerHTML = `

        🤔 Hmm... deixa eu pensar...

    `;



    /* =========================
       ANIMAÇÃO
    ========================= */

    setTimeout(() => {


        resultado.innerHTML = `

            🔎 Analisando
            <strong>${opcoes.length}</strong>
            opções...

        `;


    }, 700);



    setTimeout(() => {


        resultado.innerHTML = `

            🎲 Fazendo minha escolha...

        `;


    }, 1400);



    /* =========================
       ESCOLHA ALEATÓRIA
    ========================= */

    setTimeout(() => {


        const numeroAleatorio = Math.floor(

            Math.random() * opcoes.length

        );


        const escolha = opcoes[numeroAleatorio];



        resultado.innerHTML = `

            🎉 Minha escolha é:

            <br><br>

            <span class="resultado-final">

                ${escolha}

            </span>

        `;


        botao.disabled = false;


    }, 2200);


}