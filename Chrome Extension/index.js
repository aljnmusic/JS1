import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js"
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js"

const firebaseConfig = {
    databaseURL: "https://lead-tracker-app-89a45-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)



let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
let ulEl = document.getElementById("ul-el")
let deleteEl =  document.getElementById("delete-btn")

const leadFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const tabBtn = document.getElementById("tab-btn")

let truthy = Boolean(leadFromLocalStorage)

if (truthy) {
    myLeads = leadFromLocalStorage
    renderInput(myLeads)
}


tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active:true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        renderInput(myLeads)
    })
})

inputBtn.addEventListener("click", function () {
    let elementEl = inputEl.value
    myLeads.push(elementEl)
    console.log(myLeads)
    inputEl.value = ""

    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    renderInput(myLeads)
})

deleteEl.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    renderInput(myLeads)
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
