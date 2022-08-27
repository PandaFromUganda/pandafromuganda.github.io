let choices = ["rock", "paper", "scissors"];
var compChoice = 0;
var playerChoice = 0;
var textEnd = "";
var playerScore = 0;
var compScore = 0;

function getComputerChoice(){
    compChoice = Math.floor(Math.random()*3);
}


function game(){
    playerScore = 0;
    compScore = 0;
    console.clear();


    for (i = 0; i < 5; i++){

     let pick = prompt("Pick your choice!");
     let control = pick.toLowerCase();
     
     console.group("Game " + (i + 1));

     if (choices.includes(control)){
        playRound(control);
     }
     else {
        console.log("Your input was invalid, your choice has been set to rock!")
        playRound("rock");
     };
     console.groupEnd()
    }

    console.group("Results");
    console.log("You: " + playerScore + " VS CPU: " +compScore)
    console.groupEnd;
}


function playRound(choice){
        
        getComputerChoice();

        let newChoice = choice.toLowerCase();

        if (newChoice === "rock"){
            playerChoice = 0;
        }

        if (newChoice === "paper"){
            playerChoice = 1;
        }

        if (newChoice === "scissors"){
            playerChoice = 2;
        }

        console.log("The Computer picked: " + choices[compChoice]);

        
        //Rock vs Paper
        if (playerChoice === 0 && compChoice === 1){
            console.log("You Lost! Paper beats Rock.")
            compScore += 1;
        }

        //Rock vs Scissor
        if (playerChoice === 0 && compChoice === 2){
            console.log("You Won! Rock beats Scissors.")
            playerScore += 1;
        }

        //Paper vs Rock
        if (playerChoice === 1 && compChoice === 0){
            console.log("You Won! Paper beats Rock.")
            playerScore += 1;
        }

        //Paper vs Scissors
        if (playerChoice === 1 && compChoice === 2){
            console.log("You Lost! Scissors beat Paper.");
            compScore += 1;
        }

        //Scissor vs Rock
        if (playerChoice === 2 && compChoice === 0){
            console.log("You Lost! Rock beats Scissors.")
            compScore += 1;
        }

        //Scissor vs Paper
        if (playerChoice === 2 && compChoice === 1){
            console.log("You Won! Scissors beat Paper.")
            playerScore += 1;
        }

        //Tie
        if (playerChoice === compChoice){
            console.log("It's a Tie!");
        }

    }