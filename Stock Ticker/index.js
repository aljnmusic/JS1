import {getStockData} from "./fakeStockAPI.js"
import {getStockData2} from "./fakeStockAPI.js"

setInterval(function (){
    const stockData = getStockData()
    renderStockData(stockData)
}, 1500)

let priorPrice = null
let priorVolume = null

function renderStockData(stockData) {
    const stockDisplayName = document.getElementById('name')
    const stockDisplaySymbol = document.getElementById('symbol')
    const stockDisplayPrice = document.getElementById('price')
    const stockDisplayPriceIcon = document.getElementById('price-icon')
    const stockDisplayTime = document.getElementById('time')
    const stockDisplayOpen = document.getElementById('open')
    const stockDisplayHigh =  document.getElementById('high')
    const stockDisplayLow = document.getElementById('low')
    const stockDisplayVolume = document.getElementById('volume')
    const stockDisplayVolumeIcon = document.getElementById('volume-icon')
    const stockDisplayMarketCap =  document.getElementById('marketCap')
    const stockDisplayPerRatio = document.getElementById('peRatio')

    const {name, sym, price, time, open, high, low, volume, marketCap, peRatio} = stockData

    let priceDirection = price > priorPrice ? `green.svg` : price < priorPrice ? `red.svg` : `grey.svg`
    let volumeDirection = volume > priorVolume ? `green.svg` : volume < priorVolume ? `red.svg` : `grey.svg`

    const priceIconElement = document.createElement('img')
    priceIconElement.src = `svg/${priceDirection}`
    priceIconElement.alt = "Price Direction Icon"
    stockDisplayPriceIcon.innerHTML = ''
    stockDisplayPriceIcon.appendChild(priceIconElement)

    const volumeIconElement =  document.createElement('img')
    volumeIconElement.src = `svg/${volumeDirection}`
    volumeIconElement.alt = "Volume Direction Icon"
    stockDisplayVolumeIcon.innerHTML = ''
    stockDisplayVolumeIcon.appendChild(volumeIconElement)

    stockDisplayName.innerText = name
    stockDisplaySymbol.innerText = sym
    stockDisplayPrice.innerText = price
    stockDisplayTime.innerText = time
    stockDisplayOpen.innerText = open
    stockDisplayHigh.innerText = high
    stockDisplayLow.innerText = low
    stockDisplayVolume.innerText = volume
    stockDisplayMarketCap.innerText = marketCap
    stockDisplayPerRatio.innerText = peRatio

    priorPrice = price
    priorVolume = volume
}

//ggh
setInterval(function (){
    const stockData2 = getStockData2()
    renderStockData2(stockData2)
}, 1500)

let priorPrice2 = null
let priorVolume2 = null

function renderStockData2(stockData2){
    const stockDisplayName2 = document.getElementById('name2')
    const stockDisplaySymbol2 = document.getElementById('symbol2')
    const stockDisplayPrice2 = document.getElementById('price2')
    const stockDisplayPriceIcon2 = document.getElementById('price-icon2')
    const stockDisplayTime2 = document.getElementById('time2')
    const stockDisplayOpen2 = document.getElementById('open2')
    const stockDisplayHigh2 =  document.getElementById('high2')
    const stockDisplayLow2 = document.getElementById('low2')
    const stockDisplayVolume2 = document.getElementById('volume2')
    const stockDisplayVolumeIcon2 = document.getElementById('volume-icon2')
    const stockDisplayMarketCap2 =  document.getElementById('marketCap2')
    const stockDisplayPerRatio2 = document.getElementById('peRatio2')

    const {name, sym, price, time, open, high, low, volume, marketCap, peRatio} = stockData2
    let priceDirection2 = price > priorPrice2 ? 'green.svg' : price < priorPrice2 ? `red.svg` : `grey.svg`
    let volumeDirection2 = volume > priorVolume2 ? `green.svg` : volume < priorVolume2 ? `red.svg` : `grey.svg`

    const  priceIconElement2 = document.createElement('img')
    priceIconElement2.src = `svg/${priceDirection2}`
    priceIconElement2.alt = "Price Direction Icon"
    stockDisplayPriceIcon2.innerHTML = ''
    stockDisplayPriceIcon2.appendChild(priceIconElement2)

    const volumeIconElement2 = document.createElement('img')
    volumeIconElement2.src = `svg/${volumeDirection2}`
    volumeIconElement2.alt = "Volume Direction Icon"
    stockDisplayVolumeIcon2.innerHTML = ''
    stockDisplayVolumeIcon2.appendChild(volumeIconElement2)



    stockDisplayName2.innerText = name
    stockDisplaySymbol2.innerText = sym
    stockDisplayPrice2.innerText = price
    stockDisplayTime2.innerText = time
    stockDisplayOpen2.innerText = open
    stockDisplayHigh2.innerText = high
    stockDisplayLow2.innerText = low
    stockDisplayVolume2.innerText = volume
    stockDisplayMarketCap2.innerText = marketCap
    stockDisplayPerRatio2.innerText = peRatio


    priorPrice2 = price
    priorVolume2 = volume
}