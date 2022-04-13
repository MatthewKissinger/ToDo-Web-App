// To Do List

import './style.css';
import * as logicModule from './logic';
import * as domModule from './dom';

let _activeProject = 'primary'; 

function getActiveProject() {
    return _activeProject;
}

// Default objects that are created and pushed to the projects array
const project1 = logicModule.newProject('primary');
logicModule.addNewProject(project1);
const task1 = logicModule.newTask('breakfast', 'high', 'eat more oatmeal and whole fruit', '4/20/22');
logicModule.addNewTask(task1);

domModule.mainRender();
domModule.renderIconStyles();

//console.log testing area
//-------------------------
console.log(_activeProject === logicModule.projects[0].name);

console.log(logicModule.projects);

export { getActiveProject };
