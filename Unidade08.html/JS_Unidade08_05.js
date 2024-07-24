function verificaAprovacao() {
    const notaP1 = parseFloat(document.getElementById('notaP1').value);
    const notaP2 = parseFloat(document.getElementById('notaP2').value);
    const notaP3 = parseFloat(document.getElementById('notaP3').value);

    const resultElement = document.getElementById('result');

    if (isNaN(notaP1) || isNaN(notaP2) || isNaN(notaP3)) {
        resultElement.innerText = 'Por favor, entre com todas as notas do estudante.';
        resultElement.style.color = 'black';
        resultElement.style.fontWeight = 'normal';
        document.getElementById('media').innerText = '';
        return;
    }

    if (notaP1 < 0 || notaP1 > 10 || notaP2 < 0 || notaP2 > 10 || notaP3 < 0 || notaP3 > 10) {
        resultElement.innerText = 'Notas devem estar entre 0 e 10';
        resultElement.style.color = 'red';
        document.getElementById('media').innerText = '';
        return;
    }

    const media = (notaP1 + notaP2 + notaP3) / 3;

    document.getElementById('media').innerText = 'Média: ' + media.toFixed(2);

    if (media >= 6.0) {
        resultElement.innerText = 'Aprovado';
        resultElement.style.color = 'blue';
        resultElement.style.fontWeight = 'bold';
    } else {
        resultElement.innerText = 'Reprovado';
        resultElement.style.color = 'red';
    }
}

function resetForm() {
    document.getElementById('notaP1').value = '';
    document.getElementById('notaP2').value = '';
    document.getElementById('notaP3').value = '';
    document.getElementById('result').innerText = '';
    document.getElementById('result').style.color = 'black';
    document.getElementById('result').style.fontWeight = 'normal';
    document.getElementById('media').innerText = '';
}