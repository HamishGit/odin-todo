export default class Todo {
    constructor(title, desc, dueDate, priority, notes, projectID) {
        this._title = title;
        this._desc = desc;
        this._dueDate = dueDate;
        this._priority = priority;
        this._notes = notes;
        this._completed = false;
        this._id = crypto.randomUUID();
        this._projectID = projectID;
    }

    set completed(bool) {
        this._completed = bool;
    }
    
    get completed() {
        return this._completed;
    }

    get title() {
        return this._title;
    }

    set title(titleIn) {
        this._title = titleIn;
    }

    get description() {
        return this._desc;
    }

    set description(descIn) {
        this._desc = descIn;
    }

    get dueDate() {
        return this._dueDate;
    }

    set dueDate(dueDateIn) {
        this._dueDate = dueDateIn;
    }

    get priority() {
        return this._priority;
    }

    set priority(priorityIn) {
        this._priority = priorityIn;
    }

    get notes() {
        return this._notes;
    }

    set notes(notesIn) {
        this._notes = notesIn;
    }

    get id() {
        return this._id;
    }

    get projectID() {
        return this._projectID;
    }

    set projectID(projectIDIn) {
        this._projectID = projectIDIn;
    }
}