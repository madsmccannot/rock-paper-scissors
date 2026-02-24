console.log("Hello World");

// This game is played against the computer
// I have to write a function that randomly returns "rock", "paper" or "scissors".

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


// Write the logic to get the human choice
// I have to write a function that takes the user choice and returns it

function getHumanChoice() {
  let humanChoice = prompt("Choose between Rock, Paper or Scissors: ");
  return humanChoice.toLowerCase();
}

// Declare the players score variables
// I have to write variables to keep track of the players score.
// Write logic to play a single round
// I have to write a function that takes both human and computer choices as arguments,
//plays a single round, increments the round winner's score and logs a winner a nnouncement.

// Write logic to play the entire game, it must have 5 rounds
//The last 5 comments were glued because they were passed to the function bellow

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (
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
  // Play 5 rounds
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  // Declare final winner
  console.log("Final Score: ");
  console.log("Human: ", humanScore);
  console.log("Computer: ", computerScore);

  if (humanScore > computerScore) {
    console.log("You won the game!");
  } else if (computerScore > humanScore) {
    console.log("Computer won the game!");
  } else {
    console.log("The game is a tie! Even thought this one is improbable");
  }
}

playGame(); 