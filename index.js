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

function mostrarLetra(texto) {
  var display = document.getElementById('letter-display');
  var clickSound = document.getElementById('click-sound');

  if (display) {
      display.innerText = texto;
  } else {
      console.error('Elemento "letter-display" não encontrado.');
  }

  if (clickSound) {
      clickSound.play();
  } else {
      console.error('Elemento "click-sound" não encontrado.');
  }
}

console.log('JavaScript carregado corretamente.');
function iniciarJogo() {
  var questions = [
      { letter: 'A', word: '𝓪𝓫𝓪𝓬𝓪𝔁𝓲' },
      { letter: 'B', word: '𝓑𝓸𝓵𝓪' },
      // Adicione mais perguntas aqui
  ];

  var currentQuestion = questions[Math.floor(Math.random() * questions.length)];
  document.getElementById('question').innerText = `Qual a palavra para a letra ${currentQuestion.letter}?`;
  
  var optionsHtml = questions.map(q => `<button onclick="verificarResposta('${q.word}', '${currentQuestion.word}')">${q.word}</button>`).join('');
  document.getElementById('options').innerHTML = optionsHtml;
}

function verificarResposta(selectedWord, correctWord) {
  if (selectedWord === correctWord) {
      alert('Correto!');
  } else {
      alert('Tente novamente!');
  }
}
