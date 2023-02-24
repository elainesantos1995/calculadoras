function calcular() {

    const valor1 = document.getElementById("valor1").value;
    const valor2 = document.getElementById("valor2").value;
    const operacao = document.getElementById("operacao").value;
    
    let resultado = '';
   
    if ((valor1 == '' || valor2 == '' || operacao == '') || (valor1 == undefined || valor2 == undefined || operacao == undefined)){
        document.getElementById("resultado").innerHTML = "Um ou mais campos não foram preenchidos.";
    } else{
        if (operacao ==   '+')
            resultado = parseInt(valor1) + parseInt(valor2);
        else if (operacao ==   '-') 
            resultado = parseInt(valor1) - parseInt(valor2);
        else if (operacao ==   '*') 
            resultado = parseInt(valor1) * parseInt(valor2);
        else if (operacao ==   '**') 
            resultado = parseInt(valor1) ** parseInt(valor2);
        else
            resultado = parseInt(valor1) / parseInt(valor2);

        document.getElementById("resultado").innerHTML = "O resultado da operação " + valor1 + operacao + valor2 + " é igual a " + resultado + ".";
    }
}

function limparCampos(){
    document.getElementById("valor1").value = '';
    document.getElementById("valor2").value = '';
    document.getElementById("operacao").value = '';
    document.getElementById("resultado").innerHTML = '';
}