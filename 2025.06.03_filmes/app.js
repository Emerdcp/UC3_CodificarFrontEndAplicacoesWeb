// JSON - javascript object notation

let filme1 = {
    titulo: "Jurassic Park 0",
    foto: "filme1.webp",
    avaliacao: "09/10",
    duracao: "1h50m"
}

let filme2 = {
    titulo: "Karate kid Lendas - Lendas",
    foto: "filme2.jpg",
    avaliacao: "10/10",
    duracao: "1h40m"
}

let filme3 = {
    titulo: "Lilo & Stitch",
    foto: "filme2.jpg",
    avaliacao: "10/10",
    duracao: "1h55m"
}

let filme4 = {
    titulo: "Pecadores",
    foto: "filme4.jpg",
    avaliacao: "08/10",
    duracao: "1h30m"
}

// uma forma para apresentar os itens.

//function fnMontarCartao(filmeAtual){
    // console.log(`Título: ${filmeAtual.titulo} Duração: ${filmeAtual.duracao} Avalição: ${filmeAtual.avaliacao}`) este para fazer a impressão
    // console.log("Título: " + filmeAtual.titulo) uma forma de fazer
    // console.log("Duração: " + filmeAtual.duracao)

//}

// Criarção do cards dentro do java, montando junto com a função
// Faz a impressão no Inspector para avaliar.

// function fnMontarCartao(filmeAtual){
//     console.log(` 
//         <div class="card-filme">
//             <img src="img/${filmeAtual.foto}">
//             <h3>${filmeAtual.titulo}</h3>
//             <span>⭐${filmeAtual.avaliacao}</span>
//         </div>
//         `)
// }

function fnMontarCartao(filmeAtual){
    document.querySelector(".lista-filmes").innerHTML = `
        <div class="card-filme">
            <img src="img/${filmeAtual.foto}">
            <h3>${filmeAtual.titulo}</h3>
            <span>⭐${filmeAtual.avaliacao}</span>
        </div>
        `
}


//DON - Document Object Model

// document.querySelector("h1").innerText = "OI" faz procurar, e colocar para alterar a visualização #pera Id e . pega Classe
// document.querySelector("h1").innerHTML = "<b>Oi</b>" altera para html e deixa em negrito

fnMontarCartao(filme1)
fnMontarCartao(filme2)
fnMontarCartao(filme3)
fnMontarCartao(filme4)