let animal = {
  eats: true
};

let dog = {
  barks: true
};

dog.__proto__ = animal;

console.log(dog.eats);
console.log(dog.barks);