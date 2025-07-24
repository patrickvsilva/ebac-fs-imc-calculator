
function calcularIMC() {
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    peso = parseFloat(peso);
    altura = parseFloat(altura);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Por favor, insira valores válidos para peso e altura.");
        return;
    }

    const imc = peso / (altura * altura);
    let classificacao;

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 24.9) {
        classificacao = "Peso normal";
    } else if (imc < 29.9) {
        classificacao = "Sobrepeso";
    } else {
        classificacao = "Obesidade";
    }

    document.getElementById("resultado-imc").innerText = `Seu IMC é ${imc.toFixed(2)}`;
    document.getElementById("classificacao-imc").innerText = `Classificado como ${classificacao}`;
}