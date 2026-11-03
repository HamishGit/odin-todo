import ProjectManager from "../backend/projectManager.js";
import displayProject from "./displayProject.js";
import displayProjects from "./displayProjects.js";

const ProjectDialogManager = function() {
    const UI = {
        addbutton : document.querySelector('#new-project-btn'),
        deleteProjectBtn : document.querySelector('#delete-project-btn'),
        ProjectDialog : document.querySelector('#project-dialog'),
        closeDialogBtn : document.querySelector('#close-project'),
        projectForm : document.querySelector('#project-form'),
        submitButton : document.querySelector('#project-form button[type="submit"]'),
        currentProjectH1 : document.querySelector('#project-header h1'),
    }
    const showDialog = (create) => {
        if (create && !UI.deleteProjectBtn.classList.contains('hidden')) {
            UI.deleteProjectBtn.classList.add('hidden');
        } else {
            if (!create) {
                UI.deleteProjectBtn.classList.remove('hidden');
            }
        }

        UI.ProjectDialog.showModal();
    };

    const closeDialog = () => {
        UI.ProjectDialog.close();
    };


    function addEventListeners() {
        UI.addbutton.addEventListener('click', () => {
            UI.submitButton.textContent = 'Create';
            UI.submitButton.dataset.action = 'create';
            UI.projectForm.reset()
            showDialog(true);
        });
        UI.closeDialogBtn.addEventListener('click', closeDialog);
        UI.projectForm.addEventListener('submit', (event) => {
            event.preventDefault();
    
            const form = event.target;
    
            const title = form.elements[0].value;
            const color = form.elements[1].value;

            let projectID = UI.projectForm.dataset.id;
    
            if (UI.submitButton.dataset.action === 'create') {
                projectID = ProjectManager.createProject(title, color, null);
            } else if (UI.submitButton.dataset.action === 'save') {
                ProjectManager.editProject(projectID, title, color);
            }
            displayProject(ProjectManager.getProject(projectID));
            displayProjects();
            closeDialog();
        });
        document.body.addEventListener('click', (event) => {
            if (event.target.classList.contains('project-h3')) {
                UI.projectForm.dataset.id = event.target.dataset.id;

                displayProject(ProjectManager.getProject(UI.projectForm.dataset.id));
            }
        });

        UI.deleteProjectBtn.addEventListener('click', () => {

            ProjectManager.deleteProject(UI.currentProjectH1.dataset.id);

            if (ProjectManager.getProjects().length !== 0) {
                displayProject(ProjectManager.getProjects()[0]);
            }

            displayProjects();
            closeDialog();
        });

        UI.currentProjectH1.addEventListener('click', () => {
            const project = ProjectManager.getProject(UI.currentProjectH1.dataset.id);
            
            UI.submitButton.textContent = 'Save';
            UI.submitButton.dataset.action = 'save';
            document.querySelector('#project-title').value = project.title;
            document.querySelector('#project-color').value = project.color;
            
            showDialog(false);
        });
    }

    return {addEventListeners};
}();

export default ProjectDialogManager;