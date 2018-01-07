var color_flag = 0;
var nav_flag = 0;

function init(){
    body = document.body;
    colorWheel();
    
    // onclick #menu-icon --> show/hide #nav
    document.getElementById('menu-icon').addEventListener('click', function(){
        if(nav_flag == 0){ // show
            document.getElementById('nav').style.top = '100px';
            nav_flag = 1;
        }
        else { // hide
            document.getElementById('nav').style.top = 'calc(-100% + 100px)';
            nav_flag = 0;
        }
    });
    
}

function colorWheel(){
    var font0 = document.querySelectorAll('font')[0];
    var font1 = document.querySelectorAll('font')[1];
    var hr = document.querySelector('#hr');
    var button = document.querySelector('button');
    var nav = document.querySelector('#nav');
    
    font0.className = 'txtColor' + color_flag;
    font1.className = 'txtColor' + color_flag;
    hr.className = 'bgColor' + color_flag;
    button.className = 'bgColor' + color_flag;
    nav.className = 'bgColor_before' + color_flag;
    
    color_flag++;
    
    setInterval(function(){
        font0.className = 'txtColor' + color_flag;
        font1.className = 'txtColor' + color_flag;
        hr.className = 'bgColor' + color_flag;
        button.className = 'bgColor' + color_flag;
        nav.className = 'bgColor_before' + color_flag;
        
        if(color_flag == 4) color_flag= 0;
        else color_flag++;
    }, 3000);
}
