// $('.raw').on('click',function(){
//     for(var i=0;i<2;i++){
//         $('.raw').removeClass('later')
//     }
//     $(this).addClass('later')
// })
// 企业部分和个人部分的切换
// 获取企业和个人的点击项

var innerRaw = document.querySelectorAll('.raw');
// for循环所有的切换项
for(var i=0;i<innerRaw.length;i++){
    innerRaw[i].onclick = function(){
// 获取当前有later属性的切换项
var later = document.querySelector('.later');
// 获取later中的data-index值
var index = later.getAttribute('data-index');
// 将id为index的div隐藏掉
document.getElementById(index).style.display = "none";
// 移除点击项上的later属性
later.classList.remove('later')
// 给点击的添加属性   
this.classList.add('later');
// 获取当钱点击的值的自定义值
var sum = this.getAttribute('data-index');
$(document.getElementById(sum)).fadeIn(1000);
}    }



$('.con-left-box-center').on('click', function () {
    // console.log(this)
    // console.log('haha')
    var con = document.querySelectorAll('.con-left-box-center')
    var conCentter = document.querySelectorAll('.con-right')
    console.log(conCentter)
    for (var i = 0; i < con.length; i++) {
        con[i].classList.remove('con-left-box-active')
        // console.log(con[i].children[0])
        // con[i].style.boxShadow = "none";
        con[i].children[0].classList.remove('active')
    }
    // for(var i=0;i<)
    $(this).addClass('con-left-box-active')
    $(this).find('i').addClass('active')
})
 
 
// 产品展示
  var conLeftBox = document.querySelectorAll('.con-left-box-center')
