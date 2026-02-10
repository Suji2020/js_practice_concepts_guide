let x = 10;

function parent() {
  let y = 20;

  function child() {
    console.log(x, y);
  }

  child();
}

parent();