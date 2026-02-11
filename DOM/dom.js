// 1️⃣ Selecting elements
const form = document.getElementById("myForm");
const input = document.getElementById("nameInput");
const message = document.getElementById("message");
const container = document.getElementById("container");

// 2️⃣ Event listener (form submit)
form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop page reload

  const name = input.value.trim();

  // 3️⃣ Form validation
  if (name === "") {
    message.textContent = "Name cannot be empty ❌";
    message.style.color = "red";
    return;
  }

  // 4️⃣ DOM manipulation
  message.textContent = `Hello, ${name}! ✅`;
  message.style.color = "green";

  // 5️⃣ localStorage
  localStorage.setItem("username", name);

  // 6️⃣ sessionStorage
  sessionStorage.setItem("lastVisit", new Date().toLocaleTimeString());
});

// 7️⃣ Event bubbling example
container.addEventListener("click", function () {
  console.log("Container clicked (BUBBLING)");
});

//localStorage persists data even after the browser is closed, 
// whereas sessionStorage stores data only for the duration of the browser tab.