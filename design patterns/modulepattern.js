/**
 * he Module Pattern is used to create private variables and functions.

It helps in:

Avoiding global variables

Hiding internal logic

Exposing only what is needed

It uses IIFE (Immediately Invoked Function Expression)
 */
const CounterModule = (function () {
  let count = 0; // private variable

  function increment() {
    count++;
    console.log(count);
  }

  function decrement() {
    count--;
    console.log(count);
  }

  return {
    increment,
    decrement
  };
})();

CounterModule.increment(); // 1
CounterModule.increment(); // 2
CounterModule.decrement(); // 1

console.log(CounterModule.count); // undefined (private)
/**count is private.

Only increment and decrement are accessible.

Protects data from outside modification.
*/