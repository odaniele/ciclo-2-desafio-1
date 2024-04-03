
function calcularPagamento() {
    // Recupera os valores dos campos do formulário
    const valorConta = parseFloat(document.getElementById("valor").value);
    const numeroPessoas = parseInt(document.getElementById("pessoas").value);
    const metodo = parseInt(document.getElementById("metodo").value);
    const gorjeta = document.getElementById("gorjeta").checked ? valorConta * 0.1 : 0;

    // Executa a lógica JavaScript original com base nos valores do formulário
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



