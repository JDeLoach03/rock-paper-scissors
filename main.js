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
var gameSection = document.querySelector('#game')
var fighterSection = document.querySelector('.choose-fighter')
var resultSection = document.querySelector('.result')
var humanSection = document.querySelector('#human')
var computerSection = document.querySelector('#computer')

// eventListeners




//functions for manipulation
function show(element) {
    element.classList.remove('hidden');
  };
  
  function hide(element) {
    element.classList.add('hidden');
  }

  

  function displayGameSection() {
    // on button click, it will take me to the appropriate section
    // the section of "game" will be hidden
    //section of "choose-fighter will be shown"
    //images will be sized appropriately and will need to utilize an event.target for specific elements and somehow attach those to selected choice

  }

  function displayFighterSection() {
    // it depends on the game which images will be shown
    // should I break these functions into 2, one for classic and another for difficult?
    // event listener will need to be attached to initial boxes to begin the switching of the displays
  }

  function displayResultSection() {
     //hide the fight section
     //show the results section
     // interpolate chosen human/comp choice
     // do not forget to add the emoji below, centered with current
     //h2 will be interpolated in as "human or computer won this round"
     // will need to show the change button only at the 
     //will need to update whoever the winner of the game is at this time
     //
  }