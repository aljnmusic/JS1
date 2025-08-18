import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getFirestore, collection, add } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyA-WrZ6hS35vXo4OwgmgzxmpJQuf1QKJdo",
    authDomain: "notescloud-d8d47.firebaseapp.com",
    projectId: "notescloud-d8d47",
    storageBucket: "notescloud-d8d47.appspot.com",
    messagingSenderId: "852197125275",
    appId: "1:852197125275:web:8b32da22fe46b2406d2a3e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const referenceInDB = collection(db, 'messages')

let formEl = document.getElementById('form')
let nameInputEl = document.getElementById('name-input')
let emailInputEl = document.getElementById('email-input')
let messageInputEl = document.getElementById('message')
let errorMsg =
let submitBtn = document.getElementById('submit-button')

const data = {
    name: nameInputEl.value,
    email: emailInputEl.value,
    message: messageInputEl.value,
    timestamp: new Date()
}
formEl.addEventListener('submit', (event) => {
    event.preventDefault();

    if(data.name === "" || data.email === "" ||  data.message === "") {

    }

})