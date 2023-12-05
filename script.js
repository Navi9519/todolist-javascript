const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-input");
const todoItemsList = document.querySelector(".todo-items");

let todos = [];

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo(todoInput.value);
});

addTodo = (item) => {
  if (item !== "") {
    const todo = {
      name: item,
      completed: false,
    };
    todos.push(todo);
    renderTodos(todos);
    todoInput.value = "";
  }
};

renderTodos = (todos) => {
  todoItemsList.textContent = "";

  todos.forEach((item) => {
    const checked = item.completed ? "checked" : null;
    const li = document.createElement("li");
    li.setAttribute("class", "item");
    if (item.completed === true) {
      li.classList.add("checked");
    }
    li.innerHTML = `
    <input type="checkbox" class="checkbox" ${checked}>
    ${item.name}
    <button class="delete-button">X</button>
    `;
    todoItemsList.append(li);
  });
  deleteTodo();
};

deleteTodo = () => {
  const deleteButtons = document.querySelectorAll(".delete-button");

  deleteButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      todos.splice(index, 1);

      renderTodos(todos);
    });
  });
};
