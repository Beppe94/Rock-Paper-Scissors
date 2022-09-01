//computer choice
function getcomputerchoice() {
    let choices = ['rock', 'paper', 'scissors']
    const random = (Math.floor(Math.random() * choices.length))
    return choices[random]
}


//user choice
function getuserchoice() {
    let input = ''
    while ((input != 'rock') || (input != 'paper') || (input != 'scissors')) {
        input = prompt('choose between: Rock, Paper, Scissors ').toLowerCase()
        if (input == 'rock' || input == 'paper' || input == 'scissors')
            return input
        else {
            return 'Invalid input'
        }
    }   
}

function round(computer, person) {
    if (computer == 'rock' && person == 'scissors') {
        return 'The computer wins!! Try again!'
    } else if (computer == 'paper' && person == 'rock') {
        return 'The computer wins!! Try again!'
    } else if (computer == 'scissors' && person == 'paper') {
        return 'The computer wins!! Try again!'
    } else if (computer == 'rock' && person == 'rock'){
        return 'Tie'
    } else if (computer == 'paper' && person == 'paper'){
        return 'Tie'
    } else if (computer == 'scissors' && person == 'scissors'){
        return 'Tie'
    } else {
        return 'You win!!'
    }
}

console.log(round(getcomputerchoice(), getuserchoice()))
