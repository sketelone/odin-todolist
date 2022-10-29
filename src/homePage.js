
export default function homePage() {
    let page = document.createElement('div');
    page.classList.add("page");

    let header = document.createElement('div');
    header.classList.add("header");

    let sidebar = document.createElement('div');
    sidebar.classList.add("sidebar");
    let logo = document.createElement('h1');
    logo.innerHTML = "To Do<br>List";
    sidebar.appendChild(logo);

    let container = document.createElement('div');
    container.classList.add("container");
    let addContainer = document.createElement('div');
    addContainer.classList.add("add-container");
    let add = document.createElement('span');
    add.classList.add("material-symbols-outlined")
    add.innerHTML = "add_circle";

    add.addEventListener('click', function (e) {
        console.log("show form")
        document.querySelector(".form-popup").style.display = "block";
    })

    addContainer.appendChild(add);


    let footer = document.createElement('div');
    footer.classList.add("footer");

    page.appendChild(header);
    page.appendChild(sidebar);
    page.appendChild(container);
    page.appendChild(addContainer);
    page.appendChild(footer);

    return page;
}