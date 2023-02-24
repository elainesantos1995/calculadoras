function contadorDeCaracteres(){
    const palavra = document.getElementById("letra").value;

    if(palavra == undefined){
        document.getElementById("resultado").innerHTML = "Dado inválido! ";
    } else{
        document.getElementById("resultado").innerHTML = "A palavra informada tem " + palavra.length + " caracteres. ";
    }
}

function limparCampos(){
    document.getElementById("letra").value = '';
    document.getElementById("resultado").innerHTML = '';
}