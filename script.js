console.log("Hi");

const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function checkWinner(playerSelection, computerSelection) {
    if(playerSelection == computerSelection) {
        return "tie";
    }
    else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ){
        return "Player";
    }
    else {
        return "Computer"
    }
}

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if(result == "tie") {
        return "It's a tie!"
    }
    else if (result == "Player") {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
    else{
        return `You Lose! ${computerSelection} beats ${playerSelection} `
    }
}

function getPlayerChoice() {
    let validInput = false;
    while(validInput == false) {
        const choice = prompt("Rock Paper Scissors");
        if (choice == null) {
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if (options.includes(choiceInLower)){
            validInput = true;
            return choiceInLower;
        }
    }
     
}
function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("Welcome!")
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log( playRound(playerSelection, computerSelection));
        console.log("-----------");
        if(checkWinner(playerSelection, computerSelection) == "player") {
            scorePlayer++;
        }
        else if (checkWinner(playerSelection, computerSelection) == "computer") {
            scoreComputer++;
        }
    }
    console.log("game over!")
    if(scorePlayer > scoreComputer) {
        console.log("Player was the winner!");
    }
    else if (scorePlayer < scoreComputer) {
        console.log("computer was the winner!");
    }
    else {
        console.log("It's a tie!");
    }
}
game();