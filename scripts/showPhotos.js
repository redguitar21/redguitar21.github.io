function getPhotos() {
    var photoList = document.getElementById("photolist");
    var thumbs = photoList.getElementsByTagName('li');
    for (var i = 0; i < thumbs.length; i++) {
        var a = thumbs[i].getElementsByTagName("a")[0];
        a.onclick = function () {
            showPic(this);
            return false;
        }
    }
}

function showPic(whichpic) {
    var source = whichpic.getAttribute("href");
    var title = whichpic.getAttribute("title");


    var placeholder = document.getElementById("placeholder");
    if(!placeholder) {
        return true;
    }
    placeholder.setAttribute("src", source);
    var desc = document.getElementById("description");
    if(!desc) {
        return false;
    }
    desc.firstChild.nodeValue = title;
    return false;
}


window.onload = function () {
    getPhotos();
}