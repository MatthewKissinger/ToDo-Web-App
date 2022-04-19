// DOM interaction and generation module
import * as logicModule from './logic';
import * as index from './index';
import trashCan from './trash-2.svg';
import plusSquare from './plus-square.svg';
import checkMark from './check.svg';
import starIcon from './star.svg';
import calendarIcon from './calendar.svg';
import editIcon from './edit.svg';

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

    // add a new task button/div

    let newTaskDiv = document.createElement('div');
    newTaskDiv.setAttribute('class', 'task-card');
    let newTaskPara = document.createElement('p');
    newTaskPara.innerText = 'add project';
    let taskPlusDiv = document.createElement('div');
        setAttributes(taskPlusDiv, {"class": "plus-div", "href": "#"});
        taskPlusDiv.innerHTML = `<svg class="plus-icon">
                                <use href="${plusSquare}#plus-icon"></use>
                            </svg>`;

    newTaskDiv.appendChild(newTaskPara);
    newTaskDiv.appendChild(taskPlusDiv);
    taskWrapper.appendChild(newTaskDiv);

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

        let dueDateText = document.createElement('p');
        dueDateText.classList.add('due-date-text');
        dueDateText.innerText = task.dueDate;

        let calendarDiv = document.createElement('div');
        setAttributes(calendarDiv, {"id": "calendar-div", "href": "#"});
        calendarDiv.innerHTML = `<svg class="calendar-icon">
                                    <use href="${calendarIcon}#calendar-icon"></use>
                              </svg>`;

        let starDiv = document.createElement('div');
        setAttributes(starDiv, {"id": "star-div", "href": "#"});
        starDiv.innerHTML = `<svg class="star-icon">
                                    <use href="${starIcon}#star-icon"></use>
                              </svg>`;
        
        if (task.priority === 'high') {
            console.log('fill in the star');
            starDiv.innerHTML = `<svg class="star-icon star-fill">
                                    <use href="${starIcon}#star-icon"></use>
                                </svg>`;
        }

        let editDiv = document.createElement('div');
        setAttributes(editDiv, {"id": "edit-div", "href": "#"});
        editDiv.innerHTML = `<svg class="edit-icon">
                                    <use href="${editIcon}#edit-icon"></use>
                              </svg>`;
        

        taskCard.appendChild(checkDiv);
        taskCard.appendChild(taskName);
        taskCard.appendChild(dueDateText);
        taskCard.appendChild(calendarDiv);
        taskCard.appendChild(starDiv);
        taskCard.appendChild(editDiv);
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