const hamburgerMenu = document.querySelector('.hamburger-menu');
const closeMenu = document.querySelector('.close-menu');
const dropdownMenu = document.querySelector('.drop-down-menu');
const body = document.querySelector('body');

hamburgerMenu.addEventListener('click', () => {
    dropdownMenu.style.display = "block";
    closeMenu.style.display = "block";
    hamburgerMenu.style.display = "none";
    body.style.backgroundColor = "rgba(0.7, 0.8, 1.8, 0.25)";
});

closeMenu.addEventListener('click', () => {
    dropdownMenu.style.display = "none";
    closeMenu.style.display = "none";
    hamburgerMenu.style.display = "block";
    body.style.backgroundColor = "initial";
});


