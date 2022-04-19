// DOM interaction and generation module
import * as logicModule from './logic';
import * as index from './index';
import trashCan from './trash-2.svg';
import plusSquare from './plus-square.svg';
import checkMark from './check.svg';
import starIcon from './star.svg';
import calendarIcon from './calendar.svg';
import editIcon from './edit.svg';
import saveIcon from './save.svg';

// global variables
let main = document.querySelector('main');

// render functions
// default render function 
function mainRender() {
    let projectWrapper = document.createElement('div');
    projectWrapper.setAttribute('id', 'project-wrapper');

    let newProjectDiv = document.createElement('div');
    newProjectDiv.setAttribute('id', 'new-project-btn');
    let newProjectPara = document.createElement('p');
    newProjectPara.innerText = 'add project';

    let plusSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    plusSvg.classList.add('plus-svg');
    plusSvg.innerHTML = `<use href="${plusSquare}#plus-icon"></use>`;
                            
    newProjectDiv.appendChild(newProjectPara);
    newProjectDiv.appendChild(plusSvg);                        

    let newProjectForm = document.createElement('div');
    newProjectForm.setAttribute('id', 'new-project-form');
    // newProjectForm.style.display = 'none';
    let newProjectInput = document.createElement('input');

    let saveSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    saveSvg.classList.add('save-svg');
    saveSvg.innerHTML = `<use href="${saveIcon}#save-icon"></use>`;

    newProjectForm.appendChild(newProjectInput);
    newProjectForm.appendChild(saveSvg);

    projectWrapper.appendChild(newProjectDiv);
    projectWrapper.appendChild(newProjectForm);

    logicModule.projects.forEach((project) => {
        let projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        let projectName = document.createElement('p');
        projectName.innerText = project.name;

        let deleteSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        deleteSvg.classList.add('delete-svg');
        deleteSvg.innerHTML = `<use href="${trashCan}#trash-icon"></use>`;

        projectCard.appendChild(projectName);
        projectCard.appendChild(deleteSvg);
        projectWrapper.appendChild(projectCard);
    })

    // separate into it's own function
    let taskWrapper = document.createElement('div');
    taskWrapper.setAttribute('id', 'task-wrapper');

    // add a new task button/div

    let newTaskDiv = document.createElement('div');
    newTaskDiv.setAttribute('class', 'task-card');
    newTaskDiv.setAttribute('id', 'new-task-card');
    let newTaskPara = document.createElement('p');
    newTaskPara.innerText = 'add project';
    let taskPlusSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    taskPlusSvg.classList.add('plus-svg');
    taskPlusSvg.innerHTML = `<use href="${plusSquare}#plus-icon"></use>`;

    newTaskDiv.appendChild(newTaskPara);
    newTaskDiv.appendChild(taskPlusSvg);
    taskWrapper.appendChild(newTaskDiv);

    logicModule.projects[logicModule.findIndexOfProject(index.getActiveProject())].tasks.forEach((task) => {

        let taskCard = document.createElement('div');
        taskCard.classList.add('task-card');
        let taskName = document.createElement('p');
        taskName.innerText = task.name;

        let checkSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        checkSvg.classList.add('check-svg');
        checkSvg.innerHTML = `<use href="${checkMark}#check-icon"></use>`;

        let dueDateText = document.createElement('p');
        dueDateText.classList.add('due-date-text');
        dueDateText.innerText = task.dueDate;

        let calendarSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        calendarSvg.classList.add('calendar-svg');
        calendarSvg.innerHTML = `<use href="${calendarIcon}#calendar-icon"></use>`;

        let starSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        starSvg.classList.add('star-svg');
        starSvg.innerHTML = `<use href="${starIcon}#star-icon"></use>`;

        if (task.priority === 'high') {
            starSvg.classList.add('star-fill'); 
        }

        let editSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        editSvg.classList.add('edit-svg');
        editSvg.innerHTML = `<use href="${editIcon}#edit-icon"></use>`;
        
        taskCard.appendChild(checkSvg);
        taskCard.appendChild(taskName);
        taskCard.appendChild(dueDateText);
        taskCard.appendChild(calendarSvg);
        taskCard.appendChild(starSvg);
        taskCard.appendChild(editSvg);
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

export { mainRender };