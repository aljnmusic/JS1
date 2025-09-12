import { credentials, createName } from "./credentials.js";

let nameInput = document.getElementById('name');
let passwordInput = document.getElementById('password');
let signInBtn =  document.getElementById('signIn');
let formEl = document.getElementById('loginForm')
let messageEl = document.getElementById('message');

formEl.addEventListener('submit', (event)=>{
    event.preventDefault();
    console.log("Form submitted!");

    localStorage.setItem('username', nameInput.value.split(" ")[0]);



    if(Number(passwordInput.value) !== credentials.password) {
        messageEl.textContent = "Incorrect password!";
        passwordInput.value = "";
    } else{
        window.location.href = "home.html";
    }
})