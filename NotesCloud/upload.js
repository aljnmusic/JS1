import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

// Your Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyA-WrZ6hS35vXo4OwgmgzxmpJQuf1QKJdo",
    authDomain: "notescloud-d8d47.firebaseapp.com",
    projectId: "notescloud-d8d47",
    storageBucket: "notescloud-d8d47.appspot.com",
    messagingSenderId: "852197125275",
    appId: "1:852197125275:web:8b32da22fe46b2406d2a3e"
};

// Initialize Firebase app and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Cloudinary info
const cloudName = "drrtevw5u";
const uploadPreset = "notescloud_unsigned";


let formEl = document.getElementById('form')
let courseCodeInput =  document.getElementById('course-code-input')
let topicTitleInput = document.getElementById('topic-title-input')
let userFile = document.getElementById('user-file')
let submitBtn = document.getElementById('submit-button')
let notifEl = document.getElementById('notif')

formEl.addEventListener('submit', async (event) => {
    event.preventDefault()

    const file = userFile.files[0]
    if(!file){
        notifEl.textContent = "Upload failed!"
        return
    }

    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', uploadPreset)
    // formData.append('folder', 'raw/docs')
    // formData.append('access_mode', 'public')

    try{
        const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/raw/upload`,{
            method: "POST",
            body: formData
        })

        if(!response.ok){
            throw new Error(`Failed to upload to Cloudinary`)
        }

        const data = await response.json()
        const fileURL = data.secure_url

        await addDoc(collection(db, 'notes'),{
            courseCode: courseCodeInput.value,
            topicTitle: topicTitleInput.value,
            fileURL: fileURL,
            createdAt: serverTimestamp()
        })

        notifEl.textContent = "File Uploaded Successfully!"

        formEl.reset()
    } catch (error) {
        console.log(error)
        notifEl.textContent = "Failed to upload!"
    }
})