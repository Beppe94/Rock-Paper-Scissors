//computer choice
function getcomputerchoice() {
    let choices = ['rock', 'paper', 'scissors']
    const random = (Math.floor(Math.random() * choices.length))
    return choices[random]
}

let userScore = 0
let compScore = 0
let winningTxt = ''

function round(user, computer) {

    if ((user == 'rock' && computer == 'scissors') ||
        (user == 'scissors' && computer == 'paper') ||
        (user == 'paper' && computer == 'rock')) {
            
        userScore++
        winningTxt = 'You win!'
        
        } else if(user == computer) {
            winningTxt = 'It\'s a tie!'
        } else {
            compScore++
            winningTxt = 'The computer wins!'
        }

    //console.log(`Your score: ${userScore} vs computer score: ${compScore}`);
    //return result
    updateMessage(winningTxt, user, computer)
}   
/*
function game() {
    for (let i = 0; i < 5; i++) {
        let userChoice = prompt('Type: Rock, Paper, or Scissors').toLowerCase()
        const compChoice = getcomputerchoice()
        console.log(round(userChoice, compChoice))
    }
    if (userScore > compScore) {
        console.log(`You're the winner! Final Score: ${userScore} to ${compScore}`);
    } else if (compScore > userScore) {
        console.log(`You're the loser. Final Score: ${userScore} to ${compScore}`);
    } else
        console.log(`You tied. Final Score: ${userScore} to ${compScore}`);
}
*/

const rockBtn = document.getElementById('rockBtn')
const paperBtn = document.getElementById('paperBtn')
const scissorsBtn = document.getElementById('scissorsBtn')
const playerScore = document.getElementById('playerScore')
const computerScore = document.getElementById('computerScore')
const txtWinner = document.getElementById('txtWinner')
const txtScore = document.getElementById('txtScore')
const popUp = document.getElementById('popUp')
const restart = document.getElementById('restart')
const finalScore = document.getElementById('finalScore')

rockBtn.addEventListener('click', () => onclick('rock'))
paperBtn.addEventListener('click', () => onclick('paper'))
scissorsBtn.addEventListener('click', () => onclick('scissors'))
restart.addEventListener('click', () => restartGame())

function onclick(userchoice) {
    if (gameOver()) {
        openPopup()
        return
    }

    const compChoice = getcomputerchoice()
    round(userchoice,compChoice)
    updateScore()

    if (gameOver()) {
        openPopup()
        updateFinalScore()
    }
}

function gameOver () {
    return userScore == 5 || compScore == 5;
}

function updateScore() {
    if(winningTxt === 'You win!') {
        txtWinner.textContent = 'You Win'
    } else if( winningTxt === 'It\'s a tie!') {
        txtWinner.textContent = 'Tie!'
    } else {
        txtWinner.textContent = 'You lose!'
    }

    playerScore.textContent = `Player Score: ${userScore}`
    computerScore.textContent = `Computer Score: ${compScore}` 
}

function updateMessage(winningTxt, user, computer) {
    if(winningTxt === 'You win!') {
        txtScore.textContent = `You win, ${user} beats ${computer}`
    } else if( winningTxt === 'It\'s a tie!') {
        txtScore.textContent = `Both chose ${user}`
    } else {
        txtScore.textContent = `You lost, ${computer} beats ${user}`
    }
}

function updateFinalScore() {
    return userScore > compScore
        ? (finalScore.textContent = 'You Won!')
        : (finalScore.textContent = 'You lost...')
}

function openPopup() {
    popUp.classList.add('open-popup')
}

function closePopup() {
    popUp.classList.remove('open-popup')
}

function restartGame() {
    userScore = 0
    compScore = 0
    playerScore.textContent = 'Player Score: 0' 
    computerScore.textContent = 'Computer Score: 0'
    txtWinner.textContent = 'Choose Wisely...'
    txtScore.textContent = 'First to 5 wins the game'
    closePopup()
}
//console.log((game()));
