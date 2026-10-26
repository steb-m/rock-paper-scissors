class Player {
    constructor(choice, name) {
        this.name = name;
        this.choice = choice;
    }

    isTie(player2) {
        return this.choice === player2.choice;
    }

    choseRock() {
        return this.choice.toLowerCase() === "rock";
    }

    chosePaper() {
        return this.choice.toLowerCase() === "paper";
    }

    choseScissors() {
        return this.choice.toLowerCase() === "scissors";
    }
}

let p1Wins = 0;
let computerWins = 0;
function onClick(sender) {
    let player1 = new Player("You", sender.id);

    let computerChoice = Math.floor(Math.random() * 3) + 1, element;
    if (computerChoice == 1) element = "rock";
    else if (computerChoice == 2) element = "paper";
    else element = "scissors";

    let computer = new Player("Computer", element);

    if (player1.choseRock() && computer.choseScissors) {
        
        p1Wins++;
    }

    let winnerTag = document.body.h1.createElement('p');
    winnerTag.innerHTML = `You - ${p1Wins} | Computer - ${computerWins}`

}