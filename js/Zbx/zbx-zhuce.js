window.onload = function(){
    var Ospan = document.querySelector('.zbx-rightzhu>span');
    var Ochina = document.querySelector('.zbx-alinav .zbx-china');
    Ospan.onmouseenter = function(){
        Ochina.style.display = 'block';
        console.log('11')
    }
    Ochina.onmouseleave = function(){
        console.log('22')

        this.style.display = 'none';
    }
}                                  