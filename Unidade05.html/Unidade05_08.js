function mostrarHobbySelecionado() {
    var radios = document.getElementsByName('hobby');
    var hobbySelecionado = null;
  
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            hobbySelecionado = radios[i].value;
            break;
        }
    }
  
    if (hobbySelecionado) {
        document.getElementById('resultado').innerHTML = "Hobby Selecionado: " + hobbySelecionado;
    } else {
        document.getElementById('resultado').innerHTML = "Nenhum hobby selecionado";
    }
  }
  
  function limparOpcoes() {
    var radios = document.getElementsByName('hobby');
  
    for (var i = 0; i < radios.length; i++) {
        radios[i].checked = false;
    }
  
    document.getElementById('resultado').innerHTML = "";
  }
  