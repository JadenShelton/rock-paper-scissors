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

// console.log(getComputerChoice())

function getHumanChoice() {
    let humanChoice = window.prompt("Choose Rock, Paper, or Scissors: ")
    return humanChoice.toUpperCase()
}

// console.log(getHumanChoice())

function playRound(humanChoice, computerChoice) {
    if(humanChoice === "ROCK"){
        switch(computerChoice){
            case "ROCK":
                console.log("TIE! ROCK on ROCK!")
                break
            case "PAPER":
                computerScore++
                console.log("You LOSE! PAPER covers ROCK!")
                break
            case "SCISSORS":
                humanScore++
                console.log("You WIN! ROCK beats SCISSORS!")
        }
    } else if(humanChoice === "PAPER"){
        switch(computerChoice){
            case "ROCK":
                humanScore++
                console.log("You WIN! PAPER covers ROCK!")
                break
            case "PAPER":
                console.log("You TIE! PAPER on PAPER!")
                break
            case "SCISSORS":
                computerScore++
                console.log("You LOSE! SCISSORS cuts PAPER!")
        }
    } else if(humanChoice === "SCISSORS"){
        switch(computerChoice){
            case "ROCK":
                computerScore++
                console.log("You LOSE! ROCK beats SCISSORS!")
                break
            case "PAPER":
                humanScore++
                console.log("You WIN! SCISSORS cuts PAPER!")
                break
            case "SCISSORS":
                console.log("You TIE! SCISSORS on SCISSORS!")
        }
    } else {
        console.log("PICK ROCK, PAPER, OR SCISSORS BUCKO!")
    }
}

// playRound(getHumanChoice(), getComputerChoice())

function playGame() {
    console.log("Welcome to Rock Paper Scissors!")
    console.log("We will play 5 rounds!")

    for(x = 0; x < 5; x++) {
        playRound(getHumanChoice(), getComputerChoice())
        console.log(`Round ${x+1} Score: YOU: ${humanScore} ME: ${computerScore}`)
    }
    
    if(humanScore > computerScore) {
        console.log("You WON! Congratulations!")
    } else {
        console.log("You LOST! HAHAHAHA!")
    }
}

playGame()
