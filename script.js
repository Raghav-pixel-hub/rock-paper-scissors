const result = document.getElementById("result")
const winner = document.getElementById("winner")
let playerChoice; 
const choices = ["rock", "paper", "scissors"]
let randomNumber;
let computerChoice;
let playerscore = 0;
let computerscore = 0;

document.getElementById("rock").addEventListener("click", function(){
    playerChoice = 'rock'
    randomNumber = Math.floor(Math.random()*3)
    computerChoice = choices[randomNumber]
    result.innerText = "you chose " + playerChoice + " | computer chose " + computerChoice

    if(playerChoice == computerChoice){
    winner.innerText = "Draw"}
     else if (playerChoice == "rock" && computerChoice == "scissors"){
        winner.innerText = "You Win"
        playerscore++
        document.getElementById("playerscore").innerText = "Player Score :" + playerscore
    }
    else if (playerChoice == "scissors" && computerChoice == "paper"){
        winner.innerText = "You Win"
        playerscore++
        document.getElementById("playerscore").innerText = "Player Score :" + playerscore
    }
    else if (playerChoice == "paper" && computerChoice == "rock"){
        winner.innerText = "You Win"
        playerscore++
        document.getElementById("playerscore").innerText = "Player Score :" + playerscore
    }
    else {
        winner.innerText = "Computer Wins"
        computerscore++
        document.getElementById("computerscore").innerText = "Computer score: " + computerscore
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
        playerscore++
        document.getElementById("playerscore").innerText = "Player Score :" + playerscore
    }
    else if (playerChoice == "scissors" && computerChoice == "paper"){
        winner.innerText = "You Win"
        playerscore++
        document.getElementById("playerscore").innerText = "Player Score :" + playerscore
    }
    else if (playerChoice == "paper" && computerChoice == "rock"){
        winner.innerText = "You Win"
        playerscore++
        document.getElementById("playerscore").innerText = "Player Score :" + playerscore
    }
    else {
        winner.innerText = "Computer Wins"
        computerscore++
        document.getElementById("computerscore").innerText = "Computer score: " + computerscore
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
        playerscore++
        document.getElementById("playerscore").innerText = "Player Score :" + playerscore
    }
    else if (playerChoice == "scissors" && computerChoice == "paper"){
        winner.innerText = "You Win"
        playerscore++
        document.getElementById("playerscore").innerText = "Player Score :" + playerscore
    }
    else if (playerChoice == "paper" && computerChoice == "rock"){
        winner.innerText = "You Win"
        playerscore++
        document.getElementById("playerscore").innerText = "Player Score :" + playerscore
    }
    else {
        winner.innerText = "Computer Wins"
        computerscore++
        document.getElementById("computerscore").innerText = "Computer score: " + computerscore
    }
})

document.getElementById("reset").addEventListener("click",function(){
    playerscore = 0
    computerscore = 0
    document.getElementById("playerscore").innerText = "Player Score : " + playerscore
    document.getElementById("computerscore").innerText = "Computer score: " + computerscore
})