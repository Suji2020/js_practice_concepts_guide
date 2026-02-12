let randomNumber = Math.floor(Math.random() * 100) + 1;
let attemptCount = 0;

const input = document.getElementById("guessInput");
const checkBtn = document.getElementById("checkBtn");
const resetBtn = document.getElementById("resetBtn");
const message = document.getElementById("message");
const attempts = document.getElementById("attempts");

checkBtn.addEventListener("click", function () {
  const userGuess = Number(input.value);
  attemptCount++;

  if (!userGuess) {
    message.textContent = "⚠️ Please enter a number!";
    return;
  }

  if (userGuess === randomNumber) {
    message.textContent = "🎉 Correct! You guessed it!";
  } else if (userGuess > randomNumber) {
    message.textContent = "📈 Too high!";
  } else {
    message.textContent = "📉 Too low!";
  }

  attempts.textContent = "Attempts: " + attemptCount;
});

resetBtn.addEventListener("click", function () {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attemptCount = 0;
  input.value = "";
  message.textContent = "";
  attempts.textContent = "";
});