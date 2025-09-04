let current = ''
let previous = ''
let currentOperation = ''

function appendNumber(number){
    current += number
    document.getElementById("display").value = `${previous} ${currentOperation} ${current}`
}

function appendOperation(operation){
    if(operation === ''){
        return
    }


    previous = current
    currentOperation = operation
    current = ''
    document.getElementById('display').value = `${previous} (${operation})`

}

function calculateTotal(){

}


function clearInput(){
    current = ''
    previous = ''
    currentOperation = ''
    document.getElementById("display").value = ''
}