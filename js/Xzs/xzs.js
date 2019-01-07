// window.onload = function(){
//     var oDiv = document.getElementById ('lunboOne');
//     // oDiv.onmouseover = function(){
//     //     startMove(0);//透明度变为100
//     // }
//     // oDiv.onmouseout = function(){
//     //     startMove(1);//透明度变为30
//     // }

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
for(var i=0;i<lunboLi.length;i++){
    lunboLi[i].onclick = function(){
        for(var j=0;j<lunboLi.length;j++){
            lunboDiv[j].style.display="none";
        }
       var index = this.getAttribute('data-index');
       lunboDiv[index].style.display="block";
    }
    
}