function  insertAfter(newElement, targetElement) {
    var targetParent = targetElement.parentNode;
    if(targetParent.lastChild == targetElement) { //如果要插入在最后一个元素之后
        targetParent.appendChild(newElement);
    } else {
        targetParent.insertBefore(newElement, targetElement.nextSibling);
    }
}