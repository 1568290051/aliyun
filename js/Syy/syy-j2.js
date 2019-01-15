var aLink = document.querySelectorAll('.menu-container-list-col .box01');
var aAi = document.querySelectorAll('.menu-container-list-col');
for(var i = 0; i < aLink.length; i++){
  aLink[i].onmouseover = function() {
    for(var j = 0; j < aLink.length; j++){
     aLink[j].style.transform = 'scale(1)'
     aLink[j].style.position = 'relative';
     aLink[j].style. zIndex = '0';
     aLink[j].style.backgroundColor = '#373d41';
     aLink[j].style.boxShadow = ' 0px 0px 0px 0px #d4d4d4';
    }
    this.style.transform = 'scale(1.07)'
    this.style.zIndex = '10';
    this.style.boxShadow = ' 3px 3px 8px 8px #d4d4d4';
    this.style.backgroundColor = 'aqua';
  }
}
// for(var i = 0; i <aAi.length; i++){
//   aAi[i].onmouseover = function() {
//     for(var j = 0; j < aAi.length; j++){
//      aAi[j].style.backgroundColor = '#373d41';
//     }
//     this.style.backgroundColor = '#00c1de';
//   }
// }
for(var i = 0; i < aAi.length; i++){
  aAi[0].onmouseover = function(){
    document.querySelector('.zzz').style.backgroundColor = '#00c1de';
    document.querySelector('.xxx').style.backgroundColor = '#373d41';
    document.querySelector('.ccc').style.backgroundColor = '#373d41';
  }
  aAi[1].onmouseover = function() {
    document.querySelector('.zzz').style.backgroundColor = '#373d41';
    document.querySelector('.xxx').style.backgroundColor = '#00c1de';
    document.querySelector('.ccc').style.backgroundColor = '#373d41';
  }
  aAi[2].onmouseover = function() {
    document.querySelector('.zzz').style.backgroundColor = '#373d41';
    document.querySelector('.xxx').style.backgroundColor = '#373d41';
    document.querySelector('.ccc').style.backgroundColor = '#00c1de';
  }
}