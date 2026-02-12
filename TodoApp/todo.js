const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("todoList");

// Load tasks from localStorage
let todos = JSON.parse(localStorage.getItem("todos")) || [];

// Display existing todos
renderTodos();

addBtn.addEventListener("click", function () {
  const task = input.value.trim();

  if (task === "") return;

  todos.push({ text: task, completed: false });
  localStorage.setItem("todos", JSON.stringify(todos));

  input.value = "";
  renderTodos();
});

function renderTodos() {
  list.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");

    li.textContent = todo.text;

    if (todo.completed) {
      li.classList.add("completed");
    }

    // Toggle complete
    li.addEventListener("click", function () {
      todos[index].completed = !todos[index].completed;
      localStorage.setItem("todos", JSON.stringify(todos));
      renderTodos();
    });

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";

    deleteBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      todos.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify(todos));
      renderTodos();
    });

    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
}