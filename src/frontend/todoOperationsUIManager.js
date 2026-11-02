import ProjectManager from "../backend/projectManager.js";
import TodoManager from "../backend/todoManager.js";
import displayProject from "./displayProject.js";

const DialogManager = function() {
    const UI = {
        addButton : document.querySelector('#add-new-todo'),
        createTodoDialog : document.querySelector('dialog#create-todo'),
        closeDialogButton : document.querySelector('dialog#create-todo button#close'),
        createTodoForm : document.querySelector('form#create-todo-form'),
        currentProjectH1 : document.querySelector('#project-header h1'),
        submitFormButton : document.querySelector('#create-todo-form button[type="submit"]'),
    }

    const showNewTodoModal = (create) => {

        if (create) {
            UI.submitFormButton.textContent = 'Create';
            UI.submitFormButton.dataset.action = 'create';
        } else {
            UI.submitFormButton.textContent = 'Save';
            UI.submitFormButton.dataset.action = 'save';
        }

        UI.createTodoDialog.showModal();
    };

    const closeDialog = () => {
        UI.createTodoDialog.close();
    };

    function addEventListeners() {
        UI.addButton.addEventListener('click', () => {
            UI.createTodoForm.reset();
            document.querySelector('#notes').textContent = '';
            showNewTodoModal(true)
        });
        UI.closeDialogButton.addEventListener('click', closeDialog);
    
        document.body.addEventListener('click', (event) => {
            if (event.target.classList.contains('todo-item')) {
                UI.createTodoForm.dataset.todoID = event.target.dataset.id;
    
                const todo = ProjectManager.getTodo(UI.currentProjectH1.dataset.id, event.target.dataset.id);
                
                document.querySelector('input#title').value = todo.title;
                document.querySelector('#desc').value = todo.description;
                document.querySelector('#due-date').value = todo.dueDate;
                document.querySelector('#priority').value = Number(todo.priority);
                document.querySelector('#notes').textContent = todo.notes;
                
                showNewTodoModal(false);
            }
        });
    
        UI.createTodoForm.addEventListener('submit', (event) => {
            event.preventDefault();
    
            const form = event.target;
    
            const title = form.elements[0].value;
            const description = form.elements[1].value;
            const dueDate = form.elements[2].value;
            const priority = form.elements[3].value;
            const notes = form.elements[4].value;
    
            const projectID = UI.currentProjectH1.dataset.id;
    
            if (UI.submitFormButton.dataset.action === 'create') {
                TodoManager.createTodo(title, description, dueDate, priority, notes, projectID, null, false);
            } else if (UI.submitFormButton.dataset.action === 'save') {
                TodoManager.editTodo(title, description, dueDate, priority, notes, projectID, UI.createTodoForm.dataset.todoID);
            }
            displayProject(ProjectManager.getProject(projectID));
            closeDialog();
        });
    }

    return {addEventListeners};
}();

export default DialogManager;