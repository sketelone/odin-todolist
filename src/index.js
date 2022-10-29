import display from './display';
import homePage from './homePage';
import showForm from './showForm';
import './style.css';
import 'material-symbols';
import getForm from './getForm';
import { PROJECT_LIBRARY } from './projectLibrary';


var page = homePage();
display(document.body, page);

var header = document.querySelector('.header');
var sidebar = document.querySelector('.sidebar');
var container = document.querySelector('.container');
var footer = document.querySelector('.footer');

//show current project header, add logic for changing header
var project = PROJECT_LIBRARY[0];
var heading = document.createElement('h1');
heading.id = "current-project"
// console.log(project, heading)
heading.innerText = project.name;
display(header, heading)

//show form
var form = showForm();
display(document.body, form)
getForm();




