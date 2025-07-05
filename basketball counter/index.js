let point = document.getElementById("point")
let score = 0

const add1 = () => {
    score += 1;
    point.innerText = score;
}

const add2 = () =>{
    score += 2
    point.innerText = score;
}

const add3 = () =>{
    score += 3;
    point.innerText = score;
}

let guestpoint = document.getElementById("point1")
let guestscore = 0

const gadd1 = () =>{
    guestscore += 1;
    guestpoint.innerText = guestscore;
}

const gadd2 = () => {
    guestscore += 2;
    guestpoint.innerText = guestscore;
}

const gadd3 = () => {
    guestscore += 3;
    guestpoint.innerText = guestscore;
}