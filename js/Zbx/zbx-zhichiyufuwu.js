window.onload = function () {
    var zbxLi = document.querySelectorAll('.zbx-nav .right ul>li');

    for (var i = 0; i < zbxLi.length; i++) {
        zbxLi[i].onmouseover = function () {
            zbxLi[1].className = ''; 
    }
    zbxLi[i].onmouseout = function () {
        zbxLi[1].className = 'zbx-li-xuanz'; 
}
}
}
