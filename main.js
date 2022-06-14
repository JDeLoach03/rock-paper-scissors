// qeurySelectors and variables go here

var game = new Game('classic')
var duelSection = document.querySelector('#duel')
var resultSection = document.querySelector('#results')
var actionScene = document.querySelector('.fight-scene')
var humanSection = document.querySelector('#human')
var computerSection = document.querySelector('#computer')
var mainMenu = document.querySelector('#menu')
var classicBtn = document.querySelector('.classic .btn')
var difficultBtn = document.querySelector('.difficult .btn')
var lizard = document.querySelector('#lizard')
var alien = document.querySelector('#alien')
var changeGameBtn = document.querySelector('.change-game')
var humanScore = document.querySelector('.human-wins')
var computerScore = document.querySelector('.comp-wins')
var chooseFighter = document.querySelector('.choose-fighter')
var images= document.querySelector('.image-block')
var fighters = document.querySelector('.fighters')


//eventListeners go here
classicBtn.addEventListener('click', displayClassicSection)
difficultBtn.addEventListener('click', displayDifficultSection)
changeGameBtn.addEventListener('click', changeGame)
chooseFighter.addEventListener('click', runGame)


//Functions go here
function show(element) {
    element.classList.remove('hidden')
  };
  
function hide(element) {
  element.classList.add('hidden')
}

  
function displayClassicSection() {
  hide(mainMenu)
  show(duelSection)
  show(changeGameBtn)
  game.gameType = 'classic'
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
}

function updateScore() {
  humanScore.innerText = `Wins: ${game.player1.wins}`
  computerScore.innerText = `Wins: ${game.player2.wins}`
  }

function displayResultSection() {
  hide(chooseFighter)
  show(resultSection)
  show(actionScene)
  hide(changeGameBtn)
  actionScene.innerHTML += `
  <img src="pictures/${game.player1.choice}.png" alt="${game.player1.choice}" id="${game.player1.choice}">
  <img src="pictures/${game.player2.choice}.png" alt="${game.player2.choice}" id="${game.player2.choice}">`
  displayWinner()
}


function displayWinner() {
  resultSection.innerHTML = ''
  if (game.player1.winner === true) {
    resultSection.innerHTML = `${game.player1.name} won!`
  } else if (game.player2.winner === true) {
    resultSection.innerHTML = `${game.player2.name} won!`
  } else {
    resultSection.innerHTML = `It's a draw my dudes!!!!`
  }
}  


function resetChoices() {
  show(chooseFighter)
  show(images)
  hide(resultSection)
  if (game.gameType === 'classic') {
    displayClassicSection()
  } else {
    displayDifficultSection()
  }
  resultSection.innerHTML = ''
  actionScene.innerHTML = ''
  game.player1.winner = false
  game.player2.winner = false
}


function runGame(event) {
  game.player1.choice = event.target.id
  game.player2.choice = game.computerChoice(game.gameType)
  var whoWon = game.checkHumanWin()
  updateScore()
  displayResultSection()
  setTimeout(resetChoices, 3000)
}
