import arrayToUl from './arrayToUl';
import switchTabs from './switchProject';
import { PROJECT_LIBRARY } from './projectLibrary';
import addProject from './addProject';

//module to create home page elements and layout
export default function homePage() {
    //add page container
    let page = document.createElement('div');
    page.classList.add("page");
    //add header
    let header = document.createElement('div');
    header.classList.add("header");

    //add sidebar
    let sidebar = document.createElement('div');
    sidebar.classList.add("sidebar");

    let logo = document.createElement('h1');
    logo.innerHTML = "To Do<br>List";
    sidebar.appendChild(logo);

    let projectContainer = document.createElement('div');
    projectContainer.classList.add("project-container");
    let projectNav = document.createElement('ul');
    projectNav.classList.add("project-nav");

    const myProjects = PROJECT_LIBRARY;
    let list = [];
    for (var i=0; i<PROJECT_LIBRARY.length; i++) {
        list[i] = PROJECT_LIBRARY[i].name;

    }
    list.push("Add New");
    arrayToUl(projectNav, list);
    sidebar.appendChild(projectNav);

    var buttons = projectNav.querySelectorAll('button');
    var i = 1;
    buttons.forEach(button => {
        if (button.innerHTML == "Add New") {
            addProject("New Project "+ i);

        } else {
            button.addEventListener('click', switchTabs)
        }
    })

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

    //add to do list container
    let container = document.createElement('div');
    container.classList.add("container");
    let addContainer = document.createElement('div');
    addContainer.classList.add("add-container");
    let add = document.createElement('span');
    add.classList.add("material-symbols-outlined")
    add.innerHTML = "add_circle";

    add.addEventListener('click', function (e) {
        console.log("show form")
        document.querySelector(".form-popup").style.display = "grid";
    })

    addContainer.appendChild(add);

    //add footer
    let footer = document.createElement('div');
    footer.classList.add("footer");

    //append all elements to page
    page.appendChild(header);
    page.appendChild(sidebar);
    page.appendChild(container);
    page.appendChild(addContainer);
    page.appendChild(footer);

    return page;

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
}