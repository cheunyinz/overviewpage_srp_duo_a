const openButton = document.querySelector('#open_button')
const closeButton = document.querySelector('#close_button')
const sideNav = document.querySelector('#side_nav')
const emailInput = document.querySelector ('#email_input')
const submitButton = document.querySelector ('#submit_button')
var thanksText = document.querySelector ("#thank_you_text")

function openNav() {
    sideNav.classList.add ('nav_open')
    sideNav.classList.remove ('nav_close')
}

function closeNav() {
    sideNav.classList.add ('nav_close')
    sideNav.classList.remove ('nav_open')
}

function thankingText (){
    thanksText.textContent = emailInput.value + ' ' + 'is' + ' ' + 'successfully' +' ' + 'registered' + '' + ',' + ' ' + 'thank' + ' ' +' you' + ' ' +' !'
}

openButton.addEventListener('click', openNav)
closeButton.addEventListener('click', closeNav)
emailInput = addEventListener ('change' , thankingText)
