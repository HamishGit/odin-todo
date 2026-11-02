import './style.css';
import displayProject from './frontend/displayProject.js';
import ProjectManager from './backend/projectManager.js';
import StorageHandler from './backend/storageHandler.js';
import './frontend/AddTodo.js';

StorageHandler.loadStorage();

displayProject(ProjectManager.getProjects()[0]);