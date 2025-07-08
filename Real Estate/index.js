import { propertyForSaleArr } from './properties/propertyForSaleArr.js'
import { placeholderPropertyObj } from './properties/placeholderPropertyObj.js'

function getPropertyHtml(properties = [placeholderPropertyObj]) {

    return properties.map(({propertyLocation, priceGBP, roomsM2, comment, image}) => {

        const totalSize = roomsM2.reduce((acc, cur) => acc + cur, 0)

        return `<section class="card">
                    <img src="./images/${image}" alt="property image"/>
                    <div class="card-right">
                        <h2>${propertyLocation.toUpperCase()}</h2>
                        <h3>${priceGBP}</h3>
                        <p>${comment.toUpperCase()}</p>
                        <h3>${totalSize} sqm</h3>
                    </div>
                </section>`
    }).join('')
    //
    // return estate

}


document.getElementById('container').innerHTML = getPropertyHtml()