// Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
});

// Close menu when clicking outside
navMenu.addEventListener('click', (e) => {
    if (e.target === navMenu) {
        navMenu.classList.add('hidden');
    }
});

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});