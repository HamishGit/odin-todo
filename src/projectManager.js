import Project from "./project.js";

const ProjectManager = function () {

    const projects = new Map();

    const getProjects = () => {
        return [...projects.values()];
    };

    const createProject = (title, color) => {
        const project = new Project(title, color);

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

    return {getProjects, createProject, deleteProject, editProject, getTodo, getProject};
}();

export default ProjectManager;