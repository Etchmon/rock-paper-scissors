function computerPlay() {
    let options = ['rock', 'paper', 'scissors']
    let random = Math.floor(Math.random() * 3);
    let answer = options[random];

    return answer;
};


function playRound(playerSelection, computerSelection) {

    let computer = computerPlay();


    if (playerSelection === computer) {
        console.log("tie");
    } else if (playerSelection == 'rock') {
        if (computer == 'scissors') {
            console.log("I wiN")
        } else if (computer == 'paper') {
            console.log("I lose")
        }
    } else if (playerSelection == 'paper') {
        if (computer == 'rock') {
            console.log("I Win")
        } else if (computer == 'scissors') {
            console.log("I lose")
        }
    } else if (playerSelection == 'scissors') {
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


