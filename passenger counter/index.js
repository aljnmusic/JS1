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

let count = 0

function increment(){
    count = count + 1
    document.getElementById("counter-el").innerHTML = count
}

function decrement(){
    count = count - 1
    document.getElementById("counter-el").innerHTML = count
}