// window.onload = function(){
//     var oDiv = document.getElementById ('lunboOne');
//     // oDiv.onmouseover = function(){
//     //     startMove(0);//透明度变为100
//     // }
//     // oDiv.onmouseout = function(){
//     //     startMove(1);//透明度变为30
//     // }
/**
 *　　　　　　　 ┏┓       ┏┓+ +
 *　　　　　　　┏┛┻━━━━━━━┛┻┓ + +
 *　　　　　　　┃　　　　　　 ┃
 *　　　　　　　┃　　　━　　　┃ ++ + + +
 *　　　　　　 █████━█████  ┃+
 *　　　　　　　┃　　　　　　 ┃ +
 *　　　　　　　┃　　　┻　　　┃
 *　　　　　　　┃　　　　　　 ┃ + +
 *　　　　　　　┗━━┓　　　 ┏━┛
 *               ┃　　  ┃
 *　　　　　　　　　┃　　  ┃ + + + +
 *　　　　　　　　　┃　　　┃　Code is far away from     bug with the animal protecting
 *　　　　　　　　　┃　　　┃ + 　　　　         神兽保佑,代码无bug
 *　　　　　　　　　┃　　　┃
 *　　　　　　　　　┃　　　┃　　+
 *　　　　　　　　　┃　 　 ┗━━━┓ + +
 *　　　　　　　　　┃ 　　　　　┣┓
 *　　　　　　　　　┃ 　　　　　┏┛
 *　　　　　　　　　┗┓┓┏━━━┳┓┏┛ + + + +
 *　　　　　　　　　 ┃┫┫　 ┃┫┫
 *　　　　　　　　　 ┗┻┛　 ┗┻┛+ + + +
 */

// 轮播图第一部分
var jias = 1;
setInterval(function () {
    if (jias == 1) {
        startMove(0);
        jias = 0;
    }
    else {
        startMove(1);
        jias = 1;
    }
}, 1000)
var timer = null;//一开始设置为null
var alpha = 1;//定义一个变量记录透明度
function startMove(iTarget, ffn) {
    var oDiv = document.getElementById('lunboOne');
    clearInterval(timer);//关闭定时器
    timer = setInterval(function () {//打开另一个计时器
        var speed = 0;
        if (alpha > iTarget) {
            speed = -0.1;//设置变化的速度
        } else {
            speed = 0.1;
        }
        if (alpha == iTarget) {
            clearInterval(timer);//相等的时候关闭计时器
        } else {
            alpha += speed;//透明度不断减小
            oDiv.style.filter = 'alpha(opacity:' + alpha + ')';//IE
            oDiv.style.opacity = alpha / 1;//火狐，chrome
        }//改变透明度
    }, 100)
}


// 轮播图二部分
var jias1 = 1;
setInterval(function () {
    if (jias1 == 1) {
        startMoveOne(0);
        jias1 = 0;
    }
    else {
        startMoveOne(1);
        jias1 = 1;
    }
}, 1000)
var timer1 = null;//一开始设置为null
var alpha1 = 1;//定义一个变量记录透明度
function startMoveOne(iTarget, ffn) {
    var oDiv = document.getElementById('lunbotwo');
    clearInterval(timer1);//关闭定时器
    timer1 = setInterval(function () {//打开另一个计时器
        var speed = 0;
        if (alpha1 > iTarget) {
            speed = -0.1;//设置变化的速度
        } else {
            speed = 0.1;
        }
        if (alpha1 == iTarget) {
            clearInterval(timer1);//相等的时候关闭计时器
        } else {
            alpha1 += speed;//透明度不断减小
            oDiv.style.filter = 'alpha(opacity:' + alpha1 + ')';//IE
            oDiv.style.opacity = alpha1 / 1;//火狐，chrome
        }//改变透明度
    }, 100)
}



// 轮播图第三部分
var jias2 = 1;
setInterval(function () {
    if (jias2 == 1) {
        startMoveTwo(0);
        jias2 = 0;
    }
    else {
        startMoveTwo(1);
        jias2 = 1;
    }
}, 1000)
var timer2 = null;//一开始设置为null
var alpha2 = 1;//定义一个变量记录透明度
function startMoveTwo(iTarget) {
    var oDiv = document.getElementById('lunbothree');
    clearInterval(timer2);//关闭定时器
    timer2 = setInterval(function () {//打开另一个计时器
        var speed = 0;
        if (alpha2 > iTarget) {
            speed = -0.1;//设置变化的速度
        } else {
            speed = 0.1;
        }
        if (alpha2 == iTarget) {
            clearInterval(timer2);//相等的时候关闭计时器
        } else {
            alpha2 += speed;//透明度不断减小
            oDiv.style.filter = 'alpha(opacity:' + alpha2 + ')';//IE
            oDiv.style.opacity = alpha2 / 1;//火狐，chrome
        }//改变透明度
    }, 100)
}


