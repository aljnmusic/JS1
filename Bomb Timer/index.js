let timeEl = document.getElementsByClassName("time");
let countBtn = document.getElementsByClassName("counter-el");
let tickingEl = document.getElementsByClassName("ticking")


countBtn.addEventListener("click", function () {
    let currentTime = timeEl.value

    const shutdownTime = setInterval(() => {
        if (currentTime < 0) {
            setInterval(function () {
                tickingEl.innerHTML = `Bomb will explode in ${currentTime} seconds`;
            }, 1000)
        } else {
            tickingEl.innerHTML = `Bomb has explode`
            clearInterval(shutdownTime)
        }
    })
})