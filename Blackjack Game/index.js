let sum = 0
let card = []
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("welcome-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

function randomNumber(){
    let randNum = Math.floor(Math.random() * 13 + 1)

    if(randNum === 1){
        return 11
    }
    else if(randNum > 10){
        return 10
    }
    else{
        return randNum
    }
}

function startGame(){
    let firstNumber = Math.floor(Math.random() * 13 +1)
    let secondNumber = Math.floor(Math.random() * 13 +1)

    sum = firstNumber + secondNumber
    card = [firstNumber, secondNumber]

    renderGame()
}
function renderGame(){
    let s = "Sum: "
    cardsEl.textContent = "Cards: "

    for(let i  = 0; i < card.length; i++) {
        cardsEl.textContent += card[i] + " "
    }

    sumEl.textContent = s + sum
    if(sum < 21){
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

function newCard(){
    console.log("Draw a new card!")
    let newCard = randomNumber()
    sum += newCard
    card.push(newCard)
    renderGame()
}