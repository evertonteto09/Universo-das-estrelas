const botao = document.getElementById("calcularShip");


botao.addEventListener("click", function () {


    const nome1 =
        document.getElementById("nome1").value.trim();


    const nome2 =
        document.getElementById("nome2").value.trim();


    const avatar1 =
        document.getElementById("avatar1").value.trim();


    const avatar2 =
        document.getElementById("avatar2").value.trim();


    const resultado =
        document.getElementById("resultadoShip");



    if (
        nome1 === "" ||
        nome2 === "" ||
        avatar1 === "" ||
        avatar2 === ""
    ) {


        resultado.innerHTML = `

            <p class="erro-teste">

                ❌ Preencha todas as informações!

            </p>

        `;


        return;

    }



    const porcentagem =
        Math.floor(Math.random() * 101);



    resultado.innerHTML = `

        <p class="calculando">

            💘 Calculando compatibilidade...

        </p>

    `;



    setTimeout(function () {


        const url =

            "https://universo-das-estrelas.squareweb.app/ship"

            +

            "?a1="

            +

            encodeURIComponent(avatar1)

            +

            "&a2="

            +

            encodeURIComponent(avatar2)

            +

            "&p="

            +

            porcentagem;



        resultado.innerHTML = `


            <div class="resultado-ship">


                <h2>

                    💖 ${nome1} + ${nome2}

                </h2>


                <p>

                    Compatibilidade:

                    <strong>

                        ${porcentagem}%

                    </strong>

                </p>


                <img

                    src="${url}"

                    alt="Resultado do Ship"

                    class="imagem-ship"

                >


            </div>


        `;


    }, 1000);


});