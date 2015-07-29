window.onload = function()
  {
    var canvas = document.getElementById('canvas');
    document.addEventListener('keydown', doKeyDown, true);
    var ctx = canvas.getContext('2d');
    var bloo_image;

    ctx.lineWidth = 2; // Our border will have a thickness of 2 pixels
    ctx.strokeStyle = 'black'; // The border will also be black


    var dx = Math.floor((Math.random() * (canvas.width - 80)) + 50);
    var dy = Math.floor((Math.random() * (canvas.height - 80)) + 50);
    var x = 0;
    var y = 0;


    dx = Math.floor((Math.random() * (canvas.width - 80)) + 50); //random x coords of bloo
    dy = Math.floor((Math.random() * (canvas.height - 80)) + 50); // random y coords of bloo
    x = 0; //added step of bloo
    y = 0; //added step of bloo

    randyellowx = Math.floor((Math.random() * (canvas.width - 80)) + 50); //rand x coords of yellow
    randyellowy = Math.floor((Math.random() * (canvas.height - 80)) + 50); //rand y coords of yellow


    randredx = Math.floor((Math.random() * (canvas.width - 100)) + 50);
    randredy = Math.floor((Math.random() * (canvas.height - 100)) + 50);
// =======
//     var randyellowx = Math.floor((Math.random() * (canvas.width - 80)) + 50);
//     var randyellowy = Math.floor((Math.random() * (canvas.height - 80)) + 50);
//
//
//     var randredx = Math.floor((Math.random() * (canvas.width - 80)) + 50);
//     var randredy = Math.floor((Math.random() * (canvas.height - 80)) + 50);
// >>>>>>> 0453f67c7dfd8aad1e0f3a9fd41ff080febf06d4

    // The border is drawn on the outside of the rectangle, so we'll
    // need to move it a bit to the right and up. Also, we'll need
    // to leave a 20 pixels space on the top to draw the interface.

    drawMain();
    blue_bloo();
    yellow_supplies();
    red_triangle();

    //steps goes down each time an arrow key is pressed
    var steps;
    steps = 100;
    $( "#scorenum" ).text(steps);


    var currentKey;          //records the current key pressed
    var TimerWalk;          //timer handle
    var charWalk = 2;       //1=1st foot, 2=stand, 3=2nd foot, 4=stand
    var charSpeed = 400;
    $(document).ready(function() {

     //add character state class
     $('#bloo').addClass('front-stand');

     });


    $(document).keydown(function(e) {

      steps = steps -1;
      $( "#scorenum" ).text(steps);


     console.log(steps);
     if (steps <= 0){
       console.log('gameover');
       window.location.href = "/end";
        }
      blue_yellow_collision();
      blue_red_collision();


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
        var yellow_image = new Image();
        yellow_image.src = 'http://www.bodenimages.com/productimages/sw/15GAUT_33375_YEL_s.jpg';
        yellow_image.onload = function() {
            ctx.drawImage(yellow_image, randyellowy, randyellowx)
        }
    }

    function red_triangle() {
        var red_triangle = new Image();
        red_triangle.src = 'images/red_triangle.png';
        red_triangle.onload = function() {
            ctx.drawImage(red_triangle, randredy, randredx)
        }
    }


// checks if blue and yellow collide



    function blue_red_collision(){
      console.log("blue coords:" + dx + x + "," + dy + y);
      console.log("red coords: " + randredx + "," +randredy);
      if ( ((dx + x )< randredx) && (randredx < (dx + x + 40) ) ) {
          if( ((dy +y ) <randredy) && (randredy< (dy + y + 40)) ){
          window.location.href = "/end";

        }
      }
      if ( (randredx < (dx + x) )&& (dx < (randredx + y +40) )){
        if ((randredy < (dy+ y)) &&  (dy < (randredy + y +40))){
          window.location.href = "/end";
        }
      }
    }

    function blue_yellow_collision(){

    console.log("blue coords:" + dx + x + "," + dy +y);
    console.log("yellow coods: " + randyellowx + "," +randyellowy);
        if ( ((dx + x )< randyellowx) && (randyellowx < (dx + x + 40) ) ) {
            if( ((dy +y ) <randyellowy) && (randyellowy< (dy + y + 40)) ){
                console.log("collided");
                steps = steps + 10;
                randyellowx = Math.floor((Math.random() * (canvas.width - 80)) + 50);
                randyellowy = Math.floor((Math.random() * (canvas.height - 80)) + 50);
            }
        }
        if ( (randyellowx < (dx + x) )&& (dx < (randyellowx + y +40) )){
            if ((randyellowy < (dy+ y)) &&  (dy < (randyellowy + y +40))){
                console.log("collideded");
                steps = steps + 10;
                randyellowx = Math.floor((Math.random() * (canvas.width - 80)) + 50);
                randyellowy = Math.floor((Math.random() * (canvas.height - 80)) + 50);
            }

        }
      }




//Hard coding the red_triangle






//Function for Bloo to move
    function doKeyDown(e) {
        if((dx+x)<(canvas.height-40)){
            if(e.keyCode == 40) /*down*/{
                clearCanvas();
                drawMain();
                yellow_supplies();
                blue_bloo();
                x = x + 10;
                ctx.drawImage(bloo_image, dy+y,dx+x)

            }
        }
        if((dy+y)>(0)){
            if(e.keyCode == 37) /*left*/{
                clearCanvas();
                drawMain();
                yellow_supplies();
                blue_bloo();
                y = y - 10;
                ctx.drawImage(bloo_image, dy+y,dx+x)
            }
        }
        if((dy+y)<(canvas.width-40)){
            if(e.keyCode == 39) /*right*/{
                clearCanvas();
                drawMain();
                yellow_supplies();
                blue_bloo();
                y = y + 10;
                ctx.drawImage(bloo_image, dy+y,dx+x)
            }
        }
        if((dx+x)>(20)){
            if(e.keyCode == 38) /*up*/{
                clearCanvas();
                drawMain();
                yellow_supplies();
                blue_bloo();
                x = x - 10;
                ctx.drawImage(bloo_image, dy+y,dx+x)

            }
        }
        drawMain();
        yellow_supplies();
        red_triangle();
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

  }
