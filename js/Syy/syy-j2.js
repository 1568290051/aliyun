var aLink = document.querySelectorAll('.menu-container-list-col .box01');
var aAi = document.querySelectorAll('.menu-container-list-col .box02');
for(var i = 0; i < aLink.length; i++){
  aLink[i].onmouseover = function() {
    for(var j = 0; j < aLink.length; j++){
     aLink[j].style.transform = 'scale(1)'
     aLink[j].style.position = 'relative';
     aLink[j].style. zIndex = '0';
     aLink[j].style.backgroundColor = '#373d41';
    }
    this.style.transform = 'scale(1.07)'
    this.style.zIndex = '10';
    this.style.boxShadow = ' 1px 1px 5px 5px #888888';
    this.style.backgroundColor = 'aqua';
  }
}
for(var i = 0; i <aAi.length; i++){
  aAi[i].onmouseover = function() {
    for(var j = 0; j < aAi.length; j++){
     aAi[j].style.backgroundColor = '#373d41';
    }
    this.style.backgroundColor = '#00c1de';
  }
}
