// Get the menu button element
const menuBtn = document.querySelector('.menu-btn');

// Get the navigation menu element
const menu = document.querySelector('nav ul.menu');

// Add a click event listener to the menu button
menuBtn.addEventListener('click', () => {
    // Toggle the 'active' class on the navigation menu
    menu.classList.toggle('active');
});