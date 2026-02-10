function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer();

counter();
counter();
counter();
//inner() remembers count
//Even after outer() finished
//This memory = closure
//Closure = function + its lexical environment