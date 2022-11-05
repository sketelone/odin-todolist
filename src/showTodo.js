import 'date-fns'
import { format, parseISO, isPast } from 'date-fns';
import 'material-symbols';
import removeTodo from './removeTodo';

export default function showTodo(todo, i) {
    // create todo HTML item and show it
    const todoContainer = document.querySelector(".todo-container");

    //create todo container
    let item = document.createElement('div');
    item.classList.add("todo");
    item.id = i;

    //create checkbox
    let checkbox = document.createElement('span');
    checkbox.classList.add("material-symbols-outlined")
    checkbox.innerHTML = "check_box_outline_blank";
    checkbox.addEventListener('click', toggleCompleted);

    //create priority toggle
    let itemPriority = document.createElement('span');
    itemPriority.classList.add("material-symbols-outlined")
    itemPriority.innerHTML = "priority_high";
    itemPriority.style.fontSize = "20px";
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

    //show todo text
    let itemText = document.createElement('div');
    itemText.classList.add("item-text");
    let itemTitle = document.createElement('div');
    itemTitle.innerHTML = todo.title;
    itemText.appendChild(itemTitle);
    
    //allow user to change todo on click
    itemTitle.addEventListener('click', (e) => {
        console.log("text click")
        itemText.removeChild(itemText.firstChild)
        var input = document.createElement('input');
        input.placeholder = todo.title;
        input.type = "text";
        itemText.appendChild(input);
        var submit = document.createElement('button');
        submit.innerHTML = "&#10003;";
        submit.type = "submit";
        itemText.appendChild(submit);
        submit.addEventListener('click', (e) => {
            console.log("text submit")
            itemText.removeChild(itemText.firstChild);
            itemText.removeChild(itemText.firstChild);
            if (input.value) {
                todo.title = input.value;
            }
            itemTitle.innerHTML = todo.title;
            itemText.appendChild(itemTitle);
        })
    })

    //add due date
    let itemDate = document.createElement('div');
    itemDate.classList.add("item-date");
    let dateText = document.createElement('div');
    dateText.innerHTML = "due " + format(parseISO(todo.dueDate), 'MM/dd/yy') ;
    itemDate.appendChild(dateText);

    //allow user to change due date on click
    dateText.addEventListener('click', (e) => {
        console.log("date click")
        itemDate.removeChild(itemDate.firstChild)
        var container = document.createElement('div');
        var input = document.createElement('input');
        input.type = "date";
        input.required = true;
        input.style.height = "20px";
        var span = document.createElement('span');
        span.classList.add("date_error");
        span.classList.add("error");
        span.ariaLive = "polite";
        container.appendChild(input);
        container.appendChild(span)
        itemDate.appendChild(container);

        dateValidation(input);
        var submit = document.createElement('button');
        submit.innerHTML = "&#10003;";
        submit.type = "submit";
        itemDate.appendChild(submit);

        submit.addEventListener('click', (e) => {
            console.log("date submit")
            
            if (input.validity.valid) {
                while (itemDate.firstChild) {
                    itemDate.removeChild(itemDate.firstChild);
                }
                todo.dueDate = input.value;
                dateText.innerHTML = "due " + format(parseISO(todo.dueDate), 'MM/dd/yy') ;
                itemDate.appendChild(dateText);
            } else {
                span.textContent = input.validationMessage;
            }
        })
    })

    //display notes when drop down is selected
    let expand = document.createElement('span')
    expand.classList.add("material-symbols-outlined")
    expand.innerHTML = "chevron_left";
    expand.addEventListener('click', expandTodo);

    //add delete button
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
    item.appendChild(expand);
    item.appendChild(del);

    todoContainer.appendChild(item);

    function setPriority() {
        if (todo.priority == true) {
            itemPriority.style.opacity = 1;
            itemPriority.style.color = "red";
            item.style.backgroundColor = "rgb(236, 227, 236)"
        } else {
            itemPriority.style.opacity = 0.5;
            itemPriority.style.color = "black";
            item.style.backgroundColor = "rgb(255, 248, 255)"
        }
    }

    function toggleCompleted() {
        if (checkbox.innerHTML == "check_box_outline_blank") {
            checkbox.innerHTML = "check_box";
            item.classList.add("complete")
            todo.status = true;

        } else {
            checkbox.innerHTML = "check_box_outline_blank";
            todo.status = false;
            item.classList.remove("complete")
            // setPriority();
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


    //when epand button is clicked, show notes
    function expandTodo() {
        if (expand.innerHTML == "chevron_left") {
            let itemNotes = document.createElement('div');
            itemNotes.classList.add("item-notes");
            itemNotes.innerHTML = todo.notes;
            item.appendChild(itemNotes);
            expand.innerHTML = "expand_more";
        } else {
            item.removeChild(item.lastChild);
            expand.innerHTML = "chevron_left";
        }

    }
}

function dateValidation(dueDate) {
    dueDate.addEventListener('input', (e) => {
        dueDate.setCustomValidity("");
        if (dueDate.validity.valueMissing) {
            dueDate.setCustomvalidity("Please select a due date.");
        } else if (isPast(parseISO(dueDate.value))) {
            dueDate.setCustomValidity("Please select future date.");
        } else {
            dueDate.setCustomValidity("");
        }
    })
}

