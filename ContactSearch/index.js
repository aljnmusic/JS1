import {contactsArr} from './contactsData'

/*
Challenge:
1. Wire up this search pattern app so that inputting
   a full or partial name brings up the matching
   contact or contacts.
*/

const patternSearchInput = document.getElementById('pattern-search-input')
const patternSearchSubmit = document.getElementById('pattern-search-submit')

patternSearchSubmit.addEventListener('click', function(){
    findMatchingContacts(contactsArr, patternSearchInput.value)
})

function findMatchingContacts(contactsArr, pattern) {
    const regex = new RegExp(pattern, 'i')
    contactsArr.filter(function(contact){
        return regex.test(contact.name)
    })
        .forEach(function(contact){
            renderContact(contact)
        })
}

function renderContact(contactObj) {
    const {name, email, phone} =  contactObj
    const contactDisplay = document.getElementById('contact-display')
    const contactCard = document.createElement('aside')
    contactCard.classList.add('contact-card')
    /*
        The CSS for contact-card has been done for you.
        The name, email and phone details can be placed in
        'p' elements and placed inside contact-card.
    */
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