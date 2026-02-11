let age = 20;
age = 21; // allowed

const name = "Suji";
// name = "Alex"; ❌ not allowed

//const cannot be reassigned, but if it's an object or array, we can modify its contents
const person = { name: "Suji", age: 20 };
person.age = 21; // allowed