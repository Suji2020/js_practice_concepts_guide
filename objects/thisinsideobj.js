let user = {
  name: "Suji",
  greet() {
    console.log(this.name);
  }
};

user.greet();

/**
 * user.greet(); // Suji

let fn = user.greet;
fn(); // undefined

Why?
this depends on how a function is called.
fn() has no object on the left, so this is undefined (strict mode)
 */