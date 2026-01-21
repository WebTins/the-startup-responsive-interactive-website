const animateMe = document.querySelector(".open-menu")

animateMe.addEventListener("click", bob)

function bob() {
  animateMe.classList.toggle("disney-animation")
}

const hamburgerList = document.querySelector(".hamburger-menu")
const openButton = document.querySelector(".open-menu")
const closeButton = document.querySelector(".close-menu")

openButton.addEventListener('click', opened)
closeButton.addEventListener('click', menuClosed)

function opened () {
  hamburgerList.classList.add('toggle-list')
}

function menuClosed () {
  hamburgerList.classList.remove('toggle-list')
}