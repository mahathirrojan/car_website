// JavaScript file for The News website

// Function to toggle the mobile menu
function toggleMenu() {
    const menuBtn = document.querySelector('.menu-btn');
    const nav = document.querySelector('nav ul');

    menuBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}

// Function to handle button click
function exploreButton() {
    const exploreButton = document.querySelector('button');

    exploreButton.addEventListener('click', () => {
        // Replace this with the desired action when the button is clicked
        alert('Explore button clicked!');
    });
}

// Call the functions when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    toggleMenu();
    exploreButton();
});