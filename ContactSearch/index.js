import {contactsArr} from './contactsData.js'

const patternSearchInput = document.getElementById('pattern-search-input')
const patternSearchSubmit = document.getElementById('pattern-search-submit')
const contactDisplay = document.getElementById('contact-display')

patternSearchSubmit.addEventListener('click', function(){
    findMatchingContacts(contactsArr, patternSearchInput.value)
})

function findMatchingContacts(contactsArr, pattern) {
    contactDisplay.innerHTML = ''
    const regex = new RegExp(pattern, 'i')
    contactsArr.filter(function(contact){
        return regex.test(contact.name)
    }).forEach(function(contact){
            renderContact(contact)
        })
}

function renderContact(contactObj) {
    const {name, email, phone} =  contactObj
    const contactCard = document.createElement('aside')
    contactCard.classList.add('contact-card')

    const nameEl = document.createElement('p')
    const emailEl = document.createElement('p')
    const phoneEl = document.createElement('p')

    nameEl.innerText = name
    emailEl.innerText = email
    phoneEl.innerText = phone

    contactCard.appendChild(nameEl)
    contactCard.appendChild(emailEl)
    contactCard.appendChild(phoneEl)

    contactDisplay.appendChild(contactCard)
}