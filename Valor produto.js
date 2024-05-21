function calcularValorProduto(precoEtiqueta, condicaoPagamento) {
    let valorFinal;

    switch(condicaoPagamento) {
        case 'debito':
            valorFinal = precoEtiqueta * 0.90; // 10% de desconto
            break;
        case 'dinheiro':
        case 'pix':
            valorFinal = precoEtiqueta * 0.85; // 15% de desconto
            break;
        case '2x':
            valorFinal = precoEtiqueta; // sem juros
            break;
        case '3x ou mais':
            valorFinal = precoEtiqueta * 1.10; // 10% de juros
            break;
        default:
            console.log("Condição de pagamento inválida.");
            return null;
    }

    console.log(`O valor a ser pago é: R$ ${valorFinal.toFixed(2)}`);
    return valorFinal;
}


const precoEtiqueta = 100.00; 
const condicaoPagamento = 'dinheiro'; 

calcularValorProduto(precoEtiqueta, condicaoPagamento);
