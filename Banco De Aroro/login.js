import { credentials, createName } from "./credentials.js";

let nameInput = document.getElementById('name');
let passwordInput = document.getElementById('password');
let signInBtn =  document.getElementById('signIn');
let formEl = document.getElementById('loginForm');

formEl.addEventListener('submit', (event)=>{
    event.preventDefault();
    console.log("Form submitted!");

    createName(nameInput.value);

})