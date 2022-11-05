import { isPast, parseISO } from "date-fns";
import addTodo from "./addTodo";
import {PROJECT_LIBRARY} from "./projectLibrary";

export default function getForm() {
    const form = document.querySelector('.form-todo');
    const title = document.getElementById('title');
    const dueDate = document.getElementById('dueDate');
    const notes = document.getElementById('notes');
    const currentProject = document.getElementById("current-project");
    const submit = form.querySelector('#submit');
    const inputs = document.querySelectorAll("input");
    const myProjects = PROJECT_LIBRARY;

    //add custom date validation
    dateValidation(dueDate);
    titleValidation(title);

    //when user inputs anything, validate input
    inputs.forEach(input => {
        input.addEventListener('input', (event) => {
            validate(input);
        })
    })

    //when user submits form, add to do item to current project
    submit.addEventListener('click', function(event) {
        event.preventDefault();
        var formValid = true;
        var project;
        //validate form
        inputs.forEach(input => {
            // console.log(input, input.validity)
            if (validate(input) == false) {
                // console.log("nosubmit")
                formValid = false;
            }
        }) 
        //if form is valid, add to do item to current project
        if (formValid == true) {
            myProjects.forEach(proj => {
                if (proj.name == currentProject.textContent) {
                    project = proj;
                }
            })
            addTodo(title.value, dueDate.value, notes.value, project);
            // console.log(project)
            form.reset();
            // console.log("close form")
            form.style.display = "none";
        } 
    })

}

/*VALIDATION*/
//validate date (ensure it's ahead of today)
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

function titleValidation(title) {
    title.addEventListener('input', (e) => {
        title.setCustomValidity("");
        if (title.value == "") {
            title.setCustomvalidity("Please enter something to do.");
        }
    })
}

//show error if input is invalid 
function validate(i) {
    // console.log(i)
    if (i.validity.valid) {
        clearError(i);
    } else {
        showError(i);
        return false
    }
}

//clear errors if input is updated to be valid
function clearError(i) {
    var inputError = document.querySelector("." + i.name + "_error");
    inputError.textContent = "";
}

//show validation message as error
function showError(i) {
    console.log("show error")
    var inputError = document.querySelector("." + i.name + "_error");
    inputError.textContent = i.validationMessage;
}
