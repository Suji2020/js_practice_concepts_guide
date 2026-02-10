console.log(this);//window
function show() {
  console.log(this);
}
show();
let user = {
  name: "Suji",
  sayHi() {
    console.log(this.name);
  }
};

user.sayHi();
//stack -> primitive values are stored in stack and objects are stored in heap.
// Heap -> warehouse of Storage