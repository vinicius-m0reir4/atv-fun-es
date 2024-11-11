function calcularCompra(produto, numParcelas) {
    const valorProduto = produto.valor;

    if (numParcelas === 0) {
        const valorComDesconto = valorProduto * 0.9;
        console.log("Valor final à vista com desconto: R$ " + Math.round(valorComDesconto * 100) / 100);
    } else if (numParcelas >= 1) {
        if (numParcelas <= 10) {
            const valorParcela = valorProduto / numParcelas;
            console.log("Valor de cada parcela (" + numParcelas + "x) sem juros: R$ " + Math.round(valorParcela * 100) / 100);
        } else if (numParcelas <= 12) {
            const valorComJuros = valorProduto * 1.02;
            const valorParcela = valorComJuros / numParcelas;
            console.log("Valor de cada parcela (" + numParcelas + "x) com juros: R$ " + Math.round(valorParcela * 100) / 100);
        } else {
            console.log("Número de parcelas não permitido. O máximo é 12.");
        }
    } else {
        console.log("Número de parcelas não permitido.");
    }
}

const produto = { nome: "Smartphone", valor: 1500 };

calcularCompra(produto, 0);   
calcularCompra(produto, 5);   
calcularCompra(produto, 11);  
calcularCompra(produto, 13);  
