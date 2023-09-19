// The game will be defined as a main function that has no inputs
// Updating the player selection to capture what they were going for through
// button clicks, instead of a prompt. 

const hands = ["rock", "paper", "scissors"];
// Below will function with computer randomly selects a hand from above 
function getComputerChoice() {
    let n = Math.floor(Math.random() * 3);
    console.log(n);
    return hands[n];
    }

function playRound(playerChoice) {
    // First I will define the parameters that you can use to play the game
    const rock = {"rock": 0, "paper": -1, "scissors": 1}
    const paper = {"rock": 1, "paper": 0, "scissors": -1}
    const scissors = {"rock": -1, "paper": 1, "scissors": 0}

    // Below is a  a switch-case statement that evaluates the hands
    // provided 

    switch (playerChoice) {
        case "rock": 
            return rock[getComputerChoice()];
            
        case "paper": 
            return paper[getComputerChoice()];

        case "scissors": 
            return scissors[getComputerChoice()];
        }
    }


    const buttons = document.querySelectorAll("button");
    const scoreDisplay = document.getElementById("results");
    let rounds = 0;

    // We will turn this nodelist into an array and then call a function on each

    buttons.forEach(button => 
        button.addEventListener("click", function(event) {
            let message = "";
            let result = playRound(button.value);

            if (result == 1) {message += "You win!"}
            else if (result == 0) {message += "You tied!"}
            else {message += "You lose!"}

            scoreDisplay.innerHTML = message;
            rounds += 1;
            })
        );
``






