/**let number = prompt("Enter a number:");

number = Number(number); // Convert string to number

if (number % 5 === 0) {
    console.log("The number is a multiple of 5");
} else {
    console.log("The number is NOT a multiple of 5");
}
    */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a number: ", function(number) {
  number = Number(number);

  if (number % 5 === 0) {
    console.log("The number is a multiple of 5");
  } else {
    console.log("The number is NOT a multiple of 5");
  }

  rl.close();
});