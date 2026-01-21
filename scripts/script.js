// DISNEY ANIMATIE

// Selecteert het element met de class die de menu hoort te openen
const animateMe = document.querySelector(".open-menu")

// Voegt een click event toe aan het open-menu class
animateMe.addEventListener("click", bob)

// Functie die een animatie class aan en uitzet
function bob() {
  // Toggle voegt en verwijdert de class.
  animateMe.classList.toggle("disney-animation")
}

// HAMBURGER MENU

// Selecteert de class het hamburger menu lijst
const hamburgerList = document.querySelector(".hamburger-menu")

// Selecteert de class van de knop om het menu te openen
const openButton = document.querySelector(".open-menu")

// Selecteert de class van de knop om het menu te sluiten
const closeButton = document.querySelector(".close-menu")

// Voegt een click event toe aan het open-menu class
openButton.addEventListener('click', opened)

// Voegt een click event toe aan het close-menu class
closeButton.addEventListener('click', menuClosed)

// Functie om het menu zichtbaar te maken
function opened () {
  // Voegt een class toe waardoor het menu zichtbaar wordt
  hamburgerList.classList.add('toggle-list')
}

// Functie om het menu te verbergen
function menuClosed () {
  // Verwijdert de class waardoor het menu weer verdwijnt
  hamburgerList.classList.remove('toggle-list')
}