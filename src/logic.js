// project array that will store all project objects -- setting it up with an initial default project called 'primary'

// importing activeProject variable for testing purposes
import * as index from './index';

let projects = [
    {
        name: 'primary',
        tasks: [
            {
                name: 'breakfast',
                priority: 'high',
                notes: 'eat more oatmeal and whole fruit',
                dueDate: '4/20/22'
            }
        ]
    }
];

// factory functions
const newProject = (name) => {
    let tasks = [];

    // add in update name method to prototype
    return { name, tasks};
}

const newTask = (name, priority, notes, dueDate) => {

    // add in update name, priority, notes, dueDate methods to prototype
    return { name, priority, notes, dueDate};
}

// methods
function addNewProject(project) {
    projects.push(project);
}

function findIndexOfProject(projectName) {
    let index = projects.findIndex(obj => {
        return obj.name === projectName;
    })

    return index;
}

function removeProject(projectName) {
    projects.splice(findIndexOfProject(projectName), 1);
}

function addNewTask(task) {
    let activeProject = index.getActiveProject();
    projects[findIndexOfProject(activeProject)].tasks.push(task);
}

// ** findIndexOfTask
function findIndexOfTask(taskName) {
    let activeProject = index.getActiveProject();
    let projectIndex = findIndexOfProject(activeProject);
    let taskIndex = projects[projectIndex].tasks.findIndex(obj => {
        return obj.name === taskName;
    })
    return taskIndex;
}

// ** removeTask

export { projects, newProject, addNewProject, removeProject, newTask, addNewTask, findIndexOfTask };



