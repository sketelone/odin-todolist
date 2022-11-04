import getSidebar from './getSidebar';
import gitIcon from './GitHub-Mark-32px.png';
import showForm from './showForm';

//module to create home page elements and layout
export default function homePage() {
    //add page container
    let page = document.createElement('div');
    page.classList.add("page");

    //add header
    let header = document.createElement('div');
    header.classList.add("header");

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
    let items = [
        ["priority", "High Priority?", "checkbox", false],
        ["title","Do:", "text", true],
        ["dueDate", "By:", "date", true],
        ["notes", "Notes", "text", false]
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
    // page.appendChild(formTodo);
    // page.appendChild(formProj);
    page.appendChild(addContainer);
    page.appendChild(footer);


    return page;
}