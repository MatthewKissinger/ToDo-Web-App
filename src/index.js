// To Do List
// ** edit the appropriate task fields for each icon
// ** update and improve styling features

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
const task1 = logicModule.newTask('breakfast', 'high', '2022-04-20');
logicModule.addNewTask(task1);

const project2 = logicModule.newProject('groceries');
logicModule.addNewProject(project2);

domModule.mainRender();

window.addEventListener('click', function (e) {
    let targetParent = e.target.parentElement;

    console.log(e.target);

    // when the add project plus button is selected swap out the add project div with the add project form
    if (targetParent.classList.contains('new-project-btn')) {
        let newProjectForm = document.querySelector('.new-project-form');
        domModule.toggleDisplayNone(targetParent);
        domModule.toggleDisplayNone(newProjectForm);
    }

    // save and add the project to the array and render
    if (targetParent.classList.contains('new-project-form') && e.target.classList.contains('save-svg')) {
        let inputValue = document.querySelector('.new-project-input');

        // add logic that you cannot name a project 'primary' - it is the default project name given
        if (inputValue.value === 'primary') {
            alert(`Sorry you cannot make a duplicate primary project`);
            inputValue.value = '';
            return;
        }

        if (inputValue.value === '') {
            alert('Please name your new project');
        }

        if (inputValue.value !== '') {
            let newProject = logicModule.newProject(inputValue.value);
            logicModule.addNewProject(newProject);
            let newProjectBtn = document.querySelector('.new-project-btn');
            domModule.toggleDisplayNone(targetParent);
            domModule.toggleDisplayNone(newProjectBtn);
            domModule.mainRender();
            inputValue.value = '';
        }
    }

    // cancel the add new project form display
    if (targetParent.classList.contains('new-project-form') && e.target.classList.contains('minus-svg')) {
        let inputValue = document.querySelector('.new-project-input');
        console.log('toggle the add project form and add project button');

        domModule.toggleDisplayNone(targetParent);
        domModule.mainRender();
        inputValue.value = '';
    }

    // remove project from array and rendering
    if (e.target.classList.contains('delete-svg')) {
        let answer = confirm('Delete item?');
        let prevSibling = e.target.previousElementSibling;
        console.log(prevSibling.innerText);
        if (answer === false) {
        } else {
            if (prevSibling.innerText === 'primary') {
                alert(`Sorry you cannot delete the default primary project`);
                return;
            }
            logicModule.removeProject(prevSibling.innerText);
            _activeProject = 'primary';
            domModule.mainRender();
        }
    }

    // update _activeProject and display tasks 
    if (e.target.classList.contains('project-card')) {
        _activeProject = e.target.firstChild.innerText;
        domModule.mainRender();
    }

    if (targetParent.classList.contains('new-task-btn')) {
        let newTaskForm = document.querySelector('.new-task-form');
        domModule.toggleVisibility(targetParent);
        domModule.toggleDisplayNone(newTaskForm);
    }

    if (e.target.classList.contains('task-minus-svg')) {
        domModule.mainRender();
    }

    // add a new task from the form
    if (e.target.classList.contains('new-task-confirm')) {
        console.log('get the input values');
        let nameInput = document.querySelector('.task-name-input');
        let dateInput = document.querySelector('.task-date-input');
        let priorityValue = '';

        let priorities = document.getElementsByName('priority');
        for (let priority of priorities) {
            if (priority.checked) {
                priorityValue = priority.id;
            }
        }

        if (nameInput.value === '') {
            alert('Task must have a name before adding');
        } else {
            let newTask = logicModule.newTask( `${nameInput.value}`, `${priorityValue}`, `${dateInput.value}`);
            logicModule.addNewTask(newTask);
            domModule.mainRender();
        }
    }

    // remove a task when clicking on the check mark svg
    if (e.target.classList.contains('check-svg')) {
        let taskName = targetParent.children[1].innerText;
        logicModule.removeTask(taskName);
        domModule.mainRender();
    }

    // update priority function
    if (e.target.classList.contains('star-svg')) {
        let taskName = targetParent.children[1].innerText;
        logicModule.updateTaskPriority(taskName);
        domModule.mainRender();
    }

    // update date function
    if (e.target.classList.contains('calendar-svg')) {
        domModule.toggleDisplayNone(targetParent.lastChild);
    }
})

export { getActiveProject };
