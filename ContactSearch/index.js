import { contactsArr } from './contactsData.js'


const patternSearchInput = document.getElementById('pattern-search-input')
const patternSearchSubmit = document.getElementById('pattern-search-submit')
const contactDisplay = document.getElementById('contact-display')

patternSearchSubmit.addEventListener('click', () => {
    findMatchPattern(contactsArr, patternSearchInput.value)
})


const findMatchPattern = (contactsArr, pattern) => {
    contactDisplay.innerHTML = ''
    const regex = new RegExp(pattern, 'i')

    const filteredContacts = contactsArr.filter(contact => regex.test(contact.name))
    filteredContacts.forEach(contact => {renderContact(contact)})
}



const renderContact = ({name, email, phone}) => {
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