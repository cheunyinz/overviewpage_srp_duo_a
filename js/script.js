const openButton = document.querySelector('#open_button')
const closeButton = document.querySelector('#close_button')
const sideNav = document.querySelector('#side_nav')
var submitEl = document.querySelector('#submit_knop')
var emailInput = document.querySelector('#email_input')
var emailtext = document.querySelector ('#email_text')
var thanksText = document.querySelector("#thank_you_text")

function openNav() {
    sideNav.classList.add('nav_open')
    sideNav.classList.remove('nav_close')
}

function closeNav() {
    sideNav.classList.add('nav_close')
    sideNav.classList.remove('nav_open')
}

function thankingText(event) {
    event.preventDefault()
    emailtext.textContent = emailInput.value
    thanksText.textContent =' ' + 'is' + ' ' + 'successfully' + ' ' + 'registered' + '' + ',' + ' ' + 'thank' + ' ' + ' you' + ' ' + ' !'
}

submitEl = addEventListener('submit', thankingText)
openButton.addEventListener('click', openNav)
closeButton.addEventListener('click', closeNav)