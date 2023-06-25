function fahrenheitToCelcius(num) {
    return (num - 32) / 1.8 ;
}

function calcular(){
    var numero = document.getElementById("numero").value;
    console.log('número: ' + numero);
    document.getElementById("resultado").innerHTML = numero + "°F em °C é igual a " + fahrenheitToCelcius(numero) + ".";
}

function limparCampos(){
    document.getElementById("numero").value = '';
    document.getElementById("resultado").innerHTML = '';
}