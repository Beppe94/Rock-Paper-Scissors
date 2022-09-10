//computer choice
function getcomputerchoice() {
    let choices = ['rock', 'paper', 'scissors']
    const random = (Math.floor(Math.random() * choices.length))
    return choices[random]
}

let userScore = 0
let compScore = 0

function round(user, computer) {

    if ((user == 'rock' && computer == 'scissors') ||
        (user == 'scissors' && computer == 'paper') ||
        (user == 'paper' && computer == 'rock')) {
            
        userScore++
        result = (`You win! ${user} beats ${computer}`)

        } else if(user == computer) {
            result = (`It's a Tie, you both choose ${user}`)
        } else {
            compScore++
            result = (`You lose! ${computer} beats ${user}`)
        }

    //console.log(`Your score: ${userScore} vs computer score: ${compScore}`);
    //return result
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

rockBtn.addEventListener('click', () => onclick('rock'))
paperBtn.addEventListener('click', () => onclick('paper'))
scissorsBtn.addEventListener('click', () => onclick('scissors'))

function onclick(userchoice) {
    if (gameOver()) {
        return
    }
    const compChoice = getcomputerchoice()
    round(userchoice,compChoice)
    updateScore()
}

function gameOver () {
    return userScore == 5 || compScore == 5;
}

function updateScore() {
    playerScore.textContent = `Player Score: ${userScore}`
    computerScore.textContent = `Computer Score ${compScore}` 
}

//console.log((game()));