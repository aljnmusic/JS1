let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("welcome-el")


function startGame(){
    if(sum <= 21){
        message = "You're Not a Black Jack!"
    }
    else if(sum === 21){
        message = "You are black jack!"
        hasBlackJack = true
    }
    else{
        message = "You are out of the game!"
        isAlive = false
    }

    messageEl.textContent = message
}