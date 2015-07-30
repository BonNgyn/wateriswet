var bloo_x
var bloo_y
var yellow_x
var yellow_y
var red_x
var red_y
var randnum
var ctx
var canvas
var triangles
var collected
var steps

$(document).ready(setup);

function setup() {
    canvas = document.getElementById('canvas');
    document.addEventListener('keydown', doKeyDown, true);
    ctx= canvas.getContext('2d');
    var bloo_image;
    var red_image;
    var yellow_image;
    ctx.lineWidth = 2; // Our border will have a thickness of 2 pixels
    ctx.strokeStyle = 'black'; // The border will also be black

    bloo_x = Math.floor((Math.random() * (canvas.width - 80)) + 50); // x coords of bloo
    bloo_y = Math.floor((Math.random() * (canvas.height - 80)) + 50); //y coords of bloo
    yellow_x = Math.floor((Math.random() * (canvas.width - 80)) + 50); //x coords of yellow
    yellow_y = Math.floor((Math.random() * (canvas.height - 80)) + 50); //y coords of yellow
    red_x = Math.floor((Math.random() * (canvas.width - 100)) + 50); //x coords of red
    red_y = Math.floor((Math.random() * (canvas.height - 100)) + 50); // y coords of red
    randnum = 0; //sets the var for if red moves towards or away.

    drawMain(ctx);
    blue_bloo(ctx);
    yellow_supplies(ctx);
    // red_triangle();
    triangles = makeTriangles(5);
    triangles[4].image.onload = function(){
      for (i in triangles){
      ctx.drawImage(triangles[i].image, triangles[i].red_x , triangles[i].red_y);
      }
    };

    //steps goes down each time an arrow key is pressed

     steps = 100;
     $( "#scorenum" ).text(steps);


     collected = 0;
     $("#collectednum").text(collected);

     var currentKey;          //records the current key pressed
     var TimerWalk;          //timer handle
     var charWalk = 2;       //1=1st foot, 2=stand, 3=2nd foot, 4=stand
     var charSpeed = 400;


   $(document).keydown(function(e){
      steps = steps -1;
      $( "#scorenum" ).text(steps);
      $("#collectednum").text(collected);
      for (i in triangles){
        console.log(triangles[i].red_x +"," +triangles[i].red_y);
      }

      if (steps <= 0){
        window.location.href = "/end";
         }
       blue_yellow_collision();
       blue_red_collision();
       redMove();
       for (triangle in triangles){
         redMove(triangle);
       }
  });
}



function blue_bloo(ctx) {
    bloo_image = new Image();
    bloo_image.src = 'https://wiki.guildwars2.com/images/8/8c/Blue_Dot.png';
    bloo_image.onload = function() {
        ctx.drawImage(bloo_image, bloo_x ,bloo_y)
    }
}

function yellow_supplies(ctx) {
    yellow_image = new Image();
    yellow_image.src = "images/yellow_square.png";
    yellow_image.onload = function() {
        ctx.drawImage(yellow_image, yellow_x, yellow_y)
    }
}



function Triangle (red_x, red_y, red_width, red_height, image){
  return { "red_x": red_x, "red_y" :red_y, "red_width" : 32, "red_height" :32, "image" :image }
}


function makeTriangles(num){
  triangles = []
  for (var x = 0; x < num; x++){
    var red_x = Math.floor((Math.random() * (canvas.width - 100)) + 50); //x coords of red
    var red_y = Math.floor((Math.random() * (canvas.height - 100)) + 50); // y coords of red
    red_image = new Image();
    red_image.src = 'images/red_triangle.png';
    triangles.push(Triangle(red_x, red_y, 32 ,32, red_image));
  }
  return triangles;
}



// checks if blue and red collide



function blue_red_collision(){ //removed  and y
  for (i in triangles){
    if ( (( bloo_x - 16)< triangles[i].red_x) && (triangles[i].red_x < ( bloo_x  + 16) ) ) {
        if( (( bloo_y - 16 ) < triangles[i].red_y) && (triangles[i].red_y< ( bloo_y + 16)) ){
          console.log("collided");
          window.location.href = "/end";
          $("#collectednumb").text(collected);
        }
    }
    if( ( (triangles[i].red_x - 16)< bloo_x  )&& (  bloo_x < (triangles[i].red_x + 16) )){
      if (((triangles[i].red_y -16) < bloo_y ) &&  ( bloo_y < (triangles[i].red_y + 16))){
        console.log("collideded");
        window.location.href = "/end";
        $("#collectednumb").text(collected);
      }
    }
  }
}


    //checks if blue and yellow collide