// 轮播图第四部分
var jias3 = 1;
setInterval(function () {
    if (jias3 == 1) {
        startMoveFour(0);
        jias3 = 0;
    }
    else {
        startMoveFour(1);
        jias3 = 1;
    }
}, 1000)
var timer3 = null;//一开始设置为null
var alpha3 = 1;//定义一个变量记录透明度
function startMoveFour(iTarget, ffn) {
    var oDiv = document.getElementById('lunbofour');
    clearInterval(timer3);//关闭定时器
    timer3 = setInterval(function () {//打开另一个计时器
        var speed = 0;
        if (alpha3 > iTarget) {
            speed = -0.1;//设置变化的速度
        } else {
            speed = 0.1;
        }
        if (alpha3 == iTarget) {
            clearInterval(timer3);//相等的时候关闭计时器
        } else {
            alpha3 += speed;//透明度不断减小
            oDiv.style.filter = 'alpha(opacity:' + alpha3 + ')';//IE
            oDiv.style.opacity = alpha3 / 1;//火狐，chrome
        }//改变透明度
    }, 100)
}


// 轮播图第五部分
var jias4 = 1;
setInterval(function () {
    if (jias4 == 1) {
        startMoveFive(0);
        jias4 = 0;
    }
    else {
        startMoveFive(1);
        jias4 = 1;
    }
}, 1000)
var timer4 = null;//一开始设置为null
var alpha4 = 1;//定义一个变量记录透明度
function startMoveFive(iTarget, ffn) {
    var oDiv = document.getElementById('lunbofive');
    clearInterval(timer4);//关闭定时器
    timer4 = setInterval(function () {//打开另一个计时器
        var speed = 0;
        if (alpha4 > iTarget) {
            speed = -0.1;//设置变化的速度
        } else {
            speed = 0.1;
        }
        if (alpha4 == iTarget) {
            clearInterval(timer4);//相等的时候关闭计时器
        } else {
            alpha4 += speed;//透明度不断减小
            oDiv.style.filter = 'alpha(opacity:' + alpha4 + ')';//IE
            oDiv.style.opacity = alpha4 / 1;//火狐，chrome
        }//改变透明度
    }, 100)
}



// 获取所有的轮播图内小点索引
var lunboLi = document.querySelectorAll('.index-lunbo-click li');
var lunboDiv = document.querySelectorAll('.index-lunbo div');
var lunboA = document.querySelectorAll('.toptidong')
// console.log(lunboA)
// var sum = 0;
// var timerLunbo =setInterval(function(){
// if(sum>4){
//     sum=0;
// }
// for(var a=0;a < lunboDiv.length;a++){
//     lunboDiv[a].style.display = "none"
//     lunboDiv[a].style.top = "97px";
//     console.log(a)
// }
// lunboDiv[sum].style.display = "block"
// // console.log(sum)
// setTimeout(function(){
//     lunboDiv[sum].style.top = "0px";
// },1000)
// // console.log(lunboA[sum].style.top)
// sum++
// },4000)
// 每隔一分钟运行函数自动播放
var suma = 1;
var timerL = setInterval(function () {
    lunboLi[suma].onclick();
    suma++
    if (suma > 4) {
        suma = 0;
    }
    $('.zhezhao').fadeIn('1', function () {
        $('.zhezhao').fadeOut('1');
    });
}, 10000)
// 给每个轮播图底部指数添加点击事件
for (var i = 0; i < lunboLi.length; i++) {
    lunboLi[i].onclick = function f1() {
        for (var j = 0; j < lunboLi.length; j++) {
            lunboDiv[j].style.display = "none";
            lunboDiv[j].style.top = "97px";
        }
        var index = this.getAttribute('data-index');
        lunboDiv[index].style.display = "block";
        setTimeout(function () {
            lunboDiv[index].style.top = "0px";
        }, 500)
        suma = index;
    }
}
// 灰色遮盖
$('.index-lunbo-click li').click(function () {
    $('.zhezhao').fadeIn('1', function () {
        $('.zhezhao').fadeOut('1');
    });
})
//   console.log($('.index-lunbo-click li'))


var timerLunbo2 = setInterval(yujisz, 50000)



