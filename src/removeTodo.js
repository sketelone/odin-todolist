import { PROJECT_LIBRARY } from './projectLibrary';

export default function removeTodo(todo) {
    // console.log("remove todo")
    const myProjects = PROJECT_LIBRARY;
    const currentProject = document.getElementById('current-project').innerHTML;
    var project;

    //get current project
    myProjects.forEach(proj => {
        if (proj.name == currentProject) {
            project = proj;
        }
    })

    var index = parseInt(todo);
    if (index > -1) {
        var temp = project.todos.splice(index, 1)
    }
    // console.log(temp)

}
