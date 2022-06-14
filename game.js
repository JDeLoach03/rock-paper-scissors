class Game {
    constructor(gameType) {
        this.player1 = new Player('Hearts')
        this.player2 = new Player('robot face')
        this.gameType = gameType
        this.winConditions = {
            rock: ['scissors', 'lizard'],
            paper: ['rock', 'alien'],
            scissors: ['paper', 'lizard'],
            lizard: ['paper', 'alien'],
            alien: ['scissors', 'rock']
        }
    }

    computerChoice(gameType) {
        var choice = this.player2.playerTurn(gameType)
        return choice
    }
    
    checkHumanWin(gameType) {
        if (this.player1.choice === this.player2.choice) {
            return 'draw'
        } else if(this.winConditions[this.player1.choice].includes(this.player2.choice)) {
            this.player1.winner = true;
            this.player1.increaseWins()
            return 'win'
        } else {
            this.player2.increaseWins()
            this.player2.winner = true;
            return 'loss'
        }  
    }
}