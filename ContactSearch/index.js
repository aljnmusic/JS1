import {contactsArr} from "./contactsData";

/*
Challenge:
1. Wire up this search pattern app so that inputting
   a full or partial name brings up the matching
   contact or contacts.
*/

const patternSearchInput = document.getElementById('pattern-search-input')
const patternSearchSubmit = document.getElementById('pattern-search-submit')
const contactDisplay = document.getElementById('contact-display')

function renderContact(contactObj) {
    const contactCard = document.createElement('aside')
    contactCard.classList.add('contact-card')
    /*
        The CSS for contact-card has been done for you.
        The name, email and phone details can be placed in
        'p' elements and placed inside contact-card.
    */
}