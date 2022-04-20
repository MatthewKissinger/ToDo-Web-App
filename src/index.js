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

window.addEventListener('click', function(e) {
    let targetParent = e.target.parentElement;

    // console.log(e.target);
    // console.log(targetParent);

    // when the add project plus button is selected swap out the add project div with the add project form
    if (targetParent.classList.contains('new-project-btn')) {
        let newProjectForm = document.querySelector('.new-project-form');
        domModule.toggleDisplayNone(targetParent);
        domModule.toggleDisplayNone(newProjectForm);
    }

    if (targetParent.classList.contains('new-project-form') && e.target.classList.contains('save-svg')) {
        let inputValue = document.querySelector('.new-project-input');

        // add logic that you cannot name a project 'primary' - it is the default project name given
        if (inputValue.value === 'primary') {
            alert(`Sorry you cannot make a duplicate primary project`);
            inputValue.value = '';
            return;
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
            domModule.mainRender();
        }
    }
})


//console.log testing area
// console.log(_activeProject === logicModule.projects[0].name);

// console.log(logicModule.projects);

export { getActiveProject };
