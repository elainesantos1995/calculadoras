var base;
var altura;

function mostrarEsconderDiv() {
    var seletor = document.getElementById("figura");
    var div = document.getElementById("campo2");

    if (seletor.value == "quadrado" || seletor.value == "retangulo" || seletor.value == "triangulo") {
      div.style.display = "block";
    } else {
      div.style.display = "none"; 
    }
}

function calcular(){
    var seletor = document.getElementById("figura").value;
    base = document.getElementById("base").value;    
    var resultado;

    if (seletor === 'quadrado'){console.log('aqui 1');
        resultado = calcularAreaQuadrado(base);

    } else if (seletor === 'retangulo'){console.log('aqui 2');
        altura = document.getElementById("altura").value;
        resultado = calcularAreaRetangulo(base, altura);

    }else if (seletor === 'triangulo'){console.log('aqui 3');
        altura = document.getElementById("altura").value;
        resultado = calcularAreaTriangulo(base, altura);

    }else if (seletor === 'circulo'){console.log('aqui 4');
        resultado = calcularAreaCirculo(base);

    }else if (seletor === 'lozango'){console.log('aqui 5');
        altura = document.getElementById("altura").value;
        resultado = calcularAreaLozango(base, altura);

    }else {
        resultado = 'nulo';
    }

    document.getElementById("resultado").innerHTML = "A área da figura selecionada " + resultado;
}

function calcularAreaQuadrado(numero){
    return parseFloat(numero) ** 2;
}

function calcularAreaRetangulo(base, altura){
    return parseFloat(base) * parseFloat(altura);
}

function calcularAreaCirculo(raio){
    var raioNumber = parseFloat(raio);
    return Math.pow(raioNumber, 2) * (Math.PI) ;
}

function calcularAreaTriangulo(base, altura){
    
    var baseNumber = parseFloat(base);
    var alturaNumber = parseFloat(altura);
    var resultado = (baseNumber * alturaNumber) / 2;    
    return resultado;
}

function calcularAreaLozango(diagonalMaior, diagonalMenor){
    return (diagonalMaior * diagonalMenor) / 2;
}

function limparCampos(){
    document.getElementById("base").value = '';
    document.getElementById("altura").value = '';
}