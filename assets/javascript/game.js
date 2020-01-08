

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = [];

var computerGuess = computerChoices[Math.floor(Math.random() *computerChoices.length)];
  console.log(computerGuess);

document.onkeydown = function(event) {
  var userGuess = event.key;
    addLetter();
}

function addLetter () {

  var repeatGuess = lettersGuessed.some(function(item){
      return item === usersKeypress;
  })

  
 
   
      if(userGuess === computerGuess){
      wins++;
      }
      else{
      guessesLeft--;
      }

      if(guessesLeft === 0){
      losses++;
      }


document.getElementById("wins").innerHTML = "Wins: " + wins;
document.getElementById("losses").innerHTML = "Losses: " + losses;
document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
document.getElementById("guessesSoFar").innerHTML = "Your Guesses so far: " + guessesSoFar;

};
}
