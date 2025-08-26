
// Step 2: Computer choice
function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber < 0.33) return "rock";
  else if (randomNumber < 0.66) return "paper";
  else return "scissors";
}

// Step 3: Human choice
function getHumanChoice() {
  const choice = prompt("Enter rock, paper, or scissors:");
  return choice.toLowerCase();
}

// Step 4: Score variables
let humanScore = 0;
let computerScore = 0;

// Step 5: Play a single round
function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    console.log(`It's a tie! Both chose ${humanChoice}`);
    return;
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  } else {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
  }
}

// Step 6: Play the entire game
function playGame() {
  humanScore = 0;
  computerScore = 0;

  for (let round = 1; round <= 5; round++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(`--- Round ${round} ---`);
    playRound(humanSelection, computerSelection);
    console.log(`Score: You ${humanScore} - Computer ${computerScore}`);
  }

  console.log("--- Game Over ---");
  if (humanScore > computerScore) {
    console.log(`You win the game! Final Score: You ${humanScore} - Computer ${computerScore}`);
  } else if (humanScore < computerScore) {
    console.log(`You lose the game! Final Score: You ${humanScore} - Computer ${computerScore}`);
  } else {
    console.log(`It's a tie game! Final Score: You ${humanScore} - Computer ${computerScore}`);
  }
}

// Run the game
playGame();
