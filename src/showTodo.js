
import 'material-symbols';

export default function showTodo(todo, i) {
    console.log("show todo")
    const container = document.querySelector(".container");
    console.log(container)

    let item = document.createElement('div');
    item.classList.add("todo-"+i, "todo");
    let itemPriority = document.createElement('span');
    console.log(todo.priority)
    if (todo.priority == true) {
        itemPriority.classList.add("material-symbols-outlined")
        itemPriority.innerHTML = "priority_high";
        itemPriority.style.fontSize = "20px";
    } else {
        itemPriority.innerHTML = "";
    }
    let itemTitle = document.createElement('div');
    itemTitle.innerHTML = todo.title;
    let itemDate = document.createElement('div');
    itemDate.innerHTML = todo.dueDate;
    itemDate.classList.add("date");
    item.appendChild(itemPriority);
    item.appendChild(itemTitle);
    item.appendChild(itemDate);


    let checkbox = document.createElement('span');
    checkbox.classList.add("material-symbols-outlined")
    checkbox.innerHTML = "check_box_outline_blank";

    checkbox.addEventListener('click', function(e) {
        
        if (checkbox.innerHTML == "check_box_outline_blank") {
            checkbox.innerHTML = "check_box";
            item.style.textDecoration = "line-through";
            item.style.color = "gray";
            itemPriority.innerHTML = "";
        } else {
            checkbox.innerHTML = "check_box_outline_blank";
            item.style.textDecoration = "none";
            item.style.color = "black";
            if (todo.priority == true) {
                itemPriority.classList.add("material-symbols-outlined")
                itemPriority.innerHTML = "priority_high";
                itemPriority.style.fontSize = "20px";
            } else {
                itemPriority.innerHTML = "";
            }
        }
    })
        

    //when checkbox is clicked, cross out item

    container.appendChild(checkbox);
    container.appendChild(item);

}
