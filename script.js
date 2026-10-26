class Player {
    constructor(choice, name) {
        this.name = name;
        this.choice = choice;
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
    let player1 = new Player(sender ,"You");

    let computerChoice = Math.floor(Math.random() * 3) + 1, element;
    if (computerChoice == 1) element = "rock";
    else if (computerChoice == 2) element = "paper";
    else element = "scissors";

    let computer = new Player(element, "Computer");
    console.log(element + " vs " + player1.choice)
    let p1WinsRound =
        (player1.choseRock() && computer.choseScissors()) ||
        (player1.choseScissors() && computer.chosePaper()) ||
        (player1.chosePaper() && computer.choseRock());

    let isTie =
        (player1.choseRock() && computer.choseRock()) ||
        (player1.choseScissors() && computer.choseScissors()) ||
        (player1.chosePaper() && computer.chosePaper());

    if (isTie) {
        p1Wins += 0.5;
        computerWins += 0.5;
    } else if (p1WinsRound) {
        p1Wins++;
    } else {
        computerWins++;
    }

    let winnerTag = document.getElementById('result')
    winnerTag.innerHTML = `You picked ${player1.choice} and the computer picked ${element}.`
    let resultTag = document.getElementById('score');
    resultTag.innerHTML = `You - ${p1Wins} | Computer - ${computerWins}`

}