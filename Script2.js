// JavaScript source code
// Fun��o para somar usando 'var'
function calcularComVar() {
    // Declara��o das vari�veis com 'var'
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var soma = num1 + num2;

    // Verifica��o e exibi��o do resultado
    if (isNaN(soma)) {
        document.getElementById("resultado").innerHTML = "Por favor, insira n�meros v�lidos.";
    } else {
        document.getElementById("resultado").innerHTML = "Resultado com var: " + soma;
    }
}

// Fun��o para somar usando 'let'
function calcularComLet() {
    // Declara��o das vari�veis com 'let'
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let soma = num1 + num2;

    // Verifica��o e exibi��o do resultado
    if (isNaN(soma)) {
        document.getElementById("resultado").innerHTML = "Por favor, insira n�meros v�lidos.";
    } else {
        document.getElementById("resultado").innerHTML = "Resultado com let: " + soma;
    }
}

// Fun��o para somar usando 'const'
function calcularComConst() {
    // Declara��o das vari�veis com 'const'
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const soma = num1 + num2;

    // Verifica��o e exibi��o do resultado
    if (isNaN(soma)) {
        document.getElementById("resultado").innerHTML = "Por favor, insira n�meros v�lidos.";
    } else {
        document.getElementById("resultado").innerHTML = "Resultado com const: " + soma;
    }
}