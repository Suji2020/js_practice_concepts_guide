const button = document.getElementById("btn");
const message = document.getElementById("msg");

button.addEventListener("click", () => {
  message.style.display = "block";
  button.disabled = true;//prevents further clicks on the button
});

