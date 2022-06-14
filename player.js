class Player {
    constructor(name) {
        this.name = name;
        this.wins = 0;
        this.choice = ''
        this.winner = false;
    }

    playerTurn(gameType) {
        if (gameType === 'classic') {
            var classicFighters = ['rock', 'paper', 'scissors']
            return classicFighters[Math.floor(Math.random() * classicFighters.length)]
        } else if (gameType === 'difficult') {
            var difficultFighters = ['rock', 'paper', 'scissors', 'lizard', 'alien']
            return difficultFighters[Math.floor(Math.random() * difficultFighters.length)]
        }
    }

    increaseWins() {
        this.wins++
    }
}
