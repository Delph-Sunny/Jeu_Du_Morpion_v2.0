var joueurNb = 1; // Initializing player turn

$(".tic-container").on("click", ".tic-box", function () {
    // Check if cell already full
    if ($(this).text() == "X" || $(this).text() == "O") {
        $(this).css("background-color", "red");
        setTimeout(() => {
            $(this).css("background-color", "");
        }, 500);
    } 
    // Alternating players
    else if (joueurNb == 1) {
        $("#tooltips").text("Tour du joueur 2");
        $(this).text("X");
        joueurNb = 2;
    }
    else {
        $("#tooltips").text("Tour du joueur 1");
        $(this).text("O");
        joueurNb = 1;
    }
});

/* Reset  game */
$(".btn-info").on("click", function reset() {
    joueurNb = 1;
    $("#tooltips").text("Tour du joueur 1");
    $(".tic-box").empty()
});
