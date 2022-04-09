// To Do List

// create logic js module
// the logic.js module will have all of the methods related to creating and updating the projects and tasks associated with each project

// create DOM js module
// the DOM js module will use any logic functions to appropriately generate dom elements 

import './style.css';
import * as logicModule from './logic';

let activeProject = 'primary';  

// console.log testing area
// -----------------------

console.log(logicModule.projects[0].tasks[0].dueDate);

console.log(activeProject === logicModule.projects[0].name);
