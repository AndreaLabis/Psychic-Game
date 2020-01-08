
// declare variables 
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = [];
var userGuess = "";
var computerChoices = "";

// start of functions 

function computerGuess() {
  return computerChoices = letters[Math.floor(Math.random() *letters.length)];
}

function resetAll() {
    guessesLeft=10;
    guessesSoFar=[];
    computerGuess();
}

computerGuess();

document.onkeyup = function (event) {
    
    var userGuess = event.key.toLowerCase();
      console.log("Guesses So Far: " + userGuess);
  
    if(userGuess === computerChoices) {
      wins++;
      }
      else{
      guessesLeft--;
      }

      if(guessesLeft === 0){
      losses++;
      guessesSoFar.push(userGuess);
        console.log(guessesSoFar);
      resetAll();
      }


      document.getElementById("wins-text").innerHTML = "Wins: " + wins;
      document.getElementById("losses-text").innerHTML = "Losses: " + losses;
      document.getElementById("guessesLeft-text").innerHTML = "Guesses Left: " + guessesLeft;
      document.getElementById("guessesSoFar-text").innerHTML = "Your Guesses So Far: " + guessesSoFar;
  };