//   console.log(conLeftBox[0])
  $('.con-left-box-center:first-child').on('click',function(){
    $(document.querySelector('.con-right-tit')).text ("专业版配置")
   $(document.querySelector('.con-right-text')).text("高性能配置，适用企业级、多样应用场景");
   $(document.querySelector('.con-right-text2')).text("1个月 可免费使用的累积运行时长");
   $(document.querySelector('.con-right-bottom-price')).html("<span>免费体验</span>1个月");
  })
  $('.con-left-box-center:nth-child(2)').on('click',function(){
     console.log( document.querySelector('.con-right-text:first-child'))
   $(document.querySelector('.con-right-tit')).text ("通用版配置")
   $(document.querySelector('.con-right-text2')).text("使用于网站应用程序、普通数据处理等应用场景");
   $(document.querySelector('.con-right-text')).text("3个月 可免费使用的累积运行时长");
   $(document.querySelector('.con-right-bottom-price')).html("<span>免费体验</span>3个月");
  })
  $('.con-left-box-center:nth-child(3)').on('click',function(){

    $(document.querySelector('.con-right-tit')).text ("基础版配置")
   $(document.querySelector('.con-right-text2')).text("适用轻量级网站、低负载应用场景");
   $(document.querySelector('.con-right-text')).text("6个月 可免费使用的累积运行时长");
   $(document.querySelector('.con-right-bottom-price')).html("<span>免费体验</span>6个月");
  })


  var box = document.querySelectorAll('.cons-left-tab-nav-botton-one');
  var navLi = document.querySelectorAll('.tab-nav-li');
  var navTop = document.querySelectorAll('.cons-left-tab-nav-top');
  // console.log(box)
  $('.cons-left-tab-nav-top').on('click', function () {
      for (var i = 0; i < box.length; i++) {
          box[i].style.display = "none";
      }
      $(this).addClass('act');

      var number = $(this).attr('data-number')
      // console.log(number)
      $(this).siblings().removeClass('act')
      // $('.tab-nav-li')
      // console.log($('.tab-nav-li'))
      $('.tab-nav-li').eq(0).addClass('nav-li-show');
      $('.tab-nav-li').eq(0).find('i').addClass('show');
      $('.tab-nav-li').eq(1).removeClass('nav-li-show');
      $('.tab-nav-li').eq(1).find('i').removeClass('show')
      $('.tab-nav-li').eq(2).removeClass('nav-li-show');
      $('.tab-nav-li').eq(2).find('i').removeClass('show')
      $('.tab-nav-li').eq(4).removeClass('nav-li-show');
      $('.tab-nav-li').eq(4).find('i').removeClass('show')
      $('.tab-nav-li').eq(5).removeClass('nav-li-show');
      $('.tab-nav-li').eq(5).find('i').removeClass('show')
      $('.tab-nav-li').eq(7).removeClass('nav-li-show');
      $('.tab-nav-li').eq(7).find('i').removeClass('show')
      $('.tab-nav-li').eq(8).removeClass('nav-li-show');
      $('.tab-nav-li').eq(8).find('i').removeClass('show')
      $('.tab-nav-li').eq(3).addClass('nav-li-show');
      $('.tab-nav-li').eq(3).find('i').addClass('show');
      $('.tab-nav-li').eq(6).addClass('nav-li-show');
      $('.tab-nav-li').eq(6).find('i').addClass('show');
      console.log($('tab-nab-li').eq(0))
      box[number].style.display = "block"
  })
  $('.tab-nav-li').on('click',function(){
     
      // for(var c=0;c<navLi;c++){
      //       navLi[i].className = "tab-nav-li";
      // }
      $(this).addClass('nav-li-show').siblings().removeClass('nav-li-show')
      $(this).find('i').addClass('show');
      $(this).siblings().find('i').removeClass('show');
  })
          
     $(navLi[0]).on('click',function(){
      $(document.querySelector('.cons-right-tit')).text ("专业版配置")
      $(document.querySelector('.cons-right-text')).text("一主两备资源独享规格，专为企业核心数据打造");
      $(document.querySelector('.cons-right-text2')).text("1个月 可免费使用的累积运行时长");
      $(document.querySelector('.cons-right-bottom-price')).html("<span>免费体验</span>1个月");
     })
     $(navLi[1]).on('click',function(){
      $(document.querySelector('.cons-right-tit')).text ("通用版配置")
      $(document.querySelector('.cons-right-text')).text("一主一备经典高可用架构，适用于企业生产数据库");
      $(document.querySelector('.cons-right-text2')).text("3个月 可免费使用的累积运行时长");
      $(document.querySelector('.cons-right-bottom-price')).html("<span>免费体验</span>3个月");
     })
     $(navLi[2]).on('click',function(){
      $(document.querySelector('.cons-right-tit')).text ("基础版配置")
      $(document.querySelector('.cons-right-text')).text("“单机基础版”高性价比，适用于中小企业内部系统");
      $(document.querySelector('.cons-right-text2')).text("6个月 可免费使用的累积运行时长");
      $(document.querySelector('.cons-right-bottom-price')).html("<span>免费体验</span>6个月");
     })
     $(navLi[3]).on('click',function(){
      $(document.querySelector('.cons-right-tit')).text ("专业版配置")
      $(document.querySelector('.cons-right-text')).text("完美支持windows.NET平台，数据管理/商业智能");
      $(document.querySelector('.cons-right-text2')).text("1个月 可免费使用的累积运行时长");
      $(document.querySelector('.cons-right-bottom-price')).html("<span>免费体验</span>1个月");
     })
     $(navLi[4]).on('click',function(){
      $(document.querySelector('.cons-right-tit')).text ("通用版配置")
      $(document.querySelector('.cons-right-text')).text("完美支持windows.NET平台，适用于企业内部生产数据");
      $(document.querySelector('.cons-right-text2')).text("3个月 可免费使用的累积运行时长");
      $(document.querySelector('.cons-right-bottom-price')).html("<span>免费体验</span>3个月");
     })
     $(navLi[5]).on('click',function(){
      $(document.querySelector('.cons-right-tit')).text ("基础版配置")
      $(document.querySelector('.cons-right-text')).text("完美支持windows.NET平台，易用/简单/极高性价比");
      $(document.querySelector('.cons-right-text2')).text("6个月 可免费使用的累积运行时长");
      $(document.querySelector('.cons-right-bottom-price')).html("<span>免费体验</span>6个月");
     })
     $(navLi[6]).on('click',function(){
      $(document.querySelector('.cons-right-tit')).text ("专业版配置")
      $(document.querySelector('.cons-right-text')).text("轻松处理空间信息，强大的NoSQL兼容性");
      $(document.querySelector('.cons-right-text2')).text("1个月 可免费使用的累积运行时长");
      $(document.querySelector('.cons-right-bottom-price')).html("<span>免费体验</span>1个月");
     })
     $(navLi[7]).on('click',function(){
      $(document.querySelector('.cons-right-tit')).text ("通用版配置")
      $(document.querySelector('.cons-right-text')).text("面向企业复杂SQL处理的OLTP在线事务处理场景");
      $(document.querySelector('.cons-right-text2')).text("3个月 可免费使用的累积运行时长");
      $(document.querySelector('.cons-right-bottom-price')).html("<span>免费体验</span>3个月");
     })
     $(navLi[8]).on('click',function(){
      $(document.querySelector('.cons-right-tit')).text ("基础版配置")
      $(document.querySelector('.cons-right-text')).text("支持OSS云存储扩展，支持数据仓库");
      $(document.querySelector('.cons-right-text2')).text("6个月 可免费使用的累积运行时长");
      $(document.querySelector('.cons-right-bottom-price')).html("<span>免费体验</span>6个月");
     })
   
      $(navTop[0]).on('click',function(){
      $(document.querySelector('.cons-right-tit')).text ("专业版配置")
      $(document.querySelector('.cons-right-text')).text("一主两备资源独享规格，专为企业核心数据打造");
      $(document.querySelector('.cons-right-text2')).text("1个月 可免费使用的累积运行时长");
      $(document.querySelector('.cons-right-bottom-price')).html("<span>免费体验</span>1个月");
      })
      $(navTop[1]).on('click',function(){
      $(document.querySelector('.cons-right-tit')).text ("专业版配置")
      $(document.querySelector('.cons-right-text')).text("完美支持windows.NET平台，数据管理/商业智能");
      $(document.querySelector('.cons-right-text2')).text("1个月 可免费使用的累积运行时长");
      $(document.querySelector('.cons-right-bottom-price')).html("<span>免费体验</span>1个月");
      })
      $(navTop[2]).on('click',function(){
      $(document.querySelector('.cons-right-tit')).text ("专业版配置")
      $(document.querySelector('.cons-right-text')).text("轻松处理空间信息，强大的NoSQL兼容性");
      $(document.querySelector('.cons-right-text2')).text("1个月 可免费使用的累积运行时长");
      $(document.querySelector('.cons-right-bottom-price')).html("<span>免费体验</span>1个月");
     })

    //  产品展示具体内容
    $('.pro-center-right-center').on('click',function(){
      
      var topCenter = document.querySelectorAll('.pro-center-top-center');
      var proHid = document.querySelectorAll('.pro-hide')
      for(var i = 0;i<proHid.length;i++){
          proHid[i].style.display = "none"
      }
      var sum = $(this).attr('data-sum')
        if($(this).attr('data-num') == 0){
         $(this).css('transform','rotate(180deg)')
         $(this).attr('data-num','1')
         $(topCenter[sum]).css('border-color',' #00c1de')
         $(proHid[sum]).css('display','block')
        }else{
         $(this).css('transform','rotate(0deg)')
         $(this).attr('data-num','0')
         // console.log(text)
         console.log(sum)
         $(topCenter[sum]).css('border-color','  #d9d9d9')
         $(proHid[sum]).css('display','none')
        }
    })
 
     $('.pro-hide-ul>.pro-hide-ul-li').on('click',function(){
         var topCenter = document.querySelectorAll('.pro-center-top-center');
         var centerRight = document.querySelectorAll('.pro-center-right-center');
         var bandWidth = document.querySelectorAll('.bandwidth');
         var tryOut = document.querySelectorAll('.pro-bottom-p')
         console.log(bandWidth[0])
         var proHid = document.querySelectorAll('.pro-hide');
         var sum = $(this).attr('data-sum');
         $(this).addClass('gray').siblings().removeClass('gray');
         $(proHid[sum]).css('display','none')
         var text = $(this).find('span').text()
         $(bandWidth[sum]).text(text);
         var month = $(this).attr('data-month');
         $(centerRight[sum]).css('transform','rotate(0deg)');
         $(centerRight[sum]).attr('data-num','0')
         $(topCenter[sum]).css('border-color','  #d9d9d9')
         $(tryOut[sum]).html('<span>免费体验</span>'+month+'');
         // console.log(sum)
         // console.log(text)
         console.log($(bandWidth[sum]).text())
    
     })

    //  鼠标移上突出显示


