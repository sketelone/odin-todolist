import arrayToUl from './arrayToUl';
import switchProject from './switchProject';
import addProject from './addProject';
import showProject from './showProject';
import { PROJECT_LIBRARY } from './projectLibrary';

//function to get project navbar
export default function getNavbar() {
    let navContainer = document.createElement('div');
    navContainer.classList.add("nav-container");
    let projectNav = document.createElement('ul');
    projectNav.classList.add("project-nav");

    if (navContainer.firstChild) {
        navContainer.removeChild(projectContainer.firstChild)
    }

    let list = [];
    // console.log(PROJECT_LIBRARY)
    for (var i=0; i<PROJECT_LIBRARY.length; i++) {
        list[i] = PROJECT_LIBRARY[i].name;

    }
    // console.log(i)
    list.push("+");
    arrayToUl(projectNav, list);

    var buttons = projectNav.querySelectorAll('button');

    buttons.forEach(button => {
            button.addEventListener('click', function(e) {
                if (button.innerHTML == "+") {
                    getNewProject(i);
              } else {
                    switchProject(e);
                }
            })
    })
    
    navContainer.appendChild(projectNav);

    return navContainer;
}

function getNewProject(i) {
    //initalize and show new project, reset project navigation
    var newProject = addProject("New Project " + i);

    var newButton = document.querySelector('[aria-label="+"]');
    newButton.setAttribute('aria-selected', true);
    var heading = document.querySelector('#current-project')
    heading.innerHTML = newProject.name;
    showProject(newProject);

    let navContainer = document.querySelector('.nav-container')
    navContainer.removeChild(navContainer.firstChild)
    let projectNav = getNavbar();
    navContainer.appendChild(projectNav);

}