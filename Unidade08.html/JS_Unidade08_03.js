function verificaMultiploDeSete() {
    const N1 = parseInt(document.getElementById('N1').value);

    if (N1 > 0) {
        if (N1 % 7 === 0) {
            document.getElementById('result').innerText = 'Valor entrado é múltiplo de 7';
        } else {
            document.getElementById('result').innerText = 'Valor entrado não é múltiplo de 7';
        }
    } else {
        document.getElementById('result').innerText = 'Por favor, digite um número maior que zero.';
    }
}

function resetForm() {
    document.getElementById('N1').value = '';
    document.getElementById('result').innerText = '';
}