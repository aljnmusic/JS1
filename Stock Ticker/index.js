import {getStockData} from "./fakeStockAPI.js"

setInterval(function (){
    const stockData = getStockData()
    renderStockTicker()
}, 1500)

function renderStockTicker(stockData) {
    const stockDisplayName = document.getElementById('name')
    const stockDisplaySymbol = document.getElementById('symbol')
    const stockDisplayPrice = document.getElementById('price')
    const stockDisplayPriceIcon = document.getElementById('price-icon')
    const stockDisplayTime = document.getElementById('time')

}