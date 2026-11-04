import circleOutline from "../resources/circle-outline.svg";
import checkCircleOutline from "../resources/check-circle-outline.svg";

export default function displayProject(project) {
    const projectTitleElement = document.querySelector("#project-header h1");
    const todoListElement = document.querySelector("#todo-list");
    const projectForm = document.querySelector("#project-form");

    projectTitleElement.textContent = project.title;
    projectTitleElement.dataset.id = project.id;
    projectTitleElement.style.color = project.color;
    projectForm.dataset.id = project.id;

    todoListElement.innerHTML = "";

    for (const todo of project.getTodos()) {
        const todoItemElement = document.createElement("div");
        todoItemElement.classList.add("todo-item");

        const todoText = document.createElement("p");
        const todoCheckbox = document.createElement("div");

        if (todo.completed) {
            todoItemElement.classList.add("completed");
            todoCheckbox.innerHTML = `<img src="${checkCircleOutline}" class="checkbox">`;
        } else {
            todoCheckbox.innerHTML = `<img src="${circleOutline}" class="checkbox">`;
        }

        todoCheckbox.classList.add("checkbox-container");
        todoText.classList.add("todo-text");

        todoItemElement.dataset.id = todo.id;

        todoText.textContent = todo.title;

        todoItemElement.appendChild(todoCheckbox);
        todoItemElement.appendChild(todoText);

        todoListElement.appendChild(todoItemElement);
    }
}
