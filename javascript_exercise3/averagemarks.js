const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numbers = [];

function calculateAverage(arr) {
  let sum = arr.reduce((a, b) => a + b, 0);
  console.log("Average:", sum / arr.length);
}

function askNumber() {
  rl.question("Enter mark: ", function(input) {

    // If user types stop
   /**  if (input.toLowerCase() === "stop") {
      console.log("Final Array:", numbers);
      rl.close();
      return;
    }**/

    numbers.push(Number(input)); // add first

    // Check after pushing
    if (numbers.length === 5) {
      calculateAverage(numbers);
      rl.close();   // stop after 5 inputs
    } else {
      askNumber();  // ask again
    }   

  });
}

askNumber();