
import showTodo from "./showTodo"

//shows to do list for current project
export default function showProject(project) {
    // console.log("show project")

    const todoContainer = document.querySelector(".todo-container");
    var i = 0;
    //remove previous to do list
    while (todoContainer.firstChild) {
        todoContainer.removeChild(todoContainer.firstChild)
    }
    //show current to do list
    project.todos.forEach (todo => {
        showTodo(todo, i);
        i++;
    })
}