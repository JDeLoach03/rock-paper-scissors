var game = new Game('classic')

//IF IT INVOLVES USER INTERACTION, FUNCTIONS SHOULD RELATE TO MAIN


// use Game.checkGame(arg1, arg2) {
// I would manipulate the dom based off true or false?
//}

//need a function that manipulates the result class showing choices for human and computer

//manipulate forms within here

// resetGame() {
    // Reset the dom
    // Includes
// }

//upon choice from user, move token underneath image they have chosen

// qeurySelectors
var duelSection = document.querySelector('#duel')
var resultSection = document.querySelector('#results')
var winningResults = document.querySelector('#results h2')
var humanSection = document.querySelector('#human')
var computerSection = document.querySelector('#computer')
var mainMenu = document.querySelector('#menu')
var classicBtn = document.querySelector('.classic .btn')
var difficultBtn = document.querySelector('.difficult .btn')
var rock = document.querySelector('#rock')
var paper = document.querySelector('#paper')
var scissors = document.querySelector('#scissors')
var lizard = document.querySelector('#lizard')
var alien = document.querySelector('#alien')
var changeGameBtn = document.querySelector('.change-game')
var computerAnswer = game.computerChoice()
// eventListeners

classicBtn.addEventListener('click', displayDuelSection)
difficultBtn.addEventListener('click', displayDifficultSection)

changeGameBtn.addEventListener('click', displayChangeGame)
rock.addEventListener('click', selectChoice)
paper.addEventListener('click',selectChoice)
scissors.addEventListener('click', selectChoice)
lizard.addEventListener('click', selectChoice)
alien.addEventListener('click', selectChoice)



//functions for manipulation
function show(element) {
    element.classList.remove('hidden');
  };
  
  function hide(element) {
    element.classList.add('hidden');
  }

  

  function displayDuelSection() {
    hide(mainMenu)
    show(duelSection)
    // on button click, it will take me to the appropriate section ()
    // the section of "game" will be hidden
    //section of "choose-fighter will be shown"
    //images will be sized appropriately and will need to utilize an event.target for specific elements and somehow attach those to selected choice

  }

  function displayDifficultSection() {
    hide(mainMenu)
    show(duelSection)
    show(lizardBtn)
    show(alienBtn)
    // displayDuelSection()
    // it depends on the game which images will be shown
    // should I break these functions into 2, one for classic and another for difficult?
    // event listener will need to be attached to initial boxes to begin the switching of the displays
  }

  function displayResultSection() {
    show()
     //hide the fight section
     //show the results section
     // interpolate chosen human/comp choice
     // do not forget to add the emoji below, centered with current
     //h2 will be interpolated in as "human or computer won this round"
     // will need to show the change button only at the 
     //will need to update whoever the winner of the game is at this time
     //
  }

  function displayChangeGame() {
    hide(duelSection)
    hide(lizardBtn)
    hide(alienBtn)
    show(mainMenu)
  }

  function showCompWin() {
    // if comp wins
    //increase the wins
    //manipulate the dom
    //show + hide what needs to be hidden
  }

  // function whichGame(e) {
  //   if (game.gameType === 'classic') {

  //   } else {

  //   }
  // }


  function selectChoice(event) {
  var id = event.target.id
    // console.log(id);
    game.player1Choice = id
    game.player2Choice = game.computerChoice('classic')
    var whoWon = game.checkHumanWin()
    console.log(whoWon);
    winningResults.innerText = whoWon

  }

  // function bullshit() {
  //   if (game.gameType === 'classic') {

  //   }
  // }