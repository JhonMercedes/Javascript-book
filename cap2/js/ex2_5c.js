function calcularPromocao() {
    var inProduto = document.getElementById("inProduto");
    var inPreco = document.getElementById("inPreco");
    var outPromocao = document.getElementById("outPromocao");
    var outDesconto = document.getElementById("outDesconto");
    
    var produto = inProduto.value;
    var preco = Number(inPreco.value);

    total = preco * 2;
    desc = preco * (50/100);
    totdesconto = total + desc

    
    outPromocao.textContent = " Promoção Leve 3 por R$ " + totdesconto;
    outDesconto.textContent = " O 3 produto custa apenas R$ " + desc;
}

var btCalcular = document.getElementById("btCalcular");
    btCalcular.addEventListener("click", calcularPromocao);