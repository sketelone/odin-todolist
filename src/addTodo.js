import showProject from "./showProject";

//read info from form, construct a new book and add it to the library
export default function addTodo(title, dueDate, notes, project) {
    // console.log("add todo!")
    var newTodo = new Todo(title, dueDate, notes, project);
    var currentProject = newTodo.project.todos;
    currentProject.push(newTodo);
    
    showProject(project)
    return newTodo;
}

function Todo(title, dueDate, notes, project) {
    this.title = title;
    this.dueDate = dueDate;
    this.priority = false;
    this.notes = notes;
    this.project = project;
    this.status = false;
}