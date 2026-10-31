import ProjectManager from "./projectManager.js";

const StorageHandler = function() {
    function populateStorage() {
    const projects = ProjectManager.getProjects();

    localStorage.setItem("projects", JSON.stringify(projects));
    }

    function loadStorage() {
        const storedProjects = localStorage.getItem("projects");

        if (!storedProjects) return [];

        const projectsData = JSON.parse(storedProjects);

        ProjectManager.loadProjects(projectsData);
    }

    return {loadStorage, populateStorage}
}();

export default StorageHandler;