import getSidebar from './getSidebar';
import gitIcon from './GitHub-Mark-32px.png';
import showForm from './showForm';
import getNavbar from './getNavbar';
import { PROJECT_LIBRARY } from './projectLibrary';

//module to create home page elements and layout
export default function homePage() {
    //add page container
    let page = document.createElement('div');
    page.classList.add("page");

    //add header
    let header = document.createElement('div');
    header.classList.add("header");

    //show current project header
    const myProjects = PROJECT_LIBRARY;

    var project = PROJECT_LIBRARY[0];
    var heading = document.createElement('h1');
    heading.id = "current-project"
    heading.innerText = project.name;
    header.appendChild(heading)    

    //allow user to change project name on click
    heading.addEventListener('click', (e) => {
        var currentProject = heading.innerHTML;
        myProjects.forEach(proj => {
            if (proj.name == currentProject) {
                project = proj;
            }
        })
        header.removeChild(header.firstChild)
        var container = document.createElement('div');
        container.classList.add('header-edit')
        var input = document.createElement('input');
        input.classList.add('header-input');
        input.placeholder = project.name;
        input.type = "text";
        container.appendChild(input);
        var submit = document.createElement('button');
        submit.innerHTML = "&#10003;";
        submit.type = "submit";
        container.appendChild(submit);
        header.appendChild(container);
        submit.addEventListener('click', (e) => {
            console.log("header submit")
            header.removeChild(header.firstChild);
            if (input.value) {
                project.name = input.value;
            }
            heading.innerHTML = project.name;
            header.appendChild(heading);
            //refresh nav
            let navContainer = document.querySelector('.nav-container')
            navContainer.removeChild(navContainer.firstChild)
            let projectNav = getNavbar();
            navContainer.appendChild(projectNav);
        })
    })

    //add sidebar
    let sidebar = getSidebar();

    //add to do list container
    let container = document.createElement('div');
    container.classList.add("container");

    //add todo list header
    let todoHeader = document.createElement('div');
    todoHeader.classList.add("todo-header");
    
    let textContent = ["", "To Do", "Due Date"];
    textContent.forEach(txt => {
        var text = document.createElement('text');
        text.innerHTML = txt;
        todoHeader.appendChild(text);
    })

    let todoContainer = document.createElement('div');
    todoContainer.classList.add("todo-container");

    container.appendChild(todoHeader)
    container.appendChild(todoContainer)

    //add forms 
    //intialize items: variable name, label, input type, placeholder, required?
    let items = [
        ["title","Do:", "text", "Do something...", true],
        ["dueDate", "By:", "date", false, true],
        ["notes", "Notes", "text", "Additional notes", false]
    ]
    var formTodo = showForm(items, "form-todo");

    container.appendChild(formTodo);
    

    //add new todo section
    let addContainer = document.createElement('div');
    addContainer.classList.add("add-container");
    let add = document.createElement('span');
    add.classList.add("material-symbols-outlined")
    add.innerHTML = "add_circle";

    add.addEventListener('click', function (e) {
        // console.log("show form")
        document.querySelector(".form-todo").style.display = "grid";
    })

    addContainer.appendChild(add);

    //add footer
    let footer = document.createElement('div');
    footer.classList.add("footer");
    let para = document.createElement('p');
    para.innerHTML = "Copyright &#169; 2022 sketelone";
    let link = document.createElement('a');
    let icon = new Image();
    icon.src = gitIcon;
    link.href = "https://github.com/sketelone";
    link.appendChild(icon)

    footer.appendChild(link);
    footer.appendChild(para);

    //append all elements to page
    page.appendChild(header);
    page.appendChild(sidebar);
    page.appendChild(container);
    page.appendChild(addContainer);
    page.appendChild(footer);


    return page;
}