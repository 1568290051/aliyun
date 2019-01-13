// $('.raw').on('click',function(){
//     for(var i=0;i<2;i++){
//         $('.raw').removeClass('later')
//     }
//     $(this).addClass('later')
// })

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