 
  // Função para mostrar o alfabeto
  function mostrarAlfabeto() {
    let output = '';
    for (let letra in alfabeto) {
      output += letra + ' é de ' + alfabeto[letra] + '<br>';
    }
    document.getElementById('alfabeto').innerHTML = output;
  }
  
  // Verificando se o documento HTML foi completamente carregado antes de chamar a função
  document.addEventListener('DOMContentLoaded', function () {
    mostrarAlfabeto();
  });
  function mostrarLetra(letra) {
    document.getElementById('letter-display').textContent = letra;
}


  

 