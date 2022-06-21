// Play Rock, Paper, Scissors

// Global variables
let userScore = 0;
let pcScore = 0;

// Game Container
const game = document.querySelector('#game');

// Scores Container
const scores = document.createElement('div');
scores.classList.add('scores');

const uScoreElem = document.createElement('h2');
uScoreElem.classList.add('uScore');

const pcScoreElem = document.createElement('h2');
pcScoreElem.classList.add('pcScore');

scores.append(uScoreElem, pcScoreElem);

// Choices container
const choices = document.createElement('div');
choices.classList.add('choices');

const userChoice = document.createElement('h1');
const pcChoice = document.createElement('h1');

choices.append(userChoice, pcChoice);

// Start Button
const start = document.querySelector('.start');
start.addEventListener('click', initializeGame);

// Gameplay Buttons
const gameButtons = document.createElement('div');
gameButtons.classList.add('gameButtons');

const rock = document.createElement('button');
rock.classList.add('rock');
rock.textContent = 'rock';

const paper = document.createElement('button');
paper.classList.add('paper');
paper.textContent = 'paper';

const scissors = document.createElement('button');
scissors.classList.add('scissors');
scissors.textContent = 'scissors';

gameButtons.append(rock, paper, scissors);

const buttons = gameButtons.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', userPlay));

// Win message container
const winnerCon = document.createElement('div');
winnerCon.classList.add('winnerCon');

const winner = document.createElement('h1');
winner.classList.add('winner');

winnerCon.append(winner);

// FUNCTIONS

function userPlay(e) {
    
    userChoice.textContent = `You chose ${this.className}!`;

    switch (this.className) {
        case "rock":
            playRound(0);
            break;
        case "paper":
            playRound(1);
            break;
        case "scissors":
            playRound(2);
    }
}

function computerPlay() {
    return Math.floor(Math.random() * 3); 
}

function playRound(userResult) {
    // return 1 on user win,
    // 0 on tie,
    // -1 on user lose,
    // -2 on unforeseen error
    const pcResult = computerPlay();
    switch (pcResult) {
        case 0:
            pcChoice.textContent = "CPU chose rock!";
            break;
        case 1:
            pcChoice.textContent = "CPU chose paper!";
            break;
        case 2:
            pcChoice.textContent = "CPU chose scissors!";
    }

    switch(userResult - pcResult) {
        
        case -2: // rock - scissors
            userScore++;
            uScoreElem.textContent = `Your score: ${userScore}`;
            playGame();
            break;
        case -1: // rock - paper, paper - scissors
            pcScore++;
            pcScoreElem.textContent = `CPU score: ${pcScore}`;
            playGame();
            break;
        case 0: // like-like (tie)
            break;
        case 1: // paper - rock, scissors - paper
            userScore++;
            uScoreElem.textContent = `Your score: ${userScore}`;
            playGame();
            break;
        case 2: // scissors - rock
            pcScore++;
            pcScoreElem.textContent = `CPU score: ${pcScore}`;
            playGame();
            break;
        default: // this shouldn't happen
            console.log("Something went wrong");
            return;
    }
    return;
}

function playGame() {
    if (userScore === 5 || pcScore === 5){
        scores.remove();
        choices.remove();
        gameButtons.remove();
        
        if (userScore > pcScore){
            winner.textContent = `You Win ${userScore} - ${pcScore}!`;
            start.textContent = "Play again!";
            game.append(winnerCon, start);
        } else {
            winner.textContent = `You Lose ${userScore} - ${pcScore}!`;
            start.textContent = "Try again?";
            game.append(winnerCon, start);
        }
    }
}

function initializeGame() {
    userScore = 0;
    pcScore = 0;

    uScoreElem.textContent = `Your score: ${userScore}`;
    pcScoreElem.textContent = `CPU score: ${pcScore}`;
    pcChoice.textContent = "";
    userChoice.textContent = "";


    if (game.contains(winnerCon)){
        game.removeChild(winnerCon);
    } 
    game.removeChild(start);
    game.append(scores, gameButtons, choices);

}
