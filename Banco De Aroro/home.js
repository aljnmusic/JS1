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
    accountName.textContent = `Account Name: ${storedName}`
})