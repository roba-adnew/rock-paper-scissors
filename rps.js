function playRound() {
    // The code will be defined as a main function that has no inputs

    // First I will define the parameters that you can use to play the game
    const hands = ["rock", "paper", "scissors"];
    const handsAbbrv = ["r", "p", "s"];

    // Below will function that has a computer randomly selects a hand from above 
    function getComputerChoice() {
        let n = Math.floor(Math.random() * 2);
        return hands[n];
    }

    // Below will be code to accept a user's input, for now they can either write out the full word  of a hand or the
    // first letter of the hand. If they don't provide either, we will return that the hand is invalid 
    let playerChoice = prompt("Rock, Paper Scissors, Shoot: ");
    playerChoice = playerChoice.toLowerCase();
    console.log(hands.includes(playerChoice));
    console.log(handsAbbrv.includes(playerChoice));

    if (!hands.includes(playerChoice) && !handsAbbrv.includes(playerChoice)) {
        return "You didn't throw a valid hand...come on";
    }

    // Below is a function or a switch-case statement that evaluates the hands provided and return's text showing 
    // whether or not you've won or tied and what hands were played
    function eval(playerSelection, computerSelection) {
        if (playerSelection.length == 1) {
            playerSelection = hands[handsAbbrv.indexOf(playerSelection)];
        }

        const winner_message = "You win! "+ playerSelection + " beats " + computerSelection;
        const loser_message = "You lost! "+ computerSelection + " beats " + playerSelection;
        const tie_message = "You tied because you both played " + playerSelection;

        switch (playerSelection) {
            case "rock": 
                switch (computerSelection) {
                    case "rock": 
                        return tie_message;
                    case "paper":
                        return loser_message;
                    case "scissors": 
                        return winner_message;
                }

            case "paper": 
                switch (computerSelection) {
                    case "rock": 
                        return winner_message;
                    case "paper":
                        return tie_message;
                    case "scissors": 
                        return loser_message;
                }

            case "scissors": 
                switch (computerSelection) {
                    case "rock": 
                        return loser_message;
                    case "paper":
                        return winner_message;
                    case "scissors": 
                        return tie_message;
                }
            
            }
        }
    
    return eval(playerChoice, getComputerChoice());
    }

console.log(playRound());





