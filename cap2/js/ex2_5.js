
function calcularPromocao() {

    var inMedicamento = document.getElementById("inMedicamento");
    var inPreco = document.getElementById("inPreco");
    var outMedicamento = document.getElementById("outMedicamento");
    var outValor = document.getElementById("outValor");

    var medicamento = inMedicamento.value;
    var preco = Number(inPreco.value);
    

    //var valor = preco * 2; 
    valor = Math.floor(preco)*2;

    outMedicamento.textContent = medicamento;
    outValor.textContent = "Leve 2 e page R$ " + valor;
   
}

var btCalcular = document.getElementById("btCalcular");
    btCalcular.addEventListener("click", calcularPromocao);