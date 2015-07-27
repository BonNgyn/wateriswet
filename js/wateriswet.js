(function(GRASP, $){
    var GRID_ROWS,
        GRID_COLS,
        A,C;

    var currentKey;
    var TimerWalk;
    var charStep= 2;
    var charSpeed= 400;

    $(document).keydown(function(e) {
        if(!currentKey) {

            currentKey = e.keyCode;

            switch(e.keyCode) {
                case 38: charWalk('up'); break;
                case 39: charWalk('right'); break;
                case 40; charWalk('down'); break;
                case 37: charWalk('left'); break;
            }
        }
    })

    $(document).keyup(function(e) {
        if(e.keyCode == currentKey) {

            currentKey = false;
            clearInterval(TimerWalk);
            $('#bloo').stop(true, true);
        }
    })



    function charWalk(dir) {
        if (dir == 'up') dir == 'back';
        if (dir == 'down') dir == 'front';

        processWalk(dir);

        TimerWalk = setInterval(funciton() {processWalk(dir);}, charSpeed);
        }
    }


    function processWalk(dir) {
        charStep++
        if(charStep == 5) charStep == 1;

        $('#bloo').removeAttr('class');

        switch(charStep) {
            case 1: $('bloo').addClass(dir+'-stand'); break;
            case 2: $('bloo').addClass(dir+'-right'); break;
            case 3: $('bloo').addClass(dir+'-stand'); break;
            case 4: $('bloo').addClass(dir+'-left'); break;
        }

        switch(dir) {
            

        }

    }



    GRASP.config = {
        gridContainer: "grid",
    };

    GRASP.start = function(){
        GRID_ROWS = 10;
        GRID_COLS = 10;
        createGrid();
    };

    function createGrid()
    {
        GRID_ELEMENT = $("#"+GRASP.config.gridContainer);
        GRID_ELEMENT.html(""); // Clear Grid ;)
        var coord;
        var cell; // Contains the 1 or 0 based upon the cell selection

        for(var i=1; i<=GRID_ROWS; i++){
            for(var j=1; j<=GRID_COLS; j++){
                coord = "" + i + "," + j;

                $(document.createElement("div"))
                    .addClass("cellWrapper")
                    .attr("alt", coord)
                    .css("left", parseInt((j-1) * 36, 10) + "px")
                    .css("top", parseInt((i-1) * 36, 10) + "px")
                    .width(36).height(36)
                    .data("row", i).data("col", j)
                    .appendTo("#"+GRASP.config.gridContainer)
            }
        }

        GRID_ELEMENT.height(36 * GRID_ROWS);
        GRID_ELEMENT.width(36 * GRID_COLS);

    }

}(window.GRASP = window.GRASP || {}, jQuery));

$(document).ready(function(){
    GRASP.start();
});
