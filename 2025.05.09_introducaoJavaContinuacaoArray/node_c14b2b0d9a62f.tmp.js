// Boas práticas
// Case sensitive
// Sintaxe básica e comentário
// Declaração de variáveis(var, let, const)

const nome1 = "Emerson" //palavra reservada

let nome = "Emerson1" // Para declar let ou var.
let idade = 36 

// Console e Debug
console.log(nome)
console.log(idade)

nome = "Eduardo"
idade = "12"

console.log(nome, idade)


//2025.05.08 - Continuação

//Tipod de dados

// text == strig
let cidade = "americana"

// numerico == number
let salario = 1500.35

//boleano == boolean - Verdade ou falso
let fumante = false

console.log(typeof cidade)
console.log(typeof idade)
console.log(typeof salario)
console.log()

// Operadores
//     Operador Atribuição (=)
//     Operadores aritméticos (+, -, /, *)
console.log(10+15)
console.log("10+15")// Se colocar " " ele vira texto que não faz os contas.
let n1 = 10
let n2 = 5
console.log(n1 + n2) // soma
console.log(n1 - n2) // subtração
console.log(n1 / n2) // divisão
console.log(n1 * n2) // mutiplicação
console.log(n1 % 3)  // módulo (resto da divisão)
console.log()

//     Operadores relacionais (>, <, >=, <=, !=, ==)
console.log(n1 == n2)   // igualdade
console.log(n1 != n2)   // diferente
console.log(n1 > n2)    // maior
console.log(10 < 10)    // menor
console.log(10 <= 10)   // menor igual
console.log(150 >= 175) // maior igual
console.log()

//     Operadores lógicos (! "não", && "e", || "ou")
console.log(!10 > 2) // "!" Não - inverte o resultado, se for verdadeiro muda para falso, se for falso muda para verdade "negação"
console.log(!false)
console.log(10 > 2 && 35 < 100 && n1 > n2 && 100 < 90) // "&&" E - Todas as verificações precisam ser verdadeiras para o resultado ser Verdadeiro
console.log(10 < 2 || 100 == 150 || 57 == 57) // "||" OU - apenas uma verificação precisa ser verdadeira para o resultado ser verdadeiro, o resultado só será falso quando TODAS as verificações forem falsas
console.log()

//DESAFIO
let preco = 100
let precoAcrescimo = 0
let precoDesconto = 0
//faça um código que acresente 17% ao preço e imprima
precoAcrescimo = ((preco * 17)/100 + preco)
console.log("Preço com Acrescimo: " + precoAcrescimo)
//faça um código que desconte 7% do preço e imprima
precoDesconto = (preco - ((preco * 7)/100))
console.log("Preço com Desconto: " + precoDesconto)

precoDesconto = preco - preco * 0.07
console.log("Preço com desconto: " + precoDesconto.toFixed(2))


// Estrutura
//     Estrutura de controle/decisão
if(10>100){
    console.log("10 é maior que 5")
}
else{
    console.log("10 é menor que 100")
}

let idadeDoCandidato = 23
if(idadeDoCandidato >= 18){
    console.log("Pode dirigir!")
}
else{
    console.log("Volte mais tarde!")
}

//DESAFIO
//Faça um código que verifique se o salário do funcionário é maior que 5000, se for mostre a mensagem "salário OK" se não mostre a mensagem "Precisa de aumento"
let salarioFunc = 3000
if(salarioFunc > 5000){
    console.log(salarioFunc + " salário OK")
}
else{
    console.log(salarioFunc + " precisa de aumento")
}

// precisa de um aumento de X reais.

let salarioFunc1 = 3000
let salarioFuncAumento = 0
if(salarioFunc1 > 5000){
    console.log(salarioFuncAumento + " salário OK")
}
else{
    salarioFuncAumento = 5000 - salarioFunc
    console.log("Precisa de um aumento de R$ " + salarioFuncAumento.toFixed(2) + " reais")
}


//2025.05.09 Continuação


//     Laços de repetição

// quero mostrar 10 vezes a mensagem "Senac Americana"
let  controle = 1
while(controle <= 10){
    console.log("Senac Americana")
    controle = controle + 1
}

controle = 50
while(controle <= 63){
    console.log(controle)
    controle = controle + 1
}

//Mostrando número Par
controle = 0
while(controle <= 100){
    console.log(controle)
    controle = controle + 2
}

//Mostrando número Ímpar
controle = 1 //definição da variavel de controle
while(controle <= 100){ // condição/
    console.log(controle)
    controle = controle + 2 // incremento
}

// mostrar 10 vezes "Senac Americana"
for(let i=1; i<=10; i=i+1){
    console.log("Senac Americana")
}

for(let i=1; i<=50; i=i+1){
    console.log(i)
}

// Arrays --> vetor
let alunos = ["João", "Paulo", "Renata", "Cris", "X"]
console.log(alunos)
console.log(alunos[2])
alunos[4] = "kleber" //para subistituir um nome do vetor
console.log(alunos)
alunos.push("karem") // para fazer inserção Push empurrar
console.log(alunos)

let frutas = []
console.log(frutas)
frutas.push("🍓") // apertar teclaro do windows mais . (ponto final)
frutas.push("🍉")
frutas.push("🍐")
frutas.push("🍎")
frutas.push("🍍")
frutas.push("🥑")
frutas.push("🍋")
frutas.push("🍊")
frutas.push("🍇")
frutas.push("🍌")
console.log(frutas)

// Funções básicas
// Escopo


// Alterar conteúdo e atributos *
// incluir js em página html *
// Eventos *
// DOM *
// Objeto
// parâmetros e retorno*

// Programação assíncrona***
// API Fetch ***

// JSON ****
// funções modernas (arrow functions) ****


// Spread e REST  ************
 
