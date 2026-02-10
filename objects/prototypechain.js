let grandParent = { house: "Villa" };
let parent = { car: "BMW" };
let child = { bike: "Hero" };

parent.__proto__ = grandParent;
child.__proto__ = parent;

console.log(child.house);
console.log(child.car);
console.log(child.bike);