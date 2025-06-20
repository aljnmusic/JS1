let inputEl = document.getElementById("input-el")
let convertBtn = document.getElementById("convert-btn")
let lengthEl  = document.getElementById("length-el")
let weightEl = document.getElementById("weight-el")
let curEl = document.getElementById("cur-el")

const meterToFeet =  3.281
const feetToMeter = 0.3047
const literToGallon = 0.264172
const gallonToLitter = 3.78541
const phpToUsdRate = 0.0179
const usdToPhpRate = 55.84

convertBtn.addEventListener("click", function(){
    let baseValue = parseFloat(inputEl.value)

    if (isNaN(baseValue)) {
        alert("Please enter a valid base value!")
    }

    lengthEl.textContent = `${baseValue} meter = ${(baseValue * meterToFeet).toFixed(3)} feet | ${baseValue} feet = ${(baseValue * feetToMeter).toFixed(3)} meter`

    weightEl.textContent = `${baseValue} Liters = ${(baseValue * literToGallon).toFixed(3)} Gallons | ${baseValue} Gallons = ${(baseValue * gallonToLitter).toFixed(3)} Litter`

    curEl.textContent = `${baseValue} Pesos = ${(baseValue * phpToUsdRate).toFixed(3)} USD | ${baseValue} USD = ${(baseValue * usdToPhpRate).toFixed(3)} Pesos`
})