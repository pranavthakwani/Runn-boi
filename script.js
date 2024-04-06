
document.onkeydown = function(e){
    console.log("Key code is: ", e.keyCode)
    if(e.keyCode==38){
        boi = document.querySelection('.boi');
        boi.classList.add('animateBoi');
       setTimeout(() => { 
        boi.classList.remove('animateBoi')
       }, 700);
    }
    if(e.keyCode==39){
        boi = document.querySelector('.boi');
        boiX = parseInt(window.getComputedStyle(boi, null).getPropertyValue('left'));
        boi.style.left = boiX + 112 + "px";
    }
    if(e.keyCode==37){
        boi = document.querySelector('.boi');
        boiX = parseInt(window.getComputedStyle(boi, null).getPropertyValue('left'));
        boi.style.left = (boiX - 112) + "px";
    }
}

setInterval(() => {
    boi = document.querySelector('.boi');
    gameOver = documet.querySelector('.gameOver');
    obstacle = documet.querySelector('.obstacle');

    dx = window.parseInt(getComputedStyle(boi, null).getPropertyValue('left'));
    dy = window.parseInt(getComputedStyle(boi, null).getPropertyValue('top'));
    
    ox = window.parseInnt(getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = window.parseInnt(getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx-ox);
    offsetY = Math.abs(dx-oy);
    
    if(offsetX< 93 && offsetY<52){
        gameOver.style.visiblity ='visible';
        obstacle
    }
}, 100);