window.onload = function()
  {
    var canvas = document.getElementById('canvas');
    document.addEventListener('keydown', doKeyDown, true);
    var ctx = canvas.getContext('2d');
    var bloo_image;
    var red_image;
    var yellow_image;

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

    
    drawMain();
    blue_bloo();
    yellow_supplies();
    red_triangle();

    //steps goes down each time an arrow key is pressed
    var steps;
    steps = 100;
    $( "#scorenum" ).text(steps);

    var collected;
    collected = 0;
    $("#collectednum").text(collected);

    var currentKey;          //records the current key pressed
    var TimerWalk;          //timer handle
    var charWalk = 2;       //1=1st foot, 2=stand, 3=2nd foot, 4=stand
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
        red_image = new Image();
        red_image.src = 'images/red_triangle.png';
        red_image.onload = function() {
            ctx.drawImage(red_image, randredy, randredx)
        }
    }


// checks if blue and red collide



    function blue_red_collision(){
      console.log("blue coords:" + dx + x + "," + dy + y);
      console.log("red coords: " + randredx + "," +randredy);
      if ( ((dx + x - 16)< randredx) && (randredx < (dx + x + 16) ) ) {
          if( ((dy +y - 16 ) <randredy) && (randredy< (dy + y + 16)) ){

          window.location.href = "/end";
          $("#collectednum").text (collected);

        }
      }
      if ( (randredx < (dx + x -16) )&& (dx < (randredx + y +40) )){
        if ((randredy < (dy+ y )) &&  (dy < (randredy + y +40))){

          window.location.href = "/end";
          $("#collectednum").text (collected);
        }
      }
    }

    //checks if blue and yellow collide

    function blue_yellow_collision(){

    console.log("blue coords:" + dx + x + "," + dy +y);
    console.log("yellow coods: " + randyellowx + "," +randyellowy);
        if ( ((dx + x - 16)< randyellowx) && (randyellowx < (dx + x + 16) ) ) {
            if( ((dy +y - 16) <randyellowy) && (randyellowy< (dy + y + 16)) ){
                console.log("collided");
                steps = steps + 20;
                collected = collected + 1;
                randyellowx = Math.floor((Math.random() * (canvas.width - 80)) + 50);
                randyellowy = Math.floor((Math.random() * (canvas.height - 80)) + 50);
            }
        }
        if ( (randyellowx < (dx + x - 16) )&& (dx < (randyellowx + y + 16) )){
            if ((randyellowy < (dy+ y -16)) &&  (dy < (randyellowy + y + 16))){
                console.log("collideded");
                steps = steps + 20;
                collected = collected + 1;
                randyellowx = Math.floor((Math.random() * (canvas.width - 80)) + 50);
                randyellowy = Math.floor((Math.random() * (canvas.height - 80)) + 50);
            }

        }

    }
    function step() {
        steps = steps -1;
        $( "#scorenum" ).text(steps);
        $("#collectednum").text (collected);


        console.log(steps);
        if (steps <= 0){
            console.log('gameover');
            window.location.href = "/end";
        }
        blue_yellow_collision();
        blue_red_collision();
    }

//Hard coding the red_triangle



    //Function for Bloo to move
    function doKeyDown(e) {
        if((dx+x)<(canvas.height-40)){
            if(e.keyCode == 40) /*down*/{
                clearCanvas();
                step();
                blue_bloo();
                x = x + 10;
                ctx.drawImage(bloo_image, dy+y,dx+x)

            }
        }
        if((dy+y)>(0)){
            if(e.keyCode == 37) /*left*/{
                clearCanvas();
                step();                
                blue_bloo();
                y = y - 10;
                ctx.drawImage(bloo_image, dy+y,dx+x)
            }
        }
        if((dy+y)<(canvas.width-40)){
            if(e.keyCode == 39) /*right*/{
                clearCanvas();
                step();
                blue_bloo();
                y = y + 10;
                ctx.drawImage(bloo_image, dy+y,dx+x)
            }
        }
        if((dx+x)>(20)){
            if(e.keyCode == 38) /*up*/{
                clearCanvas();
                step();
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
