let humanScore = 0
let computerScore = 0

const score = document.querySelector("h2");
const rpsButtons = document.querySelectorAll(".rps");
let results = document.querySelector("div");

rpsButtons.forEach(btn => btn.disabled = true);

rpsButtons.forEach((rpsButton) => {
    rpsButton.addEventListener("click", () => {
        let playerSelection = rpsButton.id.toUpperCase();
        playRound(playerSelection, getComputerChoice());

        score.textContent = `SCORE: YOU: ${humanScore} ME: ${computerScore}`;

        if(humanScore === 5 || computerScore === 5) {
            endGame();
        }

    });
});


function getComputerChoice() {
    let num = Math.random()
    let computerChoice = ""
    // console.log(num)
    if(num < 0.33) {
        computerChoice = "SCISSORS"
        return computerChoice
    } else if(num < 0.66){
        computerChoice = "PAPER"
        return computerChoice
    } else {
        computerChoice = "ROCK"
        return computerChoice
    }
}

 
function playRound(playerSelection, computerChoice) {
    const result = document.createElement("p");

    if(playerSelection === "ROCK"){
        switch(computerChoice){
            case "ROCK":
                result.textContent = "TIE! ROCK on ROCK!";
                break
            case "PAPER":
                computerScore++
                result.textContent = "You LOSE! PAPER covers ROCK!";
                break
            case "SCISSORS":
                humanScore++
                result.textContent = "You WIN! ROCK beats SCISSORS!";
        }
    } else if(playerSelection === "PAPER"){
        switch(computerChoice){
            case "ROCK":
                humanScore++
                result.textContent = "You WIN! PAPER covers ROCK!";
                break
            case "PAPER":
                result.textContent = "You TIE! PAPER on PAPER!";
                break
            case "SCISSORS":
                computerScore++
                result.textContent = "You LOSE! SCISSORS cuts PAPER!";
        }
    } else if(playerSelection === "SCISSORS"){
        switch(computerChoice){
            case "ROCK":
                computerScore++
                result.textContent = "You LOSE! ROCK beats SCISSORS!";
                break
            case "PAPER":
                humanScore++
                result.textContent = "You WIN! SCISSORS cuts PAPER!";
                break
            case "SCISSORS":
                result.textContent = "You TIE! SCISSORS on SCISSORS!";
        }
    } else {
        result.textContent = "PICK ROCK, PAPER, OR SCISSORS BUCKO!";
    }
    results.appendChild(result);
}

function playGame() {
    humanScore = 0;
    computerScore = 0;

    score.textContent = `SCORE: YOU: ${humanScore} ME: ${computerScore}`;
    results.innerHTML="";

    rpsButtons.forEach(btn => btn.disabled = false);

}

function endGame() {
    const result = document.createElement("p");

    if(humanScore === 5) {
        result.textContent = "You WON! Congratulations!";
    } else {
        result.textContent = "You LOST! HAHAHAHA!";
    }

    results.appendChild(result);
    rpsButtons.forEach(btn => btn.disabled = true);
}

const resetGame = document.querySelector("#reset");
resetGame.addEventListener("click", () => {
    playGame();
});


