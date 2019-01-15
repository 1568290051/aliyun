  // 1.获取左边按钮
  var uL = document.querySelector('.pret')
  // 2.获取右边按钮
  var nextBtn = document.querySelectorAll('.main1 a');
  nextBtn.onclicl = function() {
    console.log('aa');
  }
  // 3.获取ul
  // var oUl = document.querySelector('ul');
  // // 4.获取一下view
  // var oView = document.querySelector('.view');
  // // 5.获取view的宽度-> 因为view的宽度就是图片的宽度
  // var viewWidth = oView.offsetWidth;
  // // 6.获取所有li
  // var aLi = document.querySelectorAll('li');
  // // 7.声明一个计数变量
  // var num = 0;
  // // 8.点击左边按钮  让图片向左走
  // // 8.1 给左边按钮添加点击事件
  // prevBtn.onclick = function () {
  //   // 8.2 判断一下 num的值是否小于 最后一个图片的索引
  //   if (num < aLi.length - 1) {
  //     // 8.3 如果小于 num++;
  //     num++;
  //     // 8.4 移动ul
  //     animate(oUl, -num * viewWidth);
  //   }
  // }
  // // 9.点击右边按钮 让图片向右走
  // // 9.1 给右边按钮添加点击事件
  // nextBtn.onclick = function () {
  //   // 9.2 判断一下 num的值是否大于0 就让图片向右移动
  //   if (num > 0) {
  //     // 9.3 num自减
  //     num--;
  //     // 9.4 移动ul
  //     animate(oUl, -num * viewWidth);
  //   }

  // }
