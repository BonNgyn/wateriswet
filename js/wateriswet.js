(function(GRASP, $){
    var GRID_ROWS,
        GRID_COLS,
        A,C;

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
