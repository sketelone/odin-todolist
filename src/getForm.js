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
    const inputs = document.querySelectorAll("input[type=text]");
    const myProjects = PROJECT_LIBRARY;


    //when user submits form, add book to the library
    submit.addEventListener('click', function(event) {
        event.preventDefault();
        var formValid = true;
        var project;
        inputs.forEach(input => {
            // console.log(input, input.validity)
            if (validate(input) == false) {
                console.log("nosubmit")
                formValid = false;
            }
        }) 
        if (formValid == true) {
            myProjects.forEach(proj => {
                if (proj.name == currentProject.textContent) {
                    project = proj;
                }
            })
            addTodo(title.value, dueDate.value, priority.checked, notes.value, project);
            // console.log(project)
            form.reset();
            console.log("close form")
            document.querySelector(".form-popup").style.display = "none";
        } 
    })

}

/*VALIDATION*/
//validate date (ensure it's ahead of today)

//when user inputs anything, validate input
// inputs.forEach(input => {
//     input.addEventListener('input', (event) => {
//         validate(input);
//     })
// })

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
