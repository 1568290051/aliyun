// 轮播图区域
function lunbotu() {
  // 获取窗口
  const chuangkou = document.querySelector('.syh-lunbotu-changkou');
  // 获取窗口的宽度
  const oWidth = chuangkou.offsetWidth;
  // 获得准备移动的盒子
  const oyidong = document.querySelector('.top-lunbotu');
  // 计数变量
  var num = 1;
  // 获得小店导航按钮
  const xiaodianAnniu = document.querySelectorAll('.xiaodian-nav i');
  for (var i = 0; i < xiaodianAnniu.length; i++) {
    // 给每一个按钮添加点击事件
    $(xiaodianAnniu[i]).click(function () {
      // 获得元素对应的index
      num = this.getAttribute('data-index');
      // 调用动画函数
      $(oyidong).animate({ 'left': -num * oWidth });
      // 让其兄弟元素移除class类名
      $(this).siblings().removeClass('xiaodian-iClick');
      // 让自己本身添加class类名
      $(this).addClass('xiaodian-iClick');
    })
  }
  // 克隆元素
  var cloneOne = oyidong.children[0].cloneNode(true);
  var cloneTwo = oyidong.children[2].cloneNode(true);
  oyidong.appendChild(cloneOne);
  oyidong.insertBefore(cloneTwo,oyidong.children[0]);
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
      jiada = aa - dianj;
      oyidong.style.left = oLeft + jiada +'px';
    }
    chuangkou.onmouseup = function(){
    // 给鼠标移动解绑
    this.onmousemove = null;
    // 判断加大的值的绝对值大于500吗
    if(Math.abs(jiada) > 500){
      if(jiada < 0){
        num++;
        // anniuDuiying()
        // 调用动画函数
      $(oyidong).animate({ 'left': -num * oWidth },anniuDuiying);
      }else{
        num--;
        // anniuDuiying()
        // 调用动画函数
      $(oyidong).animate({ 'left': -num * oWidth },anniuDuiying);
      }
    }else{
       // 调用动画函数
       $(oyidong).animate({ 'left': -num * oWidth });
    }
    // 点击时候的值
  dianj = null;
  // 加大的值
  jiada = null;
  }
  }
  // 按钮对应函数
  function anniuDuiying(){
    // 判断计数变量
    if(num == 0){
      num = 3;
      oyidong.style.left = -num * oWidth +'px';
    }else if(num == 4){
      num = 1;
      oyidong.style.left = -num * oWidth +'px';
    }
      // 让其兄弟元素移除class类名
    $(xiaodianAnniu[num-1]).siblings().removeClass('xiaodian-iClick');
    // 让自己本身添加class类名
    $(xiaodianAnniu[num-1]).addClass('xiaodian-iClick');
  }
}lunbotu();
// 精灵图部分
function jltYd(){
  // 获得元素
  var oJlt = document.querySelectorAll('.common.jlt>div');
  // 循环遍历给每个元素添加事件
  for(var i = 0; i < oJlt.length; i++){
    // 给每个元素添加鼠标移入事件
    oJlt[i].onmouseenter = function(e){
      // 获得本元素子第一个子元素
      var firstEle = this.children[0];
      // 调用基础动画
      lbtPositionY(-1400,firstEle);
    }
    // 给每个元素添加鼠标移出事件
    oJlt[i].onmouseleave = function(){
      // 获得本元素子第一个子元素
      var firstEle = this.children[0];
      // 调用基础动画
      lbtPositionY(0,firstEle);
    }
  }
  // 基础位置切换函数
  function lbtPositionY(positionVal,ele){
    $(ele).stop();
    var oVal = parseInt(window.getComputedStyle(ele,null)['backgroundPositionY']);
    // 步进值
    var step = oVal < 0 ? 100 : -100 ;
    var timer = setInterval(function(){
      var aa = oVal += step ;
      ele.style.backgroundPositionY = aa +'px';
      // 判断是否到达目标值
      if(aa == positionVal){
        // 清除清除定时器
        clearInterval(timer);
      }
    },55);
  }
}jltYd();