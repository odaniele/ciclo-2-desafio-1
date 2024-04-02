
/*function calcularPagamento() {
    // Recupera os valores dos campos do formulário
    valorConta = parseFloat(document.getElementById("valor").value);
    numeroPessoas = parseInt(document.getElementById("pessoas").value);
    metodo = parseInt(document.getElementById("metodo").value);

    // Executa a lógica JavaScript original com base nos valores do formulário
    pagamentoCliente = valorConta / numeroPessoas;
    desconto = (pagamentoCliente / 100) * 10;


function calcularPagamento() {
    
    let valorConta = parseFloat(document.getElementById("valor").value);
    let numeroPessoas = parseInt(document.getElementById("pessoas").value);
    let metodo = parseInt(document.getElementById("metodo").value);

    let pagamentoCliente = valorConta / numeroPessoas;
    let desconto = (pagamentoCliente / 100) * 10;
>>>>>>> 78f8b362c563834279a4da6995cd994078200145

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
*/

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



