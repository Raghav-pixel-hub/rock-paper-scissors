const result = document.getElementById("result")
const winner = document.getElementById("winner")
let playerChoice; 
const choices = ["rock", "paper", "scissors"]
let randomNumber;
let computerChoice;

document.getElementById("rock").addEventListener("click", function(){
    playerChoice = 'rock'
    randomNumber = Math.floor(Math.random()*3)
    computerChoice = choices[randomNumber]
    result.innerText = "you chose " + playerChoice + " | computer chose " + computerChoice

    if(playerChoice == computerChoice){
    winner.innerText = "Draw"}
     else if (playerChoice == "rock" && computerChoice == "scissors"){
        winner.innerText = "You Win"
    }
    else if (playerChoice == "scissors" && computerChoice == "paper"){
        winner.innerText = "You Win"
    }
    else if (playerChoice == "paper" && computerChoice == "rock"){
        winner.innerText = "You Win"
    }
    else {
        winner.innerText = "Computer Wins"
    }
})

document.getElementById("paper").addEventListener("click", function(){
    playerChoice = "paper"
    randomNumber = Math.floor(Math.random()*3)
    computerChoice = choices[randomNumber]
    result.innerText = "you chose " + playerChoice + " | computer chose " + computerChoice

    if(playerChoice == computerChoice){
    winner.innerText = "Draw"}
    else if (playerChoice == "rock" && computerChoice == "scissors"){
        winner.innerText = "You Win"
    }
    else if (playerChoice == "scissors" && computerChoice == "paper"){
        winner.innerText = "You Win"
    }
    else if (playerChoice == "paper" && computerChoice == "rock"){
        winner.innerText = "You Win"
    }
    else {
        winner.innerText = "Computer Wins"
    }
})

document.getElementById("scissors").addEventListener("click", function(){
    playerChoice = "scissors"
    randomNumber = Math.floor(Math.random()*3)
    computerChoice = choices[randomNumber]
    result.innerText = "you chose " + playerChoice + " | computer chose " + computerChoice

    if(playerChoice == computerChoice){
    winner.innerText = "Draw"}
     else if (playerChoice == "rock" && computerChoice == "scissors"){
        winner.innerText = "You Win"
    }
    else if (playerChoice == "scissors" && computerChoice == "paper"){
        winner.innerText = "You Win"
    }
    else if (playerChoice == "paper" && computerChoice == "rock"){
        winner.innerText = "You Win"
    }
    else {
        winner.innerText = "Computer Wins"
    }
})