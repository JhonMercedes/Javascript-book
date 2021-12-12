function calcularPeso() {

    // cria ref aso elementos manipulados
    var inNome = document.getElementById("inNome");
    var rbFem = document.getElementById("rbFem");
    var rbMasc = document.getElementById("rbMasc");
    var inAltura = document.getElementById("inAltura");
    var outResultado = document.getElementById("outResultado");

    //obtém o conteudo e joga em uma variavel
    var nome = inNome.value;
    var fem = rbFem.checked;
    var masc = rbMasc.checked;
    var alutra = inAltura.value;

    //verificar se o nome foi preenchido e o sexo foi selecionado
if (nome == "" || (fem == false && masc == false)) {
    alert("Por favor, informe o nome e selecione o sexo...")
    inNome.focus(); // posiciona (joga o foco) no campo de edição inNome
    return;
}

}