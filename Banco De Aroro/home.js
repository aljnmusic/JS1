import { credentials } from "./credentials.js";

let userEl = document.getElementById('username')
let storedName = localStorage.getItem('username');

let viewImg = document.getElementById('viewImg');
let saveImg = document.getElementById('saveImg');
let withdrawImg = document.getElementById('withdrawImg');
let logoutImg = document.getElementById('logoutImg');

let viewDiv = document.getElementById('viewDiv');
let depositDiv = document.getElementById('depositDiv');
let withdrawDiv = document.getElementById('withdrawDiv');

userEl.textContent = storedName ? `Welcome ${storedName} !` : `Welcome Guest!`

depositDiv.style.display = 'none';
withdrawDiv.style.display = 'none';

document.addEventListener('DOMContentLoaded', function () {
    let accountName = document.getElementById('accountName');
    let accountBalance =  document.getElementById('accountBalance');
    let balance = credentials.balance.toLocaleString()
    let status = document.getElementById('accountStatus')
    let currency = document.getElementById('currency');
    let branch = document.getElementById('branch');

    accountName.textContent = `Account Name: ${storedName}`
    accountBalance.textContent = `Account Balance: Ahp ${balance}`
    status.textContent = `Account Status: ${credentials.Status}`
    currency.textContent = `Currency: ${credentials.Currency}`
    branch.textContent = `Branch: ${credentials.Branch}`

    deposit()


    const activeSession = sessionStorage.getItem('activeSession');
    if(activeSession === 'depositDiv') {
        viewDiv.style.display = 'none';
        withdrawDiv.style.display = 'none';
        depositDiv.style.display = 'block';
    } else if(activeSession === 'withdrawDiv') {
        viewDiv.style.display = 'none';
        depositDiv.style.display = 'none';
        withdrawDiv.style.display = 'block';
    } else if(activeSession === 'viewDiv'){
        depositDiv.style.display = 'none';
        withdrawDiv.style.display = 'none';
        viewDiv.style.display = 'block';
    } else {
        window.addEventListener('DOMContentLoaded', activeSession)
    }

})

function deposit(){
    let form = document.getElementById('depositForm');
    let inputAmount =  document.getElementById('inputAmount');
    let balance = credentials.balance.toLocaleString()
    let currentBal = document.getElementById('currentBalance')
    currentBal.textContent = `Current Balance: ${balance}`

    form.addEventListener('submit', () => {
        let depositAmount = Number(inputAmount.value)

        balance += depositAmount;

        currentBal.textContent = `Current Balance: ${balance.toLocaleString()}`

        inputAmount.value = ''
    })

}

saveImg.addEventListener('click', function () {
    viewDiv.style.display = 'none';
    withdrawDiv.style.display = 'none';
    depositDiv.style.display = 'block'

    sessionStorage.setItem('activeSession', 'depositDiv')
})

withdrawImg.addEventListener('click', function(){
    viewDiv.style.display = 'none';
    depositDiv.style.display = 'none';
    withdrawDiv.style.display = 'block';

    sessionStorage.setItem('activeSession', 'withdrawDiv')
})

logoutImg.addEventListener('click', function(){
    window.location.href = 'index.html'
})

viewImg.addEventListener('click', function(){
    depositDiv.style.display = 'none';
    withdrawDiv.style.display = 'none';
    viewDiv.style.display = 'block';

    sessionStorage.setItem('activeSession', 'viewDiv')
})