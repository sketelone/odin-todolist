import {PROJECT_LIBRARY} from "./projectLibrary";

export default function addProject(name) {
    // console.log('add project!')
    var myProjects = PROJECT_LIBRARY;
    // console.log(myProjects)
    var newProject = new Project(name)

    myProjects.push(newProject);
    // console.log(myProjects, newProject)

    return newProject;
}

function Project(name) {
    this.name = name;
    this.todos = [];

    // console.log(Project)
}