import ProjectManager from "../backend/projectManager.js";
import TodoManager from "../backend/todoManager.js";
import displayProject from "./displayProject.js";

const initAddTodo = function() {

    const addButton = document.querySelector('#add-new-todo');
    const createTodoDialog = document.querySelector('dialog#create-todo');
    const closeDialogButton = document.querySelector('dialog#create-todo button#close');
    const createTodoForm = document.querySelector('form#create-todo-form');

    const showNewTodoModal = () => {
        createTodoDialog.showModal();
    };

    const closeDialog = () => {
        createTodoDialog.close();
    };

    addButton.addEventListener('click', showNewTodoModal);
    closeDialogButton.addEventListener('click', closeDialog);
    createTodoForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const form = event.target;

        const title = form.elements[0].value;
        const description = form.elements[1].value;
        const dueDate = form.elements[2].value;
        const priority = form.elements[3].value;
        const notes = form.elements[4].value;

        const projectID = document.querySelector('#project-header h1').dataset.id;
        console.log(`Project ID: ${projectID}`);

        TodoManager.createTodo(title, description, dueDate, priority, notes, projectID, null, false);
        displayProject(ProjectManager.getProject(projectID));
        createTodoDialog.close();
    });
}();

export default initAddTodo;