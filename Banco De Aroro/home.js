import { credentials, createName } from "./credentials.js";

let userEl = document.getElementById('username')
let storedName = localStorage.getItem('username');

userEl.textContent = `Welcome ${storedName}`;
