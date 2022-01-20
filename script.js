function computerPlay() {
    let options = ['rock', 'paper', 'scissors']
    let random =  Math.floor(Math.random() * 3);
    let answer = options[random];

    return answer;
};


function playRound(playerSelection , computerSelection) {
    
    let player = playerSelection.toLowerCase();
    let computer = computerPlay();

    if (player === computer) {
        console.log("tie");
    } else if (player == 'rock') {
        if (computer == 'scissors') {
            console.log("I wiN")
        } else if (computer == 'paper') {
            console.log("I lose")
        }
    } else if (player == 'paper') {
        if (computer == 'rock') {
            console.log("I Win")
        } else if (computer == 'scissors') {
            console.log("I lose")
        }
    } else if (player == 'scissors'){
        if (computer == 'paper') {
            console.log("I win")
        } else if (computer == 'rock') {
            console.log("I lose")
        }
    }

}

function game() {
    playRound(playerSelection, computerSelection);
}

let playerSelection = prompt("Choose Rock, Paper, or Scissors!").toString().toLowerCase().trim();
let computerSelection = computerPlay();


