// Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
});

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

// Function to detect if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
}

// Apply the effect to the "About Me" section
const aboutMe = document.getElementById('aboutMe');

window.addEventListener('scroll', () => {
    if (isInViewport(aboutMe)) {
        aboutMe.classList.add('visible'); // Show the section
    } else {
        aboutMe.classList.remove('visible'); // Hide the section
    }
});