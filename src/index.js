import './style.css';
import displayProject from './frontend/displayProject.js';
import ProjectManager from './backend/projectManager.js';
import StorageHandler from './backend/storageHandler.js';
import DialogManager from './frontend/todoOperationsUIManager.js';

StorageHandler.loadStorage();

displayProject(ProjectManager.getProjects()[0]);

DialogManager.addEventListeners();