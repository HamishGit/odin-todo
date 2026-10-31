import './style.css';
import displayProject from './frontend/displayProject.js';
import ProjectManager from './backend/projectManager.js';
import StorageHandler from './backend/storageHandler.js';
import TodoManager from './backend/todoManager.js';

StorageHandler.loadStorage();

// TodoManager.createTodo('Get Groceries', '', '', 1, '', ProjectManager.getProjects()[0].id);

displayProject(ProjectManager.getProjects()[0]);


