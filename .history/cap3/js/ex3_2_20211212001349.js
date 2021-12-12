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
    var altura = Number(inAltura.value);

    //verificar se o nome foi preenchido e o sexo foi selecionado
    if (nome == "" || (fem == false && masc == false)) {
        alert("Por favor, informe o nome e selecione o sexo...")
        inNome.focus(); // posiciona (joga o foco) no campo de edição inNome
        return;
}

    /*se altura vazio(0) ou NaN: Not-a-number (um texto for informado
       por exemplo)
    */
    if(altura == 0 || isNaN(altura)){
        alert("Por favor, informe altura corretamente");
        inAltura.focus();
        return;
    }

    // se masculino == true 
    if (masc) {
        var peso = 22 * Math.pow(altura, 2); //Math.pow eleva ao quadrado
    }else {
        var peso = 21 * Math.pow(altura, 2);
    }

    //apresenta a resposta 
    outResultado.textContent = nome + ": seu peso idela é " + peso.toFixed(3) + " kg";
}

var btCalcularPeso = document.getElementById("btCalcularPeso");
btCalcularPeso.addEventListener("click", calcularPeso);

function limparCampos () {
    document.getElementsByName("inNome").value ="";
    document.getElementsByName("rbFem").checked = fase;
    document.getElementsByName("rbMasc").checked = fasle;
    document.getElementsByName("inAltura").value = "";
    document.getElementsByName("outResultado").value = "";
    // foco ao recarregar pagina inNome 
    document.getElementsByName("inNome").focus();

}
var btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click",limparCampos);