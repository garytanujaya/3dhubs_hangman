window.onload= function(){
  //Alphabet button pool and words pool
  var alphabet = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var wordPool = ['3dhubs', 'marvin', 'print', 'filament', 'order', 'layer'];

  var word ;
  var guess ;
  var guessedWord= [];
  var lives ;
  var count ;
  var list;
  var highscoreName;
  var highscore= 0;
  var remainingLives = document.getElementById('mylives');

  //create button
  function buttons(){
    var letterButtons = document.getElementById('buttons');
    var letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      list = document.createElement('li');
      list.innerHTML = alphabet[i];
      buttonCheck();
      letterButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }

  //Check button clicked
  function buttonCheck(){
    list.onclick = function () {
      var guessedLetter = (this.innerHTML);
      this.setAttribute('class', 'clicked');
      for (var i = 0; i < word.length; i++) {
        if (word[i] === guessedLetter) {
          guessedWord[i].innerHTML = guessedLetter;
          count= count + 1;
        }
      }
      var letterPos = (word.indexOf(guessedLetter));
      if (letterPos === -1) {
        lives= lives - 1;
        gameCheck();
      }
      else {
        gameCheck();
      }
    };
  }

  //game logic win lose condition + highscore
  function gameCheck(){
    remainingLives.innerHTML = 'Remaining Tries: ' + lives;
    if (lives < 1) {
      remainingLives.innerHTML = 'Game Over';
    }

    for (var i = 0; i < guessedWord.length; i++) {
      if (count === guessedWord.length) {
        remainingLives.innerHTML = 'You Win!';

        if(lives > highscore){
          highscore= lives;
          highscoreName= prompt('New Highscore!, Enter your name:', 'John Appleseed');
          var showHighscore = document.getElementById('highscore');
          showHighscore.innerHTML= highscoreName;
        }
      }
    }
  }

  function result(){
    var wordSpace = document.getElementById('word-space');
    var correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'correct-word');
      guess = document.createElement('li');
      guess.innerHTML = '_';

      guessedWord.push(guess);
      wordSpace.appendChild(correct);
      correct.appendChild(guess);
    }
  }

  function start(){
    //console.log(guessedWord);
    lives= 5;
    count= 0;

    remainingLives.innerHTML='Remaining Tries: ' + lives;
    word = wordPool[Math.floor(Math.random() * wordPool.length)];
    console.log(word);
    buttons();
    result();
  }

  document.getElementById('restart').onclick = function(){
    document.getElementById('word-space').innerHTML='';
    document.getElementById('buttons').innerHTML='';
    start();
  };

  start();
};
