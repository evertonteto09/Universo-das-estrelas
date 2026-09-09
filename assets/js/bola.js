const botao = document.getElementById("botaoConsultar");

const perguntaInput = document.getElementById("pergunta");

const resultado = document.getElementById("resultado");

const bola = document.querySelector(".bola");



const respostas = [

    "✨ Sim, o destino parece estar ao seu favor.",

    "🔮 Os astros dizem que sim.",

    "🌟 Há grandes chances de isso acontecer.",

    "💫 O futuro parece promissor.",

    "🌙 Talvez... o destino ainda não decidiu.",

    "🤔 A bola está incerta sobre isso.",

    "⚠️ Melhor não contar com isso por enquanto.",

    "🌑 As estrelas dizem que não.",

    "💔 Infelizmente, as chances não parecem boas.",

    "👀 Algo inesperado pode acontecer.",

    "✨ O futuro reserva uma surpresa para você.",

    "🔮 Consulte novamente quando o momento chegar."

];



botao.addEventListener("click", consultar);



function consultar() {


    const pergunta =
        perguntaInput.value.trim();



    /* =========================
       VERIFICA PERGUNTA
    ========================= */

    if (pergunta === "") {


        resultado.innerHTML = `

            <span class="erro">

                ❌ Faça uma pergunta primeiro!

            </span>

        `;


        return;

    }



    /* =========================
       DESABILITA
    ========================= */

    botao.disabled = true;


    bola.classList.add("consultando");



    resultado.innerHTML = `

        🔮 A bola de cristal está
        analisando seu destino...

    `;



    /* =========================
       PRIMEIRA ETAPA
    ========================= */

    setTimeout(() => {


        resultado.innerHTML = `

            <span class="pergunta">

                "${pergunta}"

            </span>

            <br><br>

            ✨ Consultando os astros...

        `;


    }, 900);



    /* =========================
       SEGUNDA ETAPA
    ========================= */

    setTimeout(() => {


        resultado.innerHTML = `

            <span class="pergunta">

                "${pergunta}"

            </span>

            <br><br>

            🌌 O destino está se revelando...

        `;


    }, 1800);



    /* =========================
       RESULTADO
    ========================= */

    setTimeout(() => {


        const indice = Math.floor(

            Math.random() * respostas.length

        );


        const resposta = respostas[indice];



        resultado.innerHTML = `

            <span class="pergunta">

                "${pergunta}"

            </span>

            <br>

            <span class="resposta">

                ${resposta}

            </span>

        `;


        bola.classList.remove("consultando");


        botao.disabled = false;


    }, 2700);

}