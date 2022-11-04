
import { format, parseISO } from 'date-fns';
import 'material-symbols';
import removeTodo from './removeTodo';

export default function showTodo(todo, i) {
    // console.log("show todo")
    const todoContainer = document.querySelector(".todo-container");

    let item = document.createElement('div');
    item.classList.add("todo");
    item.id = i;

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

    let itemText = document.createElement('div');
    itemText.classList.add("item-text");
    let itemTitle = document.createElement('div');
    itemTitle.innerHTML = todo.title;
    itemText.appendChild(itemTitle);

    let notesVisible = false;
    itemText.addEventListener('click', expandTodo);

    let itemDate = document.createElement('div');
    itemDate.innerHTML = "due " + format(parseISO(todo.dueDate), 'MM/dd/yy') ;
    itemDate.classList.add("item-date");

    let del = document.createElement('button')
    del.innerHTML = "&times;";
    del.id = "delete";
    del.addEventListener('click', hideTodo);

    if (todo.status) {
        toggleCompleted();
    }

    var hideOpt = document.getElementById("hide-opt");
    if(todo.status && hideOpt.innerHTML == "check_box") {
        item.style.display = "none";
    }

    // console.log(todo)

    item.appendChild(checkbox)
    item.appendChild(itemPriority);
    item.appendChild(itemText);
    item.appendChild(itemDate);
    item.appendChild(del);

    todoContainer.appendChild(item);

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
            itemText.style.textDecoration = "line-through";
            itemDate.style.textDecoration = "line-through";
            item.style.color = "gray";
            itemPriority.innerHTML = "";
            item.classList.add("complete")
            todo.status = true;

        } else {
            checkbox.innerHTML = "check_box_outline_blank";
            itemText.style.textDecoration = "none";
            itemDate.style.textDecoration = "none";
            item.style.color = "black";
            todo.status = false;
            item.classList.remove("complete")
            setPriority();
        }
        var hideOpt = document.getElementById("hide-opt");
        if(hideOpt.innerHTML == "check_box") {
            item.style.display = "none";
        }
    }

    function hideTodo(e) {
        //hide to do item
        var currentTodo = e.target.parentElement;
        // console.log(currentTodo)
        currentTodo.style.display = "none";
        //remove to do item from to do list 
        removeTodo(currentTodo.id)    
    }


    //when Todo is clicked, show notes
    function expandTodo() {
        if (notesVisible == false) {
            let itemNotes = document.createElement('div');
            itemNotes.classList.add("item-notes");
            itemNotes.innerHTML = todo.notes;
            itemText.appendChild(itemNotes);
            notesVisible = true;
        } else {
            itemText.removeChild(itemText.lastChild);
            notesVisible = false;
        }

    }
}

