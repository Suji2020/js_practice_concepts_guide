(function () {
  console.log("I run immediately");
})();

//error
(function () {
  let secret = "hidden";
  console.log(secret);
})();

console.log(secret); // ReferenceError: secret is not defined
//creates a private scope for the variables inside the function