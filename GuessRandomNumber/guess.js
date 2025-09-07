let inputEl = document.getElementById('inputNum')
let startBtn = document.getElementById('startbtn')
let message = document.getElementById('message')

startBtn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * 10)

    if (Number(inputEl.value) === random) {
        message.textContent = "You're " + inputEl.value + "is correct"
    }
    else if (Number(inputEl.value) !== random) {
        message.textContent = "You're number incorrect"
    }
})