let btn =document.getElementById("btn")
let min = false;

function reveal() {
    if (!min) {
        btn.setAttribute("class", "widthmin");
        min = true;
    } else {
        btn.setAttribute("class", "widthmax");
        min = false;
    }
}