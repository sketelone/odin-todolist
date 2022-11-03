import arrayToUl from './arrayToUl';
import switchProject from './switchProject';
import { PROJECT_LIBRARY } from './projectLibrary';
import getProjForm from "./getProjForm";

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
                    //pop up form asking for new project name
                    document.querySelector(".form-proj").style.display = "grid";
                } else {
                    switchProject(e);
                }
            })
    })
    
    navContainer.appendChild(projectNav);

    return navContainer;
}