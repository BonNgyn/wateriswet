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

    // var body = document.getElementsByTagName('body')[0];
    // body.appendChild(canvas);

    // The border is drawn on the outside of the rectangle, so we'll
    // need to move it a bit to the right and up. Also, we'll need
    // to leave a 20 pixels space on the top to draw the interface.

    drawMain()

    bloo_image = new Image();
    bloo_image.src = 'https://wiki.guildwars2.com/images/8/8c/Blue_Dot.png';
    bloo_image.onload = function() {
        ctx.drawImage(bloo_image, dy+y,dx+x)
    }

    function doKeyDown(e) {
        if((dx+x)<(canvas.height-40)){
            if(e.keyCode == 40) /*down*/{
                clearCanvas();
                drawMain();
                x = x + 10;
                ctx.drawImage(bloo_image, dy+y,dx+x)
            }
        }
        if((dy+y)>(0)){
            if(e.keyCode == 37) /*left*/{
                clearCanvas();
                drawMain();
                y = y - 10;
                ctx.drawImage(bloo_image, dy+y,dx+x)
            }
        }
        if((dy+y)<(canvas.width-40)){
            if(e.keyCode == 39) /*right*/{
                clearCanvas();
                drawMain();
                y = y + 10;
                ctx.drawImage(bloo_image, dy+y,dx+x)
            }
        }
        if((dx+x)>(20)){
            if(e.keyCode == 38) /*up*/{
                clearCanvas();
                drawMain();
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

            ctx.strokeRect(2, 20, canvas.width - 4, canvas.height - 24);
        }    
            ctx.strokeRect(2, 40, canvas.width - 4, canvas.height - 40);
            ctx.font = '30px sans-serif';
            // ctx.fillText('Steps: ' + steps, 2, 30);
        }

var steps;
steps = 20;
$( "#scorenum" ).text(steps);

var currentKey;          //records the current key pressed
var TimerWalk;          //timer handle
var charStep = 2;       //1=1st foot, 2=stand, 3=2nd foot, 4=stand
var charSpeed = 400;
$(document).ready(function() {

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

























// var currentKey;          //records the current key pressed
// var TimerWalk;          //timer handle
// var charStep = 2;       //1=1st foot, 2=stand, 3=2nd foot, 4=stand
// var charSpeed = 400;
// $(document).ready(function() {

//  //add character state class
//  $('#bloo').addClass('front-stand');

//  });

//  $(document).keydown(function(e) {
//      if (!currentKey) {

//        //set the currentKey to the key that is down
//        currentKey = e.keyCode;

//        //execute character movement function charWalk('direction')
//        switch(e.keyCode) {
//          case 38: charWalk('up');    break;
//          case 39: charWalk('right'); break;
//          case 40: charWalk('down');  break;
//          case 37: charWalk('left');  break;
//        }

//      }

//    });

//    //KeyUp Function
//    $(document).keyup(function(e) {

//      //don't stop the walk if the player is pushing other buttons
//      //only stop the walk if the key that started the walk is released
//      if (e.keyCode == currentKey) {

//        //set the currentKey to false, this will enable a new key to be pressed
//        currentKey = false;

//        //clear the walk timer
//        clearInterval(TimerWalk);

//        //finish the character's movement
//        $('#bloo').stop(true, true);

//      }

//    });
//    function charWalk(dir) {

//        //adjust from lang to code
//        if (dir == 'up') dir = 'back';
//        if (dir == 'down') dir = 'front';

//        //move the character
//        processWalk(dir);

//        //set the interval timer to continually move the character
//        TimerWalk = setInterval(function() { processWalk(dir); }, charSpeed);

//      }

//      //Process Character Walk Function
//      function processWalk(dir) {

//        //increment the charStep as we will want to use the next stance in the animation
//       //if the character is at the end of the animation, go back to the beginning
//        charStep++;
//        if (charStep == 5) charStep = 1;

//        //remove the current class
//        $('#bloo').removeAttr('class');

//        //add the new class
//        switch(charStep) {
//          case 1: $('#bloo').addClass(dir+'-stand'); break;
//          case 2: $('#bloo').addClass(dir+'-right'); break;
//          case 3: $('#bloo').addClass(dir+'-stand'); break;
//          case 4: $('#bloo').addClass(dir+'-left');  break;
//        }

//        //move the char
//        //we will only want to move the character 32px (which is 1 unit) in any direction
//        switch(dir) {
//          case'front':
//            $('#bloo').animate({top: '+=32'}, charSpeed);
//            break;
//          case'back':
//            //don't let the character move any further up if they are already at the top of the screen
//            if ($('#bloo').position().top > 0) {
//              $('#bloo').animate({top: '-=32'}, charSpeed);
//            }
//            break;
//          case'left':
//          //don't let the character move any further left if they are already at the left side of the screen
//          if ($('#bloo').position().left > 0) {
//              $('#bloo').animate({left: '-=32'}, charSpeed);
//            }
//            break;
//          case'right':
//            $('#bloo').animate({left: '+=32'}, charSpeed);
//            break;
//          }

//      }
