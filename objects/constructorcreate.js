function Person(name, age) {
  this.name = name;
  this.age = age;
}

let p1 = new Person("Suji", 22);
let p2 = new Person("Alex", 25);
console.log(p1.name); // Suji
console.log(p2.name); // Alex