class Project {
    constructor(title, color) {
        this._title = title;
        this._color = color;
        this._todos = new Map();
        this._id = crypto.randomUUID();
    }

    get title() {
        return this._title;
    }

    set title(titleIn) {
        this._title = titleIn;
    }

    get color() {
        return this._color;
    }

    set color(colorIn) {
        this._color = colorIn;
    }

    get id() {
        return this._id;
    }

    add(todo) {
        this._todos.set(todo.id, todo);
    }

    remove(todoID) {
        return this._todos.delete(todoID);

    }

    getTodo(todoID) {
        return this._todos.get(todoID);
    }

    getTodos() {
        return [...this._todos.values()]; 
    }

    has(todoID) {
        return this._todos.has(todoID);
    }
}

export default Project;