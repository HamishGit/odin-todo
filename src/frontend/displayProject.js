export default function displayProject(project) {
    const projectTitleElement = document.querySelector('#project-header h1');
    const todoListElement = document.querySelector('#todo-list');

    projectTitleElement.textContent = project.title;
    projectTitleElement.dataset.id = project.id;

    todoListElement.innerHTML = '';
    
    console.log(project.getTodos()[0].title);

    for (const todo of project.getTodos()) {
        const todoItemElement = document.createElement('div');
        todoItemElement.classList.add('todo-item');

        if (todo.completed) {
            todoItemElement.classList.add('completed');
        }

        todoItemElement.dataset.id = todo.id;

        todoItemElement.textContent = todo.title;
        
        todoListElement.appendChild(todoItemElement);
    }
}