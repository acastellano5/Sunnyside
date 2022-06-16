const navSlider = document.querySelector('.nav-slider')
const menuBtn = document.querySelector('.menu-btn')

menuBtn.addEventListener('click', () => {
    navSlider.classList.toggle('show-slider')
})