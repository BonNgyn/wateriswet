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

    drawMain();
    yellow_supplies();
    blue_bloo();
    



    function blue_bloo() {
        bloo_image = new Image();
        bloo_image.src = 'https://wiki.guildwars2.com/images/8/8c/Blue_Dot.png';
        bloo_image.onload = function() {
            ctx.drawImage(bloo_image, dy+y,dx+x)
        }        
    }

    function yellow_supplies() {
        randx = Math.floor((Math.random() * canvas.width - 100) + 1);
        randy = Math.floor((Math.random() * canvas.height - 100) + 1);
        dx2 = randx;
        dy2 = randy;
        yellow_image = new Image();
        yellow_image.src = 'http://www.bodenimages.com/productimages/sw/15GAUT_33375_YEL_s.jpg';
        yellow_image.onload = function() {
            ctx.drawImage(yellow_image, dy2,dx2)
        }
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

  };










































