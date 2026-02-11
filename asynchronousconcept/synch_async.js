console.log("A");
console.log("B");
console.log("C");
//Output: A B C


console.log("A");

setTimeout(() => {
  console.log("B");
}, 1000);

console.log("C");
//Output: A C B

/*Call Stack → where JS executes code

Web APIs → browser handles async tasks (timer, fetch)

Callback Queue → completed async callbacks wait here

Event Loop → checks when stack is empty and pushes callback back*/

/**Event Loop (the hero 🦸‍♂️)

Event loop rule:

“If Call Stack is empty, take task from Callback Queue and execute it”

That’s how async code runs after sync code. */