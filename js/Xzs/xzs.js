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
setInterval(function(){
    if(jias == 1){
        startMove(0);
        jias = 0;
    }
    else{
        startMove(1);
        jias = 1;
    }
},1000)
var timer = null;//一开始设置为null
var alpha = 1;//定义一个变量记录透明度
function startMove(iTarget,ffn){
    var oDiv = document.getElementById('lunboOne');
    clearInterval(timer);//关闭定时器
        timer = setInterval(function(){//打开另一个计时器
            var speed = 0;
            if(alpha>iTarget){
                speed = -0.1;//设置变化的速度
            }else{
                speed = 0.1;
            }
            if(alpha==iTarget){
                clearInterval(timer);//相等的时候关闭计时器
            }else{
                alpha+=speed;//透明度不断减小
                oDiv.style.filter = 'alpha(opacity:'+alpha+')';//IE
                oDiv.style.opacity = alpha/1;//火狐，chrome
            }//改变透明度
    },100)
}


// 轮播图二部分
var jias1 = 1;
setInterval(function(){
    if(jias1 == 1){
        startMoveOne(0);
        jias1 = 0;
    }
    else{
        startMoveOne(1);
        jias1 = 1;
    }
},1000)
var timer1 = null;//一开始设置为null
var alpha1 = 1;//定义一个变量记录透明度
function  startMoveOne(iTarget,ffn){
    var oDiv = document.getElementById('lunbotwo');
    clearInterval(timer1);//关闭定时器
        timer1 = setInterval(function(){//打开另一个计时器
            var speed = 0;
            if(alpha1>iTarget){
                speed = -0.1;//设置变化的速度
            }else{
                speed = 0.1;
            }
            if(alpha1==iTarget){
                clearInterval(timer1);//相等的时候关闭计时器
            }else{
                alpha1+=speed;//透明度不断减小
                oDiv.style.filter = 'alpha(opacity:'+alpha1+')';//IE
                oDiv.style.opacity = alpha1/1;//火狐，chrome
            }//改变透明度
    },100)
}



// 轮播图第三部分
var jias2 = 1;
setInterval(function(){
    if(jias2 == 1){
        startMoveTwo(0);
        jias2 = 0;
    }
    else{
        startMoveTwo(1);
        jias2 = 1;
    }
},1000)
var timer2 = null;//一开始设置为null
var alpha2 = 1;//定义一个变量记录透明度
function startMoveTwo(iTarget){
    var oDiv = document.getElementById('lunbothree');
    clearInterval(timer2);//关闭定时器
        timer2 = setInterval(function(){//打开另一个计时器
            var speed = 0;
            if(alpha2>iTarget){
                speed = -0.1;//设置变化的速度
            }else{
                speed = 0.1;
            }
            if(alpha2==iTarget){
                clearInterval(timer2);//相等的时候关闭计时器
            }else{
                alpha2+=speed;//透明度不断减小
                oDiv.style.filter = 'alpha(opacity:'+alpha2+')';//IE
                oDiv.style.opacity = alpha2/1;//火狐，chrome
            }//改变透明度
    },100)
}


// 轮播图第四部分
var jias3 = 1;
setInterval(function(){
    if(jias3 == 1){
        startMoveFour(0);
        jias3 = 0;
    }
    else{
        startMoveFour(1);
        jias3 = 1;
    }
},1000)
var timer3 = null;//一开始设置为null
var alpha3 = 1;//定义一个变量记录透明度
function startMoveFour(iTarget,ffn){
    var oDiv = document.getElementById('lunbofour');
    clearInterval(timer3);//关闭定时器
        timer3 = setInterval(function(){//打开另一个计时器
            var speed = 0;
            if(alpha3>iTarget){
                speed = -0.1;//设置变化的速度
            }else{
                speed = 0.1;
            }
            if(alpha3==iTarget){
                clearInterval(timer3);//相等的时候关闭计时器
            }else{
                alpha3+=speed;//透明度不断减小
                oDiv.style.filter = 'alpha(opacity:'+alpha3+')';//IE
                oDiv.style.opacity = alpha3/1;//火狐，chrome
            }//改变透明度
    },100)
}


