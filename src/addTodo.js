import showProject from "./showProject";

//read info from form, construct a new book and add it to the library
export default function addTodo(title, dueDate, priority, notes, project) {
    // console.log("add todo!")
    var newTodo = new Todo(title, dueDate, priority, notes, project);
    var currentProject = newTodo.project.todos;
    currentProject.push(newTodo);
    
    showProject(project)
    return newTodo;
}

function Todo(title, dueDate, priority, notes, project) {
    this.title = title;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.project = project;
    this.status = false;
}