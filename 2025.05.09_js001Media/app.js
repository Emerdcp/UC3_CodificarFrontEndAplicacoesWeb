let n1 = 7, n2 = 5.5, n3 = 2, n4 = 4
let media = (n1 + n2 + n3 + n4) / 4
console.log("A média é: " + media.toFixed(2))


function calcularMedia(){
    //para pegar os valores
    const nota1 = parseFloat(document.getElementById('nota1').value) || 0;
    const nota2 = parseFloat(document.getElementById('nota2').value) || 0;
    const nota3 = parseFloat(document.getElementById('nota3').value) || 0;
    const nota4 = parseFloat(document.getElementById('nota4').value) || 0;

    // Calculado a média
    const media = (nota1 + nota2 + nota3 + nota4) / 4;

    //Atualiza o campo da média
    document.getElementById('media').value = media.toFixed(2);
}



