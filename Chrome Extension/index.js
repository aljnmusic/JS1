let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
let ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function () {
    let elementEl = inputEl.value
    myLeads.push(elementEl)
    console.log(myLeads)
    inputEl.value = ""
    renderInput()
})

function renderInput(){
    let listItems = ""
    for(let i = 0; i < myLeads.length; i++){
        listItems += "<li><a target='_blank' href='" + myLeads[i] + "'> " + myLeads[i] + "</a></li>"
    }

    ulEl.innerText = listItems
}