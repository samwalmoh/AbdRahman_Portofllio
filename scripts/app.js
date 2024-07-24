// Remove Loader 
document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector(".spinner").style.visibility = "visible";
    } else {
        document.querySelector(".spinner").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
    }
};
// Toggle Menu
const toggleBtn = document.querySelector('.toggle-btn')
const toggleMenu = document.querySelector('.nav-left')
const closeBtn = document.querySelector('.close-Btn')
// Show Menu
toggleBtn.addEventListener('click', () => {
    toggleMenu.classList.toggle('show')

})
// Close Menu
closeBtn.addEventListener('click', () => {
    toggleMenu.classList.remove('show')
})
// Remove Menu
const navLink = document.querySelectorAll('.link')
function toggleRemove() {
    toggleMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', toggleRemove))
// Link Active 
const Link = document.querySelectorAll('.nav__link')

function activeLink () {
    Link.forEach(l => l.classList.remove('active')) 
    this.classList.add('active')
}

Link.forEach(l => l.addEventListener('click', activeLink))

// Dark Light Theme
const themeBtn = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'fa-sun'

// Previously Selected Theme 
const selectedTheme = localStorage.getItem('selected-theme') 
const selectedIcon = localStorage.getItem('selected-icon') 

// Get Current Theme Status
const currentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const currentIcon = () => themeBtn.classList.contains(iconTheme) ? 'fa-regular fa-moon' : 'fa-regular fa-sun'

// User Validate
if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeBtn.classList[selectedIcon === 'fa-regular fa-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / Deactivate the theme
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeBtn.classList.toggle(iconTheme)
    // Save The Theme
    localStorage.setItem('selected-theme', currentTheme())
    localStorage.setItem('selected-icon', currentIcon())
})


