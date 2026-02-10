//A function that:takes another function OR returns a function
function calculate(a, b, operation) {
  return operation(a, b);
}

function multiply(x, y) {
  return x * y;
}

console.log(calculate(3, 4, multiply));