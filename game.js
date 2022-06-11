// GAME WILL HANDLE MANIPULATION OF DATA/ DATA HUB FOR EASY UNDERSTANDING


// if anything, its time to reset the game class
//I need to have a gameType, and both playerChoices empty
// reassign later within methods 
//within the properties, I would like to have the new instances of players, and add the "win conditions" separately and gameTypes

class Game {
    constructor(gameType) {
        this.person = new Player('emoji hearts')
        this.computer = new Player('robot face');
        this.gameType = gameType
        this.player1Choice = null;
        this.player2Choice = null;
        this.classicFighters = ['rock', 'paper', 'scissors']
        this.diffFighters = ['rock', 'paper', 'scissors', 'alien', 'lizzard']
    };


    gameConditions() {
        var whoWon = 'draw'
        if (this.player1Choice === 'rock' && (this.player2Choice === 'scissors' || this.player2Choice === 'lizard')) {
            this.person.increaseWins()
            whoWon = this.person.name 
        } else  {
            whoWon = this.computer.name
            this.computer.increaseWins()
        }
        return whoWon
    }

    resetGame() { 
        setTimeout(function() {
            this.player1Choice = null
            this.player2Choice = null
            this.gameType = null 
        }, 3000) 

        
    }

    computerRandomChoice() {
        if (this.gameType === 'difficult') {
            var difficultFighters = ['rock', 'paper', 'scissors', 'lizard', 'alien']
                difficultFighters[Math.floor(Math.random() * difficultFighters.length)]
        } else {
            if (gameType === 'classic') {
             var classicFighters = ['rock', 'paper', 'scissors'] 
             classicFighters[Math.floor(Math.random() * classicFighters.length)]
        }
    } 
}



