const navLinks = document.querySelector('.nav-links');
const bars = document.querySelector('.bars');

// const navLinks = document.querySelector('.nav-links');


navLinks.addEventListener('click', closeTab)

bars.addEventListener('click', showMenu)

function showMenu(){
	navLinks.classList.toggle('toggle')
}


Array.prototype.forEach.call(listItems, item => {
    item.addEventListener('click', closeTab)
})

function closeTab(){
	navLinks.classList.remove('toggle')
}