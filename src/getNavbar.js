import arrayToUl from './arrayToUl';
import switchProject from './switchProject';
import { PROJECT_LIBRARY } from './projectLibrary';
import addProject from './addProject';
import showProject from './showProject';

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
    console.log(PROJECT_LIBRARY)
    for (var i=0; i<PROJECT_LIBRARY.length; i++) {
        list[i] = PROJECT_LIBRARY[i].name;

    }
    console.log(i)
    list.push("+");
    arrayToUl(projectNav, list);

    var buttons = projectNav.querySelectorAll('button');

    buttons.forEach(button => {
            button.addEventListener('click', function(e) {
                if (button.innerHTML == "+") {
                    console.log("Add new project" + i)
                    //pop up form asking for new project name
                    console.log("show new project form")
                    document.querySelector(".proj-form-popup").style.display = "grid";
                    // var name = document.getElementById('name').value;
                    // if (name != "") {
                    //     var newProject = addProject("name")
                    // } else {
                    //     var newProject = addProject("New Project " + (i));
                    // }
                    // button.setAttribute('aria-selected', true);
                    // var heading = document.querySelector('#current-project')
                    // heading.innerHTML = newProject.name;
                    // showProject(newProject);
                    // projectContainer.removeChild(projectNav)
                    // projectNav = getNavbar();
                    // projectContainer.appendChild(projectNav);
                } else {
                    switchProject(e);
                }
            })
    })
    
    navContainer.appendChild(projectNav);

    return navContainer;
}