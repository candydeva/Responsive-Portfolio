const gitLink = document.getElementById('link-git');
const linkedIn = document.getElementById('link-linkedin')

gitLink.addEventListener('click', () => {
    window.open("https://github.com/candydeva", "_blank")
})

linkedIn.addEventListener('click', () => {
    window.open("http://linkedin.com/in/deva-r-a9034232a", "_blank")

})

const gitHub = document.querySelector('.visit-btn');

gitHub.addEventListener('click', () => {
    window.open("https://github.com/candydeva", "_blank")
})

const menuBtn = document.getElementById('menu-icon');
const navLink = document.querySelector('.nav-links');

menuBtn.addEventListener('click',()=>{
    navLink.classList.toggle('active')
})

