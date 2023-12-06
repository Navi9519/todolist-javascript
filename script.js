const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-input");
const todoItemsList = document.querySelector(".todo-items");

// Array som ska innehålla alla todos
let todos = [];

// evenlistener på form(en) som "lyssnar" efter submit event
todoForm.addEventListener("submit", (e) => {
  // förhindra sidan från att laddas om efter submit
  e.preventDefault();
  // Kalla på addTodo funktionen som lägger till todo med användarens input som värde
  addTodo(todoInput.value);
});

// Lägga till todo funktionen
addTodo = (item) => {
  // Om "item" inte är tom, skapa ett objekt
  if (item !== "") {
    const todo = {
      name: item,
      completed: false,
    };
    // pusha objektet in i arrayen
    todos.push(todo);
    // rendera alla todos
    renderTodos(todos);
    // reseta input värdet till tom string
    todoInput.value = "";
  }
};

renderTodos = (todos) => {
  // clearar allt inom <ul> -> todo-items
  todoItemsList.textContent = "";

  // Loopa igenom alla todos i todo arrayen
  todos.forEach((item) => {
    // Kollar om todon är "completed"
    const checked = item.completed ? "checked" : null;
    // Skapar <li> element och adderar klassen -> item + innehåll
    const li = document.createElement("li");
    li.setAttribute("class", "item");
    if (item.completed === true) {
      li.classList.add("checked");
    }
    li.innerHTML = `
    <input type="checkbox" class="checkbox" "${checked}">
    ${item.name}
    <button class="delete-button">X</button>
    `;

    // appendar(lägger till) det nya elementet li till <ul> (todoItemsList)
    todoItemsList.append(li);
  });
  // Kalla på deleteTodo för att kunna ta bort todos
  //deleteTodo();
};

todoItemsList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-button")) {
    // Vad är och var är data-index?
    const index = e.target.getAttribute("data-index");
    console.log(index);
    todos.splice(index, 1);
    renderTodos(todos);
  }
});

// deleteTodo = () => {
//   // Ta alla buttons som skapas utifrån nya todos
//   const deleteButtons = document.querySelectorAll(".delete-button");

//   // Loopa igenom och specificera vilket index
//   deleteButtons.forEach((button, index) => {
//     button.addEventListener("click", () => {
//       // Ta bort todo på specifikt index via splice() metoden
//       todos.splice(index, 1);
//     });
//   });
//   renderTodos(todos);
// };
