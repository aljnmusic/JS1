let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function () {
    let elementEl = inputEl.value
    myLeads.push(elementEl)
    console.log(myLeads)
})