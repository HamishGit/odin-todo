import Project from "./project.js";
import TodoManager from "./todoManager.js";

const ProjectManager = function () {

    const projects = new Map();

    const getProjects = () => {
        return [...projects.values()];
    };

    const createProject = (title, color, id) => {
        const project = new Project(title, color, id);

        projects.set(project.id, project);

        return project.id;
    };

    const deleteProject = (projectID) => {
        return projects.delete(projectID);
    };

    const editProject = (id, title, color) => {
        const project = projects.get(String(id));

        if (!project) return false;

        project.title = title;
        project.color = color;
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

    return {getProjects, createProject, deleteProject, editProject, getTodo, getProject, loadProjects};
}();

export default ProjectManager;