$('.tab-center-li-box').on('mouseover',function(){
    $(this).css( 'box-shadow','0 2px 15px rgba(0,0,0,.1)');
    $(this).css(' background-color',' hsla(0,0%,100%,.5))')
    //  alert('haha')
})
// background-color: hsla(0,0%,100%,.5);
    // background-color: hsla(0,0%,100%,.5);
    // box-shadow: 0 2px 15px rgba(0,0,0,.1);

$('.tab-btn-center').on('click',function(){
    if($(this).attr('data-one') == 0){
        $('.promotion-tab-center-ul').css('height','auto');
        $(this).attr('data-one','1')
    }else{
        $('.promotion-tab-center-ul').css('height','594');
        $(this).attr('data-one','0')
    }
})

$('.promotion-tab-li').on('click',function(){
    var sum = $(this).attr('data-two');
    console.log(sum)
     var box = document.querySelectorAll('.promotion-tab-center');
     console.log(box)

     for(var i=0;i<box.length;i++){
        box[i].style.display = "none";
     }
     $(box[sum]).css('display','block');
     $(this).css('color','#00c1de').siblings().css('color','#373d41');
})


// 个人部分点击tab切换
$('.gr-con-tab-li').on('click',function(){
    $(this).css('background-color','#00c1de').siblings().css('background-color','#ffffff');
    $(this).css('color','#ffffff').siblings().css('color','#713d41');
})
$('.gr-con-tab-li:first-child()').on('click',function(){
    $('.gr-inner-li-title2').text('MySQL');
    $('.gr-inner-li-exp2').text('5.7版本');
    $('.gr-inner-li-title2').text('1 核 1GB（单机基础版）');
    $('.con2-right-text').text('全球最受欢迎的开源数据库之一');
})

