let inputEl = document.getElementById("input-el")
let convertBtn = document.getElementById("convert-btn")
let lengthEl  = document.getElementById("length-el")

const meterToFeet =  3.281
const feetToMeter = 0.3047
const literToGallon = 0.264172
const gallonToLitter = 3.78541

convertBtn.addEventListener("click", function(){
    let baseValue = inputEl.value

    lengthEl.textContent = `${baseValue} meter = ${baseValue * meterToFeet} feet | ${baseValue} feet = ${baseValue * feetToMeter} meter`
})