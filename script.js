const playerSelectionDisplay = document.getElementById('player-choice');
const computerSelectionDisplay = document.getElementById('computer-choice');
const getResultsDisplay = document.getElementById('show-results');
const possibleChoices = document.querySelectorAll('button');
const playerScoreDisplay = document.querySelector('#player-points');
const computerScoreDisplay = document.querySelector('#computer-points');
let playerChoice;
let computerChoice;
let getResults;
let playerScore = 0;
let computerScore = 0;
let gameOver = false;
const winningScore = 5;


function playRound() {
    possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
        playerChoice = e.target.id;
        playerSelectionDisplay.textContent = playerChoice;

        function scoreBoard() {
            if (!gameOver && getResults === "You win!") {
                playerScore++;
                if (playerScore === winningScore) {
                    gameOver = true;
                } else if (getResults === "You lose! Computer wins!") {
                    playerScore--;
                } else {
                    gameOver = false;
                }
                playerScoreDisplay.textContent = playerScore;
            }
        if (!gameOver && getResults === "You lose! Computer wins!") {
            computerScore++;
            if (computerScore === winningScore) {
                gameOver = true;
            } else if (getResults === "You win!") {
                computerScore--;
            } else {
                gameOver = false;
            }
            computerScoreDisplay.textContent = computerScore;
        }
    }
        computerPlay();
        resultTracker();
        scoreBoard();
    }));

    function computerPlay() {
        // automates computer's every move.
        const randomValue = Math.floor(Math.random() * 3);

        if (randomValue === 0) {
            computerChoice = 'rock';
        } else if (randomValue === 1) {
            computerChoice = 'paper';
        } else {
            computerChoice = 'scissors';
        }
        computerSelectionDisplay.textContent = computerChoice;
    }

    function resultTracker() {
        if (playerChoice === computerChoice) {
            getResults = 'Draw! Rematch?';
        }
        if ((playerChoice === 'paper' && computerChoice === 'rock') || (playerChoice === 'rock' && computerChoice === 'scissors') || (playerChoice === 'scissors' && computerChoice === 'paper')) {
            getResults = 'You win!';
        }
        if ((playerChoice === 'paper' && computerChoice === 'scissors') || (playerChoice === 'rock' && computerChoice === 'paper') || (playerChoice === 'scissors' && computerChoice === 'rock')) {
            getResults = 'You lose! Computer wins!';
        }
        getResultsDisplay.textContent = getResults;
    }
}
    playRound();