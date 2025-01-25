let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');  // Toggle hamburger icon state
    navbar.classList.toggle('active');  // Toggle navbar visibility
};

window.onscroll = () => {
    menu.classList.remove('fa-times');  // Reset hamburger icon
    navbar.classList.remove('active');  // Hide navbar when scrolling
};
