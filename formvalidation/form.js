const form = document.getElementById("myForm");
const errorMsg = document.getElementById("error");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Validation
  if (name === "") {
    errorMsg.textContent = "Name is required";
    return;
  }

  if (!email.includes("@")) {
    errorMsg.textContent = "Enter a valid email";
    return;
  }

  if (password.length < 6) {
    errorMsg.textContent = "Password must be at least 6 characters";
    return;
  }
//   if(errorMsg.textContent ==="Enter a valid email"){
//       errorMsg.style.color = "green";
//       errorMsg.textContent = "Form submitted successfully!";
//       return;
//   }
    // If all validations pass
    errorMsg.style.color = "green";
    errorMsg.textContent = "Form submitted successfully!";
});