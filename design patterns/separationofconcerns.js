/**
 * Each part of your code should handle only one responsibility.

Don’t mix:

UI logic

Business logic

Data logic
 */
/**
 * 
 * How many responsibilities does this function have?

The function again:
function submitForm() {
  const name = document.getElementById("name").value;
  console.log("Saved:", name);
}
What is it doing?

1️⃣ Reading value from DOM
2️⃣ Handling form submission logic
3️⃣ Logging/saving data

That means it is doing multiple jobs.

So yes ✅ it is a bad separation example — but the reason is:

It mixes UI logic and business logic.

Why is it mixed?

document.getElementById() → UI responsibility

console.log("Saved:", name) → Business / data logic

They are different concerns.

✅ Better Version (Separated)
UI logic
function getNameInput() {
  return document.getElementById("name").value;
}
Business logic
function saveName(name) {
  console.log("Saved:", name);
}
Connecting them
function submitForm() {
  const name = getNameInput();
  saveName(name);
}

Now:

If input field changes → edit getNameInput()

If saving logic changes (API call, database, localStorage) → edit saveName()

Much cleaner 💯
 */