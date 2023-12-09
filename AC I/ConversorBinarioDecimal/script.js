// Função para converter número binário para decimal
function binarioParaDecimal() {
    var binarioInput = document.getElementById("binarioInput").value;
    var resultadoDecimal = document.getElementById("resultadoDecimal");

    // Divide a parte inteira e fracionária
    var partes = binarioInput.split(".");

    // Converte a parte inteira para decimal
    var parteInteira = parseInt(partes[0], 2);

    // Converte a parte fracionária para decimal
    var parteFracionaria = 0;
    if (partes.length === 2) {
        for (var i = 0; i < partes[1].length; i++) {
            parteFracionaria += parseInt(partes[1][i]) / Math.pow(2, i + 1);
        }
    }

    // Combina parte inteira e fracionária
    var decimal = parteInteira + parteFracionaria;

    // Exibe o resultado
    resultadoDecimal.innerText = "Em Decimal: " + decimal;
}
// Função para converter número decimal para binário
function decimalParaBinario() {
    var decimalInput = document.getElementById("decimalInput").value;
    var resultadoBinario = document.getElementById("resultadoBinario");

    // Converte o número decimal para binário inteiro
    var binarioInteiro = (parseInt(decimalInput) >>> 0).toString(2);

    // Converte a parte fracionária para binário
    var parteFracionaria = parseFloat(decimalInput) - parseInt(decimalInput);
    var binarioFracionario = "";

    while (parteFracionaria !== 0) {
        parteFracionaria *= 2;
        binarioFracionario += Math.floor(parteFracionaria);
        parteFracionaria = parteFracionaria - Math.floor(parteFracionaria);
    }

    // Exibe o resultado
    resultadoBinario.innerText = "Em Binário: " + binarioInteiro + "." + binarioFracionario;
}