$('.gr-con-tab-li:nth-child(2)').on('click',function(){
    $('.gr-inner-li-title2').text('Microsoft SQL Server');
    $('.gr-inner-li-exp2').text('2012 Web版本');
    $('.gr-inner-li-title2').text('2核 4G （独享套餐）');
    $('.con2-right-text').text('完美支持Windows平台.NET架构的应用程序');
})

$('.gr-con-tab-li:last-child()').on('click',function(){
    $('.gr-inner-li-title2').text('PostgreSQL');
    $('.gr-inner-li-exp2').text('9.4版本');
    $('.gr-inner-li-title2').text('1 核 1GB');
    $('.con2-right-text').text('面向企业复杂SQL在线事务处理场景');
})

$('.tab-center-li-box').on('mouseover',function(){
    $(this).css( 'box-shadow','0 2px 15px rgba(0,0,0,.1)');
    $(this).css(' backgroundColor',' hsla(0,0%,100%,.5))')
    $(this).removeClass('none')
    // console.log($(this))
})
$('.tab-center-li-box').on('mouseleave',function(){
    $(this).addClass('none')
    console.log($(this))
})

// 点击切换按钮 让最底部div变为594px
$('.raw').on('click',function(){
    $('.promotion-tab-center-ul').css('height','594');
})
