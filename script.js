let score = 0;    
    let compScore = 0;

    /* Randomly generate the computers choice*/
    function computerPlay() {
        let play = Math.floor((Math.random() * 3) + 1);
        if (play === 3) {
  shot = "rock";
} else if (play === 2) {
  shot = "paper";
} else {
  shot = "scissors";
}
        return shot;
        
    }
    //Start game by clicking 'Start Game' button.
    document.getElementById("rock").addEventListener("click", function() {
    playRound('rock')
});
    document.getElementById("paper").addEventListener("click", function() {
    playRound('paper')
});
    document.getElementById("scissors").addEventListener("click", function() {
    playRound('scissors')
});
    
    /*Ask for users choice and compare to computers choice, announce winner*/
    function playRound(a) {
        let computerSelection = computerPlay();
        let playerSelection = a;
        let winner = `You win, ${playerSelection} beats ${computerSelection}`;
        let loser = `You lose, ${computerSelection} beats ${playerSelection}`;
        let tie = `You tied!`
        let game = '';
        

        function choseRock() {
            document.getElementById("rock").addEventListener("click", function() {playerSelection = 'rock'});
        }
        function chosePaper() {
            document.getElementById("paper").addEventListener("click", function() {return 'paper'});
        }
        function choseScissors() {
            document.getElementById("scissors").addEventListener("click", function() {return 'scissors'});
        } 
        
       
        if (computerSelection === playerSelection) {
            game = tie;
        }
        if (computerSelection === "rock" & playerSelection === "paper") {
            game = winner;
        }
        if (computerSelection === "paper" & playerSelection === "scissors") {
            game = winner;
        }
        if (computerSelection === "scissors" & playerSelection === "rock") {
            game = winner;
        }        
        if (computerSelection === "rock" & playerSelection === "scissors") {
            game = loser;
        }
        if (computerSelection === "paper" & playerSelection === "rock") {
            game = loser;
        }
        if (computerSelection === "scissors" & playerSelection === "paper") {
            game = loser;
        }

        if (game === winner) {
            score += 1;
        }
        if (game === loser) {
            compScore += 1;
        }

       
        document.getElementById("currentScore").innerHTML = `The score is ${score} to ${compScore}!`;

        if (score === 5) {
            document.getElementById("final").innerHTML = `You scored ${score} points! YOU WIN!`;
        }
        
        if (compScore === 5) {
            document.getElementById("final").innerHTML = `Your opponent scored ${compScore} points! YOU LOSE!`;
        }
        
       
        
    }