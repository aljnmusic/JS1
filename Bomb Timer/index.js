let timeEl = document.getElementById("time");
let countBtn = document.getElementById("counter-el");
let tickingEl = document.getElementById("ticking")


countBtn.addEventListener("click", function () {
    let currentTime = Number(timeEl.value)

    const shutdownTime = setInterval(function () {
        if (currentTime > 0) {
            tickingEl.textContent = `Bomb will explode in ${currentTime} seconds.`
            currentTime--
        } else {
            tickingEl.textContent = `Bomb has explode`
            clearInterval(shutdownTime)
        }
    }, 1000)

})