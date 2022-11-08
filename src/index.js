import './style.css';
import 'material-symbols';
import homePage from './homePage';
import getForm from './getForm';

//create and add home page
var page = homePage();
document.body.appendChild(page)
//launch form listeners
getForm();

