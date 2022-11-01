import arrayToUl from './arrayToUl';
import switchProject from './switchProject';
import { PROJECT_LIBRARY } from './projectLibrary';
import addProject from './addProject';
import showProject from './showProject';

export default function getSidebar() {
    let sidebar = document.createElement('div');
    sidebar.classList.add("sidebar");

    let logo = document.createElement('h1');
    logo.innerHTML = "To Do<br>List";
    sidebar.appendChild(logo);

    let projectContainer = document.createElement('div');
    projectContainer.classList.add("project-container");

    let projectNav = getNavbar();
    projectContainer.appendChild(projectNav);
    sidebar.appendChild(projectContainer);

    let hideContainer = document.createElement('div');
    hideContainer.classList.add("hide-container");
    let hideOpt = document.createElement('span');
    hideOpt.classList.add("material-symbols-outlined")
    hideOpt.innerHTML = "check_box_outline_blank";
    hideOpt.addEventListener('click', hideCompleted)
    let hideText = document.createElement('text');
    hideText.innerHTML = "Hide completed tasks"

    hideContainer.appendChild(hideOpt)
    hideContainer.appendChild(hideText)

    sidebar.appendChild(hideContainer);

    return sidebar;
}


//function to get project navbar
function getNavbar() {
    let projectContainer = document.createElement('div');
    projectContainer.classList.add("project-container");
    let projectNav = document.createElement('ul');
    projectNav.classList.add("project-nav");

    if (projectContainer.firstChild) {
        projectContainer.removeChild(projectContainer.firstChild)
    }

    let list = [];
    console.log(PROJECT_LIBRARY)
    for (var i=0; i<PROJECT_LIBRARY.length; i++) {
        list[i] = PROJECT_LIBRARY[i].name;

    }
    console.log(i)
    list.push("Add New");
    arrayToUl(projectNav, list);

    var buttons = projectNav.querySelectorAll('button');

    buttons.forEach(button => {
            button.addEventListener('click', function(e) {
                if (button.innerHTML == "Add New") {
                    console.log("Add new project" + i)
                    var newProject = addProject("New Project " + (i-1));
                    button.setAttribute('aria-selected', true);
                    var heading = document.querySelector('#current-project')
                    heading.innerHTML = newProject.name;
                    showProject(newProject);
                    projectContainer.removeChild(projectNav)
                    projectNav = getNavbar();
                    projectContainer.appendChild(projectNav);
                } else {
                    switchProject(e);
                }
            })
    })
    
    projectContainer.appendChild(projectNav);

    return projectContainer;
}

//function to hide commpleted to do list items
function hideCompleted() {
    var todos = document.querySelectorAll(".todo")
    console.log(todos)
    if (hideOpt.innerHTML == "check_box_outline_blank") {
        hideOpt.innerHTML = "check_box";
        todos.forEach(todo => {
            console.log(todo.classList.contains("complete"))
            if (todo.classList.contains("complete")) {
                todo.style.display = "none";
            }
        })
    } else {
        hideOpt.innerHTML = "check_box_outline_blank";
        todos.forEach(todo => {
            if (todo.classList.contains("complete")) {
                todo.style.display = "grid";
            }
        })
    }
}     