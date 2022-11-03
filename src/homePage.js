import getSidebar from './getSidebar';
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

    //add forms
    let items = [
        ["title","Do:", "text", true],
        ["dueDate", "By:", "date", true],
        ["priority", "High Priority?", "checkbox", false],
        ["notes", "Notes", "text", false]
    ]
    var formTodo = showForm(items, "form-todo");

    items = [
        ["name","Project Name:", "text", false]
    ]
    var formProj = showForm(items, "form-proj");

    //append all elements to page
    page.appendChild(header);
    page.appendChild(sidebar);
    page.appendChild(container);
    page.appendChild(addContainer);
    page.appendChild(footer);
    page.appendChild(formTodo);
    page.appendChild(formProj);

    return page;
}