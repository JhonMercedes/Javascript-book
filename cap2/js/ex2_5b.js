function calcularPreco() {
    var inPreco = document.getElementById("inPreco");
    var inTempo = document.getElementById("inTempo");
    var outTotal = document.getElementById("outTotal");

    var preco = Number(inPreco.value);
    var tempo = Number(inTempo.value);

    total = preco * tempo;


    outTotal.textContent = "Valor " + total;

}
var btCalcular = document.getElementById("btCalcular");
    btCalcular.addEventListener("click", calcularPreco);