

function calcularPagamento() {
    
    let valorConta = parseFloat(document.getElementById("valor").value);
    let numeroPessoas = parseInt(document.getElementById("pessoas").value);
    let metodo = parseInt(document.getElementById("metodo").value);

    let pagamentoCliente = valorConta / numeroPessoas;
    let desconto = (pagamentoCliente / 100) * 10;

    while(true){
        console.log("Método de pagamento:");
        if(metodo === 1) {
            let pagamento = pagamentoCliente - desconto;
            alert("Adicionado 10% de desconto!!\nO total deste cliente é: R$" + pagamento.toFixed(2));
            break;
        } else if(metodo === 2) { 
            let pagamento = valorConta / numeroPessoas;
            alert("O total deste cliente é: R$" + pagamento.toFixed(2));
            break;
        }    
    }
}

calcularPagamento();