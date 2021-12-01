 var precoProduto = Number(prompt("Informe o valor do produto: "));

    desconto = precoProduto * 10/100;
    precoFinal = precoProduto - desconto;
    parcela = precoProduto / 3

    alert("Preço Produto R$: " + precoProduto.toFixed(2) + "\nA vista R$ "
         + precoFinal.toFixed(2) + "\nOu em 3x R$ " + parcela.toFixed(2));