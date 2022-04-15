// DOM interaction and generation module
import * as logicModule from './logic';
import * as index from './index';
import trashCan from './trash-2.svg';
import plusSquare from './plus-square.svg';
import checkMark from './check.svg';

// global variables
let main = document.querySelector('main');

// separate the project and task rendering into functions
// create an add project button - pop up form to enter details
// create an add task button - pop up form to enter details

// render functions
// default render function 
function mainRender() {
    let projectWrapper = document.createElement('div');
    projectWrapper.setAttribute('id', 'project-wrapper');

    let newProjectDiv = document.createElement('div');
    newProjectDiv.setAttribute('id', 'new-project-div');

    let newProjectPara = document.createElement('p');
    newProjectPara.innerText = 'add project';

    let plusDiv = document.createElement('div');
        setAttributes(plusDiv, {"id": "plus-div", "href": "#"});
        plusDiv.innerHTML = `<svg class="plus-icon">
                                <use href="${plusSquare}#plus-icon"></use>
                            </svg>`;

    newProjectDiv.appendChild(newProjectPara);
    newProjectDiv.appendChild(plusDiv);
    projectWrapper.appendChild(newProjectDiv);

    logicModule.projects.forEach((project) => {
        let projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        let projectName = document.createElement('p');
        projectName.innerText = project.name;

        let trashDiv = document.createElement('div');
        setAttributes(trashDiv, {"id": "trash-div", "href": "#"});
        trashDiv.innerHTML = `<svg class="trash-icon">
                                <use href="${trashCan}#trash-icon"></use>
                            </svg>`;
                
        let plusDiv = document.createElement('div');
        setAttributes(plusDiv, {"id": "plus-div", "href": "#"});
        plusDiv.innerHTML = `<svg class="plus-icon">
                                <use href="${plusSquare}#plus-icon"></use>
                            </svg>`;
        // onclick it will remove the project from the projects array and re-render

        projectCard.appendChild(projectName);
        projectCard.appendChild(trashDiv);
        projectWrapper.appendChild(projectCard);
    })

    // separate into it's own function
    let taskWrapper = document.createElement('div');
    taskWrapper.setAttribute('id', 'task-wrapper');

    logicModule.projects[logicModule.findIndexOfProject(index.getActiveProject())].tasks.forEach((task) => {

        let taskCard = document.createElement('div');
        taskCard.classList.add('task-card');
        let taskName = document.createElement('p');
        taskName.innerText = task.name;

        let checkDiv = document.createElement('div');
        setAttributes(checkDiv, {"id": "check-div", "href": "#"});
        checkDiv.innerHTML = `<svg class="check-icon">
                                <use href="${checkMark}#check-icon"></use>
                            </svg>`;

        let starIcon = document.createElement('div');
        starIcon.classList.add('star-icon');
        starIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>';

        taskCard.appendChild(checkDiv);
        taskCard.appendChild(taskName);
        taskCard.appendChild(starIcon);
        taskWrapper.appendChild(taskCard);
    })

    main.appendChild(projectWrapper);
    main.appendChild(taskWrapper);
}

function setAttributes(element, attrs) {
    for (var key in attrs) {
        element.setAttribute(key, attrs[key]);
    }
}


// testing window event clicks with e.target -- tie in the logic functions
// window.addEventListener('click', function(e) {
//     console.log(e.target);
// })

export { mainRender };