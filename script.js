// Counter Variables
let playerScore = 0;
let computerScore = 0;

// Makes the computer choose a random option

function computerPlay() {
    let options = ['rock', 'paper', 'scissors']
    let random = Math.floor(Math.random() * 3);
    let answer = options[random];

    return answer;
};

// Plays 1 round of Rock Paper scissors given the button you click against a computer that chooses at random


function playRound(playerSelection, computerSelection) {

    let computer = computerPlay();
    console.log(computer);


    if (playerSelection === computer) {
        console.log("tie");
        document.getElementById('status').innerHTML = "Tie!";
    } else if (playerSelection == 'rock') {
        if (computer == 'scissors') {
            console.log("I wiN");
            playerScore++;
            document.getElementById('status').innerHTML = "Win!";
        } else if (computer == 'paper') {
            console.log("I lose");
            computerScore++;
            document.getElementById('status').innerHTML = "Loss";
        }
    } else if (playerSelection == 'paper') {
        if (computer == 'rock') {
            console.log("I Win");
            playerScore++;
            document.getElementById('status').innerHTML = "Win!";
        } else if (computer == 'scissors') {
            console.log("I lose");
            computerScore++;
            document.getElementById('status').innerHTML = "Loss";
        }
    } else if (playerSelection == 'scissors') {
        if (computer == 'paper') {
            console.log("I win");
            playerScore++;
            document.getElementById('status').innerHTML = "Win!";
        } else if (computer == 'rock') {
            console.log("I lose");
            computerScore++;
            document.getElementById('status').innerHTML = "Loss";
        }
    }

    // Updates the scores in the Html

    document.getElementById('player').innerHTML = playerScore;
    document.getElementById('computer').innerHTML = computerScore;

    // Declares a winner at 5 wins

    if (playerScore == 5) {
        alert('You Win!');
        document.location.reload();
    } else if (computerScore == 5) {
        alert('Computer Wins!')
        document.location.reload();
    }

}

document.getElementById("button-1").addEventListener("click", function () {
    console.log(this.innerHTML);
    playRound(this.innerHTML.toLowerCase().trim());
});

document.getElementById("button-2").addEventListener("click", function () {
    console.log(this.innerHTML.toLowerCase().trim());
    playRound(this.innerHTML.toLowerCase().trim());
});

document.getElementById("button-3").addEventListener("click", function () {
    console.log(this.innerHTML.toLowerCase().trim());
    playRound(this.innerHTML.toLowerCase().trim());
});

document.getElementById('player').innerHTML = playerScore;
document.getElementById('computer').innerHTML = playerScore;

