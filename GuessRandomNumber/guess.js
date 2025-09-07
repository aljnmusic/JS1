let inputEl = document.getElementById('inputNum')
let startBtn = document.getElementById('startbtn')
let message = document.getElementById('message')


function validateInput(){
    let userInput = Number(inputEl.value)

    if(!Number.isInteger(userInput)){
        message.textContent = "Please enter a valid number!"
        return false
    }

    return true
}
startBtn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * 100)
    let guess = 3;

    if(!validateInput()){
        return
    }

    for(let i = 1; i <= guess; i++) {
        if (Number(inputEl.value) === random) {
            message.textContent = "You're " + inputEl.value + "is correct"
            break
        }
        else if(Number(inputEl.value) < random) {
            message.textContent = "Too low! Try again!"
        }
        else if(Number(inputEl.value) > random) {
            message.textContent = "Too high! Try again!"
        }


        if(i === guess){
            message.textContent = `Game over! The correct number is ${random}`
        }

    }


})