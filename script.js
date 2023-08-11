const choices = ["rock", "paper", "scissors"];
// const userChoice = prompt("Choose rock, paper, or scissors:");
var userChoice;
let userScore = 0;
let computerScore = 0;

function playGame() {

    function playRound() {

    function checkUserChoice() {
        userChoice = prompt("Choose rock, paper, or scissors:");
        if (choices.includes(userChoice)) {
            console.log("You chose " + userChoice);
        } else {
            console.log("That's not a valid argument");
        }
    }

    checkUserChoice();

    function getComputerChoice() {
        return choices[Math.floor(Math.random() * choices.length)];
    }

    const computerChoice = getComputerChoice();
    console.log("Computer chose " + computerChoice);

    function checkResults() {

        if (userChoice == computerChoice) {
            console.log("It's a tie!");
        } else if (
            (userChoice == "rock" && computerChoice == "scissors") ||
            (userChoice == "paper" && computerChoice == "rock") ||
            (userChoice == "scissors" && computerChoice == "paper")
        ) {
            console.log("You win!");
            userScore++;
        } else {
            console.log("You lose!");
            computerScore++;
        }
    }

    checkResults();

    }

    playRound();
    playRound();
    playRound();
    playRound();
    playRound();    

    scoreCount();
}

function scoreCount() {
    if (userScore > computerScore) {
        alert("Congratulations! You won the game!")
    } else if (userScore < computerScore) {
        alert("Bad luck! You lost the game!")
    } else if (userScore == computerScore) {
        alert("Wow! It ended up on a tie!")
    }
}

playGame();