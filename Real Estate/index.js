import { placeholderPropertyObj } from './properties/placeholderPropertyObj'
import { propertyForSaleArr } from './properties/propertyForSaleArr'

function getPropertyHtml() {

    const {propertyLocation, priceGBP, roomsM2, comment, image} = placeholderPropertyObj

    // const locationEl = document.createElement('p')
    // const priceGBPEl = document.createElement('p')
    // const roomsM2El = document.createElement('p')
    // const commentEl = document.createElement('p')
    // const imageEl = document.createElement('img')
    //
    // locationEl.innerText = propertyLocation
    // priceGBPEl.innerText = priceGBP
    // roomsM2El.innerText = roomsM2
    // commentEl.innerText = comment
    // imageEl
    // imageEl.src = `images/${image}`

    placeholderPropertyObj.map((placeholderPropertyObj) => {
        return `<section class="card">
            <img src="/images/IMAGE">
                <div class="card-right">
                    <h2>${propertyLocation}</h2>
                    <h3>${priceGBP.reduce()}</h3>
                    <p>${comment}</p>
                    <h3>TOTAL SIZE IN SQUARE METRES m&sup2;</h3>
                </div>
        </section>`
    }).join('')
/*
SUPER CHALLENGE 💪

Render out a card for each of the properties in the propertyForSaleArr array (in the 'properties' folder). Each card should have an image, a property location, a price, a comment and the TOTAL property size in square metres (each object has an array with the size in square metres of the individual rooms).

If no array of properties is passed to getPropertyHtml, the placeholder property stored in placeholderPropertyObj (in the 'properties' folder) should be rendered instead.

This is the JS I want you to use to complete this challenge 👇
- import/export
- .map()
- .join()
- Object destructuring
- .reduce()
- Default parameters

The HTML and CSS have been done for you. 
This is the HTML template 👇. Replace everything in UPPERCASE with property data.

<section class="card">
    <img src="/images/IMAGE">
    <div class="card-right">
        <h2>PROPERTY LOCATION</h2>
        <h3>PRICE GBP</h3>
        <p>COMMENT</p>
        <h3>TOTAL SIZE IN SQUARE METRES m&sup2;</h3>
    </div>
</section> 
*/
}

/***** Modify 👇 by adding an argument to the function call ONLY. *****/
document.getElementById('container').innerHTML = getPropertyHtml(placeholderPropertyObj)