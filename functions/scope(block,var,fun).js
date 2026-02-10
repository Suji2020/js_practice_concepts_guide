let globalVar = "Global";

function test() {
  let functionVar = "Function";
  if (true) {
    let blockVar = "Block";
    console.log(blockVar);
  }
  console.log(functionVar);
}

test();
console.log(globalVar);