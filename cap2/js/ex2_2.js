
function mostrarFilme() {
    var nome = document.getElementById("nome").value;
    document.getElementById("resposta").textContent = nome;
}

function converterDuracao() {
    //cria referencia ao elementos da pagina
    var inTitulo = document.getElementById("inTitulo");
    var inDuracao = document.getElementById("inDuracao");
    var outTitulo = document.getElementById("outTitulo");
    var outResposta = document.getElementById("outResposta");

    // obtem conteudo dos campos de entrada para
    var titulo = inTitulo.value;
    var duracao = Number(inDuracao.value);

    //arredenda para baixo o resultado da divisão
    var horas = Math.floor(duracao / 60);
    // obtém o resto da divisão entre os numeros
    var minutos = duracao % 60;
    // altera o conteudo dos paragrafos de resposta paragrafos
    outTitulo.textContent = titulo;
    outResposta.textContent = horas + " horas e " + minutos + " minutos(s) ";
}
// cria uma referencia ao elemento btConverter (botão)
var btConverter = document.getElementById("btConverter");
//registra um evento associado ao botão para carregar uma função
btConverter.addEventListener("click", converterDuracao);