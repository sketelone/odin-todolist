import 'date-fns'

export default function showForm (){
    let form = document.createElement('form');
    form.classList.add("form-popup");

    let close = document.createElement('button');
    close.innerHTML = "&times;";
    close.id = "close"
    close.addEventListener('click', closeForm);

    form.appendChild(close);

    let items = [
        ["title","Do:", "text", true],
        ["dueDate", "By:", "date", true],
        ["priority", "High Priority?", "checkbox", false],
        ["notes", "Notes", "text", false]
    ]

    items.forEach (item => {
        var label = document.createElement('label');
        label.for = item[0];
        label.innerHTML = item[1];

        var input = document.createElement('input');
        input.autocomplete="off";
        input.type = item[2];
        input.id = item[0];
        input.name = item[0];
        input.required = item[3];
        
        var span = document.createElement('span');
        span.classList.add(item[0] + "_error");
        span.classList.add("error");
        span.ariaLive = "polite";

        form.appendChild(label);
        form.appendChild(input);
        form.appendChild(span);

    })
    
    let submit = document.createElement('button');
    submit.innerHTML = "ADD";
    submit.type = "submit";
    submit.id = "submit"

    form.appendChild(submit);

    return form;
}

function closeForm() {
    document.querySelector(".form-popup").style.display = "none";
}

