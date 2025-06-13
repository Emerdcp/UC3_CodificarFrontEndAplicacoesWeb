/*API de Exemplos.*/

/* console.log("funcionou") Console Log Funcionamento do site por trás*/
/* alert("funcionou") Usando para mostrar um alerta na tela*/
/* prompt("funcionou") Usado para pode digitar um comando*/
/* console.error("funcionou") Para monstrar erro */
/* console.warn("funcionou") Para um sinal de alerta*/

//Como fazer um Array
let filme1 = ["Jurassic Park 0", "filme1.webp", "10/10"]
let filme2 = ["Jurassic Park 1", "filme2.webp", "10/10"]
let filme3 = ["Jurassic Park 2", "filme3.webp", "10/10"]
let filme4 = ["Jurassic Park 3", "filme4.webp", "10/10"]

console.log(filme1[0])
console.log(filme1[1])
console.log(filme1[2])

//Laço de repetição

for (let i = 0; i<=10; i++){
    console.log("Emerson" + i)
}
//ex:Filme
for (let i = 0; i<3; i++){
    console.log(filme1[i])
}
for (let i = 0; i<3; i++){
    console.log(filme2[i])
}
for (let i = 0; i<3; i++){
    console.log(filme3[i])
}
for (let i = 0; i<3; i++){
    console.log(filme4[i])
}


// Fazer Repetição com Objeto

let filme01 = {
    titulo: "Jurassic Park 0", 
    foto: "filme1.webp", 
    avaliação: "10/10",
    duracao: "1h50m"
}

console.log(filme01.duracao)





function fnMontarCartao(Nome, idade){
    console.log(Nome, idade)
}

fnMontarCartao(Emerson, 36)




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






// JSON - javascript object notation

//Quando usado no HTLM for um classe, usa .lista-filme1
//Quando usado no HTML for um Id, usa #lista-filme1
//Quando usado no HTML dor dispatchEvent, usa Div
//O ` usado para poder pegar as váriais, que tem que estar com ${}
//Usado no innerHTML e colocar += para conctenar e apresentar os outros filmes

// let filme1 = {
//     titulo: "Jurassic Park 0",
//     foto: "filme1.webp",
//     avaliacao: "09/10",
//     duracao: "1h50m"
// }

// let filme2 = {
//     titulo: "Karate kid Lendas - Lendas",
//     foto: "filme2.jpg",
//     avaliacao: "10/10",
//     duracao: "1h40m"
// }

// let filme3 = {
//     titulo: "Lilo & Stitch",
//     foto: "filme3.jpg",
//     avaliacao: "10/10",
//     duracao: "1h55m"
// }

// let filme4 = {
//     titulo: "Pecadores",
//     foto: "filme4.jpg",
//     avaliacao: "08/10",
//     duracao: "1h30m"
// }

// let filme5 = {
//     titulo: "Como Treinar o Seu Dragão",
//     foto: "filme5.jpg",
//     avaliacao: "09/10",
//     duracao: "1h52m"
// }


// function fnMontarCartao(filmeAtual){
//     document.querySelector(".lista-filmes").innerHTML += `
//         <div class="card-filme">
//             <img src="img/${filmeAtual.foto}">
//             <h3>${filmeAtual.titulo}</h3>
//             <span>⭐${filmeAtual.avaliacao}</span>
//         </div>
//         `
// }


//DON - Document Object Model

// document.querySelector("h1").innerText = "OI" faz procurar, e colocar para alterar a visualização #pera Id e . pega Classe
// document.querySelector("h1").innerHTML = "<b>Oi</b>" altera para html e deixa em negrito

// fnMontarCartao(filme1)
// fnMontarCartao(filme2)
// fnMontarCartao(filme3)
// fnMontarCartao(filme4)
// fnMontarCartao(filme5)