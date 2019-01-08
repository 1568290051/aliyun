// 轮播图区域
function lunbotu() {
  // 获取窗口
  const chuangkou = document.querySelector('.syh-lunbotu-changkou');
  // 获取窗口的宽度
  const oWidth = chuangkou.offsetWidth;
  // 获得准备移动的盒子
  const oyidong = document.querySelector('.top-lunbotu');
  // 计数变量
  var num = 0;
  // 获得小店导航按钮
  const xiaodianAnniu = document.querySelectorAll('.xiaodian-nav i');
  for (var i = 0; i < xiaodianAnniu.length; i++) {
    // 给每一个按钮添加点击事件
    $(xiaodianAnniu[i]).click(function () {
      // 让其兄弟元素移除class类名
      $(this).siblings().removeClass('xiaodian-iClick');
      // 让自己本身添加class类名
      $(this).addClass('xiaodian-iClick');
      // 获得元素对应的index
      num = this.getAttribute('data-index');
      // 调用动画函数
      $(oyidong).animate({ 'left': -num * oWidth });
    })
  }
  // 点击时候的值
  var dianj = null;
  // 加大的值
  var jiada = null;
  // 给元素添加一个鼠标按下事件事件
  chuangkou.onmousedown = function (e) {
    dianj = e.clientX;
    // 获得元素当前的距离左边的距离
    var oLeft = oyidong.offsetLeft;
    // 给窗口鼠标移动添加事件
    this.onmousemove = function (e) {
      // 获得按钮距离点击按钮的差值
      var aa = e.clientX;
      aa = aa - dianj;
      oyidong.style.left = oLeft + aa;
    }
  }



} lunbotu();