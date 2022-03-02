const navLinks = document.querySelector('.nav-links');
const bars = document.querySelector('.bars');



const navLinkLinks = document.querySelector('.nav-links').getElementsByTagName('li');


navLinks.addEventListener('click', closeTab)
navLinks.addEventListener('scroll', closeTab)

bars.addEventListener('click', showMenu)

function showMenu(){
	navLinks.classList.toggle('toggle')
}


Array.prototype.forEach.call(navLinkLinks, item => {
    item.addEventListener('click', closeTab)
})

function closeTab(){
	navLinks.classList.remove('toggle')
}

