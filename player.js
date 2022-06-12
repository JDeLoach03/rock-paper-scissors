class Player {
    constructor(name) {
        this.name = name;
        this.wins = 0;
        this.choice = ''
    }

    playerTurn(gameType) {
        // console.log(game)
        if (gameType === 'classic') {
            console.log('hello');
            var classicFighters = ['rock', 'paper', 'scissors']
            return classicFighters[Math.floor(Math.random() * classicFighters.length)]
        } else if (gameType === 'difficult') {
            console.log('gang')
            var difficultFighters = ['rock', 'paper', 'scissors', 'lizard', 'alien']
            return difficultFighters[Math.floor(Math.random() * difficultFighters.length)]
        }
    }

    increaseWins() {
        this.wins++
    }
    //Know whose turn it is
    //Keep track of amount of wins, then use this information to manipulate main
    //token is whatever image or emoji I decide to use for what is being displayed (in main) upon winning conditions 
    //Name is player or comp essentially
    // Catch phrase for winners or LOSERS
}
