// 轮播图区域
function lunbotu(){
  // 获取窗口
  const chuangkou = document.querySelector('.syh-lunbotu-changkou');
  // 获取窗口的宽度
  const oWidth = chuangkou.offsetWidth;
  // 获得准备移动的盒子
  const oyidong = document.querySelector('.top-lunbotu');
  // 获得小店导航按钮
  const xiaodianAnniu = document.querySelectorAll('.xiaodian-nav i');
  for(var i = 0; i < xiaodianAnniu.length; i++){
    // 给每一个按钮添加点击事件
    $(xiaodianAnniu[i]).click(function(){
      // 让其兄弟元素移除class类名
      $(this).siblings().removeClass('xiaodian-iClick');
      // 让自己本身添加class类名
      $(this).addClass('xiaodian-iClick');
      // 获得元素对应的index
      var iIndex = this.getAttribute('data-index');
      // 调用动画函数
      $(oyidong).animate({'left': -iIndex * oWidth});
    })
  }
  // 给窗口鼠标移动添加事件
  chuangkou.onmousemove = function(){
    
  }
  
}lunbotu();