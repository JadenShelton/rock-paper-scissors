let humanScore = 0
let computerScore = 0


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
    let results = document.querySelector("div");
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

    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            let playerSelection = button.id.toUpperCase();
            console.log(playerSelection);
            playRound(playerSelection, getComputerChoice());

            const score = document.querySelector("h2");

            score.textContent = `SCORE: YOU: ${humanScore} ME: ${computerScore}`;

            let results = document.querySelector("div");
            const result = document.createElement("p");

            if(humanScore == 5) {
                result.textContent = "You WON! Congratulations!";
                results.appendChild(result);
                
                buttons.forEach(btn => btn.disabled = true);
                return;
            } else if(computerScore == 5) {
                result.textContent = "You LOST! HAHAHAHA!";
                results.appendChild(result);

                buttons.forEach(btn => btn.disabled = true);
                return;
            } 
        })
    })
}

playGame();

