import './style.css';
import 'material-symbols';
import { PROJECT_LIBRARY } from './projectLibrary';
import homePage from './homePage';
import getForm from './getForm';

import getProjForm from './getProjForm';


var page = homePage();
document.body.appendChild(page)

var header = document.querySelector('.header');

//show current project header
var project = PROJECT_LIBRARY[0];
var heading = document.createElement('h1');
heading.id = "current-project"
heading.innerText = project.name;
header.appendChild(heading)

getForm();
getProjForm();

