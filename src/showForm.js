import 'date-fns'

export default function showForm (items, className){
    let form = document.createElement('form');
    form.classList.add(className, "form-popup");

    let temp = [];
    if (className == "form-todo") {
        temp = items.pop();
    }

    items.forEach (item => {
        var container = makeTodoDiv(item, 'todo-input');
        form.appendChild(container);

    })

    let close = document.createElement('button');
    close.innerHTML = "&times;";
    close.type = "button";
    close.id = "close";
    close.addEventListener('click', closeForm);
    form.appendChild(close);

    if (className == "form-todo") {
        var container = makeTodoDiv(temp, 'todo-notes');
        form.appendChild(container);
    }

    let submit = document.createElement('button');
    submit.innerHTML = "&#10003;";
    submit.type = "submit";
    submit.id = "submit";

    form.appendChild(submit);

    return form;

    function closeForm() {
        document.getElementsByClassName(className)[0].style.display = "none";
        document.getElementsByClassName(className)[0].reset();
    }

    function makeTodoDiv(item, className) {
        var container = document.createElement('div');
        container.classList.add(className)
        var label = document.createElement('label');
        label.for = item[0];
        label.innerHTML = item[1];

        var input = document.createElement('input');
        input.autocomplete="off";
        input.type = item[2];
        input.id = item[0];
        input.name = item[0];
        if (item[3]) {
            input.placeholder = item[3];
        }
        input.required = item[4];

        var span = document.createElement('span');
        span.classList.add(item[0] + "_error");
        span.classList.add("error");
        span.innerHTML = "";
        span.ariaLive = "polite";

        container.appendChild(label);
        container.appendChild(input);
        container.appendChild(span);
        
        return container;

    }
}



