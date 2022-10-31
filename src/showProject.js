
import showTodo from "./showTodo"

//shows to do list for current project
export default function showProject(project) {
    console.log("show project")

    const container = document.querySelector(".container");
    var i = 1;
    //remove previous to do list
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
    //show current to do list
    project.todos.forEach (todo => {
        showTodo(todo, i);
        i++;
    })
}