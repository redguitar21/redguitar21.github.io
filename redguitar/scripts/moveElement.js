function moveElement(elementId, destPosX, destPosY, interval) {
    if (!document.getElementById) return false;
    if(!document.getElementById(elementId)) return false;
    var elem = document.getElementById(elementId);
    if(elem.movement) {
        clearTimeout(elem.movement);
    }
    if(!elem.style.left) {
        elem.style.left = "0px";
    }
    if(!elem.style.top) {
        elem.style.top = "0px";
    }
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);

    if(xpos < destPosX) {
        var step = Math.ceil((destPosX-xpos)/10);
        xpos += step;
    }

    if(xpos > destPosX) {
        var step = Math.ceil((xpos-destPosX)/10);
        xpos -= step;
    }

    if(ypos < destPosY) {
        var step = Math.ceil((ypos-destPosY)/10);
        ypos += step;
    }

     if(ypos < destPosY) {
        var step = Math.ceil((destPosY-ypos)/10);
        ypos -= step;
    }

    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    //alert("hhhh");

    var repeat = "moveElement('"+elementId+"', "+destPosX+", "+destPosY+", "+interval+")";
    elem.movement = setTimeout(repeat, interval);
}

