const prompt = require("prompt-sync")();

function getGrade(score) {
  if (score < 0 || score > 100) return "Invalid score";

  if (score >= 80) return "A";
  if (score >= 70) return "B";
  if (score >= 60) return "C";
  if (score >= 50) return "D";
  return "F";
}

let input = prompt("Enter student score: ");
let score = Number(input);

console.log("Grade:", getGrade(score));