//fect -> ele "promete" que ira trazer as informações
//await -> ele pede para esperar dentro da função para rodar outras

async function fnPegarFilmes(){
    let filmes = await fetch("dadosFilmes.json")
    let filmesTratados = await filmes.json()
    filmesTratados.forEach((filmeAtual)=> {
        // console.log(filmeAtual)
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

fnPegarFilmes()
// console.log("oi")

