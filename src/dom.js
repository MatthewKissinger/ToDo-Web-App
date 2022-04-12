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

        let removeIcon = document.createElement('div');
        removeIcon.classList.add('remove-icon');
        removeIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>';

        // onclick it will remove the project from the projects array and re-render

        projectCard.appendChild(projectName);
        projectCard.appendChild(removeIcon);
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

        let checkIcon = document.createElement('div');
        checkIcon.classList.add('check-icon');
        checkIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>';

        // add priority - have an exclamation point appear in a div when it is high priority - div empty when low

        // add dueDate to display

        taskCard.appendChild(checkIcon);
        taskCard.appendChild(taskName);
        taskWrapper.appendChild(taskCard);
    })

    main.appendChild(projectWrapper);
    main.appendChild(taskWrapper);
}

export { mainRender };