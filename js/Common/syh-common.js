$(function(){
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
// 左边tab切换 向右移动显示效果
  // 获取元素
  var oMouLi = document.querySelectorAll('.syh-lists li');
  // 活动移动的元素
  var yidong = document.querySelector('.syh-tab');
  // 获得tab切换下面的所有div
  var tabqh = yidong.children;
  // 给元素添加鼠标移入事件
  for(var i = 0; i < oMouLi.length; i++){
    // 给每一给添加一个自定义属性
    oMouLi[i].setAttribute('index',i);
    oMouLi[i].onmouseover = function(){
      // 移动元素
      yidong.style.left = 200 + 'px';
      // 让所有元素隐藏
      for(var j = 0; j < tabqh.length; j++){
        tabqh[j].classList.remove('syh-tab-active');
      }
      // 让鼠标移入的对应的显示
      tabqh[this.getAttribute('index')].classList.add('syh-tab-active');
      yidong.onmouseover = function(){
        this.style.left = '200px';
      }
      yidong.onmouseout = function(){
        this.style.left = '-1020px';
      }
    }
    // 添加鼠标移出事件
    oMouLi[i].onmouseout = function(){
      // 移动元素
      yidong.style.left = '-1020px';
    }
  }
  // nav的tab切换
    // 获取元素
    var oNavTab = document.querySelectorAll('.syh-tab-nav');
    // 获得切换项
    var oNavBlock = document.querySelectorAll('.syh-navBottom-list>div');
    // 遍历元素
    for(var ii = 0; ii < oNavTab.length; ii++){
      // 给每个元素添加鼠标移入事件
      oNavTab[ii].onmouseover = function(){
        // 遍历让所有tab项隐藏
        for(var kk = 0; kk < oNavBlock.length; kk++){
          oNavBlock[kk].classList.remove('syh-nav-block');
          oNavTab[kk].classList.remove('syh-nav-active');
        }
        document.querySelector('.syh-navBottom-list').style.display = 'block';
          // 让移入的显示
        oNavBlock[this.getAttribute('data-index')].classList.add('syh-nav-block');
        this.classList.add('syh-nav-active');
        timerOut();
      }
      oNavTab[ii].onmouseout = function(){
        document.querySelector('.syh-navBottom-list').style.display = 'none';
        if(window.getComputedStyle(document.querySelector('.syh-navBottom-list'),null)['display'] == 'none'){
           // 遍历让所有tab项隐藏
        for(var kk = 0; kk < oNavBlock.length; kk++){
          oNavTab[kk].classList.remove('syh-nav-active');
        }
        }
      }
    }
    function timerOut(){
      var timer = setInterval(function(){
        if(window.getComputedStyle(document.querySelector('.syh-navBottom-list'),null)['display'] == 'none'){
           // 遍历让所有tab项隐藏
        for(var kk = 0; kk < oNavBlock.length; kk++){
          oNavTab[kk].classList.remove('syh-nav-active');
        }
        // 清除定时器
        clearInterval('timer');
        }
      },10);
    }
    // 获取元素
    // var syhRightFix = document.querySelector('.syh-right-fixd');
    // var syhRightBlock = document.querySelector('.syh-right-fixd-list');
    $('.syh-right-fixd').mouseout(function(){
      $('.syh-right-fixd-list').stop().fadeOut(300);
    }).mouseover(function(){
      $('.syh-right-fixd-list').stop().fadeIn(300);
    })
    $('.xiaocha').click(function(){
      $('.syh-right-fixd-list').stop().fadeOut(300);
    });
    
})