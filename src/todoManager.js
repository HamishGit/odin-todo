import Todo from "./todo.js";
import projectManager from "./projectManager.js";

const TodoManager = function () {

    const createTodo = (title, desc, dueDate, priority, notes, projectID) => {
        const todo = new Todo(title, desc, dueDate, priority, notes, projectID);

        const project = projectManager.getProject(projectID);
        
        if (project !== undefined) {
            project.add(todo);
        }

        return todo.id;
    };

    const deleteTodo = (todoID, projectID) => {
        const project = projectManager.getProject(projectID);

        if (project.has(todoID)) {
            project.remove(todoID);
        }
    };

    const editTodo = (title, dueDate, priority, notes, projectID, id) => {
        const project = projectManager.getProject(projectID);

        const todo = project.getTodo(id) ?? null;
        if (todo !== null) {
            todo.title = title;
            todo.dueDate = dueDate;
            todo.priority = priority;
            todo.notes = notes;
        }
    };

    return {createTodo, deleteTodo, editTodo};
}();

export default TodoManager;