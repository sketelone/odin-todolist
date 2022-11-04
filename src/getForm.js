import { isPast, parseISO } from "date-fns";
import addTodo from "./addTodo";
import {PROJECT_LIBRARY} from "./projectLibrary";

export default function getForm() {
    const form = document.querySelector('.form-popup');
    const title = document.getElementById('title');
    const dueDate = document.getElementById('dueDate');
    const priority = document.getElementById('priority');
    const notes = document.getElementById('notes');
    const currentProject = document.getElementById("current-project");
    const submit = document.getElementById('submit');
    const inputs = document.querySelectorAll("input");
    const myProjects = PROJECT_LIBRARY;

    //add custom date validation
    dateValidation(dueDate);

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
            addTodo(title.value, dueDate.value, priority.checked, notes.value, project);
            // console.log(project)
            form.reset();
            // console.log("close form")
            document.querySelector(".form-popup").style.display = "none";
        } 
    })

}

/*VALIDATION*/
//validate date (ensure it's ahead of today)
function dateValidation(dueDate) {
    dueDate.addEventListener('input', (e) => {
        let date = parseISO(dueDate.value);
        dueDate.setCustomValidity("");
        if (dueDate.validity.valueMissing) {
            dueDate.setCustomvalidity("Please select a due date.");
        } else if (isPast(date)) {
            dueDate.setCustomValidity("Date must be in the future.");
        } else {
            dueDate.setCustomValidity("");
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
    var inputError = document.querySelector("." + i.name + "_error");
    inputError.textContent = i.validationMessage;
}
