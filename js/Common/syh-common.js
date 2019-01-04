window.onload = function(){
  // 获得元素
var oSouSuo = document.querySelector('.syh-sousuo');
// 给元素添加点击事件
oSouSuo.onfocus = function(){
  this.classList.add('syh-width-sousuo');
}
// 添加失去焦点事件
oSouSuo.onblur = function(){
  this.classList.remove('syh-width-sousuo');
}
}