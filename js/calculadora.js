document.addEventListener('DOMContentLoaded', function () {
    const dadosMesaForm = document.getElementById("dadosMesa");
    const botaoCalcular = document.getElementById("iniciarCalculo");
    const modalPagamento = document.getElementById("metodoPagamento");  
    const semDesconto = document.getElementById("semDesconto");
    const comDesconto = document.getElementById("comDesconto");
    const modalResultado = document.getElementById("modalResultado");
    const textoResultado = document.getElementById("resultadoConta");
    const fecharBotoes = document.querySelectorAll("#concluir");

    botaoCalcular.addEventListener('click', function () {
        if (dadosMesaForm.checkValidity()) {
                modalPagamento.style.display = "block";
        }else{
            alert("Por favor, preencha todos os campos corretamente.");
        }
});

    semDesconto.addEventListener("click", function(){
        calcularMesa(false);
        modalPagamento.style.display = "none";
    });

    comDesconto.addEventListener("click", function(){
        calcularMesa(true);
        modalPagamento.style.display = "none"
    })

    fecharBotoes.forEach(function (button) {
        button.addEventListener("click", function () {
        modalPagamento.style.display = 'none';
        modalResultado.style.display = 'none';
    });
});

    window.addEventListener('click', function (event) {
        if (event.target == modalPagamento || event.target == modalResultado) {
            modalPagamento.style.display = 'none';
            modalResultado.style.display = 'none';
        }
});


    function calcularMesa(temDesconto) {
        const valorConta = parseFloat(document.getElementById("valorConta").value);
        const opcaoTaxa = parseFloat(document.getElementById("opcaoTaxa").value);
        const numeroPessoas = parseFloat(document.getElementById("numeroPessoas").value);

        let totalPorPessoa = (valorConta + opcaoTaxa) / numeroPessoas;
        let desconto = 0;

            if (temDesconto){
                desconto = totalPorPessoa * 0.1;
            }

        let verificaDesconto = temDesconto ? `Desconto Aplicado: ${desconto.toFixed(2)} R$` : "Sem Desconto";
            textoResultado.innerHTML = `Total do consumo: ${valorConta.toFixed(2)} R$ <br>
                    Taxa de serviço: ${opcaoTaxa.toFixed(2)} R$ <br>
                    ${verificaDesconto} <br>
                    Total por pessoa: ${(totalPorPessoa - desconto).toFixed(2)} R$ <br>`
                    modalResultado.style.display = "block";
}
});