// GAME WILL HANDLE MANIPULATION OF DATA/ DATA HUB FOR EASY UNDERSTANDING


// if anything, its time to reset the game class
//I need to have a gameType, and both playerChoices empty
// reassign later within methods 
//within the properties, I would like to have the new instances of players, and add the "win conditions" separately and gameTypes

class Game {
    constructor() {
        this.person = new Player('emoji hearts')
        this.computer = new Player('robot face');
        this.gameType 
        this.classicFighters = ['rock', 'paper', 'scissors']
        this.diffFighters = ['rock', 'paper', 'scissors', 'alien', 'lizzard']
        };
    }



    gameConditions() {
        if (this.person.turn === this.computer.turn) {
            return 'oof, sounds like a draw to me boss'
        }
        if (this.player1Choice === 'rock' && (this.player2Choice === 'scissors' || this.player2Choice === 'lizard')) {
          return 'human wins duh' 
        }
        if (this.player1Choice === 'paper' && (this.player2Choice === 'rock' || this.player2Choice))
    }

    // checkGameConditions(this.player``, this.player2Choice) {
    //     // need to check if what is passed through beats this win condition
    //     //checking to see if humans answer *conditions* match or lose to computer
    //     // is arg1 > arg2 
    //     return this.winConditions[this.player1Choice].includes(this.player2Choice)
    // }

    // computerChoice() {
    //     // var choice = this.player2.playerTurn(this.gameType);

    //     //computer choice here with randomize function 
    //     //this information will gain access to the object key value and randomly select 
       
    // }

        

    // drawGame(this.player1Choice, computerAnswer) {
    //     return this.player1Choice === this.player2Choice
        // also will be manipulated within main
    }

    //Make a method within here 

}
