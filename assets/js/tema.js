const body = document.body;

const imagem = document.querySelector(".icone-menu");

const botoesTema = document.querySelectorAll(".opcoes-tema button");

function aplicarTema(tema){

    body.classList.remove("claro", "escuro");

    if (tema !== "galaxia"){

        body.classList.add(tema);

    }

    if (imagem){

        if (tema === "claro"){

            imagem.src = "assets/images/menu.png";

        }else{

            imagem.src = "assets/images/menu2.png";

        }

    }

    localStorage.setItem("tema", tema);

}

const temaSalvo = localStorage.getItem("tema") || "galaxia";

aplicarTema(temaSalvo);

botoesTema.forEach(function(botao){

    botao.addEventListener("click", function(){

        const tema = botao.dataset.tema;

        aplicarTema(tema);

    });

});