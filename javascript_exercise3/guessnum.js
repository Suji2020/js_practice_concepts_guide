const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Generate random number
const gameNumber = Math.floor(Math.random() * 100) + 1;

function askQuestion() {
  rl.question("Guess the number between 1 and 100: ", function(userGuess) {
    
    userGuess = Number(userGuess);

    if (userGuess === gameNumber) {
      console.log("🎉 Correct! The number was " + gameNumber);
      rl.close();
    } 
    else if (userGuess > gameNumber) {
      console.log("Too high! Try again.");
      askQuestion();
    } 
    else {
      console.log("Too low! Try again.");
      askQuestion();
    }

  });
}

askQuestion();