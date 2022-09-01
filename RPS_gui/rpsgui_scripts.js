let choices = ["rock", "paper", "scissors"];
var compChoice = 0;
var playerChoice = 0;
var textEnd = "";
var playerScore = 0;
var compScore = 0;
var gameLog = "";
var buttonClicked = ""

let logText = document.querySelector(".textDisplay");
let gameText = document.createElement("p");

let compTextbox = document.querySelector(".compText");
let compText = document.createElement("p");

let buttonRock = document.querySelector("#b1");
buttonRock.addEventListener("click", function (){
    console.log("button 1 pressed");
    playerChoice = 0;
    playRound(playerChoice);
    gameText.textContent = gameLog;
    logText.appendChild(gameText);
});

let buttonPaper = document.querySelector("#b2");
buttonPaper.addEventListener("click", function (){
    console.log("button 2 pressed");
    playerChoice = 1;
    playRound(playerChoice);
    gameText.textContent = gameLog;
    logText.appendChild(gameText);
});

let buttonScissors = document.querySelector("#b3");
buttonScissors.addEventListener("click", function (){
    console.log("button 3 pressed");
    playerChoice = 2;
    playRound(playerChoice);
    gameText.textContent = gameLog;
    logText.appendChild(gameText);
});


function getComputerChoice(){
    compChoice = Math.floor(Math.random()*3);
    compText.textContent = ("The Computer picked " + choices[compChoice] + ".");
    compTextbox.appendChild(compText);
}


// function game(buttonClicked){
//     playRound(buttonClicked);
//     console.log(gameLog);
//     gameText.textContent = gameLog;
//     logText.appendChild(gameText);
// }


function playRound(choice){
        
        getComputerChoice();

        // // // let newChoice = choice.toLowerCase(); not needed anymore;

        // newChoice = choice;

        // if (newChoice === "rock"){
        //     playerChoice = 0;
        // }

        // if (newChoice === "paper"){
        //     playerChoice = 1;
        // }

        // if (newChoice === "scissors"){
        //     playerChoice = 2;
        // }

        // // console.log("The Computer picked: " + choices[compChoice]);

        
        //Rock vs Paper
        if (playerChoice === 0 && compChoice === 1){
            gameLog = "You Lost! Paper beats Rock.";
            compScore += 1;
        }

        //Rock vs Scissor
        if (playerChoice === 0 && compChoice === 2){
            gameLog = "You Won! Rock beats Scissors.";
            playerScore += 1;
        }

        //Paper vs Rock
        if (playerChoice === 1 && compChoice === 0){
            gameLog = "You Won! Paper beats Rock.";
            playerScore += 1;
        }

        //Paper vs Scissors
        if (playerChoice === 1 && compChoice === 2){
            gameLog = "You Lost! Scissors beat Paper.";
            compScore += 1;
        }

        //Scissor vs Rock
        if (playerChoice === 2 && compChoice === 0){
            gameLog = "You Lost! Rock beats Scissors.";
            compScore += 1;
        }

        //Scissor vs Paper
        if (playerChoice === 2 && compChoice === 1){
            gameLog = "You Won! Scissors beat Paper."
            playerScore += 1;
        }

        //Tie
        if (playerChoice === compChoice){
            gameLog = "It's a Tie!";
        }

    }