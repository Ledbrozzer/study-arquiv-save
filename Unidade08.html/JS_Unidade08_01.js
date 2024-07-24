function comparaNumeros() {
    const N1 = parseFloat(document.getElementById('N1').value);
    const N2 = parseFloat(document.getElementById('N2').value);

    if (N1 === N2) {
        document.getElementById('result').innerText = 'N1 é igual a N2';
    } else if (N1 > N2) {
        document.getElementById('result').innerText = 'N1 é maior que N2';
    } else {
        document.getElementById('result').innerText = 'N2 é maior que N1';
    }
}

function resetForm() {
    document.getElementById('N1').value = '';
    document.getElementById('N2').value = '';
    document.getElementById('result').innerText = '';
}