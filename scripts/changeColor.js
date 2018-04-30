function changeColor() {
    alert("change");
    var oriColor = document.getElementById("example");
    oriColor.style.color = "red";
    alert(oriColor.style.color);
}

window.onload = function () {
    //changeColor();
    //document.getElementById("example").lastChild.nodeValue.onclick = changeColor();
    document.getElementById("example").onclick = changeColor;
}