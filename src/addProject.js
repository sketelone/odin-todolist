import {PROJECT_LIBRARY} from "./projectLibrary";
/**
 * function to construct new project and add to the library
 * @param {string} name - project name
 * @returns {Project} new Project object
 */

export default function addProject(name) {
    
    var myProjects = PROJECT_LIBRARY;
    var newProject = new Project(name)

    myProjects.push(newProject);

    return newProject;
}

/**
 * factory function to construct project
 * @param {string} name - project name 
 */
function Project(name) {
    this.name = name;
    this.todos = [];
}