function blue_yellow_collision(){
    if ( (( bloo_x - 20)< yellow_x) && (yellow_x < ( bloo_x   + 20) ) ) {
        if( (( bloo_y - 20) <yellow_y) && (yellow_y< ( bloo_y  + 20)) ){
            // console.log("collided");
            steps = steps + 20;
            collected = collected + 1;
            yellow_x = Math.floor((Math.random() * (canvas.width - 80)) + 50);
            yellow_y = Math.floor((Math.random() * (canvas.height - 80)) + 50);
        }
    }
    if ( ((yellow_x -20 )< bloo_x   )&& (bloo_x   < (yellow_x + 20)) ){
        if (((yellow_y -20) <  bloo_y ) &&  ( bloo_y   < (yellow_y + 20)) ){
            // console.log("collideded");
            steps = steps + 20;
            collected = collected + 1;
            yellow_x = Math.floor((Math.random() * (canvas.width - 80)) + 50);
            yellow_y = Math.floor((Math.random() * (canvas.height - 80)) + 50);
        }
    }
}


//Hard coding the red_triangle
function redMove(){
  randnum = Math.floor((Math.random() * 2) + 1);
  if (( red_y <(canvas.height-40)) && ( red_y>20)) {
    if (red_y < bloo_y){ //if red is higher than bloo
      if (randnum == 1) { //one in two chances it will move up instead of down
        red_y = red_y - Math.floor((Math.random() * 20) + 1);
      }
      else{
        red_y = red_y + Math.floor((Math.random() * 20) + 1);
      }
    }
    else if (red_y > bloo_y){ //if red is lower than red
      if (randnum == 1) { //one in two chances it will move down instead of up
        red_y = red_y + Math.floor((Math.random() * 20) + 1);
      }
      else{
        red_y = red_y - Math.floor((Math.random() * 20) + 1);
      }
    }

  }
  else if ( red_y > (canvas.height-40) ) {
    red_y =  red_y - 20;
  }
  else if ( red_y < 20 ) {
    red_y =  red_y + 20;
  }
  if ((( red_x )>(0)) && (( red_x )<(canvas.width-40))){
    if (red_x < bloo_x) {//if red is left of bloo
      if (randnum == 1){ //one in two times it will move left instead of right
        red_x = red_x - Math.floor((Math.random() * 20) + 1);
       }
      else{
        red_x = red_x + Math.floor((Math.random() * 20) + 1);
       }
     }
     if (red_x > bloo_x) {//if red is right of bloo
       if (randnum == 1){ //one in two times it will move right instead of left
         red_x = red_x + Math.floor((Math.random() * 20) + 1);
        }
       else{
         red_x = red_x - Math.floor((Math.random() * 20) + 1);
        }
      }

   }
  else if (( red_x )<(0)) {
     red_x =  red_x + 20;
   }
  else if (( red_x )>(canvas.width-40)){
     red_x =  red_x - 20;
   }
}


//Function for Bloo to move
function doKeyDown(e) {
    if(( bloo_y )<(canvas.height-40)){
        if(e.keyCode == 40) /*down*/{
            bloo_y =  bloo_y + 10;
          }
      }

  if(( bloo_y)>(20)){
      if(e.keyCode == 38) /*up*/{
          bloo_y =  bloo_y - 10;
        }
   }

    if(( bloo_x )>(0)){
        if(e.keyCode == 37) /*left*/{
           bloo_x =  bloo_x- 10;
          }
      }


    if(( bloo_x )<(canvas.width-40)){
        if(e.keyCode == 39) /*right*/{
            bloo_x =  bloo_x + 10;
          }
     }
    clearCanvas(ctx);
    drawMain(ctx);
    yellow_supplies(ctx);
    blue_bloo(ctx);
    for (i in triangles){
    ctx.drawImage(triangles[i].image, triangles[i].red_x , triangles[i].red_y);
    }



}


//the canvas clears
function clearCanvas() {
    canvas.width = canvas.width;
}

//draws the borders
function drawMain(ctx) {
      ctx.lineWidth = 2; // Our border will have a thickness of 2 pixels
      ctx.strokeStyle = 'black'; // The border will also be black

      // The border is drawn on the outside of the rectangle, so we'll
      // need to move it a bit to the right and up. Also, we'll need
      // to leave a 20 pixels space on the top to draw the interface.
      ctx.strokeRect(2, 20, canvas.width - 4, canvas.height - 24);
}
