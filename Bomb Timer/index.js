let timeEl = document.getElementById("time");
let countBtn = document.getElementById("counter-el");
let tickingEl = document.getElementById("ticking")
let resetBtn =  document.getElementById("reset")
const bombtType = document.getElementById("bombType")


countBtn.addEventListener("click", () => {
    let currentTime = Number(timeEl.value)
    const typeOfBomb = bombtType.value

    const shutdownTime = setInterval( () => {
        if (currentTime > 0) {
            tickingEl.innerHTML = `${typeOfBomb} will explode in <span class="red">${currentTime}</span> seconds.`
            currentTime--
        } else {
            tickingEl.textContent = `${typeOfBomb} has exploded!`
            clearInterval(shutdownTime)
        }
    }, 1000)

})

resetBtn.addEventListener("click", () => {
    timeEl.value = ""
    tickingEl.textContent = ""
})