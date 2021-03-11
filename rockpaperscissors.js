function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

function computerPlay() {
    let randomSelection=0;
    randomSelection=getRndInteger(1,4);
    if (randomSelection===1) {
        computerSelection="rock";
    }
    else if (randomSelection===2) {
        computerSelection="paper";
    }
    else if (randomSelection===3) {
        computerSelection="scissors";

    }
    console.log(randomSelection);
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    playerSelection="rock";
    computerSelection=computerPlay();
    console.log("Player's section: " + playerSelection + ". Computer's selection: " + computerSelection);
    if ((playerSelection=="rock" && computerSelection=="paper") 
    || (playerSelection=="paper" && computerSelection=="scissors") 
    || (playerSelection=="scissors" && computerSelection=="paper")) {
        console.log("You lost. " + computerSelection + " beats " + playerSelection + ".");
    }
    else if (((playerSelection=="rock" && computerSelection=="scissors") 
    || (playerSelection=="paper" && computerSelection=="rock") 
    || (playerSelection=="scissors" && computerSelection=="paper"))) {
        console.log("You won! " + playerSelection + " beats " + computerSelection + ".");
    }
    else console.log("It's a tie.");
}

function game() {
    let i=0;
    for (i=0; i<6; i++) {
        playRound()
    }

}