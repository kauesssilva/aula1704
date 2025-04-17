// JavaScript source code
// Fun��o que realiza o c�lculo da soma

function calcular() {

    // Cria��o da vari�vel 'num1' com o valor do primeiro campo, convertido para n�mero
    var num1 = parseFloat(document.getElementById("num1").value);

    // Cria��o da vari�vel 'num2' com o valor do segundo campo, convertido para n�mero
    var num2 = parseFloat(document.getElementById("num2").value);

    // Cria��o da vari�vel 'soma' para armazenar o resultado da soma de 'num1' e 'num2'
    var soma = num1 + num2;

    // Verifica��o para garantir que os valores s�o n�meros v�lidos
    if (isNaN(soma)) {
        // Exibe mensagem de erro se os valores n�o forem num�ricos
        document.getElementById("resultado").innerHTML = "Por favor, insira n�meros v�lidos.";
    } else {
        // Atualiza o par�grafo com o resultado da soma
        document.getElementById("resultado").innerHTML = "A soma �: " + soma;
    }
}