function yujisz() {
    var timerlun = setInterval(function () {
        var spanOne = document.querySelector('.index-lunbo-click-one span');
        var num = 1;
        var spanLeft = spanOne.offsetWidth;
        // console.log(spanLeft)
        spanOne.style.width = spanLeft + num + 'px';
        if (spanLeft == 40) {
            spanOne.style.width = 0 + "px";
            num = 0;
            clearInterval(timerlun);
        }
    }, 250)

    setTimeout(function () {
        var timerlun2 = setInterval(function () {
            var spantwo = document.querySelector('.index-lunbo-click-two span');
            var num2 = 1;
            var spantwoLeft = spantwo.offsetWidth;
            // console.log(spantwoLeft )
            spantwo.style.width = spantwoLeft + num2 + 'px';
            if (spantwoLeft == 40) {
                spantwo.style.width = 0 + "px";
                num2 = 0;
                clearInterval(timerlun2);
            }
        }, 250)
    }, 10000)

    setTimeout(function () {
        var timerlun3 = setInterval(function () {
            var spanthree = document.querySelector('.index-lunbo-click-three span');
            var num3 = 1;
            var spanthreeLeft = spanthree.offsetWidth;
            // console.log(spanthreeLeft )
            spanthree.style.width = spanthreeLeft + num3 + 'px';
            if (spanthreeLeft == 40) {
                spanthree.style.width = 0 + "px";
                num3 = 0;
                clearInterval(timerlun3);
            }
        }, 250)
    }, 20000)

    setTimeout(function () {
        var timerlun4 = setInterval(function () {
            var spanfour = document.querySelector('.index-lunbo-click-four span');
            var num4 = 1;
            var spanfourLeft = spanfour.offsetWidth;
            //  console.log(spanfourLeft )
            spanfour.style.width = spanfourLeft + num4 + 'px';
            if (spanfourLeft == 40) {
                spanfour.style.width = 0 + "px";
                num4 = 0;
                clearInterval(timerlun4);
            }
        }, 250)
    }, 30000)

    setTimeout(function () {
        var timerlun5 = setInterval(function () {
            var spanfive = document.querySelector('.index-lunbo-click-five span');
            var num5 = 1;
            var spanfiveLeft = spanfive.offsetWidth;
            //  console.log(spanfiveLeft )
            spanfive.style.width = spanfiveLeft + num5 + 'px';
            if (spanfiveLeft == 40) {
                spanfive.style.width = 0 + "px";
                num5 = 0;
                clearInterval(timerlun5);
            }
        }, 250)
    }, 40000)
} yujisz();



//   var timerlun = setInterval(function(){
//     var spanOne = document.querySelector('.index-lunbo-click-one span');
//     var num = 1;
//     var spanLeft = spanOne.offsetWidth;
//     console.log(spanLeft)
//       spanOne.style.width = spanLeft+num +'px';
//       if(spanLeft == 40){
//           spanOne.style.width = 0 +"px";
//           num = 0;
//           clearInterval(timerlun);
//       }
//   },250)

//   setTimeout(function(){
//    var timerlun2 =  setInterval(function(){
//         var spantwo = document.querySelector('.index-lunbo-click-two span');
//         var num2 = 1;
//         var spantwoLeft = spantwo.offsetWidth;
//         console.log(spantwoLeft )
//           spantwo.style.width = spantwoLeft +num2 +'px';
//           if(spantwoLeft  == 40){
//             spantwo.style.width = 0 +"px";
//               num2 = 0;
//               clearInterval(timerlun2);
//           }
//       },250)
//   },10000)

// setTimeout(function(){
//    var timerlun3 =  setInterval(function(){
//         var spanthree = document.querySelector('.index-lunbo-click-three span');
//         var num3= 1;
//         var spanthreeLeft = spanthree.offsetWidth;
//         console.log(spanthreeLeft )
//         spanthree.style.width = spanthreeLeft +num3 +'px';
//           if(spanthreeLeft  == 40){
//             spanthree.style.width = 0 +"px";
//               num3 = 0;
//               clearInterval(timerlun3);
//           }
//       },250)
//   },20000)

//   setTimeout(function(){
//     var timerlun4 =  setInterval(function(){
//          var spanfour = document.querySelector('.index-lunbo-click-four span');
//          var num4 = 1;
//          var spanfourLeft = spanfour.offsetWidth;
//          console.log(spanfourLeft )
//          spanfour.style.width = spanfourLeft +num4 +'px';
//            if(spanfourLeft  == 40){
//             spanfour.style.width = 0 +"px";
//                num4 = 0;
//                clearInterval(timerlun4);
//            }
//        },250)
//    },30000)

