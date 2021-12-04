function mostrarPromocao() {
    //cria referencia aos elementos manipulados pelo programa
    var inVeiculo = document.getElementById("inVeiculo");
    var inPreco = document.getElementById("inPreco");
    var outVeiculo = document.getElementById("outVeiculo");
    var outEntrada = document.getElementById("outEntrada");
    var outParcela = document.getElementById("outParcela");

    //obtem conteudo dos campos de entrada
    var veiculo = inVeiculo.value;
    var preco = Number(inPreco.value);

    //calcular valor da entrada e parecelas
    var entrada = preco * 0.50;
    var parecela = (preco * 0.50) / 12;

    //altera o conteudo do paragrafos de resposta 
    outVeiculo.textContent = "Pomoção: " + veiculo;
    outEntrada.textContent = "Entrada de R$ " + entrada.toFixed(2);
    outParcela.textContent = "12x de R$ " + parecela.toFixed(2);

}   

//cria uma referencia ao elemento btVerPromocao (botao)
var btVerPromocao = document.getElementById("btVerPromocao");
//registra um evento associado ao botão, para carregar uma função
btVerPromocao.addEventListener("click", mostrarPromocao);