const add = (a, b) => a + b;

console.log(add(2, 3));

const obj = {
  name: "Suji",
  sayHi: () => {
    console.log(this.name);
  }
};

obj.sayHi();
//Why?
//Arrow functions take this from outside scope, not the object.