
// project array that will store all project objects -- setting it up with an initial default project called 'primary'

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
    return { name, tasks};
}

// ** add newTask factory function **
// -----------------------------------

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

// ** add methods
// -------------
// ** addNewTask 
// ** findIndexOfTask
// ** removeTask


export { projects, newProject, addNewProject, removeProject };



