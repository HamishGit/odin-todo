import './style.css';
import displayProject from './frontend/displayProject.js';
import ProjectManager from './backend/projectManager.js';
import StorageHandler from './backend/storageHandler.js';
import DialogManager from './frontend/todoOperationsUIManager.js';
import displayProjects from './frontend/displayProjects.js';
import ProjectDialogManager from './frontend/projectDialogManager.js';

StorageHandler.loadStorage();

displayProject(ProjectManager.getProjects()[0]);
displayProjects();

DialogManager.addEventListeners();
ProjectDialogManager.addEventListeners();