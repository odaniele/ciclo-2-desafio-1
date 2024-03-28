const prompt = require('prompt-sync')();

function calculaMesa (){
    valorConta = parseFloat(prompt("Informe o valor da conta: "));
    numeroPessoas = parseInt(prompt("Informe o número de pessoas na mesa: "));
    pagamentoCliente = valorConta / numeroPessoas;
    desconto = (pagamentoCliente / 100) * 10;

while(true){
    console.log("Método de pagamento:");
    metodoPagamento = parseInt(prompt("Digite 1 para PIX/Dinheiro ou 2 para Cartão: "));
    if(metodoPagamento === 1) {
        pagamento = (pagamentoCliente) - (desconto); 
        console.log("Adicionado 10% de desconto!!");
        console.log("O total deste cliente é: R$", pagamento.toFixed(2));
    }if(metodoPagamento === 2) { 
        pagamento = valorConta / numeroPessoas;
        console.log("O total deste cliente é: R$", pagamento.toFixed(2));
        break;
    }
}

}

calculaMesa ()
