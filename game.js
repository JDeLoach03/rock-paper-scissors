class Game {
    constructor(gameType) {
        this.player1 = new Player('emoji hearts')
        this.player2 = new Player('robot face');
        this.gameType = gameType
        this.player1Choice = 'scissors'
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
        //computer choice here with randomize function 
        //this information will gain access to the object key value and randomly select 
    }
    
    checkHumanWin() {
        // need to check if what is passed through beats this win condition
        //checking to see if humans answer *conditions* match or lose to computer
        // is arg1 > arg2 
       return this.winConditions[this.player1Choice].includes(this.player2Choice)
    }
    

    // need helper function that would compare the two answers from human and computer

    drawGame(humanAnswer, computerAnswer) {
        return humanAnswer === computerAnswer
        // also will be manipulated within main
    }

    //Make a method within here 

}