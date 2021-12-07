function mostraMedicamento() {
    var medicamento = document.getElementById("inMedicamento");
    document.getElementById("outMedicamento").textContent = medicamento;

}
function calcularPreco() {
    
    var inPreco = document.getElementById("inPreco");
    var outValor = document.getElementById("outValor");

    var preco = Number(inPreco.value);
    var medicamento = inMedicamento.value;

    var valor = (preco*2);

    outValor.textContent = "Leve 2 e page R$ " + valor;
   
    var btCalcular = document.getElementById("btCalcular");
    btCalcular.addEventListener("click", calcularPreco);
}
