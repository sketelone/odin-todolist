import homePage from './homePage';
import showForm from './showForm';
import './style.css';
import 'material-symbols';
import getForm from './getForm';
import { PROJECT_LIBRARY } from './projectLibrary';
import newProjForm from './newProjForm';


var page = homePage();
document.body.appendChild(page)

var header = document.querySelector('.header');

//show current project header
var project = PROJECT_LIBRARY[0];
var heading = document.createElement('h1');
heading.id = "current-project"
heading.innerText = project.name;
header.appendChild(heading)

//show form
var form = showForm();
document.body.appendChild(form);
getForm();

//show form
var form = newProjForm();
document.body.appendChild(form);
getForm();




