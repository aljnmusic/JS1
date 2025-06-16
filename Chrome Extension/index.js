let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
let ulEl = document.getElementById("ul-el")
let deleteEl =  document.getElementById("delete-btn")

const leadFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

let truthy = Boolean(leadFromLocalStorage)

if (truthy) {
    myLeads = leadFromLocalStorage
    renderInput()
}

inputBtn.addEventListener("click", function () {
    let elementEl = inputEl.value
    myLeads.push(elementEl)
    console.log(myLeads)
    inputEl.value = ""

    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    renderInput()
})

deleteEl.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    renderInput()
})

function renderInput(){
    let listItems = ""
    for(let i = 0; i < myLeads.length; i++){
        listItems += `
                    <li>
                        <a href='${myLeads[i]}'>
                            ${myLeads[i]}
                        </a> 
                    </li>`
    }

    ulEl.innerHTML = listItems
}
