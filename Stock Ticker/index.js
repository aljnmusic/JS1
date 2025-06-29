import {getStockData} from "./fakeStockAPI.js"

setInterval(function (){
    const stockData = getStockData()
    renderStockData(stockData)
}, 1500)

let priorPrice = null

function renderStockData(stockData) {
    const stockDisplayName = document.getElementById('name')
    const stockDisplaySymbol = document.getElementById('symbol')
    const stockDisplayPrice = document.getElementById('price')
    const stockDisplayPriceIcon = document.getElementById('price-icon')
    const stockDisplayTime = document.getElementById('time')

    const {name, sym, price, time} = stockData

    let priceDirection = price > priorPrice ? `green.svg` : price < priorPrice ? `red.svg` : `gray.svg`

    const priceIconElement = document.createElement('img')
    priceIconElement.src = `svg/${priceDirection}`
    priceIconElement.alt = "Price Direction Icon"
    stockDisplayPriceIcon.innerHTML = ''
    stockDisplayPriceIcon.appendChild(priceIconElement)

    stockDisplayName.innerText = name
    stockDisplaySymbol.innerText = sym
    stockDisplayPrice.innerText = price
    stockDisplayTime.innerText = time

    priorPrice = price
}