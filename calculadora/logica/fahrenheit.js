function celciusTofahrenheit(num) {
    return (num * 1.8) + 32 ;
}

function calcular(){
    var numero = document.getElementById("numero").value;
    console.log('número: ' + numero);
    document.getElementById("resultado").innerHTML = numero + "°C em °F é igual a " + celciusTofahrenheit(numero) + ".";
}

function limparCampos(){
    document.getElementById("numero").value = '';
    document.getElementById("resultado").innerHTML = '';
}