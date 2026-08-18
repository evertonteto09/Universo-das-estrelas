const body = document.body;

const imagem = document.querySelector(".icone-menu");

const iconesSocial = document.querySelectorAll(".foticon");

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


    if (iconesSocial.length){

        iconesSocial.forEach(function(icone){

            if (tema === "claro"){

                icone.src = icone.src.replace("-white", "-black");

            }else{

                icone.src = icone.src.replace("-black", "-white");

            }

        });

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