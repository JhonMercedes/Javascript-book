function calcularNotas () {
    var inSaque = document.getElementById("inSaque");
    var outCem = document.getElementById("outCem");
    var outCinquenta = document.getElementById("outCinquenta");
    var outDez = document.getElementById("outDez");

    // limpar mensagens (caso, segunda execução)
    outCem.textContent = "";
    outCinquenta.textContent = "";
    outDez.textContent = "";

    var saque = Number(inSaque.value);

    if ( saque == 0 || isNaN(saque) ) {
        alert("Informe o valor do saque corretamente");
        inSaque.focus();
        return;
    }

    // verifica se o saque não é multiplo de 100
    if (saque % 10 !=0 ) {
        alert("Valor inválido para notas disponiveis (R$ 10, 50, 100)");
        inSaque.focus();
        return;
    }
    //calcula notas de 100, 50 e 10
    var notasCem = Math.floor(saque/100);
    var resto = saque % 100;
    var notasCinquenta = Math.floor(notasCinquenta);
    resto = resto % 50;
    var notasDez = Math.floor(resto/100);

    //exibe as notas apenas se houver
    if (notasCem > 0) {
        outCem.textContent = "Notas de R$ 100: " + notasCem;
    }
    if (notasCinquenta > 0) {
        outCinquenta.textContent = "Notas de R$50: " + notasCinquenta;
    }
    if (notasDez > 0 ) {
        outDez.textContent = "Notas de R$ 10: " + notasDez;
    }
    
}

var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularNotas);