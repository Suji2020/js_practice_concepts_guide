function one() {
  two();
}

function two() {
  three();
}

function three() {
  console.log(x); // Error here
}

one();


/*ReferenceError: x is not defined
    at three
    at two
    at one
    **/
   /*The error started in three(),
which was called by two(),
which was called by one().

This chain is called the Call Stack*/