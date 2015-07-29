window.onload = function()
  {
    var canvas = document.getElementById('canvas');
    document.addEventListener('keydown', doKeyDown, true);
    var ctx = canvas.getContext('2d');

    ctx.lineWidth = 2; // Our border will have a thickness of 2 pixels
    ctx.strokeStyle = 'black'; // The border will also be black
    randx = Math.floor((Math.random() * (canvas.width - 100)) + 50);
    randy = Math.floor((Math.random() * (canvas.height - 100)) + 50);
    dx = randx;
    dy = randy;
    x = 0;
    y = 0;

    randyellowx = Math.floor((Math.random() * (canvas.width - 100)) + 50);
    randyellowy = Math.floor((Math.random() * (canvas.height - 100)) + 50);

    randredx = Math.floor((Math.random() * (canvas.width - 100)) + 50);
    randredy = Math.floor((Math.random() * (canvas.height - 100)) + 50);

    // The border is drawn on the outside of the rectangle, so we'll
    // need to move it a bit to the right and up. Also, we'll need
    // to leave a 20 pixels space on the top to draw the interface.

    drawMain();
    blue_bloo();
    yellow_supplies();
    red_triangle();

//steps goes down each time an arrow key is pressed
    var steps;
    steps = 20;
    $( "#scorenum" ).text(steps);

    $(document).keydown(function(e) {

      steps = steps -1;
      $( "#scorenum" ).text(steps);

     console.log(steps);
     if (steps <0){
       console.log('gameover');
       window.location.href = "/end";
        }
    });

//functions or the 3 characters
    var currentKey;          //records the current key pressed
    var TimerWalk;          //timer handle
    var charStep = 2;       //1=1st foot, 2=stand, 3=2nd foot, 4=stand
    var charSpeed = 400;
    $(document).ready(function() {

     //add character state class
     $('#bloo').addClass('front-stand');

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

    function red_triangle() {
        red_triangle = new Image();
        red_triangle.src = 'images/red_triangle.png';
        red_triangle.onload = function() {
            ctx.drawImage(red_triangle, randredy, randredx)
        }
    }
//Function for Bloo to move
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


//When the characters collide
        function isCollide(a, b) {
    return !(
        ((blue_bloo.y + blue_bloo.height) < (yellow_supplies.y)) ||
        (blue_bloo.y > (yellow_supplies.y + yellow_supplies.height)) ||
        ((blue_bloo.x + blue_bloo.width) < yellow_supplies.x) ||
        (blue_bloo.x > (yellow_supplies.x + yellow_supplies.width))
    );

  }

//the canvas clears
    function clearCanvas() {
        canvas.width = canvas.width;
    }

//draws the borders
    function drawMain()
        {
            ctx.lineWidth = 2; // Our border will have a thickness of 2 pixels
            ctx.strokeStyle = 'black'; // The border will also be black

            // The border is drawn on the outside of the rectangle, so we'll
            // need to move it a bit to the right and up. Also, we'll need
            // to leave a 20 pixels space on the top to draw the interface.
            ctx.strokeRect(2, 20, canvas.width - 4, canvas.height - 24);
        }

  };
