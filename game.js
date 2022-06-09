// GAME WILL HANDLE MANIPULATION OF DATA/ DATA HUB FOR EASY UNDERSTANDING

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


    checkGameConditions(humanAnswer, computerAnswer) {
        // utilizing a randomize function 
        //--regular game Math.floor(math.random()* 3) || difficult version-- math.floor(math.random() * 5) 
        // need to check if what is passed through beats this win condition
        //checking to see if humans answer *conditions* match or lose to computer
        // is arg1 > arg2 
        return this.winConditions[humanAnswer].includes(computerAnswer)
    }



    //computer choice here with randomize function 
    //this information will be sent to answer 2
    

    drawGame(humanAnswer, computerAnswer) {
        return humanAnswer === computerAnswer
        // also will be manipulated within main
    }

}
