// DOM interaction and generation module
import * as logicModule from './logic';
import * as index from './index';

// global variables
let main = document.querySelector('main');


// separate the project and task rendering into functions
// create an add project button - pop up form to enter details
// create an add task button - pop up form to enter details

// render 
// default render function 
function mainRender() {
    let projectWrapper = document.createElement('div');
    projectWrapper.setAttribute('id', 'project-wrapper');
    
    logicModule.projects.forEach((project) => {
        let projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        let projectName = document.createElement('p');
        projectName.innerText = project.name;

        projectCard.appendChild(projectName);
        projectWrapper.appendChild(projectCard);

        

    })

    // separate into it's own function
    let taskWrapper = document.createElement('div');
    taskWrapper.setAttribute('id', 'task-wrapper');

    logicModule.projects[logicModule.findIndexOfProject(index.getActiveProject())].tasks.forEach((task) => {
        console.log(task.name);
        console.log(task.priority);
        console.log(task.notes);
        console.log(task.dueDate);

        let taskCard = document.createElement('div');
        taskCard.classList.add('task-card');
        let taskName = document.createElement('p');
        taskName.innerText = task.name;

        taskCard.appendChild(taskName);
        taskWrapper.appendChild(taskCard);
    })

    main.appendChild(projectWrapper);
    main.appendChild(taskWrapper);
}


export { mainRender };