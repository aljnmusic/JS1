import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js"
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js"

const firebaseConfig = {
    databaseURL: "https://lead-tracker-app-89a45-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)




const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
let ulEl = document.getElementById("ul-el")
let deleteEl =  document.getElementById("delete-btn")



let truthy = Boolean(leadFromLocalStorage)





inputBtn.addEventListener("click", function () {
    console.log(inputEl.value)


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
