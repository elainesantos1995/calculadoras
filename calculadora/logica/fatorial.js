
function fatorial(num) {
    if(num == 0 || num == 1) {
      return 1;
    } else {
      return num * fatorial(num - 1);
    }
  }

function calcular(){
    console.log('numero: ' + numero);  
    var numero = document.getElementById("numero").value;
    document.getElementById("resultado").innerHTML = "O fatorial de  " + numero + " é igual a " + fatorial(numero) + ".";
}

function limparCampos(){
    document.getElementById("numero").value = '';
    document.getElementById("resultado").innerHTML = '';
}