import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

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
let errorMsg = document.getElementById('error-msg')
let submitBtn = document.getElementById('submit-button')

formEl.addEventListener('submit', async (event) => {
    event.preventDefault();

    const data = {
        name: nameInputEl.value,
        email: emailInputEl.value,
        message: messageInputEl.value,
        timestamp: new Date()
    }

    try {
        await addDoc(referenceInDB, data)
        errorMsg.textContent = "Message Sent Successfully"

        nameInputEl.value = "";
        emailInputEl.value = "";
        messageInputEl.value = "";
    } catch (error) {
        errorMsg.textContent = "An error occured"
        console.log("An error occured", error)
    }


})