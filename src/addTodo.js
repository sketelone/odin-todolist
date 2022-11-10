/**
 * function to construct new todo and add it to the project
 * @param {string} title - todo title
 * @param {string} dueDate - todo due date
 * @param {string} notes - todo additional notes
 * @param {Project} project - project to add todo to
 * @returns {Todo} new todo object
 */
export default function addTodo(title, dueDate, notes, project) {
    var newTodo = new Todo(title, dueDate, notes);
    project.todos.push(newTodo);
    
    return newTodo;
}

/**
 * factory function to construct todo
 * @param {string} title - todo title
 * @param {string} dueDate - todo due date
 * @param {string} notes - todo additional notes
 */
function Todo(title, dueDate, notes) {
    this.title = title;
    this.dueDate = dueDate;
    this.notes = notes;
    this.priority = false;
    this.status = false;
}