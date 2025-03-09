let playerScore = 0;
let computerScore = 0;

const hands = {
  rock: "✊",
  paper: "✋",
  scissors: "✌️",  // Fixed case to lowercase
};

// Set initial hands
document.getElementById("playerHand").textContent = hands.paper;
document.getElementById("computerHand").textContent = hands.rock;

function toggleTheme() {
  document.body.classList.toggle("dark");
}

function startGame() {
  document.querySelector(".home-screen").style.display = "none";
  document.querySelector(".game-container").style.display = "block";
}

function play(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  // Directly update the hand display with emoji
  document.getElementById("playerHand").textContent = hands[playerChoice];
  document.getElementById("computerHand").textContent = hands[computerChoice];

  const result = getWinner(playerChoice, computerChoice);
  updateScore(result);
  displayResult(result);
}

function getWinner(player, computer) {
  if (player === computer) return "tie";
  if (
    (player === "rock" && computer === "scissors") || // Fixed case
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "win";
  }
  return "lose";
}

function updateScore(result) {
  if (result === "win") playerScore++;
  if (result === "lose") computerScore++;

  document.getElementById("playerScore").textContent = playerScore;
  document.getElementById("computerScore").textContent = computerScore;
}

function displayResult(result) {
  const resultElement = document.getElementById("result");
  if (result === "win") {
    resultElement.textContent = "YOU WON! 🎉";
    resultElement.className = "result won";
  } else if (result === "lose") {
    resultElement.textContent = "COMPUTER WON! 🎉";
    resultElement.className = "result won";
  } else {
    resultElement.textContent = "IT'S A TIE!";
    resultElement.className = "result";
  }
}

function resetTour() {
  console.log("Tour has been reset!");
  location.reload();
}
