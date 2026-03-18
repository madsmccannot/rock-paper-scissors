//initial greeting
const greeting = document.createElement("h1");
greeting.style.textAlign = "center";
greeting.textContent = "Hi! Let's play a game :)";
document.body.appendChild(greeting);

// This game is played against the computer
// I have to write a function that randomly returns "rock", "paper" or "scissors".

//initial state and crwation of DOM elements
let humanScore = 0;
let computerScore = 0;

const resultsDiv = document.createElement("div");
const scoreDiv = document.createElement("div");
const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");
const resetBtn = document.createElement("button");

//setup UI
rock.textContent = "Rock";
paper.textContent = "Paper";
scissors.textContent = "Scissors";
resetBtn.textContent = "Restart Game";
scoreDiv.textContent = "Score -> You: 0 | Computer: 0";
resultsDiv.style.marginTop = "20px";
resultsDiv.style.fontSize = "18px";
scoreDiv.style.marginTop = "10px";
scoreDiv.style.fontWeight = "bold"; 

document.body.append(rock, paper, scissors, resetBtn, resultsDiv, scoreDiv);

//functions
function getComputerChoice() {
  let randomNumber = Math.random();

  if (randomNumber < 0.33) {
    return "rock";
  } else if (randomNumber < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Write logic to play the entire game, it must have 5 rounds
//The last 5 comments were glued because they were passed to the function bellow

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
      resultsDiv.textContent = "It's a tie!";
  } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
  ) {
      humanScore++;
      resultsDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}`;   } else {
      computerScore++;
      resultsDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
  }

  scoreDiv.textContent = `Score -> You: ${humanScore} | Computer: ${computerScore}`;
 
  if (humanScore === 5 || computerScore === 5) {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    if (humanScore > computerScore) {
      resultsDiv.textContent += "🎉 You won the game!";
    } else {
      resultsDiv.textContent += "💻 Computer won the game!";
    }
  }
}

//event listeners
rock.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});
paper.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
  });
scissors.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});

resetBtn.addEventListener("click", () => {
  humanScore = 0;
  computerScore = 0;

  scoreDiv.textContent = "Score -> You: 0 | Computer: 0";
  resultsDiv.textContent = "Game Restarted";

  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;
});

