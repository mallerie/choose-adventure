import $ from 'jquery';

// import Game from "./game"

function  renderWelcome() {
  var div = document.getElementById("app");
  div.innerHTML = `<div class="game">
                    <h1>Welcome to the Game!</h1>
                    <h3>Do you want to play?</h3>
                    <button>Yes, I'd Love To!</button>
                    <button id="no-button" onclick="clickNo()">No, I suck.</button>   
                  </div>`;
  var text = div.innerHTML;
}

function  renderGame() {
  var div = document.getElementById("game");
  div.innerHTML = `<div class="stage">
                    <h1>Welcome to the Game!</h1>
                    <h3>Do you want to play?</h3>
                    <button>Yes, I'd Love To!</button>
                    <button id="no-button" onclick="clickNo()">No, I suck.</button>   
                  </div>`;
  var text = div.innerHTML;
}


function clickNo() {
  alert('You have no choice, you must play this game.');
}


renderWelcome();

