//fect -> ele "promete" que ira trazer as informações
//await -> ele pede para esperar dentro da função para rodar outras

async function fnPegarFilmes(){
    let filmes = await fetch("dadosFilmes.json")
    console.dir(filmes)
    let filmesTratados = await filmes.json()
    console.dir(filmesTratados)
}

fnPegarFilmes()
console.log("oi")