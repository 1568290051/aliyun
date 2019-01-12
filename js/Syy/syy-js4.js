
var uL = document.querySelector('.column-dn-main-right ul')
var li1 = uL.firstElementChild;
var li2 = uL.lastElementChild;
// console.log(document.querySelector('.border1'),document.querySelector('.border2'))
li1.onclick = function () {
  document.querySelector('.border1').style.display = 'block';
  document.querySelector('.border2').style.display = 'none';
  document.querySelector('.title1').style.display='block';
  document.querySelector('.title2').style.display='none';
}
li2.onclick = function () {
  document.querySelector('.border1').style.display = 'none';
  document.querySelector('.border2').style.display = 'block';
  document.querySelector('.title1').style.display='none';
  document.querySelector('.title2').style.display='block';
}