
import showTodo from "./showTodo"

export default function showProject(project) {
    console.log("show project")
    const container = document.querySelector(".container");
    var i = 1;
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
    project.todos.forEach (todo => {
        showTodo(todo, i);
        i++;
    })
}