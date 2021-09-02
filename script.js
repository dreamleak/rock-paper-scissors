        // rock beats scissors, but loses to paper.
        // paper beats rock, but loses to scissors.
        // scissors beats paper, but loses to rock.



        // computer's automatic turn.
        function computerPlay() {
            let compChoices = Math.floor(Math.random() * 3);
            if (compChoices === 0) {
                return 'rock';
            } else if (compChoices === 1) {
                return 'paper';
            } else {
                return 'scissors';
            }
        }

        // executes five rounds between the player and computer.
        function playRound(playerSelection, computerSelection) {

            // converts any inputs to lowercase.
            let playerTurn = playerSelection.toLowerCase(),
                computerTurn = computerSelection.toLowerCase();


            if (playerTurn === 'rock') {
                if (computerTurn === 'rock') {
                    return 'Draw! Rematch?';
                } else if (computerTurn === 'paper') {
                    compScore++;
                    return 'You lose! Computer wins! Paper beats Rock.';
                } else {
                    playerScore++;
                    return 'You win! Rock beats scissors.';
                }

            } else if (playerTurn === 'paper') {
                if (computerTurn === 'paper') {
                    return 'Draw! Rematch?';
                }
                if (computerTurn === 'scissors') {
                    compScore++;
                    return 'You lose! Computer wins! Scissors beats Paper.';
                } else {
                    playerScore++;
                    return 'You win! Paper beats Rock.';

                }
            } else {
                if (computerTurn === 'scissors') {
                    return 'Draw! Rematch?';
                } else if (computerTurn === 'rock') {
                    compScore++;
                    return 'You lose! Rock beats Scissors.';
                } else {
                    playerScore++;
                    return 'You win! Scissors beats Paper.';
                }
            }
        };

        // declared variables required to keep track of the score.
        let playerScore = parseInt(0),
            compScore = parseInt(0);

        // compares scores to determine a winner.
        for (let i = 0; i < 5; i++) {
            let playerSelection = prompt('Choose wisely: rock, paper, or scissors?');
            const computerSelection = computerPlay();
            console.log(playRound(playerSelection, computerSelection));
            console.log("your score = " + playerScore);
            console.log("Computer's score = " + compScore);
        };