//    setTimeout(function(){
//     var timerlun5 =  setInterval(function(){
//          var spanfive = document.querySelector('.index-lunbo-click-five span');
//          var num5 = 1;
//          var spanfiveLeft = spanfive.offsetWidth;
//          console.log(spanfiveLeft )
//          spanfive.style.width = spanfiveLeft +num5 +'px';
//            if(spanfiveLeft  == 40){
//             spanfive.style.width = 0 +"px";
//                num5 = 0;
//                clearInterval(timerlun5);
//            }
//        },250)
//    },40000)


// $('.index-product-center-one-title-one-tanxing').click(function(){
//     $(this).removeClass('index-product-center-one-title-one-tanxing');
//     // $(this).toggleClass('index-product-center-one-title-one-tanxing');
//     $(this).addClass('index-product-center-one-title-one-tanxing2')
// })



// 鼠标点击图片变换 字体变色
$('.product-show-more').on('click', function () {
    if ($(this).text() == '收起') {
        $('.product-hide-more').slideUp()
        $(this).text('查看更多')
    } else {
        $('.product-hide-more').slideDown()
        $(this).text('收起')
    }
})

//   ============================================================================================



// 获取元素
// 每一行
const oRow = document.querySelectorAll('.index-product-center>div');
// 获得需要显示的盒子
const oBoxHide = document.querySelectorAll('.index-product-center>div>div');
// 获得所有需要隐藏的
const hideBoxs = document.querySelectorAll('.product-center');
// 获得所有需要点击项
const clickBoxs = document.querySelectorAll('.index-product-center>div>ul>li>a ');
// 让所有的隐藏
$(oBoxHide).stop().slideUp();
$(hideBoxs[0]).slideDown();
console.log(hideBoxs[0]);
// console.log(oRow);
// 添加自定义属性
for (var syhI = 0; syhI < clickBoxs.length; syhI++) {
    clickBoxs[syhI].setAttribute('syh-indexs', syhI);
}
// 给点击项添加事件
$(clickBoxs).click(function () {
    $('.product').removeClass('products');
    // 获得元素自定义属性
    var syhIndex = this.getAttribute('syh-indexs');
    // console.log(syhIndex);
    // 让所有的隐藏
    $(hideBoxs).stop().slideUp();
    // 让对应的显示
    $(hideBoxs[syhIndex]).stop().slideDown();
    $(this).children('div').addClass('products');
})
// 设置一个锁
var flage = null;
// 添加点击事件
$(oRow).click(function () {
    if (this.getAttribute('a') != flage) {
        flage = this.getAttribute('a');
        // 让所有的隐藏
        $(oBoxHide).stop().slideUp();
        // 让点击的哪一个显示
        $(this.children[1]).stop().slideDown();
        console.log('不是同一行');
    }
})


































// 精灵图部分
function jltYd(){
    // 获得元素
    var oJlt = document.querySelectorAll('.jingling-center a');
    // 循环遍历给每个元素添加事件
    for(var i = 0; i < oJlt.length; i++){
      // 给元素添加一个索引值
      oJlt[i].setAttribute('data-index',i);
      // 给每个元素添加鼠标移入事件
      oJlt[i].onmouseenter = function(e){
        // 获得本元素子第一个子元素
        var firstEle = this.children[0];
        // 调用基础动画
        lbtPositionY(-4425,firstEle);
        this.children[1].classList.add('bulue');
      }
      // 给每个元素添加鼠标移出事件
      oJlt[i].onmouseleave = function(){
        // 获得本元素子第一个子元素
        var firstEle = this.children[0];
        // 调用基础动画
        lbtPositionY(0,firstEle);
        this.children[1].classList.remove('bulue');
      }
    }
    // 基础位置切换函数
    function lbtPositionY(positionVal,ele){
      clearInterval(ele.timer);
      var oVal = parseInt(window.getComputedStyle(ele,null)['backgroundPositionY']);
      // 步进值
      var step = positionVal < 0 ? -75 : 75 ;
      ele.timer = setInterval(function(){
        var aa = oVal += step ;
        if(aa >= 0){
          aa = 0;
        }else if(aa <= -4425){
          aa = -4425;
        }
        ele.style.backgroundPositionY = aa +'px';
        // 判断是否到达目标值
        if(parseInt(aa) == positionVal){
          // 清除清除定时器
          clearInterval(ele.timer);
        }
      },20);
    }
  }jltYd();









































// ===============================================================================================







// 鼠标移入字体变色
// $('.index-product-center-one-title>li>a').mouseover(function(){
//     $(this).css('color',"#00c1de");
//   })
//   $('.index-product-center-one-title>li>a').mouseout(function(){
//     $(this).css('color',"#373d41");
//   })




// =======================================轮播图区域=============================================
