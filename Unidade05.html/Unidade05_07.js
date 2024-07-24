function mostrarHobbiesSelecionados() {
    var checkboxes = document.getElementsByName('hobby');
    var hobbiesSelecionados = [];
  
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        hobbiesSelecionados.push(checkboxes[i].value);
      }
    }
  
    document.getElementById('resultado').innerHTML = "Hobbies Selecionados: " + hobbiesSelecionados.join(', ');
  }
  
  // Função para limpar as opções de checkbox
  function limparOpcoes() {
    var checkboxes = document.getElementsByName('hobby');
  
    for (var i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = false;
    }
  
    document.getElementById('resultado').innerHTML = "";
  }
  