console.log("Hello World");

let random = () => Math.floor(Math.random() * 3);
let humanScore = 0, computerScore = 0;
function getComputerChoice() {
    let choice = random();
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

let choice = () => prompt("Enter your choice").toLowerCase();

function isValidChoice(choice) {
    return ['paper', 'rock', 'scissors'].includes(choice);
}

function getUserChoice() {
    let userChoice = choice();
    while (!isValidChoice(userChoice)) {
        console.log('Invalid choice. Please enter rock, paper, or scissors.');
        userChoice = choice();
    }
    return userChoice;
}
function roundWon(userChoice, compChoice) {
    let winScenarios = ['paper rock', 'scissors paper', 'rock scissors'];
    let scenario = `${userChoice} ${compChoice}`;
    return winScenarios.includes(scenario);
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    let capitalizedHumanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
    let capitalizedComputerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);

    if (roundWon(humanChoice, computerChoice)) {
        humanScore++;
        console.log(`You won! ${capitalizedHumanChoice} beats ${capitalizedComputerChoice}.`);
    } else if (humanChoice !== computerChoice) {
        computerScore++;
        console.log(`You lose! ${capitalizedComputerChoice} beats ${capitalizedHumanChoice}.`);
    } else {
        console.log("It's a tie!");
    }
}


function playGame(){
    
    let humanChoice;
    let computerChoice;
 
    let round = 5;

    while(round>0){
        humanChoice = getUserChoice();
        console.log(humanChoice);

        computerChoice= getComputerChoice();
        console.log(computerChoice);

        playRound(humanChoice, computerChoice);
        console.log(`Score - Human: ${humanScore}, Computer: ${computerScore}`);
        round--;
    }
    let winner = humanScore >= computerScore ? 'Human' :'Computer';
    console.log(`${winner} is the Winner!`)
}

playGame()