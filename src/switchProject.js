import { PROJECT_LIBRARY } from './projectLibrary';
import showProject from './showProject';

/**
 * function to switch to user-selected project
 * @param {MouseEvent} e 
 */

export default function switchProject(e) {
    const myProjects = PROJECT_LIBRARY;
    const currentProject = e.currentTarget.innerHTML.toLowerCase();
    const heading = document.querySelector('#current-project')
    var project;

    console.log(currentProject)
    console.log(PROJECT_LIBRARY)

    //get current project
    myProjects.forEach(proj => {
        if (proj.name == currentProject) {
            project = proj;
        }
    })

    console.log(project);
    //set and show current project
    if (heading) {
        heading.innerHTML = currentProject;
        showProject(project);
    }
}
