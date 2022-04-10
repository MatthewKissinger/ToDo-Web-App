// To Do List

// create logic js module
// the logic.js module will have all of the methods related to creating and editing the projects and tasks associated with each project

// create DOM js module
// the DOM js module will use any logic functions to appropriately generate dom elements 

import './style.css';
import * as logicModule from './logic';

let _activeProject = 'primary'; 

function getActiveProject() {
    return _activeProject;
}

// console.log testing area
// -----------------------

console.log(logicModule.projects[0].tasks[0].dueDate);

console.log(_activeProject === logicModule.projects[0].name);

let testTask1 = logicModule.newTask('shower', 'low', 'wash hair with cold water', '4/20/22');

logicModule.addNewTask(testTask1);

console.log(logicModule.projects);

console.log(logicModule.findIndexOfTask('breakfast'));

console.log(logicModule.findIndexOfTask('shower'));

export { getActiveProject };
