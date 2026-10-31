import Todo from "./todo.js";
import projectManager from "./projectManager.js";

const TodoManager = function () {

    const createTodo = (title, desc, dueDate, priority, notes, projectID, todoID, completed) => {
        
        const todo = new Todo(title, desc, dueDate, priority, notes, projectID, todoID, completed);

        const project = projectManager.getProject(projectID);
        
        if (!project) return null;

        project.add(todo);

        return todo.id;
    };

    const deleteTodo = (todoID, projectID) => {
        const project = projectManager.getProject(projectID);

        if (!project) return false;

        return project.remove(todoID);
    };

    const editTodo = (title, dueDate, priority, notes, projectID, id) => {
        const project = projectManager.getProject(projectID);

        if (!project) return false;

        const todo = project.getTodo(id);
        if (!todo) return false;

        todo.title = title;
        todo.dueDate = dueDate;
        todo.priority = priority;
        todo.notes = notes
            
        return true;
    };

    const createTodoFromJSON = (todoData) => {
        return createTodo(
            todoData.title ?? '',
            todoData.desc ?? '',
            todoData.dueDate ?? '',
            todoData.priority ?? 1,
            todoData.notes ?? '',
            todoData.projectID,
            todoData.id,
            todoData.completed
        );
    }

    return {createTodo, deleteTodo, editTodo, createTodoFromJSON};
}();

export default TodoManager;