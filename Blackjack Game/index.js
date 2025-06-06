let firstCard = 10
let secondCard = 12
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""


function startGame(){
    if(sum <= 20){
        message = "You're Not a Black Jack!"
    }
    else if(sum === 20){
        message = "You are black jack!"
        hasBlackJack = true
    }
    else{
        message = "You are out of the game!"
        isAlive = false
    }

    console.log(message)
}