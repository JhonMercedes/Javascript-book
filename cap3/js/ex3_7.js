function JogoParImpar () {
    var inNumero = document.getElementById("inNumero");
    var outResultado = document.getElementById("outResultado");

    var valor = Number(inNumero.value);

    if ( valor % 2 == 0) {
        alert("Seu número é par ");
    }else
    alert("Seu núero é impar ");

    outResultado.textContent = "Resposta é " + valor;

}

var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", JogoParImpar);