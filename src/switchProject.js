import { PROJECT_LIBRARY } from './projectLibrary';
import showProject from './showProject';

//switches to user selected project
export default function switchProject(e) {
    const buttons = document.querySelectorAll('ul button');
    // console.log(buttons)
    const myProjects = PROJECT_LIBRARY;
    const currentProject = e.currentTarget.innerHTML;
    const heading = document.querySelector('#current-project')
    var project;
    
    //change active link
    buttons.forEach(btn => {
        btn.setAttribute('aria-selected', false);
    })

    //get current project
    myProjects.forEach(proj => {
        if (proj.name == currentProject) {
            project = proj;
        }
    })

    //set current project, update heading and display to do list
    e.currentTarget.setAttribute('aria-selected', true);
    heading.innerHTML = currentProject;

    showProject(project);

}
