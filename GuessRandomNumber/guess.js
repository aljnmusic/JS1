let inputEl = document.getElementById('inputNum')
let startBtn = document.getElementById('startbtn')
let message = document.getElementById('message')

let guessLeft;
let random

function startGame(){
    random = Math.floor(Math.random() * 100)
    guessLeft = 3
    inputEl.textContent = ''
    inputEl.disable = false;
    startBtn.textContent = 'Start Game'
}

startGame()