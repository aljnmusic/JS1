//document.getElementById("counter-el").innerText = 5;

//let count = 0;
//let myAge = 28;

//console.log(myAge);

//let firstBatch = 5;
//let secondBatch = 8;

//let count = firstBatch + secondBatch;

//console.log(count)

//let myAge = 28;
//let humanDogRation = 7;
//let dogAge = myAge * humanDogRation;
//console.log(dogAge)

let countEL = document.getElementById("counter-el")
let saveEl = document.getElementById("save-el")

let count = 0

function increment(){
    count = count + 1
    //document.getElementById("counter-el").innerHTML = count
    countEL.innerText = count
}

function decrement(){
    count = count - 1
    document.getElementById("counter-el").innerHTML = count
}

function save(){
    let counter = count
    let dash = " - "
    let countDash = counter + dash
    saveEl.textContent += countDash + " "

    countEL.innerText = "0"
    count = 0
}