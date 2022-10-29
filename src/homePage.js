
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