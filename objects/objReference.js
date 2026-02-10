let obj1 = { name: "Suji" };
let obj2 = { name: "Suji" };

obj2.name = "Alex";

console.log(obj1.name); // ?

let ob1 = { name: "Suji" };
let ob2 = ob1;
ob2.name = "Alex";
console.log(ob1.name);