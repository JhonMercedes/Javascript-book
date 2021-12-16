function calcularRaiz () {
    var inNum = document.getElementById("inNum");
    var outResultado = document.getElementById("outResultado");

    var num = Number(inNum.value);

    if (num == 0 || isNaN(num)) {
        alert("Informe um número válido");
        inNum.focus();
    }

}