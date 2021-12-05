function calcularPreco() {
    //cria ref ao elementos da pagina 
    var inQuilo = document.getElementById("inquilo");
    var inConsumo = document.getElementById("inConsumo");
    var outVarlos = document.getElementById("outVarlor");


//obtem conteudo dos campos de entrada
var quilo = Number(inQuilo.value);
var consumo = Number(inConsumo.value);

// calcula o valor a ser pagos
var valor = (quilo / 1000) * consumo;
//altera o conteudo da linha de resposta
outValor.textContent = "Valor a pagar R$ " + valor.toFixed(2);

}

//criar referencia ao elemento btCalcular
var btCalcular = document.getElementById("btCalcular");
//registra um evento associado ao botão para carregar uam função
btCalcular.addEventListener("click", calcularPreco);
