function getImagePromise(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const img = new Image()
            img.src = url
            img.alt = 'scenic image'
            img.addEventListener('load', () => resolve(img))
            img.addEventListener('error', () => reject(new Error(`Failed to load image: ${url}`)))
        }, 500)
    })
}

const images = [
    'https://scrimba.com/links/advancedjs-resources-images-scenic1',
    'https://scrimba.com/links/advancedjs-resources-images-scenic2',
    'https://scrimba.com/links/advancedjs-resources-images-scenic3'
]

async function preloadImages(imageUrlsArr) {
    const imgContainer = document.getElementById('img-container')
    const uploadContainer = document.getElementById('upload-container')

    try{
        const image1 = getImagePromise(imageUrlsArr)
        const image2 = getImagePromise(imageUrlsArr)
        const image3 = getImagePromise(imageUrlsArr)
        const results = await Promise.all([image1, image2, image3])
        console.log('ALl images loaded successfully!')
        uploadContainer.style.display = 'none'

        for (let i = 0; i < results.length; i++) {
            imgContainer.appendChild(results[i])
        }
    } catch (error) {
        console.error(error)
    }
    /*
    Challenge:
      1. Create an array of promises using getImagePromise.
      2. Save the results of calling all of those promises
         in one go to a const 'results'.
      3. If the promises resolve:
         - log "All images loaded successfully!".
         - hide 'uploadContainer'
         - iterate over the results and render them to imgContainer.
      4. If the promises reject:
         - catch and log the error.
    */
}

document.getElementById('submit-imgs').addEventListener('click', () => preloadImages(images))