// 轮播图第五部分
var jias4 = 1;
setInterval(function(){
    if(jias4 == 1){
        startMoveFive(0);
        jias4 = 0;
    }
    else{
        startMoveFive(1);
        jias4 = 1;
    }
},1000)
var timer4 = null;//一开始设置为null
var alpha4 = 1;//定义一个变量记录透明度
function  startMoveFive(iTarget,ffn){
    var oDiv = document.getElementById('lunbofive');
    clearInterval(timer4);//关闭定时器
        timer4 = setInterval(function(){//打开另一个计时器
            var speed = 0;
            if(alpha4>iTarget){
                speed = -0.1;//设置变化的速度
            }else{
                speed = 0.1;
            }
            if(alpha4==iTarget){
                clearInterval(timer4);//相等的时候关闭计时器
            }else{
                alpha4+=speed;//透明度不断减小
                oDiv.style.filter = 'alpha(opacity:'+alpha4+')';//IE
                oDiv.style.opacity = alpha4/1;//火狐，chrome
            }//改变透明度
    },100)
}



// 获取所有的轮播图内小点索引
var lunboLi=document.querySelectorAll('.index-lunbo-click li');
var lunboDiv = document.querySelectorAll('.index-lunbo div');
var lunboA =  document.querySelectorAll('.toptidong')
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
var sum = 1;
var timerL = setInterval(function(){
    lunboLi[sum].onclick();
    sum++
    if(sum>4){
        sum = 0;
    }
    $('.zhezhao').fadeIn('1',function(){
        $('.zhezhao').fadeOut('1');
      });
},10000)
// 给每个轮播图底部指数添加点击事件
for(var i=0;i<lunboLi.length;i++){
    lunboLi[i].onclick = function f1(){
        for(var j=0;j<lunboLi.length;j++){
            lunboDiv[j].style.display="none";
            lunboDiv[j].style.top ="97px";
        }
        var index = this.getAttribute('data-index');
        lunboDiv[index].style.display="block";
        setTimeout(function(){
            lunboDiv[index].style.top ="0px";
        },500)
        sum = index;
    }
}
// 灰色遮盖
$('.index-lunbo-click li').click(function(){
    $('.zhezhao').fadeIn('1',function(){
      $('.zhezhao').fadeOut('1');
    });
  })
//   console.log($('.index-lunbo-click li'))


  var timerLunbo2 = setInterval(yujisz,50000)



