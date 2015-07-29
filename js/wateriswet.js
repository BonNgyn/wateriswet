window.onload = function()
  {
    var canvas = document.getElementById('canvas');
    console.log(canvas.width);
    document.addEventListener('keydown', doKeyDown, true);
    var ctx = canvas.getContext('2d');

    ctx.lineWidth = 2; // Our border will have a thickness of 2 pixels
    ctx.strokeStyle = 'black'; // The border will also be black
    randx = Math.floor((Math.random() * canvas.width - 100) + 1);
    randy = Math.floor((Math.random() * canvas.height - 100) + 1);
    dx = randx;
    dy = randy;
    x = 0;
    y = 0;

    randyellowx = Math.floor((Math.random() * canvas.width - 100) + 1);
    randyellowy = Math.floor((Math.random() * canvas.height - 100) + 1);

    // var body = document.getElementsByTagName('body')[0];
    // body.appendChild(canvas);

    // The border is drawn on the outside of the rectangle, so we'll
    // need to move it a bit to the right and up. Also, we'll need
    // to leave a 20 pixels space on the top to draw the interface.

    drawMain();
    yellow_supplies();
    blue_bloo();

    var steps;
    steps = 20;
    $( "#scorenum" ).text(steps);

    var currentKey;          //records the current key pressed
    var TimerWalk;          //timer handle
    var charStep = 2;       //1=1st foot, 2=stand, 3=2nd foot, 4=stand
    var charSpeed = 400;
    $(document).ready(function() {

     //add character state class
     $('#bloo').addClass('front-stand');

 });



$(document).keydown(function(e) {

  steps = steps -1;
  $( "#scorenum" ).text(steps);
  if (!currentKey) {

   //set the currentKey to the key that is down
   currentKey = e.keyCode;

   //execute character movement function charWalk('direction')
    switch(e.keyCode) {
     case 38: charWalk('up');    break;
     case 39: charWalk('right'); break;
     case 40: charWalk('down');  break;
     case 37: charWalk('left');  break;
   }
 }

 console.log(steps);
 if (steps <0){
   console.log('gameover');
   window.location.href = "/end";
 }
});



function blue_bloo() {
    bloo_image = new Image();
    bloo_image.src = 'https://wiki.guildwars2.com/images/8/8c/Blue_Dot.png';
    bloo_image.onload = function() {
        ctx.drawImage(bloo_image, dy+y,dx+x)
    }
}

function yellow_supplies() {
    yellow_image = new Image();
    yellow_image.src = 'http://www.bodenimages.com/productimages/sw/15GAUT_33375_YEL_s.jpg';
    yellow_image.onload = function() {
        ctx.drawImage(yellow_image, randyellowy, randyellowx)
    }
}

function doKeyDown(e) {
    if((dx+x)<(canvas.height-40)){
        if(e.keyCode == 40) /*down*/{
            clearCanvas();
            drawMain();
            yellow_supplies();
            x = x + 10;
            ctx.drawImage(bloo_image, dy+y,dx+x)
        }
    }
    if((dy+y)>(0)){
        if(e.keyCode == 37) /*left*/{
            clearCanvas();
            drawMain();
            yellow_supplies();
            y = y - 10;
            ctx.drawImage(bloo_image, dy+y,dx+x)
        }
    }
    if((dy+y)<(canvas.width-40)){
        if(e.keyCode == 39) /*right*/{
            clearCanvas();
            drawMain();
            yellow_supplies();
            y = y + 10;
            ctx.drawImage(bloo_image, dy+y,dx+x)
        }
    }
    if((dx+x)>(20)){
        if(e.keyCode == 38) /*up*/{
            clearCanvas();
            drawMain();
            yellow_supplies();
            x = x - 10;
            ctx.drawImage(bloo_image, dy+y,dx+x)
        }
    }

}

function clearCanvas() {
    canvas.width = canvas.width;
}


function drawMain()
  {
      ctx.lineWidth = 2; // Our border will have a thickness of 2 pixels
      ctx.strokeStyle = 'black'; // The border will also be black

      // The border is drawn on the outside of the rectangle, so we'll
      // need to move it a bit to the right and up. Also, we'll need
      // to leave a 20 pixels space on the top to draw the interface.

      ctx.strokeRect(2, 40, canvas.width - 4, canvas.height - 40);
      ctx.font = '30px sans-serif';
      // ctx.fillText('Steps: ' + steps, 2, 30);
  }
}
