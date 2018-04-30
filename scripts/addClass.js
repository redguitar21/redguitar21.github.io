function addClass(element, classValue) {
    if(!element.className) {
        element.className = classValue;
    } else {
        element.className += " ";
        element.className += classValue;
    }
}
