import addProject from './addProject';
import showProject from './showProject';
import getNavbar from './getNavbar';

export default function newProjForm() {
    let form = document.createElement('form');
    form.classList.add("proj-form-popup");

    let close = document.createElement('button');
    close.innerHTML = "&times;";
    close.id = "close"
    close.addEventListener('click', closeForm);

    form.appendChild(close);

    let items = [
        ["name","Project Name:", "text", false]
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

        form.appendChild(label);
        form.appendChild(input);

    })
    
    let submit = document.createElement('button');
    submit.innerHTML = "OK";
    submit.type = "submit";
    submit.id = "submit"
  
    submit.addEventListener('click', function(event) {
        event.preventDefault();
        var name = document.getElementById('name');

        if (name.value != "") {
            var newProject = addProject(name.value)
        } else {
            var newProject = addProject("New Project " + (i));
        }
        var newButton = document.querySelector('[aria-label="+"]');
        newButton.setAttribute('aria-selected', true);
        var heading = document.querySelector('#current-project')
        heading.innerHTML = newProject.name;
        showProject(newProject);
        let navContainer = document.querySelector('.nav-container')
        console.log(navContainer)
        navContainer.removeChild(navContainer.firstChild)
        let projectNav = getNavbar();
        navContainer.appendChild(projectNav);
        form.reset();
        console.log("close form")
        document.querySelector(".proj-form-popup").style.display = "none";
    })

    form.appendChild(submit);
    return form;
}

function closeForm() {
    document.querySelector(".proj-form-popup").style.display = "none";
}
