let n1 = document.getElementById("num1")
let n2 = document.getElementById("num2")
let total =  document.getElementById("total-el")


function add(){
    let sum = Number(n1.value) + Number(n2.value)
    total.innerText = "SUM: " + sum
}

function subtract(){
    let sum = Number(n1.value) - Number(n2.value)
    total.innerText = "Difference: " + sum
}

function multiply(){
    let sum = Number(n1.value) * Number(n2.value)
    total.innerText = "Product: " + sum
}

function divide(){
    let sum = Number(n1.value) / Number(n2.value)
    total.innerText = "Quotient: " + sum.toFixed(2)
}