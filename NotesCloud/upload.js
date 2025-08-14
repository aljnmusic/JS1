import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js"
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js"

const firebaseConfig = {
    databaseUrl: "https://notescloud-d8d47-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(firebaseConfig)
const database =  getDatabase(app)

console.log(app)

let formEl = document.getElementById('form')
let courseCodeInput =  document.getElementById('course-code-input')
let topicTitleInput = document.getElementById('topic-title-input')
let userFile = document.getElementById('user-file')
let uploadFile = document.getElementById('upload-file')
