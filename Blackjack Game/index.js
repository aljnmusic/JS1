let sum = 0
let card = []
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("welcome-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

let player = {
    name: "John",
    chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

const randomNumber = () => {
    let randNum = Math.floor(Math.random() * 13 + 1)

    // if(randNum === 1){
    //     return 11
    // }
    // else if(randNum > 10){
    //     return 10
    // }
    // else{
    //     return randNum
    // }

    switch (true){
        case randNum === 1:
            return 11
        case randNum > 10:
            return 10
        default:
            return randNum
    }

}

const startGame = () => {
    isAlive = true
    hasBlackJack = false

    let firstNumber = randomNumber()
    let secondNumber = randomNumber()

    sum = firstNumber + secondNumber
    card = [firstNumber, secondNumber]

    renderGame()
}
const renderGame = () => {
    let s = "Sum: "
    cardsEl.textContent = "Cards: "

    for(let i  = 0; i < card.length; i++) {
        cardsEl.textContent += card[i] + " "
    }

    sumEl.textContent = s + sum
    // if(sum < 21){
    //     message = "You're Not a Black Jack!"
    // }
    // else if(sum === 21){
    //     message = "You are black jack!"
    //     hasBlackJack = true
    // }
    // else{
    //     message = "You are out of the game!"
    //     isAlive = false
    // }

    switch (true){
        case sum < 21:
            message = "You're Not a Black Jack!"
            break
        case sum === 21:
            message = "You are black jack!"
            hasBlackJack = true
            break
        default:
            message = "You are out of the game!"
            isAlive = false
    }

    messageEl.textContent = message
}

const newCard = () => {
    if (isAlive && !hasBlackJack){
        let newCard = randomNumber()
        sum += newCard
        card.push(newCard)
        renderGame()
    }
}