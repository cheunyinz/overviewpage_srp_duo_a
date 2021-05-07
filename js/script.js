const openButton = document.querySelector('#open_button')
const closeButton = document.querySelector('#close_button')
const sideNav = document.querySelector('#side_nav')
const ncfilterEl = document.querySelector('#nc-filter-box')
var ncfilterButton = document.querySelector('#nc-filter-button')
const offilterEl = document.querySelector('#of-filter-box')
var offilterButton = document.querySelector('#of-filter-button')
var addingShoppingCartEl = document.querySelector('#shopping-cart')
var addButton = document.querySelectorAll('.add-shopping-cart')
var submitEl = document.querySelector('#submit_knop')
var emailInput = document.querySelector('#email_input')
var emailtext = document.querySelector('#email_text')
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
    thanksText.textContent = ' ' + 'is' + ' ' + 'successfully' + ' ' + 'registered' + '' + ',' + ' ' + 'thank' + ' ' + ' you' + ' ' + ' !'
}

function openClosencFilter() {
    ncfilterEl.classList.toggle('filter_open')
}

function openCloseofFilter() {
    offilterEl.classList.toggle('filter_open')
}


function addingShoppingCart() {
    addingShoppingCartEl = addingShoppingCartEl.src = './elements/adding_shopping_cart@2x.png'

}

console.log(addButton)

submitEl.addEventListener('submit', thankingText)
openButton.addEventListener('click', openNav)
closeButton.addEventListener('click', closeNav)
addButton.forEach(function (button) {
    button.addEventListener('click', addingShoppingCart)
})
ncfilterButton.addEventListener('click', openClosencFilter)
offilterButton.addEventListener('click', openCloseofFilter)