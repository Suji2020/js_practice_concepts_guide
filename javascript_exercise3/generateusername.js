const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your full name: ", function(fullName) {

  let cleanName = fullName.replace(/\s+/g, "");
  let nameLength = fullName.length;

  let username = "@" + cleanName + nameLength;

  console.log("Generated Username:", username);

  rl.close();
});