function yujisz(){
    var timerlun = setInterval(function(){
        var spanOne = document.querySelector('.index-lunbo-click-one span');
        var num = 1;
        var spanLeft = spanOne.offsetWidth;
        // console.log(spanLeft)
          spanOne.style.width = spanLeft+num +'px';
          if(spanLeft == 40){
              spanOne.style.width = 0 +"px";
              num = 0;
              clearInterval(timerlun);
          }
      },250)
    
      setTimeout(function(){
       var timerlun2 =  setInterval(function(){
            var spantwo = document.querySelector('.index-lunbo-click-two span');
            var num2 = 1;
            var spantwoLeft = spantwo.offsetWidth;
            // console.log(spantwoLeft )
              spantwo.style.width = spantwoLeft +num2 +'px';
              if(spantwoLeft  == 40){
                spantwo.style.width = 0 +"px";
                  num2 = 0;
                  clearInterval(timerlun2);
              }
          },250)
      },10000)
    
    setTimeout(function(){
       var timerlun3 =  setInterval(function(){
            var spanthree = document.querySelector('.index-lunbo-click-three span');
            var num3= 1;
            var spanthreeLeft = spanthree.offsetWidth;
            // console.log(spanthreeLeft )
            spanthree.style.width = spanthreeLeft +num3 +'px';
              if(spanthreeLeft  == 40){
                spanthree.style.width = 0 +"px";
                  num3 = 0;
                  clearInterval(timerlun3);
              }
          },250)
      },20000)
    
      setTimeout(function(){
        var timerlun4 =  setInterval(function(){
             var spanfour = document.querySelector('.index-lunbo-click-four span');
             var num4 = 1;
             var spanfourLeft = spanfour.offsetWidth;
            //  console.log(spanfourLeft )
             spanfour.style.width = spanfourLeft +num4 +'px';
               if(spanfourLeft  == 40){
                spanfour.style.width = 0 +"px";
                   num4 = 0;
                   clearInterval(timerlun4);
               }
           },250)
       },30000)
     
       setTimeout(function(){
        var timerlun5 =  setInterval(function(){
             var spanfive = document.querySelector('.index-lunbo-click-five span');
             var num5 = 1;
             var spanfiveLeft = spanfive.offsetWidth;
            //  console.log(spanfiveLeft )
             spanfive.style.width = spanfiveLeft +num5 +'px';
               if(spanfiveLeft  == 40){
                spanfive.style.width = 0 +"px";
                   num5 = 0;
                   clearInterval(timerlun5);
               }
           },250)
       },40000)
}yujisz();



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
$('.product-show-more').on('click',function(){
    if($(this).text()=='收起'){
      $('.product-hide-more').slideUp()
      $(this).text('查看更多')
    }else{
      $('.product-hide-more').slideDown()
      $(this).text('收起')
    }
    
  // console.log($(".product-show-more").offsetHeight)
  // console.log($('.product-hide-more'))
  })
  
  var  indexProduct = document.querySelectorAll('.product');
  console.log(indexProduct)
  var productCenter = document.querySelectorAll('.product-center')
  console.log(productCenter)
  var hideCcenter = document.querySelectorAll('.index-product-hide-center')
  console.log(hideCcenter)
  indexProduct[4].setAttribute('data-number',256);
  indexProduct[5].setAttribute('data-number',400);
  indexProduct[6].setAttribute('data-number',256);
  indexProduct[7].setAttribute('data-number',328);
  indexProduct[8].setAttribute('data-number',184);
  indexProduct[9].setAttribute('data-number',184);
  indexProduct[10].setAttribute('data-number',184);
  indexProduct[11].setAttribute('data-number',256);
  indexProduct[12].setAttribute('data-number',544);
  indexProduct[13].setAttribute('data-number',256);
  indexProduct[14].setAttribute('data-number',112);
  indexProduct[15].setAttribute('data-number',184);
  indexProduct[16].setAttribute('data-number',256);
  indexProduct[17].setAttribute('data-number',112);
  indexProduct[18].setAttribute('data-number',112);
  for(var v=0;v<4;v++){
      indexProduct[v].setAttribute('data-number',400);
  }
  for(var e = 0;e<indexProduct.length;e++){
      indexProduct[e].setAttribute('data-index',e)
      indexProduct[e].onclick = function(){
        var num = this.getAttribute('data-number')
          for(var j = 0; j < indexProduct.length; j++){
              indexProduct[j].classList.remove('products');
              $(productCenter[j].parentElement).css('display',"none");
              // $(productCenter[j].parentElement).animate({"height":0});
             if(productCenter[j].getAttribute('data-number') != num){
              //  console.log(num)
              //  console.log(productCenter[j])
              //  console.log('if')
              
              $(productCenter[j]).fadeOut();
             
             } else{
              // console.log(num);
              // console.log('else')
              $(productCenter[j]).css('display','none')
              $( productCenter[j].parentElement).animate({'height':0}).css('display',"none")
              console.log(productCenter[j].parentElement)
              // productCenter[j].parentElement.style.height = num;
             }
              // $(indexProduct[j].parentElement.children[1]).css('color','#373d41');
          }
          var sum = this.getAttribute('data-index')
          this.classList.add('products');
          $(productCenter[sum]).animate({'height':num}).fadeIn();
          $(productCenter[sum].parentElement).animate({"height":num}).css("display","block");
          // $(productCenter[sum].parentElement.parentElement.siblings).animate({'height':0});
          // console.log(productCenter[sum].parentElement)
          // console.log(productCenter[sum].parentElement.parentElemen.siblings)
          // $(this.parentElement.children[1]).css('color','#00c1de')
      }
  }

// 鼠标移入字体变色
// $('.index-product-center-one-title>li>a').mouseover(function(){
//     $(this).css('color',"#00c1de");
//   })
//   $('.index-product-center-one-title>li>a').mouseout(function(){
//     $(this).css('color',"#373d41");
//   })




