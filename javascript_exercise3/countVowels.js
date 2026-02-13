const readline = require("readline");

// create interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// function to count vowels
function countVowels(str) {
  let count = 0;
  const vowels = "aeiouAEIOU";

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }

  return count;
}

// ask user for input
rl.question("Enter the String: ", function (input) {
  const result = countVowels(input);
  console.log("Number of vowels:", result);
  rl.close();
});