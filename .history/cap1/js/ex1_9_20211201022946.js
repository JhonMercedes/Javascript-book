
    /*
    ler um valor 
    calcular a taxa de 10% do garçom 
    mostrar valor final
    */
    var valorJantar = Number(prompt("Insira o valor da comanda: "));

    taxa = valorJantar * 10 / 100;

    total = valorJantar + taxa;

    alert("Taxa de serviço: "+ taxa.toFixed(2) + "\nTotal: "+ total.toFixed(2));

