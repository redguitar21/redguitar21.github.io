
// 展示缩略词表格
function dispalyAbbreviations() {
    if(!document.getElementsByTagName
    || !document.getElementById
    || !document.createElement) {
        return false;
    }
    var abbrs = document.getElementsByTagName("abbr");

    if(abbrs.length < 1) {
        return false;
    }

    var dl = document.createElement("dl");
    for(var i=0; i<abbrs.length; i++) {
        if(abbrs[i].childNodes.length < 1)
            continue;
        var title = abbrs[i].lastChild.nodeValue;
        var desc = abbrs[i].getAttribute("title");
        var dt = document.createElement("dt");
        var dd = document.createElement("dd");
        dt.appendChild(document.createTextNode(title));
        dd.appendChild(document.createTextNode(desc));

        dl.appendChild(dt);
        dl.appendChild(dd);
    }

    if(dl.childNodes.length < 1) {
        return false;
    }

    document.getElementsByTagName("body")[0].appendChild(dl);
}


// 展示网页链接
function displayCitations() {
    var urls = document.getElementsByTagName("blockquote");
    var body = document.getElementsByTagName("body")[0];
    for(var key in urls) {
        var nodeUrl = document.createElement("a");
        nodeUrl.setAttribute("href", urls[key].getAttribute("cite"))
        nodeUrl.appendChild(document.createTextNode("source"))

        body.appendChild(nodeUrl);
    }
}

window.onload = function () {
    dispalyAbbreviations();
    displayCitations();
}