function addClass(element, classValue) {
    if(!element.className) {
        element.className = classValue;
    } else {
        element.className += " ";
        element.className += classValue;
    }
}

function addLoadEvent(func) {
    var oldOnLoad = window.onload;
    if(typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldOnLoad();
            func();
        }
    }
}

function  insertAfter(newElement, targetElement) {
    var targetParent = targetElement.parentNode;
    if(targetParent.lastChild == targetElement) { //如果要插入在最后一个元素之后
        targetParent.appendChild(newElement);
    } else {
        targetParent.insertBefore(newElement, targetElement.nextSibling);
    }
}

