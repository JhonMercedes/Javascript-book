function calcularPreco() {
    var inPreco = document.getElementById("inPreco");
    var inTempo = document.getElementById("inTempo");
    var outTotal = document.getElementById("outTotal");

    var preco = Number(inPreco.value);
    var tempo = Number(inTempo.value);

    total = Math.ceil(tempo / 15) * preco;


    outTotal.textContent = "Valor " + total.toFixed(2);

}
var btCalcular = document.getElementById("btCalcular");
    btCalcular.addEventListener("click", calcularPreco);