class Game {
    constructor(player1, player2, gameType) {
        this.player1 = player1;
        this.player2 = player2;
        this.gameType = gameType;
        this.winConditions = {
            rock: ['scissors', 'lizard'],
            paper: ['rock', 'alien'],
            scissors: ['paper', 'lizard'],
            lizard: ['paper', 'alien'],
            alien: ['scissors', 'rock']
        };
    }

    checkGameConditions(answer1, answer2) {
        // utilizing a randomize function 
        //math.floor(math.random()* 3) 
        // need to check if what is passed through beats this win condition
        //checking to see if p1's answer *conditions* match or lose to p2
        //does scissors and lizzard contain scissors(answer2) for example for YOU JOSH
        return this.winConditions[answer1].includes(answer2)
    }

    drawGame(answer1, answer2) {
        return answer1 === answer2
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
