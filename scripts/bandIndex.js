function createPlaceHolder() {
    var slideshow = document.createElement("div");
    slideshow.setAttribute("id", "slideshow");
    var img = document.createElement("img");
    img.setAttribute("alt", "see what you see" )
    img.setAttribute("id", "donghua");
    slideshow.appendChild(img);
    insertAfter(slideshow, document.getElementById("content"));

}
function driveDonghua() {
    var fullName = "images/donghua";
    var img = document.getElementById("donghua");
    for(var i=1; i < 5; i++) {
        fullName = "images/donghua" + i;
        img.setAttribute("src", fullName);
        if (i == 4) {
            i = 1;
        }
        if(img.hold) {
            clearTimeout(img.hold);
        }
        setTimeout("driveDonghua()", 200);
        //alert(fullName)
    }


}


function gouZi() {
    var content = document.getElementById("content");
    content.onmouseover = driveDonghua;
}

window.onload = function () {
    // createPlaceHolder();
    // gouZi();
    alert("hhhh");
}