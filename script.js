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
        document.getElementById('status').innerHTML = "TIE!";
    } else if (playerSelection == 'rock') {
        if (computer == 'scissors') {
            console.log("I wiN");
            playerScore++;
            document.getElementById('status').innerHTML = "WIN!";
        } else if (computer == 'paper') {
            console.log("I lose");
            computerScore++;
            document.getElementById('status').innerHTML = "LOSS";
        }
    } else if (playerSelection == 'paper') {
        if (computer == 'rock') {
            console.log("I Win");
            playerScore++;
            document.getElementById('status').innerHTML = "WIN!";
        } else if (computer == 'scissors') {
            console.log("I lose");
            computerScore++;
            document.getElementById('status').innerHTML = "LOSS";
        }
    } else if (playerSelection == 'scissors') {
        if (computer == 'paper') {
            console.log("I WIN");
            playerScore++;
            document.getElementById('status').innerHTML = "WIN!";
        } else if (computer == 'rock') {
            console.log("I lose");
            computerScore++;
            document.getElementById('status').innerHTML = "LOSS";
        }
    }


    // Updates the scores in the Html if the score is less than or equal to 5

    if (playerScore <= 5 && computerScore <= 5) {
        document.getElementById('player').innerHTML = playerScore;
        document.getElementById('computer').innerHTML = computerScore;
    }

    // Declares a winner at 5 wins

    if (playerScore == 5) {
        document.getElementById('status').innerHTML = "YOU WIN!";
        setTimeout(() => {
            alert('Play again?');
            document.location.reload();
        }, 0100);

    } else if (computerScore == 5) {
        document.getElementById('status').innerHTML = "MACHINE WINS!";
        setTimeout(() => {
            alert('Play again?');
            document.location.reload();
        }, 0100);
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

