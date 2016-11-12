class Game {
  constructor(choice, location, player) {
    this.choice = choice;
    this.location = location;
    this.player = player;
  }

  makeChoice() {

  }

  render() {
    return `    
      <div class="game">
        <h1>Welcome to the Game!</h1>
        <h3>Do you want to play?</h3>
        <button>Yes, I'd Love To!</button>
        <button id="no-button" onclick="clickNo()">No, I suck.</button>   
      </div>`
  }

}

export { Game };