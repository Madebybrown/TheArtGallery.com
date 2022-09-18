// Toggles navlinks from hamburger menu on smaller screens.
const menuBtn = document.querySelector('#menu-icon')
const navlinks = document.querySelector('.nav-list1')

menuBtn.addEventListener('click',()=>{
    navlinks.classList.toggle('show')
})