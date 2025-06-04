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