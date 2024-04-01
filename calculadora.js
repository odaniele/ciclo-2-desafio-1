

function calcularPagamento() {
    // Recupera os valores dos campos do formulário
    var valorConta = parseFloat(document.getElementById("valor").value);
    var numeroPessoas = parseInt(document.getElementById("pessoas").value);
    var metodo = parseInt(document.getElementById("metodo").value);

    // Executa a lógica JavaScript original com base nos valores do formulário
    var pagamentoCliente = valorConta / numeroPessoas;
    var desconto = (pagamentoCliente / 100) * 10;

    while(true){
        console.log("Método de pagamento:");
        if(metodo === 1) {
            var pagamento = pagamentoCliente - desconto;
            alert("Adicionado 10% de desconto!!\nO total deste cliente é: R$" + pagamento.toFixed(2));
            break;
        } else if(metodo === 2) { 
            var pagamento = valorConta / numeroPessoas;
            alert("O total deste cliente é: R$" + pagamento.toFixed(2));
            break;
        }    
    }
}




