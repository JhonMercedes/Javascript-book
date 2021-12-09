function calcularMedia () {
    var inAluno = document.getElementById("inAluno");
    var inNota1 = document.getElementById("inNota1");
    var inNota2 = document.getElementById("inNota2");
    var outMedia = document.getElementById("outMedia");
    var outSituacao = document.getElementById("outSituacao");

    var nome = inAluno.value;
    var nota1 = inNota1.value;
    var nota2 = inNota2.value;

    var media = (nota1 + nota2) / 2;

    outMedia.textContent = "Média das notas: " + media.toFixed(1);

    //condição

    if (media >=7 ){
        outSituacao.textContent = "Parabéns "+nome+ "! Voce foi aprovado(a)";

    }else {
        
    }

}