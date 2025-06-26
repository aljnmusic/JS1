let timeEl = document.getElementById("time");
let countBtn = document.getElementById("counter-el");
let tickingEl = document.getElementById("ticking")
let resetBtn =  document.getElementById("reset")


countBtn.addEventListener("click", function () {
    let currentTime = Number(timeEl.value)

    const shutdownTime = setInterval(function () {
        if (currentTime > 0) {
            tickingEl.textContent = `Bomb will explode in ${currentTime} seconds.`
            currentTime--
        } else {
            tickingEl.textContent = `Bomb has exploded!`
            clearInterval(shutdownTime)
        }
    }, 1000)

})

resetBtn.addEventListener("click", function () {
    timeEl.value = ""
    tickingEl.textContent = ""
})