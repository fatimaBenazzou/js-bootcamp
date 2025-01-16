const submitForm = document.querySelector(".add");
const addButton = document.querySelector(".add-todo");
const todoList = document.querySelector(".todos");
let listLength = 0;

function generateTemplate(todo) {
    const html = `
        <li>
            <input type="checkbox" id="todo_${listLength}" />
            <label for="todo_${listLength}">
                <span class="check"></span>${todo}
            </label>
            <div>
                <span class="raphael--pensil"></span>
                <span class="ic--baseline-delete"></span>
            </div>
        </li>`;
    todoList.innerHTML += html;
}

function addTodos(e) {
    e.preventDefault();
    const todo = submitForm.add.value.trim();

    if (todo.length) {
        listLength++;
        generateTemplate(todo);
        submitForm.reset();
    }
}

function deleteTodos(e) {
    if (e.target.classList.contains("ic--baseline-delete")) {
        e.target.parentElement.parentElement.remove();
    }
}

function editTodos(e) {
    if (e.target.classList.contains("raphael--pensil")) {
        const li = e.target.parentElement.parentElement;
        const label = li.querySelector("label");
        const currentText = label.textContent.trim();
        const newText = prompt("Modifier la tâche :", currentText);

        if (newText !== null && newText.trim().length) {
            label.innerHTML = `<span class="check"></span>${newText.trim()}`;
        }
    }
}

submitForm.addEventListener("submit", addTodos);
addButton.addEventListener("click", addTodos);
todoList.addEventListener("click", (e) => {
    deleteTodos(e);
    editTodos(e);
});
  