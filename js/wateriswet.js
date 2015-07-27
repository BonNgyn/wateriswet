(function(GRASP, $){
    var GRID_ROWS,
        GRID_COLS,
        A,C;

    GRASP.config = {
        gridContainer: "grid",
    };

    GRASP.start = function(){
        GRID_ROWS = $("#rows").val();
        GRID_COLS = $("#cols").val();
        createGrid();
        createAutocorrelationMatrix();
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

    function createAutocorrelationMatrix() {
        MATRIXHEADER_ELEMENT = $("#" + GRASP.config.matrixHeader);
        MATRIX_ELEMENT = $("#" + GRASP.config.matrixContainer);
        MATRIX_ELEMENT.html("");

        MATRIXHEADER_ELEMENT.css("top", parseInt(GRID_ELEMENT.offset().top + (GRID_ROWS * 36)) + "px");

        MATRIX_ELEMENT.height(36 * GRID_ROWS);
        MATRIX_ELEMENT.width(36 * GRID_COLS);
    }

    function cellClick(){
        var cell = $(this).next();

        if(cell.text() == "0"){
            cell.text("1");
        } else {
            cell.text("0");
        }
    }

    function cellMouseEnter(e){
        var i = $(this).data("row");
        var j = $(this).data("col");

        var x = e.data.isMatrix ? Math.ceil((GRID_ROWS * 36) / MATRIX_ROWS) : 36;

        var div = $(document.createElement("div"))
            .addClass("cellCoordinates cellCoordText")
            .css("left", parseInt((j-1) * x, 10) + "px")
            .css("top", parseInt((i-1) * x, 10) + "px")
            .text(i + ", " + j);

        $(this).before(div);
    }

    function cellMouseLeave(){
        $(this).prev().remove();
    }

}(window.GRASP = window.GRASP || {}, jQuery));

$(document).ready(function(){
    GRASP.start();
});
