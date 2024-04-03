function calcularPagamento() {
    // Recupera os valores dos campos do formulário
    let valorConta = parseFloat(document.getElementById("valor").value);
    let numeroPessoas = parseInt(document.getElementById("pessoas").value);
    let metodo = parseInt(document.getElementById("metodo").value);
    let gorjeta = document.getElementById("gorjeta").checked ? valorConta * 0.1 : 0;
    let pagamentoCliente = valorConta / numeroPessoas;

    if (gorjeta > 0) {
        pagamentoCliente += gorjeta;
    }

    while(true){
        console.log("Método de pagamento:");
        if(metodo === 1) {
            let desconto = (pagamentoCliente / 100) * 10;
            let pagamento = pagamentoCliente - desconto;
            alert("Adicionado 10% de desconto!!\nO total deste cliente é: R$" + pagamento.toFixed(2));
            break;
        } else if(metodo === 2) { 
            alert("O total deste cliente é: R$" + pagamentoCliente.toFixed(2));
            break;
        }
    }
}

calcularPagamento();