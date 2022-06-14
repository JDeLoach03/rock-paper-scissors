var game = new Game('classic')

//IF IT INVOLVES USER INTERACTION, FUNCTIONS SHOULD RELATE TO MAIN



// qeurySelectors

var duelSection = document.querySelector('#duel')
var resultSection = document.querySelector('#results')
var resultText = document.querySelector('.text')
var hands = document.querySelector('.hands-scene')
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
var chooseFighter = document.querySelector('.choose-fighter')
var row = document.querySelector('.row')
var header = document.querySelector('.choose-header')
// eventListeners


// window.addEventListener('load', chooseCpuFighter)
classicBtn.addEventListener('click', displayClassicSection)
difficultBtn.addEventListener('click', displayDifficultSection)

changeGameBtn.addEventListener('click', changeGame)

//will need to refactor 

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

  
  function displayClassicSection() {
    hide(mainMenu);
    show(duelSection);
    show(changeGameBtn)
    game.gameType = 'classic'
    //images will be sized appropriately and will need to utilize an event.target for specific elements and somehow attach those to selected choice

  }

  function displayDifficultSection() {
    hide(mainMenu)
    show(duelSection)
    show(lizard)
    show(alien)
    show(changeGameBtn)
    game.gameType = 'difficult'

  }


  function changeGame() {
    hide(duelSection)
    hide(lizard)
    hide(alien)
    show(mainMenu)
    hide(changeGameBtn)
    //some interpolation of images based on who won? 
  }

  function updateScore() {
    humanScore.innerText = `Wins: ${game.player1.wins}`
    computerScore.innerText = `Wins: ${game.player2.wins}`
    }

  function displayResultSection() {
    // hide(row)
    hide(header)
    show(resultSection)
    hands.innerHTML = `
    <img src="pictures/${game.player1.choice}.png" alt="${game.player1.choice}" id="${game.player1.choice}">
    <img src="pictures/${game.player2.choice}.png" alt="${game.player2.choice}" id="${game.player2.choice}">`
    displayWinner()
  }


  function displayWinner() {
    hands.innerHTML = ``
    if (game.player1.winner === true) {
      console.log('my mans said whatever');
      hands.innerHTML = `${game.player1.name} won!`
    } else if (game.player2.winner === true) {
      console.log('I lost I guess?')
      hands.innerHTML = `${game.player2.name} won!`
    } else {
      console.log('draw deez')
      hands.innerHTML = `It's a draw my dudes!!!!`
    }
  }  


  function resetChoices() {
    if (game.gameType === 'classic') {
      displayClassicSection()
    } else {
      displayDifficultSection()
    }
    resultSection.innerHTML = ''
  }


  function selectChoice(event) {
    game.player1.choice = event.target.id
    game.player2.choice = game.computerChoice(game.gameType)
    var whoWon = game.checkHumanWin()
    updateScore()
    displayResultSection()
    resetChoices()
    setTimeout(resetChoices, 3000)
    alert(whoWon);
  }

