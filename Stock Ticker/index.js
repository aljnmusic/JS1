import {getStockData} from "./fakeStockAPI.js"

setInterval(function (){
    const stockData = getStockData()
    renderStockTicker(stockData)
}, 3000)

let prevPrice = null

function renderStockTicker(stockData) {
    const stockDisplayName = document.getElementById('name')
    const stockDisplaySymbol = document.getElementById('symbol')
    const stockDisplayPrice = document.getElementById('price')
    const stockDisplayPriceIcon = document.getElementById('price-icon')
    const stockDisplayTime = document.getElementById('time')

    const {name, symbol, price, time} = stockData

    const priorPrice = price > prevPrice ? 'green.svg' : price <  prevPrice ? 'red.svg' : 'grey.svg'

    const priceIconElement = document.createElement('img')
    priceIconElement.src = `svg/${priorPrice}`
    priceIconElement.alt = 'Price Direction Icon'
    priceIconElement.style.width = '15px'
    priceIconElement.style.height = '15px'
    stockDisplayPriceIcon.innerHTML = ''
    stockDisplayPriceIcon.appendChild(priceIconElement)

    stockDisplayName.innerText = name
    stockDisplaySymbol.innerText = symbol
    stockDisplayPrice.innerText = price
    stockDisplayTime.innerText = time

    prevPrice = price
}
