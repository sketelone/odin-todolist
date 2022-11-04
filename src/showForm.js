import 'date-fns'

export default function showForm (items, className){
    let form = document.createElement('form');
    form.classList.add(className, "form-popup");
    let temp = [];

    let submit = document.createElement('button');
    submit.innerHTML = "&#10003;";
    submit.type = "submit";
    submit.id = "submit"

    form.appendChild(submit);

    if (className == "form-todo") {
        temp = items.pop();
    }

    items.forEach (item => {
        var container = document.createElement('div');
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

        container.appendChild(label);
        container.appendChild(input);
        container.appendChild(span);
        form.appendChild(container)

    })



    let close = document.createElement('button');
    close.innerHTML = "&times;";
    close.type = "button";
    close.id = "close";
    close.addEventListener('click', closeForm);
    form.appendChild(close);

    // items.forEach (item => {
    //     var span = document.createElement('span');
    //     span.classList.add(item[0] + "_error");
    //     span.classList.add("error");
    //     span.ariaLive = "polite";
    //     form.appendChild(span);
    // })

    return form;

    function closeForm() {
        document.getElementsByClassName(className)[0].style.display = "none";
        document.getElementsByClassName(className)[0].reset();
    }
}



