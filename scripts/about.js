function showSection(id) {

    var divs = document.getElementsByTagName("p");
    for(var i = 0; i < divs.length; i++) {
        if(divs[i].className.indexOf("section") == -1) {
            continue;
        }
        //alert(id)
        if(divs[i].getAttribute("id") != id) {
            divs[i].style.display = "none";
        } else {
            divs[i].style.display = "block";
        }
    }

}


function prepare() {
    var member = document.getElementById("member");
    var elem = member.getElementsByTagName("a")
    //alert(elem.length)

    for(var i=0; i<elem.length; i++) {
        var id = elem[i].getAttribute("href").split("#")[1];
        elem[i].dest = id;
        document.getElementById(id).style.display = "none";
        elem[i].onclick = function () {
            showSection(this.dest);
            return false;
        }
    }
}

window.onload = function () {
    prepare();
}