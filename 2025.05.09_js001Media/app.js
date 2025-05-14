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

    const resultado = document.getElementById('resultado');

    if (media >= 5) {
        resultado.value = "Aprovado";
        resultado.classList.remove('reprovado');
        resultado.classList.add('aprovado');
    } else {
        resultado.value = "Reprovado";
        resultado.classList.remove('aprovado');
        resultado.classList.add('reprovado');
    }
}


function calcularCelcius(){
    //para pegar os valores farenheit
    const farenheit = parseFloat(document.getElementById('farenheit').value) || 0;

    //Calcular o Celcios
    const celcius = ((farenheit - 32)*(5/9));

    //Atualiza o campo
    document.getElementById('celcius').value = celcius.toFixed(2) + '°';

    //para pegar os valores Celcius
    const celcius1 = parseFloat(document.getElementById('celcius1').value) || 0;

    //Calcular o Celcios
    const farenheit1 = (celcius1 * (9/5))+32;

    //Atualiza o campo
    document.getElementById('farenheit1').value = farenheit1.toFixed(2) + '°';

}

