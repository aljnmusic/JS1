import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js"

const firebaseConfig = {
    databaseURL: "https://lead-tracker-app-89a45-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const referenceInDB = ref(database, "lead")

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
let ulEl = document.getElementById("ul-el")
let deleteEl =  document.getElementById("delete-btn")


inputBtn.addEventListener("click", function () {
    push(referenceInDB, inputEl.value)


    inputEl.value = ""



})

deleteEl.addEventListener("dblclick", function () {



})

function renderInput(leads){
    let listItems = ""
    for(let i = 0; i < leads.length; i++){
        listItems += `
                    <li>
                        <a href='${leads[i]}'>
                            ${leads[i]}
                        </a> 
                    </li>`
    }

    ulEl.innerHTML = listItems
}
