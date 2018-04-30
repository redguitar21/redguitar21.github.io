function prepare() {
    var slideshow = document.createElement("div");
    slideshow.setAttribute("id", "slideshow");
    var img = document.createElement("img");
    img.setAttribute("src", "preview.gif");
    img.setAttribute("alt", "buding block of web design");
    img.setAttribute("id", "preview");
    slideshow.appendChild(img);

    // var body = document.getElementsByTagName("body")[0];
    // body.appendChild(slideshow);
    insertAfter(slideshow, document.getElementById("linklist"));

    var links = document.getElementsByTagName("a");
    links[0].onmouseover = function (){
        moveElement("preview", -140, 0, 10);
    } //向左移动一百像素
    links[1].onmouseover = function () {
        moveElement("preview", -280, 0, 10);
    } //向左移动一百像素
    links[2].onmouseover = function () {
        moveElement("preview", -410, 0, 10);
    } //向左移动一百像素

}


window.onload = function () {
    prepare();
}


