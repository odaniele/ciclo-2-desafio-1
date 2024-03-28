const prompt = require('prompt-sync')();

function contaMesa (){
    valorConta = parseFloat(prompt("Informe o valor da conta: "));
    numeroPessoas = parseInt(prompt("Informe o número de pessoas na mesa: "));
    pagamentoCliente = valorConta / numeroPessoas;
    desconto = (pagamentoCliente / 100) * 10;

while(true){
    metodoPagamento = parseInt(prompt("Método de pagamento. Digite 1 para PIX/Dinheiro ou 2 para Crédito: "));
    if(metodoPagamento === 1) {
        pagamento = (pagamentoCliente) - (desconto); 
        console.log("O total da sua parte é: R$", pagamento.toFixed(2));
    }else{ 
        pagamento = valorConta / numeroPessoas;
        console.log("O total da sua parte é: R$", pagamento.toFixed(2));
        break;
    }
}

}

contaMesa ()