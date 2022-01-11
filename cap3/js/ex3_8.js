function CalcularVelocidade () {

    var inVeloPermitida = get.document.getElementById("inVeloPermitida");
    var inVeloCondutor = get.document.getElementById("inVeloCondutor");
    var btnVerificar = get.document.getElementById("btnVerificar");
    var outSituacao = get.document.getElementById("outSituacao");

    var vPermitida = Number(inVeloPermitida.value);
    var vCondutor = Number(inVeloCondutor.value);

    vAcimaPermitido = (vCondutor - vPermitida);
    semMulta = (vPermitida * 0.2);

    if((inVeloCondutor.value == '' || inVeloPermitida.value == '') || (isNaN(vPermitida) || isNaN(vCondutor))){
        alert("Digite uma velocidade valida !");
        inVeloCondutor.value = '';
        inVeloPermitida.value = '';
        inVeloPermitida.value.focus();

    }

    // se a velocidade for menor que o limite permitido não paga multa 
    if (vCondutor < vPermitida) {
        outSituacao.textContent = 'Velocidade dentro do permitido. Sem multa!';

    }else if ( vAcimaPermitido >= semMulta) {
        //se a velocidade for maior que 20% recebe multa grave
        outSituacao.textContent = 'Voce estava com velocidade de 20% acima do permitido. Multa Grave!';

    }else {
        //se a velocidade execida for menor que 20% recebe, multa leve
        outSituacao.textContent = 'Voce estava com menos de 20% de velocidade acima do permitido. Multa Leve!';
    }
}

btnVerificar.addEventListener('click', CalcularVelocidade);