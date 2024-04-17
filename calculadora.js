

/*function calcularPagamento() {
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
*/

function calcularPagamento() {   
    
    let valorConta = parseFloat(document.getElementById("valor").value);
    let numeroPessoas = parseInt(document.getElementById("pessoas").value);
    let metodo = parseInt(document.getElementById("metodo").value);
    let temGorjeta = document.getElementById("gorjeta").checked 
    let pagamentoCliente = valorConta / numeroPessoas;
    let desconto = (pagamentoCliente/100) * 10;
    
    let calculoGorjeta = pagamentoCliente/100 * 10;
    
        if(metodo === 1 && temGorjeta){    
                let pagamento = (pagamentoCliente - desconto);   
                let pagamentoDesconto = (pagamento + calculoGorjeta); 
                alert("Adicionado desconto de 10% no valor de: R$" + desconto.toFixed(2));
                alert("O total deste cliente é: R$" + pagamentoDesconto.toFixed(2));
            
            }else if(metodo === 1 && !temGorjeta){
                let pagamentoSemGorjeta = (pagamentoCliente - desconto);
                alert("Adicionado desconto de 10% no valor de: R$" + desconto.toFixed(2));
                alert("O total deste cliente é: R$" + pagamentoSemGorjeta.toFixed(2));
    
            }else if(metodo === 2 && temGorjeta){ 
                let pagamentoSemDesconto = (pagamentoCliente + calculoGorjeta);
                alert("O total deste cliente é: R$" + pagamentoSemDesconto.toFixed(2));
            
            }else{
            alert("O total deste cliente é: R$" + pagamentoCliente.toFixed(2));
            }
        } 
        
        calcularPagamento();



