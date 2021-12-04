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
}