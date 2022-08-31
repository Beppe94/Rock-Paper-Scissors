//computer choice
function getcomputerchoice(options) {
    let choices = ['rock', 'paper', 'scissors']
    const random = (Math.floor(Math.random() * choices.length))
    return choices[random]
}

//user choice
function getuserchoice() {
    let input = prompt('choose between: rock, paper, scissors: ');
    input.toLowerCase()
    return input
}

getuserchoice()