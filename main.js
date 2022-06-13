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
var container = document.querySelector('.container')
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

// window.addEventListener('load', chooseCpuFighter)
classicBtn.addEventListener('click', displayClassicSection)
difficultBtn.addEventListener('click', displayDifficultSection)

changeGameBtn.addEventListener('click', changeGame)
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


// function pickGame(event) {
//   if (event.target.id === '')
  // I need to match the id
  //the point of this function, would be 
// }

// function startGame() {

// }
  
  function displayClassicSection() {
    // console.log('weenie hut general');
    hide(mainMenu);
    show(duelSection);
    show(changeGameBtn)
    game.gameType = 'classic'
    //images will be sized appropriately and will need to utilize an event.target for specific elements and somehow attach those to selected choice

  }

  function displayDifficultSection() {
    // console.log('gangster')
    hide(mainMenu)
    show(duelSection)
    show(lizard)
    show(alien)
    show(changeGameBtn)
    game.gameType = 'difficult'
    // displayDuelSection()
    // event listener will need to be attached to initial boxes to begin the switching of the displays
  }


  function changeGame() {
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

  function displayResultSection() {
    hide(duelSection)
    show(resultSection)
    resultSection = `
    <img src="pictures/${game.player1.choice}.png" alt="${game.player1.choice}">
    <img src="pictures/${game.player2.choice}.png" alt="${game.player2.choice}" `
  
  }

  function matchImagesForHuman() {
    if (game.player1.choice === 'rock') {
      player1.choice.src = 'pictures/rock.png'
    } else if(game.player1.choice === 'paper') {
      player1.choice.src = 'pictures/happy-paper.png'
    } else if (game.player1.choice === 'scissors') {
      player1.choice.src = 'pictures/happy-scissors.png'
    } else if (game.player1.choice === 'lizard') {
      player1.choice.src = 'pictures/lizard.png'
    } else if (game.player1.choice === 'alien') {
      player1.choice.src = 'pictures/happy-alien.png'
    }
  }

  function matchImgaesForComputer() {
    if (game.player2.choice === 'rock') {
      player1.choice.src = 'pictures/rock.png'
    } else if(game.player2.choice === 'paper') {
      player1.choice.src = 'pictures/happy-paper.png'
    } else if (game.player2.choice === 'scissors') {
      player1.choice.src = 'pictures/happy-scissors.png'
    } else if (game.player2.choice === 'lizard') {
      player1.choice.src = 'pictures/lizard.png'
    } else if (game.player2.choice === 'alien') {
      player1.choice.src = 'pictures/happy-alien.png'
    }
  }

  function selectChoice(event) {
    game.player1.choice = event.target.id
    game.player2.choice = game.computerChoice(game.gameType)
    var whoWon = game.checkHumanWin()
    // alert(whoWon);
    updateScore()
    displayResultSection()
    // displayResultSection()
  }

