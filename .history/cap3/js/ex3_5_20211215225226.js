function calcularRaiz () {
    var inNum = document.getElementById("inNum");
    var outResultado = document.getElementById("outResultado");

    var num = Number(inNum.value);

    if (num == 0 || isNaN(num)) {
        alert("Informe um número válido");
        inNum.focus();
        return;
    }

    var raiz = Math.sqrt(num);

    // se o valor da variavel raiz igual a este valor arredondado para baixo
    if ( raiz == Math.floor(raiz) ) {
        outResultado.textContent = "Raiz " + raiz ;
    }else {
        outResultado.textContent = "Não há raiz extata para " + num;
    }

}