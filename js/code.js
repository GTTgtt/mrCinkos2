/*
var colors = [
    'mediumorchid',
    'lightcoral',
    'blueviolet',
    'mediumseagreen',
    'darkslateblue'
    // add more colors here (and dont forget to add ',' on previous color)
];
*/
var color_flag = 0;
var nav_flag = 0;
var body;

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
    body.className = 'color' + color_flag;
    color_flag++;
    setInterval(function(){
        //document.querySelectorAll('font')[0].style.color = colors[color_flag];
        //document.querySelectorAll('font')[1].style.color = colors[color_flag];
        //document.querySelector('#hr').style.backgroundColor = colors[color_flag];
        body.className = 'color' + color_flag;
        
        if(color_flag == 4) color_flag= 0;
        else color_flag++;
    }, 3000);
}
