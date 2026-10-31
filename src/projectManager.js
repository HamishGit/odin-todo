import Project from "./project.js";
import StorageHandler from "./storageHandler.js";
import TodoManager from "./todoManager.js";

const ProjectManager = function () {

    const projects = new Map();

    const getProjects = () => {
        return [...projects.values()];
    };

    const createProject = (title, color, id) => {
        const project = new Project(title, color, id);

        projects.set(project.id, project);

        StorageHandler.populateStorage();

        return project.id;
    };

    const deleteProject = (projectID) => {
        const wasRemoved = projects.delete(projectID);

        StorageHandler.populateStorage();

        return wasRemoved;
    };

    const editProject = (id, title, color) => {
        const project = projects.get(String(id));

        if (!project) return false;

        project.title = title;
        project.color = color;

        StorageHandler.populateStorage();
        
        return true;
    };

    const getProject = (id) => {
        return projects.get(id);
    };

    const getTodo = (projectID, todoID) => {
        return projects.get(projectID)?.getTodo(todoID);
    };

    const loadProjects = (projectListData) => {

        for (const projectDataRaw of projectListData) {
            const projectData = JSON.parse(projectDataRaw);

            console.log(projectData);

            createProjectFromJSON(projectData);

            for (const todo of projectData.todos) {
                TodoManager.createTodoFromJSON(todo);
            }
        }
    };

    const createProjectFromJSON = (projectData) => {
        return createProject(
            projectData.title,
            projectData.color,
            projectData.id
        );
    }

    StorageHandler.loadStorage();

    return {getProjects, createProject, deleteProject, editProject, getTodo, getProject, loadProjects};
}();

export default ProjectManager;