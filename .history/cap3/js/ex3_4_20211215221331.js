function mostrarHora() {
    var inHora = document.getElementById("inHora");
    var outResultado = document.getElementById("outResultado");
 
    var hora = Number(inHora.value);

    if (inHora.value == "" || isNaN(hora)) {
        alert("Informe a hora no Brasil corretamente")
        inHora.focus();
        return;
    }

    var horaFranca = hora + 5 ;

    if (horaFranca > 24) {
        horaFranca = horaFranca - 24;
    }

    outResultado.textContent = "Hora na França: " + horaFranca.toFixed(2);

}
var btHora = document.getElementById("btHora");
btHora.addEventListener("click", mostrarHora);