var game = new Game('classic')

//IF IT INVOLVES USER INTERACTION, FUNCTIONS SHOULD RELATE TO MAIN



// qeurySelectors
var duelSection = document.querySelector('#duel')
var resultSection = document.querySelector('#results')
// var winningResults = document.querySelector('#results h2')
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
var humanScore = document.querySelector('.human-wins')
var computerScore = document.querySelector('.comp-wins')
// eventListeners

// classicBtn.addEventListener('click', setUpClassicGame)
// difficultBtn.addEventListener('click', setUpDifficultGame)

classicBtn.addEventListener('click', displayDuelSection)
difficultBtn.addEventListener('click', displayDifficultSection)

changeGameBtn.addEventListener('click', displayChangeGame)
rock.addEventListener('click', selectChoice)
paper.addEventListener('click',selectChoice)
scissors.addEventListener('click', selectChoice)
lizard.addEventListener('click', selectChoice)
alien.addEventListener('click', selectChoice)


//setTimeout(reset, 3000)

//functions for manipulation
function show(element) {
    element.classList.remove('hidden');
  };
  
  function hide(element) {
    element.classList.add('hidden');
  }


//  function setUpClassicGame() {
//    //need to decide which game
//    displayDuelSection();
//    game = new Game('classic');
//  }

//  function setUpDifficultGame() {
//    displayDifficultSection();
//    game = new Game('difficult');
//    console.log('Yo mama')
//  }
  

  function displayDuelSection() {
    console.log('weenie hut general');
    hide(mainMenu);
    show(duelSection);
    show(changeGameBtn)
    // updateScore()
    // on button click, it will take me to the appropriate section ()
    // the section of "game" will be hidden
    //section of "choose-fighter will be shown"
    //images will be sized appropriately and will need to utilize an event.target for specific elements and somehow attach those to selected choice

  }

  function displayDifficultSection() {
    console.log('gangster')
    hide(mainMenu)
    show(duelSection)
    show(lizard)
    show(alien)
    show(changeGameBtn)
    // displayDuelSection()
    // it depends on the game which images will be shown
    // should I break these functions into 2, one for classic and another for difficult?
    // event listener will need to be attached to initial boxes to begin the switching of the displays
  }


  function displayChangeGame() {
    hide(duelSection)
    hide(lizard)
    hide(alien)
    show(mainMenu)
    //some interpolation of images based on who won? 
  }

  function updateScore() {
    humanScore.innerText = `Wins: ${game.player1.wins}`
    computerScore.innerText = `Wins: ${game.player2.wins}`
    }


  // function displayResultSection() {
  //   hide(duelSection)
  //   show(resultSection)
  //   resultSection += `
  //   <img src="pictures/${game.player1.choice}.png" alt="paper" id="paper">`

  // }

  function selectChoice(event) {
  var id = event.target.id
    game.player1.choice= id
    game.player2.choice = game.computerChoice()
    var whoWon = game.checkHumanWin()
    resultSection.innerText = whoWon
    alert(whoWon);
    updateScore()
  }

