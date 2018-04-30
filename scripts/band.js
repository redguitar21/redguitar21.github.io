function highlightPage() {
    var currUrl = window.location.href;
    var nav = document.getElementById("navigation");
    var links = nav.getElementsByTagName("a");

    for(var i = 0; i < links.length; i++) {
        var linkurl = links[i].getAttribute("href");
        if(currUrl.indexOf(linkurl) != -1) {
            links[i].className = "here";
        }

    }
}


addLoadEvent(highlightPage)