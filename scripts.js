let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection) {
  const computerSelection = computerPlay();
  let result = "";

  if (playerSelection === computerSelection) {
    result = `It's a tie! You both chose ${playerSelection}.`;
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    playerScore++;
    result = `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    computerScore++;
    result = `You lose! ${computerSelection} beats ${playerSelection}.`;
  }

  updateResult(result);
  updateScore();

  checkWinner();
}

function updateResult(message) {
  const resultDiv = document.getElementById('result');
  resultDiv.textContent = message;
}

function updateScore() {
  const scoreDiv = document.getElementById('score');
  scoreDiv.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}

function checkWinner() {
  if (playerScore === 5 || computerScore === 5) {
    const finalMessage =
      playerScore === 5 ? "🎉 You won the game!" : "😞 Computer wins the game!";
    updateResult(finalMessage);
    disableButtons();
  }
}

function disableButtons() {
  document.querySelectorAll('#buttons button').forEach(button => {
    button.disabled = true;
  });
}

// Add event listeners
document.getElementById('rock').addEventListener('click', () => playRound('rock'));
document.getElementById('paper').addEventListener('click', () => playRound('paper'));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));
