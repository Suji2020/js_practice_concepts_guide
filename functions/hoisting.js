console.log(a); // undefined due to hoisting variable declaration is hoisted but not the assignment 
var a = 10;

console.log(b);
let b = 20;//ReferenceError: Cannot access 'b' before initialization
