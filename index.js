// Função para exibir a letra selecionada
function mostrarLetra(texto) {
  // Seleciona o elemento onde o texto será exibido
  var display = document.getElementById('letter-display');
  
  // Verifica se o elemento foi encontrado
  if (display) {
      // Define o conteúdo do elemento com o texto passado
      display.innerText = texto;
  } else {
      console.error('Elemento "letter-display" não encontrado.');
  }
}

// Verifica se o JavaScript está carregado
console.log('JavaScript carregado corretamente.');
