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
      { letter: 'C', word: '𝓒𝓪𝓬𝓱𝓸𝓻𝓻𝓸' },
      { letter: 'D', word: '𝓓𝓪𝓭𝓸 '},
      { letter: 'E', word: '𝓔𝓼𝓬𝓸𝓵𝓪' },
      { letter: 'F', word: '𝓕𝓲𝓰𝓾𝓻𝓲𝓷𝓱𝓪' },
      { letter: 'G', word: '𝓖𝓸𝓵' },
      { letter: 'H', word: '𝓗𝓲𝓼𝓽ó𝓻𝓲𝓪' },
      { letter: 'I', word: '𝓘𝓰𝓻𝓮𝓳𝓪' },
      { letter: 'J', word: '𝓙𝓸𝓰𝓸' },
      { letter: 'K', word: '𝓚𝓲𝔀𝓲' },
      { letter: 'L', word: '𝓛𝓲𝓿𝓻𝓸' },
      { letter: 'M', word: '𝓜𝓪𝓬𝓪𝓬𝓸' },
      { letter: 'N', word: '𝓝ú𝓶𝓮𝓻𝓸' },
      { letter: 'O', word: '𝓸𝓵𝓱𝓸' },
      { letter: 'P', word: '𝓟𝓪𝓻𝓺𝓾𝓮' },
      { letter: 'Q', word: '𝓠𝓾𝓮𝓲𝓳𝓸' },
      { letter: 'R', word: '𝓡𝓪𝓽𝓸' },
      { letter: 'S', word: '𝓢𝓪𝓽𝓸' },
      { letter: 'T', word: '𝓣𝓻𝓪𝓫𝓪𝓵𝓱𝓸' },
      { letter: 'U', word: '𝓤𝓿𝓪' },
      { letter: 'V', word: '𝓥𝓲𝓭𝓪' },
      { letter: 'W', word: '𝓦𝓱𝓲𝓼𝓴𝔂' },
      { letter: 'X', word: '𝓧í𝓬𝓪𝓻𝓪' },
      { letter: 'Y', word: '𝓨𝓸𝓰𝓪' },
      { letter: 'Z', word: '𝓩𝓮𝓫𝓻𝓪' },


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
