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
    let random = Math.floor(Math.random() * 5)
    let guess = 3;

    validateInput()

    for(let i = 0; i <= guess; i++) {
        if (Number(inputEl.value) === random) {
            message.textContent = "You're " + inputEl.value + "is correct"
            return
        }
        else if (Number(inputEl.value) !== random) {
            message.textContent = "You're number is incorrect"
        }

        guess++;
    }


})