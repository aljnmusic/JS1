import {getStockData} from "./fakeStockAPI.js"
import {getStockData2} from "./fakeStockAPI.js"

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

    let priceDirection = price > priorPrice ? `green.svg` : price < priorPrice ? `red.svg` : `grey.svg`

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

//ggh
setInterval(function (){
    const stockData2 = getStockData2()
    renderStockData2(stockData2)
}, 1500)

let priorPrice2 = null

function renderStockData2(stockData2){
    const stockDisplayName2 = document.getElementById('name2')
    const stockDisplaySymbol2 = document.getElementById('symbol2')
    const stockDisplayPrice2 = document.getElementById('price2')
    const stockDisplayPriceIcon2 = document.getElementById('price-icon2')
    const stockDisplayTime2 = document.getElementById('time2')

    const {name, sym, price, time} = stockData2
    let priceDirection2 = price > priorPrice2 ? 'green.svg' : price < priorPrice2 ? `red.svg` : `grey.svg`

    const  priceIconElement2 = document.createElement('img')
    priceIconElement2.src = `svg/${priceDirection2}`
    priceIconElement2.alt = "Price Direction Icon"
    stockDisplayPriceIcon2.innerHTML = ''
    stockDisplayPriceIcon2.appendChild(priceIconElement2)

    stockDisplayName2.innerText = name
    stockDisplaySymbol2.innerText = sym
    stockDisplayPrice2.innerText = price
    stockDisplayTime2.innerText = time

    priorPrice2 = price
}