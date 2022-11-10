import { PROJECT_LIBRARY } from "./projectLibrary";

/**
 * function to push project library into local storage
 */
export default function pushLibrary() {
    localStorage.clear();
    var i = 0;
    PROJECT_LIBRARY.forEach(proj => {
        localStorage.setItem(i, JSON.stringify(proj));
        i++;
    }) 
}