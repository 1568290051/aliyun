
// 1.获取view
var oView = document.querySelector('.col-main-container-slick');
// 2.获取view的宽度
var viewWidth = oView.offsetWidth;
// 3.获取ul
var oUl = document.querySelector('.col-main-container-slick ul');
// 4.获取第一个li
var firstLi = oUl.querySelector('.col-main-container-slick ul li:first-child');
// console.log(firstLi);
// 5.把第一个li添加到ul里面的的最后 (克隆(复制 clone) 多利羊)
// firstLi.cloneNode(true) 把fistLi元素复制一份  
// ture代表是不是包括li中的所有子元素和内容 flase代表不包括所有子元素 只有自己
oUl.appendChild(firstLi.cloneNode(true));
// 6.获取左边按钮
var prevBtn = document.querySelector('.pret');
// 7.获取右边按钮
var nextBtn = document.querySelector('.next');
// 8.声明一个计数变量
var num = 0;


// 9.点击左边按钮 让轮播图向左移动
// 9.1 给左边按钮添加点击事件
prevBtn.onclick = function () {
  // 9.4 判断 计数变量是否 等于 li的length-1
  if (num == oUl.children.length - 1) {
    // 9.5 让num 为0
    num = 0;
    // 9.6 让ul的移动距离为0
    oUl.style.left = 0 + 'px';
  }
  // 9.2 让计数变量 自增
  num++;
  // 9.3 让ul移动
  animate(oUl, -num * viewWidth);
}

// 10.点击右边按钮 让轮播图向右移动
// 10.1 给右边按钮添加点击事件
nextBtn.onclick = function () {
  // 10.4 判断计数变量是否等于0
  if (num == 0) {
    // 10.5 让num 为oUl.children.length - 1
    num = oUl.children.length - 1;
    // 10.6 oUl.style.left为 -num*viewWidth
    oUl.style.left = -num * viewWidth + 'px';
  }

  // 10.2让计数变量自减
  num--;
  // 10.3让ul移动
  animate(oUl, -num * viewWidth);
}
