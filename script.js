// Smooth scroll effect for navigation links
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// Image slideshow in the hero section
const images = ['hero1.jpg', 'hero2.jpg', 'hero3.jpg', 'hero-background.jpg', 'hero4.jpg'];
let currentImageIndex = 0;
const heroSection = document.querySelector('.hero');

function changeHeroImage() {
    heroSection.style.backgroundImage = `url("${images[currentImageIndex]}")`;
    currentImageIndex = (currentImageIndex + 1) % images.length;
}

setInterval(changeHeroImage, 5000); // Change image every 5 seconds