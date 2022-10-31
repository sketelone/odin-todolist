export default function arrayToUl (ul, array) {
    // console.log("arrayToUl")
    array.forEach( item => {
        var li = document.createElement('li');
        var btn = document.createElement('button');
        btn.innerText = item;
        btn.ariaLabel = item;
        btn.ariaSelected = false;
        li.appendChild(btn);
        ul.appendChild(li);
    })
}