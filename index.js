// Objeto contendo as letras e exemplos
const alfabeto = {
    'A': 'Abacaxi',

    'B': 'Bola',

    'C': 'Cachorro',

    'D': 'Dado',

    'E': 'Elefante',

    'F': 'Foca',

    'G': 'Girafa',

    'H': 'Hipopótamo',

    'I': 'Índio',

    'J': 'Janela',

  
    'K': 'Kiwi',

    'L': 'Leão',

    'M': 'Macaco',

    'N': 'Navio',

    'O': 'Ovelha',

    'P': 'Pato',

    'Q': 'Queijo',

    'R': 'Rato',

    'S': 'Sol',

    'T': 'Tigre',

    'U': 'Urso',

    'V': 'Vaca',

    'W': 'Whisky',

    'X': 'Xícara',

    'Y': 'Yoga',
    
    'Z': 'Zebra'
  };
  
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

  

 