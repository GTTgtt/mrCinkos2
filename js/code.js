var colors = ['mediumorchid', 'lightcoral', 'blueviolet', 'mediumseagreen', 'darkslateblue'];
var color_flag = 0;

function colorWheel(){
    setInterval(function(){
        document.querySelectorAll('font')[0].style.color = colors[color_flag];
        document.querySelectorAll('font')[1].style.color = colors[color_flag];
        document.querySelector('#menu').style.borderBottomColor = colors[color_flag];
        document.querySelector('button').style.backgroundColor = colors[color_flag];
        
        if(color_flag == 4) color_flag= 0;
        else color_flag++;
    }, 3000);
}