function changePos() {
    var p = document.getElementById("message");
    var xpos = parseInt(p.style.left);
    var ypos = parseInt(p.style.top);

    if(xpos < 500) xpos++;
    if(xpos > 500) xpos--;
    if(ypos < 1000) ypos++;
    if(ypos > 1000) ypos--;

    p.style.left = xpos + "px";
    p.style.top = ypos + "px";

    movement = setTimeout("changePos()", 10);
}

function init() {
    var p = document.getElementById("message");
    p.style.position = "absolute";
    p.style.left = "50px";
    p.style.top = "50px";
    p.style.color = "red";
    p.style.fontSize = "60pt"
}


window.onload = function() {
    init();
    changePos();
}