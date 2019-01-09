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


// 新浪的显示
var aaOimage = document.querySelectorAll('.zbx-change .zbx-aaimg');console.log(aaOimage);
var aaOhover = document.querySelectorAll('.zbx-change .zbx-hover');
console.log(aaOhover);

// aaOimage[0].onmouseover = function(){
//     aaOhover[0].style.display = 'block';
// }
for(let i = 0; i < aaOimage.length; i++){
    aaOimage[i].onmouseover = function(){
        aaOhover[i].style.display = 'block';
    }
    aaOhover[i].onmouseout = function(){
        this.style.display = 'none';
    }
    }
}

