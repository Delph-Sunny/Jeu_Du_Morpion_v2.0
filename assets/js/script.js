var joueurNb = 1; // Initializing player turn
var symbol = ""; // Initializing symbol


/* Check for winning move */
function check(cell) {
    if ($("#tic-1").hasClass(cell) &&
        $("#tic-2").hasClass(cell) &&
        $("#tic-3").hasClass(cell)) {
        $("#tic-1").addClass("won");
        $("#tic-2").addClass("won");
        $("#tic-3").addClass("won");
        return true;
    } else if ($("#tic-4").hasClass(cell)
        && $("#tic-5").hasClass(cell)
        && $("#tic-6").hasClass(cell)) {
        $("#tic-4").addClass("won");
        $("#tic-5").addClass("won");
        $("#tic-6").addClass("won");
        return true;
    } else if ($("#tic-7").hasClass(cell)
        && $("#tic-8").hasClass(cell)
        && $("#tic-9").hasClass(cell)) {
        $("#tic-7").addClass("won");
        $("#tic-8").addClass("won");
        $("#tic-9").addClass("won");
        return true;
    } else if ($("#tic-1").hasClass(cell)
        && $("#tic-4").hasClass(cell)
        && $("#tic-7").hasClass(cell)) {
        $("#tic-1").addClass("won");
        $("#tic-4").addClass("won");
        $("#tic-7").addClass("won");
        return true;
    } else if ($("#tic-2").hasClass(cell)
        && $("#tic-5").hasClass(cell)
        && $("#tic-8").hasClass(cell)) {
        $("#tic-2").addClass("won");
        $("#tic-5").addClass("won");
        $("#tic-8").addClass("won");
        return true;
    } else if ($("#tic-3").hasClass(cell)
        && $("#tic-6").hasClass(cell)
        && $("#tic-9").hasClass(cell)) {
        $("#tic-3").addClass("won");
        $("#tic-6").addClass("won");
        $("#tic-9").addClass("won");
        return true;
    } else if ($("#tic-1").hasClass(cell)
        && $("#tic-5").hasClass(cell)
        && $("#tic-9").hasClass(cell)) {
        $("#tic-1").addClass("won");
        $("#tic-5").addClass("won");
        $("#tic-9").addClass("won");
        return true;
    } else if ($("#tic-3").hasClass(cell)
        && $("#tic-5").hasClass(cell)
        && $("#tic-7").hasClass(cell)) {
        $("#tic-3").addClass("won");
        $("#tic-5").addClass("won");
        $("#tic-7").addClass("won");
        return true;
    } else {
        return false;
    }
}

/* To reset the game */
function reset() {
    joueurNb = 1;
    $("#tooltips").text("Player 1 turn (X)");
    $(".tic-box").removeClass("fa fa-circle-o fa-times won");
}

/* Playing */
$(".tic-container").on("click", ".tic-box", function () {
    // Check if previous click won
    if ($("h5:contains('GAME OVER')").length) {
        reset()
    } 
    // Check if cell already full
    else if ($(this).hasClass("fa fa-times") || $(this).hasClass("fa fa-circle-o")) {
        $(this).addClass("error");
        setTimeout(() => {
            $(this).removeClass("error");
        }, 500);
    }
    // Alternating players
    else if (joueurNb == 1) {
        symbol = "fa fa-times";
        $(this).addClass(symbol);
        if (check(symbol)) {
            $("#tooltips").text("GAME OVER: Player 1 won!");
        } else {
            $("#tooltips").text("Player 2 turn (O)");
            joueurNb = 2;
        }
    }
    else {
        symbol = "fa fa-circle-o";
        $(this).addClass(symbol);
        if (check(symbol)) {
            $("#tooltips").text("GAME OVER: Player 2 won!");
        } else {
            $("#tooltips").text("Player 1 turn (X)");
            joueurNb = 1;
        }
    }
});

/* Reset  game */
$(".btn-lg").click(function () {
    reset();
});

