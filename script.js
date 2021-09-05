        // declared variables required to keep track of the score.
        // let playerScore = parseInt(0),
        //     compScore = parseInt(0);

        // compares scores to determine a winner.
        // for (let i = 0; i < 5; i++) {
        //     let playerSelection = prompt('Choose wisely: rock, paper, or scissors?');
        //     const computerSelection = computerPlay();
        //     console.log(playRound(playerSelection, computerSelection));
        //     console.log("your score = " + playerScore);
        //     console.log("Computer's score = " + compScore);
        // };

        const playerSelectionDisplay = document.getElementById('player-choice');
        const computerSelectionDisplay = document.getElementById('computer-choice');
        const getResultsDisplay = document.getElementById('result-scores');
        const possibleChoices = document.querySelectorAll('button');
        let playerChoice;
        let computerChoice;
        let getResults;

  function playRound () {
        possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
            playerChoice = e.target.id;
            playerSelectionDisplay.innerHTML = playerChoice;
            computerPlay();
            scoreBoard();
        }));

        function computerPlay() {
            // automates computer's every move.
            const randomValue = Math.floor(Math.random() * 3);

            if (randomValue === 0) {
                computerChoice = 'rock';
            }
             else if (randomValue === 1) {
                computerChoice = 'paper';
            } else { 
                computerChoice = 'scissors';
            }
            computerSelectionDisplay.textContent = computerChoice;
     }

    function scoreBoard() {
        // still must add scores for each turn.
        // playable without score tracker.
      if (playerChoice === computerChoice) {
            getResults = 'Draw! Rematch?';
            }
      if (playerChoice === 'paper' && computerChoice === 'rock') {
            getResults = 'You win!';      
        }
      if (playerChoice === 'paper' && computerChoice === 'scissors') {
            getResults = 'You lose! Computer wins!';
      } 
      if (playerChoice === 'rock' && computerChoice === 'scissors') {
          getResults = "You win!";
      }
      if (playerChoice === 'rock' && computerChoice === 'paper') {
          getResults = 'You lose! Computer wins!';
      }
      if (playerChoice === 'scissors' && computerChoice === 'paper') {
          getResults = 'You win!';
      }
      if (playerChoice === 'scissors' && computerChoice === 'rock') {
          getResults = 'You lose! Computer wins!';
      }
        getResultsDisplay.textContent = getResults;
    }
}
playRound();