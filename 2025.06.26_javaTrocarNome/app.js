// FUNÇÃO DE TROCAR DE NOME

function fnMudar(){
    document.getElementById("titulo").innerHTML = "<em>Carvalho, Emerson</em>";
    document.getElementById("profissao").innerText = "Analista de Sistema";
    document.getElementById("titulo").style.color = "red";
    document.getElementById("profissao").style.color = "blue";
}

// FUNÇÃO PARA TORCAR A COR DE FUNDO COMO BLACK
function fnModoDark(){
    document.getElementById("pagina").style.background = "black";
    document.getElementById("pagina").style.color = "white";
}
// FUNÇÃO PARA TORCAR A COR DE FUNDO COMO LIGHT
function fnModoLight(){
    document.getElementById("pagina").style.background = "white";
    document.getElementById("pagina").style.color = "black";
}
// FUNÇÃO PARA TORCAR A COR DE FUNDO COMO CARNAVAL
function fnModoCarnaval(){
    document.getElementById("pagina").style.background = "linear-gradient(to right, red, yellow, blue)";
    document.getElementById("pagina").style.color = "black";
}

// FUNÇÃO PARA TORCAR IMAGENS DE BANNER
// forma 1 de fazer

// function fnBanner2(){
//     document.getElementById("banner").src = "imagem/imagem2.jpg";
// }

// function fnBanner3(){
//     document.getElementById("banner").src = "imagem/imagem3.jpg";
// }

// function fnBanner1(){
//     document.getElementById("banner").src = "imagem/imagem1.jpg";
// }

// forma 2 de fazer

let fotosBanner = ['imagem/imagem1.jpg', 'imagem/imagem2.jpg', 'imagem/imagem3.jpg']

function fnBanner(bannerEscolhido){
    document.querySelector("#banner").src = fotosBanner[bannerEscolhido];
}

