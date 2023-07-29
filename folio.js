// JavaScript code for the provided HTML and CSS

// Handle the click event on the menu icon to toggle the navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Smooth scroll to the section when clicking on nav links
let navLinks = document.querySelectorAll('header nav a');

navLinks.forEach(link => {
    link.onclick = (event) => {
        event.preventDefault();
        let targetSection = document.querySelector(link.getAttribute('href'));
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    };
});

// Update the active link in the navbar based on the current section in view
let sections = document.querySelectorAll('section');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector(`header nav a[href*='${id}']`).classList.add('active');
        }
    });

    // Add sticky class to header when scrolling down
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Close the mobile menu when scrolling
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// ScrollReveal animations
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
