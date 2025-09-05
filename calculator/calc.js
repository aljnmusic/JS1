let current = ''
let previous = ''
let currentOperation = ''

function appendNumber(number){
    current += number
    document.getElementById("display").value = `${current}`
}

function appendOperation(operation){
    if(operation === ''){
        return
    }


    previous = current
    currentOperation = operation
    current = ''
    document.getElementById('display').value = `${currentOperation}`

}

function calculateTotal(){

    let result;

    if(currentOperation === '+'){
        result = parseFloat(current) + parseFloat(previous)
    }
    else if(currentOperation === '-'){
        document.getElementById('display').value = parseFloat(previous) - parseFloat(current)
    }
    else if(currentOperation === '*'){
        document.getElementById('display').value = parseFloat(previous) * parseFloat(current)
    }
    else if(currentOperation === '/'){
        document.getElementById('display').value = parseFloat(previous) / parseFloat(current)
    }
    else if(currentOperation === '%'){
        document.getElementById('display').value = parseFloat(previous) % parseFloat(current)
    }
    else{
        document.getElementById('display').value = 'SyntaxError'
        return
    }

    document.getElementById("display").value = result
    current = result.toString()
    previous = ''

}


function clearInput(){
    current = ''
    previous = ''
    currentOperation = ''
    document.getElementById("display").value = ''
}