class Game {
    constructor(gameType) {
        this.player1 = new Player('emoji hearts')
        this.player2 = new Player('robot face');
        this.gameType = gameType
        this.player1Choice 
        this.player2Choice
        this.winConditions = {
            rock: ['scissors', 'lizard'],
            paper: ['rock', 'alien'],
            scissors: ['paper', 'lizard'],
            lizard: ['paper', 'alien'],
            alien: ['scissors', 'rock']
        };
    }

    computerChoice(gameType) {
        var choice = this.player2.playerTurn(gameType)
        // this.player2Choice = choice
        console.log(choice);
        return choice
    }
    
    checkHumanWin(gameType) {
        // need to check if what is passed through beats this win condition
        //checking to see if humans answer *conditions* match or lose to computer
        // is arg1 > arg2 
        // this.player2Choice = this.player2.playerTurn(gameType)
        if (this.player1.choice === this.player2.choice) {
            return 'draw'
        } else if(this.winConditions[this.player1.choice].includes(this.player2.choice)) {
            // this.winner = this.player1
            this.player1.increaseWins()
            return 'win'
        } else {
            // this.winner = this.player2
            this.player2.increaseWins()
            return 'loss'
        }  
    }
}

   // computerChoice() {
    //     var numberOfFighters = 0;
    //     var fighters = ['rock', 'paper', 'scissors', 'lizard', 'alien']
    //     if (this.gameType === 'classic') {
    //         console.log('game class');
    //         numberOfFighters = 3;
    //     } else {
    //         console.log('game class 2')
    //         numberOfFighters = 5;
    //     }
    //     var choice = fighters[Math.floor(Math.random() * numberOfFighters)]
    //     return choice
    //     //computer choice here with randomize function 
    //     //this information will gain access to the object key value and randomly select 
    // }