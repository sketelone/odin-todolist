
import 'material-symbols';

export default function showTodo(todo, i) {
    console.log("show todo")
    const container = document.querySelector(".container");
    console.log(container)

    let item = document.createElement('div');
    item.classList.add("todo-"+i, "todo");

    let checkbox = document.createElement('span');
    checkbox.classList.add("material-symbols-outlined")
    checkbox.innerHTML = "check_box_outline_blank";
    checkbox.addEventListener('click', toggleCompleted);

    let itemPriority = document.createElement('span');
    setPriority();
    itemPriority.addEventListener("click", function(e) {
        if (todo.priority == true) {
            todo.priority = false;
            setPriority();
        } else {
            todo.priority = true;
            setPriority();
        }
    })

    let itemTitle = document.createElement('div');
    itemTitle.innerHTML = todo.title;
    let itemDate = document.createElement('div');
    itemDate.innerHTML = todo.dueDate;
    itemDate.classList.add("item-date");

    if (todo.status) {
        toggleCompleted();
    }

    item.appendChild(checkbox)
    item.appendChild(itemPriority);
    item.appendChild(itemTitle);
    item.appendChild(itemDate);

    container.appendChild(item);

    function setPriority() {
        if (todo.priority == true) {
            itemPriority.classList.add("material-symbols-outlined")
            itemPriority.innerHTML = "priority_high";
            itemPriority.style.fontSize = "20px";
        } else {
            itemPriority.innerHTML = "";
            itemPriority.style.width = "20px";
            itemPriority.style.height = "20px";
        }
    }

    function toggleCompleted() {
        if (checkbox.innerHTML == "check_box_outline_blank") {
            checkbox.innerHTML = "check_box";
            itemTitle.style.textDecoration = "line-through";
            itemDate.style.textDecoration = "line-through";
            item.style.color = "gray";
            itemPriority.innerHTML = "";
            item.classList.add("complete")
            todo.status = true;

        } else {
            checkbox.innerHTML = "check_box_outline_blank";
            itemTitle.style.textDecoration = "none";
            itemDate.style.textDecoration = "none";
            item.style.color = "black";
            todo.status = false;
            item.classList.remove("complete")
            setPriority();
        }
    }
}

