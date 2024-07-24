function verificaDoacao() {
    const age = parseInt(document.getElementById('age').value);

    if (age > 0) {
        if (age >= 18 && age <= 67) {
            document.getElementById('result').innerText = 'Você pode doar sangue!';
        } else {
            document.getElementById('result').innerText = 'Você não pode doar sangue.';
        }
    } else {
        document.getElementById('result').innerText = 'Por favor, digite uma idade maior que zero.';
    }
}

function resetForm() {
    document.getElementById('age').value = '';
    document.getElementById('result').innerText = '';
}