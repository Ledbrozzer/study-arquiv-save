
const alunos = [];

function cadastrarAluno() {
    const codigoAluno = document.getElementById("codigoAluno").value;
    const nomeAluno = document.getElementById("nomeAluno").value;
    const EmailAluno = document.getElementById("EmailAluno").value;
    const foneAluno = document.getElementById("foneAluno").value;

    if (codigoAluno.trim() === '') {
        document.getElementById("errorMsg").innerHTML = `<span class="error-message">Código do aluno não pode ser branco!</span>`;
        document.getElementById("successMsg").textContent = "";
        return;
    }

    for (let aluno of alunos) {
        if (aluno.codigoAluno === codigoAluno) {
            document.getElementById("errorMsg").innerHTML = `O código de aluno <span class="codigo-highlight">${codigoAluno}</span> já existe!`;
            document.getElementById("successMsg").textContent = "";
            return;
        }
    }

    const novoAluno = { codigoAluno, nomeAluno, EmailAluno, foneAluno };
    alunos.push(novoAluno);

    document.getElementById("errorMsg").textContent = "";
    document.getElementById("successMsg").innerHTML = `Código do aluno <span class="codigo-highlight">${codigoAluno}</span>, inserido com sucesso.`;
}

function resetForm() {
    document.getElementById("codigoAluno").value = '';
    document.getElementById("nomeAluno").value = '';
    document.getElementById("EmailAluno").value = '';
    document.getElementById("foneAluno").value = '';
    document.getElementById("errorMsg").textContent = '';
    document.getElementById("successMsg").textContent = '';
}
