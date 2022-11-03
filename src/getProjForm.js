import addProject from './addProject';
import showProject from './showProject';
import getNavbar from './getNavbar';

export default function getProjForm() {
    const form = document.querySelector('.form-proj');
    const submit = form.querySelector('#submit');

    let i = 1;

    submit.addEventListener('click', function(event) {
        event.preventDefault();
        var name = document.getElementById('name');

        if (name.value != "") {
            var newProject = addProject(name.value)
        } else {
            var newProject = addProject("New Project " + i);
            i++
        }
        var newButton = document.querySelector('[aria-label="+"]');
        newButton.setAttribute('aria-selected', true);
        var heading = document.querySelector('#current-project')
        heading.innerHTML = newProject.name;
        showProject(newProject);

        let navContainer = document.querySelector('.nav-container')
        navContainer.removeChild(navContainer.firstChild)
        let projectNav = getNavbar();
        navContainer.appendChild(projectNav);
        form.reset();
        console.log("close form")
        document.querySelector(".form-proj").style.display = "none";

    })
}