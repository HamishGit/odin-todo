import ProjectManager from "../backend/projectManager.js";

export default function displayProjects() {
    const projectsContainer = document.querySelector('.projects');
    
    projectsContainer.innerHTML = '';

    for (const project of ProjectManager.getProjects()) {
        const projectElement = document.createElement('h3');

        projectElement.classList.add('project-h3');

        projectElement.dataset.id = project.id;

        projectElement.textContent = project.title;
        
        projectsContainer.appendChild(projectElement);
    }
}