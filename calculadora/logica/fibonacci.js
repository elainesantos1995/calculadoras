
function fibonacci(n) {
    if (n <= 1) {
      return n;
    }
  
    let a = 0;
    let b = 1;
    let temp;
  
    for (let i = 2; i <= n; i++) {
      temp = b;
      b = a + b;
      a = temp;
    }
  
    return b;
  }
  
function calcular(){
    var n = document.getElementById("numero").value;
    document.getElementById("resultado").innerHTML = "O fibonacci de  " + n + " é igual a " + fibonacci(n) + ".";
}

function limparCampos(){
    document.getElementById("numero").value = '';
    document.getElementById("resultado").innerHTML = '';
}
