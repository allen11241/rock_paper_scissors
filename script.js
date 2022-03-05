const rock = 'rock'
const paper = 'paper'
const scissors = 'scissors'
let computerWins = 0
let userWins = 0

function computerPlay(){
    let result = Math.floor(Math.random() * 3)
    if(result === 0){
        return rock
    } else if(result === 1){
        return paper
    } else {
        return scissors
    }
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === rock &&
        computerSelection === paper){
            computerWins+=1
            return console.log('You Lose! Paper beats Rock!')
    } else if(playerSelection === rock &&
        computerSelection === scissors){
            userWins+=1
            return console.log('You win! Rock beats Scissors!')
    } else if(playerSelection === rock &&
        computerSelection === rock){
            return console.log('Tie! You both picked Rock.')
    } else if(playerSelection === paper &&
        computerSelection === paper){
            return console.log('Tie! You both picked Paper.')
    } else if(playerSelection === paper &&
        computerSelection === rock){
            userWins+=1
            return console.log('You win! Paper beats Rock!')
    } else if(playerSelection === paper &&
        computerSelection === scissors){
            computerWins+=1
            return console.log('You lose! Scissors beat Paper!')
    } else if(playerSelection === scissors &&
        computerSelection === scissors){
            return console.log('Tie! You both picked Scissors.')
    } else if(playerSelection === scissors &&
        computerSelection === paper){
            userWins+=1
            return console.log('You win! Scissors beats Paper!')
    } else if(playerSelection === scissors &&
        computerSelection === rock){
            computerWins+=1
            return console.log('You lose! Rock beats scissors!')
    }
}

function game(){
    for(let i = 0; i < 5; i++){
        let userAnswer = promptUser()
        let computerAnswer = computerPlay()
        playRound(userAnswer, computerAnswer)
        console.log('player wins: ' + userWins + ' computer wins: ' + computerWins)
    }
}

function promptUser(){
    let userAnswer = prompt('Enter rock, paper, or scissors.');
    userAnswer = userAnswer.toLowerCase();
    console.log(userAnswer)
    if(userAnswer !== rock && userAnswer !== paper && userAnswer !== scissors){
        promptUser()
    } else {
        return userAnswer
    }
}

game();
