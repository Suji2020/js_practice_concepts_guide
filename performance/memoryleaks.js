/**When unused memory is not released.

Common causes:

Unremoved event listeners

Timers not cleared

Global variables */
function addListener() {
  const button = document.getElementById("btn");

  button.addEventListener("click", () => {
    console.log("Clicked");
  });
}
//If this runs multiple times → multiple listeners are added → memory leak

//FIX:
function addListener() {
  const button = document.getElementById("btn");

  function handleClick() {
    console.log("Clicked");
  }

  button.addEventListener("click", handleClick);

  // Later
  button.removeEventListener("click", handleClick);
}
//What is Clean Code?

/*Code that is:

Readable

Maintainable

Understandable
*/