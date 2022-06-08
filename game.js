class Game {
    constructor(player1, player2, gameType) {
        this.player1 = player1;
        this.player2 = player2;
        this.gameType = gameType;
        this.winConditions = {
            rock: ['scissors', 'lizard'],
            paper: ['rock'],


        }
    }

    checkGameConditions() {
        if ()
    }

    drawGame() {

    }

    resetGame() {

    }
}

// Two Player instances
// A way to keep track of the data for the game board
// A way to keep track of the selected game type
// A way to check the Game’s board data for win conditions
// A way to detect when a game is a draw (no one has won)
// A way to reset the Game’s board to begin a new game
