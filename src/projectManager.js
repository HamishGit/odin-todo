import Project from "./project.js";

const ProjectManager = function () {

    const projects = new Map();

    const getProjects = () => {
        return [...projects];
    };

    const createProject = (title, color) => {
        const project = new Project(title, color);
        projects.set(String(project.id), project);

        return project.id;
    };

    const deleteProject = (projectID) => {
        if (projects.get(String(projectID))) {
            projects.delete(String(projectID));
        }
    };

    const editProject = (id, title, color) => {
        if (projects.has(id)) {
            const project = projects.get(id);
            project.title = title;
            project.color = color;
        }
    };

    const getProject = (id) => {
        return projects.get(id);
    };

    const getTodo = (projectID) => {
        return projects.get(projectID).get()
    };

    return {getProjects, createProject, deleteProject, editProject, getTodo, getProject};
}();

export default ProjectManager;