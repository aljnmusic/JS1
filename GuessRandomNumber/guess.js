let inputEl = document.getElementById('inputNum')
let startBtn = document.getElementById('startbtn')
let message = document.getElementById('message')

let guessLeft;
let random

function startGame(){
    random = Math.floor(Math.random() * 10)
    guessLeft = 3
    inputEl.value = ''
    inputEl.disable = false;
    startBtn.textContent = 'Guess'
    message.textContent = ''

}

function checkGuess(){
    let input = Number(inputEl.value)

    if(!Number.isInteger(input) || input < 1 || input > 10) {
        message.textContent = "Enter a valid number from 1-100"
        return
    }

    guessLeft--

    if(input === random){
        message.textContent = "You guessed the correct number!"
        endGame()
    }
    else if(guessLeft === 0){
        message.textContent = `Game over! Correct number is ${random}`
        endGame()
    }
    else if(input < random){
        message.textContent = "Too low! Try again"
    }
    else
    {
        message.textContent = "Too high! try again!"
    }

    inputEl.value = ''

}

function endGame(){
    inputEl.disable = true;
    startBtn.textContent = 'Play again?'
    startBtn.style.backgroundColor = 'blue'
}

startBtn.addEventListener('click', () => {
    if (startBtn.textContent === 'Play again?') {
        startGame()
    }
    else{
        checkGuess()
    }
})

startGame()