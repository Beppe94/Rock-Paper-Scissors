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
            
        userScore += 1
        result = ('You win! ' + user + ' beats ' + computer
            + " Player score: " + userScore + " Computer score: " + compScore)

        } else if(user == computer) {
            result = ('It\'s a tie. You both chose ' + user
            + " Player score: " + userScore + " Computer score: " + compScore)
        } else {
            compScore += 1
            result = 'I won the game! Reload the page to play again'
        }
        if (userScore == 5) {
            result = 'You won the game! Reload the page to play again'
        }
            
        if (compScore == 5) {
            result = 'I won the game! Reload the page to play again'
        }
    console.log(userScore,compScore);
    return result
}   

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


console.log((game()));