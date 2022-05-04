// importing activeProject variable for testing purposes
import * as index from './index';

// let projects = [];

// factory functions
const updateProject = {
    setName(newName) {
        return this.name = newName;
    }
}

const newProject = (name) => {
    let project = Object.create(updateProject);

    project.tasks = [];
    project.name = name;

    return project;
}

const updateTask = {
    setName(newName) {
        return this.name = newName;
    },
    setPriority(newPriority) {
        return this.priority = newPriority;
    },
    setDueDate(newDueDate) {
        return this.dueDate = newDueDate;
    }
}

const newTask = (name, priority, dueDate) => {
    let task = Object.create(updateTask);
    task.name = name;
    task.priority = priority;
    task.dueDate = dueDate;
    
    return task;
}

// methods
function addNewProject(project) {
    index.projects.push(project);

    localStorage.setItem("projects", JSON.stringify(index.projects));
}

function findIndexOfProject(projectName) {
    let projectIndex = index.projects.findIndex(obj => {
        return obj.name === projectName;
    })

    return projectIndex;
}

function removeProject(projectName) {
    index.projects.splice(findIndexOfProject(projectName), 1);

    localStorage.setItem("projects", JSON.stringify(index.projects));
}

function addNewTask(task) {
    index.projects[findIndexOfProject(index.getActiveProject())].tasks.push(task);

    localStorage.setItem("projects", JSON.stringify(index.projects));
}

function findIndexOfTask(taskName) {
    let activeProject = index.getActiveProject();
    let projectIndex = findIndexOfProject(activeProject);
    let taskIndex = index.projects[projectIndex].tasks.findIndex(obj => {
        return obj.name === taskName;
    })
    return taskIndex;
}

function removeTask(taskName) {
    let activeProject = index.getActiveProject();
    index.projects[findIndexOfProject(activeProject)].tasks.splice(findIndexOfTask(taskName), 1);

    localStorage.setItem("projects", JSON.stringify(index.projects));
}

function updateTaskPriority(taskName) {
    let activeProject = index.getActiveProject();

    if (index.projects[findIndexOfProject(activeProject)].tasks[findIndexOfTask(taskName)].priority === 'high') {
        index.projects[findIndexOfProject(activeProject)].tasks[findIndexOfTask(taskName)].priority = 'low';
    } else {
        index.projects[findIndexOfProject(activeProject)].tasks[findIndexOfTask(taskName)].priority = 'high';
    }

    localStorage.setItem("projects", JSON.stringify(index.projects));
}

function updateTaskDate(taskName) {
    let activeProject = index.getActiveProject();
}

export { newProject, addNewProject, findIndexOfProject, removeProject, newTask, addNewTask, findIndexOfTask, removeTask, updateTaskPriority };



