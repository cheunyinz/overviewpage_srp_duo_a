const openButton = document.querySelector('#open_button')
const closeButton = document.querySelector('#close_button')
const sideNav = document.querySelector('#side_nav')

function openNav() {
    sideNav.classList.add ('nav_open')
    sideNav.classList.remove ('nav_close')
}

function closeNav() {
    sideNav.classList.add ('nav_close')
    sideNav.classList.remove ('nav_open')
}

openButton.addEventListener('click', openNav)
closeButton.addEventListener('click', closeNav)
