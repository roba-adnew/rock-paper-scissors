// The game will be defined as a main function that has no inputs
    // Updating the player selection to capture what they were going for through
    // button clicks, instead of a prompt. 
 function playRound(playerChoice) {
    // First I will define the parameters that you can use to play the game
    const hands = ["rock", "paper", "scissors"];

    // Below will function with computer randomly selects a hand from above 
    function getComputerChoice() {
        let n = Math.floor(Math.random() * 2);
        return hands[n];
    }

    // Below is a function or a switch-case statement that evaluates the hands
    // provided and return's text showing whether or not you've won or tied and 
    // what hands were played
    function eval(playerSelection, computerSelection) {

        const winner_message = "You win! "+ playerSelection + " beats " + computerSelection;
        const loser_message = "You lost! "+ computerSelection + " beats " + playerSelection;
        const tie_message = "You tied because you both played " + playerSelection;

        let playerWon = 0;

        switch (playerSelection) {
            case "rock": 
                switch (computerSelection) {
                    case "rock": 
                        console.log(tie_message);
                        playerWon = 0;
                        return playerWon;
                    case "paper":
                        console.log(loser_message);
                        playerWon = 0;
                        return playerWon;
                    case "scissors": 
                        console.log(winner_message);
                        playerWon = 1;
                        return playerWon;
                }

            case "paper": 
                switch (computerSelection) {
                    case "rock": 
                        console.log(winner_message);
                        playerWon = 1;
                        return playerWon;
                    case "paper":
                        console.log(tie_message);
                        playerWon = 0;
                        return playerWon;
                    case "scissors": 
                        console.log(loser_message);
                        playerWon = 0;
                        return playerWon;
                }

            case "scissors": 
                switch (computerSelection) {
                    case "rock": 
                        console.log(loser_message);
                        playerWon = 0;
                        return playerWon;
                    case "paper":
                        console.log(winner_message);
                        playerWon = 1;
                        return playerWon;
                    case "scissors": 
                        console.log(tie_message);
                        playerWon = 0;
                        return playerWon;
                }
            
            }
        }

    return eval(playerChoice, getComputerChoice());
    }

// This will return a nodelist of all the buttons 
const buttons = document.querySelectorAll("button");

// We will turn this nodelist into an array and then call a function on each
buttons.forEach(button => 
    button.addEventListener("click", function(event) {playRound(button.value);
    }));

// The game will consist of 5 rounds, in which we will print the result of each 
//  round and how well you did 
// function game() {
//     let playerWins = 0;
//     let compWins = 0;

//     for (let i = 0; i < 5; i++) {
//         let result = playRound();
//         playerWins += result;
//     }

//     return "You won " + playerWins + " round(s)!" 
//     }






