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


// let todosOsFilmes = [filme1, filme2, filme3, filme4, filme5]

// todosOsFilmes.forEach((filmeAtual, codigo) => {
//     document.querySelector(".lista-filmes").innerHTML += `
//         <div class="card-filme">
//             <img src="img/${filmeAtual.foto}">
//             <h4>Sala: ${codigo + 1}</h4>
//             <h3>${filmeAtual.titulo}</h3>
//             <span>⭐${filmeAtual.avaliacao}</span>
//         </div> 
//         `
// })


async function fnFilmes(){
    let filmes = await fetch("dadosFilmes.json")
    let filmesHome = await filmes.json()

    filmesHome.slice(0,4).forEach((filmeAtual)=> {
        
        document.querySelector(".lista-filmes").innerHTML +=`
        <div class="card-filmes">
            <h3>${filmeAtual.titulo}</h3>
            <img src="${filmeAtual.foto}">
            <span><br>⭐${filmeAtual.avaliacao}</span>
            <p><b>Ano: </b>${filmeAtual.ano}</p>
            <p><b>Genero: </b>${filmeAtual.genero}</p>
        </div>
        `
    });
}

fnFilmes()
