let point = document.getElementById("point")
let score = 0

function add1(){
    score += 1;
    point.innerText = score;
}

function add2(){
    score += 2
    point.innerText = score;
}

function add3(){
    score += 3;
    point.innerText = score;
}

let guestpoint = document.getElementById("point1")
let guestscore = 0

function gadd1(){
    guestscore += 1;
    guestpoint.innerText = guestscore;
}

function gadd2(){
    guestscore += 2;
    guestpoint.innerText = guestscore;
}

function gadd3(){
    guestscore += 3;
    guestpoint.innerText = guestscore;
}