function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Bye!");
}

greet("Suji", sayBye);

//a function calling another function is called a callback function

function outer() {
  let msg = "Hi";
  console.log(msg);

  return function () {
    console.log(msg);
  };
}

const fn = outer();
fn();