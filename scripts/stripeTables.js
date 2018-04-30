//动态渲染表格，使每行都有不同的背景颜色
function stripTables() {
    var odd = true;
    var rows = document.getElementsByTagName("tr");
    for(var i = 1; i < rows.length; i++) {
        if(odd) {
            rows[i].style.backgroundColor = "#ccd";
            odd = false;
        }else {
            rows[i].style.backgroundColor = "#ccc"
            odd = true;
        }
    }
}

window.onload = function () {
    stripTables();
}