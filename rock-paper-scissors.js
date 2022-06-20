// Play Rock, Paper, Scissors with the console!



function computerPlay() {
    return Math.floor(Math.random() * 3); 
}

function getUserChoice(userInput) {
    // 0 == Rock, 1 == Paper, 2 == Scissors, -1 == Invalid
    const choice = userInput;
    if (choice === 'rock') {
        return 0;
    } else if (choice === 'paper') {
        return 1;
    } else if (choice === 'scissors') {
        return 2;
    } else {
        alert("Invalid input!")
        return -1;
    }
}

function playRound(userChoice, pcChoice) {
    // return 1 on user win,
    // 0 on tie,
    // -1 on user lose,
    // -2 on unforeseen error
    switch(userChoice - pcChoice) {
        
        case -2: // rock - scissors
            return 1;
            break;
        case -1: // rock - paper, paper - scissors
            return -1;
            break;
        case 0: // like-like (tie)
            return 0;
            break;
        case 1: // paper - rock, scissors - paper
            return 1;
            break;
        case 2: // scissors - rock
            return -1;
            break;
        default: // this shouldn't happen
            return -2;
    }
}

function game(){
    // variables
    let userScore = 0;
    let pcScore = 0;
    let ties = 0;
    let userChoice;
    let validChoice = -1;
    let decision;

    // Welcome message in console
    console.log("Welcome to Rock, Paper, Scissors!\nYou will play 5 rounds against the computer.");
    console.log("Remember: Rock beats scissors, paper beats rock, and scissors beats paper!\nGood Luck!");

    // loop through 5 rounds
    for (let i = 0; i<5; i++){
        while(validChoice === -1){ //ask for user's choice until valid input
            userChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
            console.log(`You chose ${userChoice}!`);
            userChoice = getUserChoice(userChoice);
            validChoice = userChoice; 
        }
        validChoice = -1; // reset validChoice for next round

        decision = playRound(userChoice, computerPlay());
        
        if (decision === -1){
            console.log("Round goes to Computer!");
            pcScore++;
        } else if (decision === 0){
            console.log("Round is a Tie!");
            ties++;
        } else if (decision === 1){
            console.log("You win this Round!");
            userScore++;
        } else {
            console.log("Something went wrong, no winner");
        }

        console.log(`End of round ${i+1}!`);
        console.log(`Current Score:\nYou:${userScore} - Computer:${pcScore} - Ties:${ties}`);
    }
    
    if (userScore > pcScore){
        console.log("You Win!");
    } else if (userScore < pcScore){
        console.log("You Lose!");
    } else {
        console.log("It's a Draw!");
    }

}
