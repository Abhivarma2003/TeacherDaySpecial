document.addEventListener('DOMContentLoaded', () => {
    const showMessageButton = document.getElementById('showMessageButton');
    const thankYouMessage = document.getElementById('thankYouMessage');

    showMessageButton.addEventListener('click', () => {
        thankYouMessage.classList.toggle('hidden');
    });

    // Add animation to header text on load
    const headerText = document.querySelector('header h1');
    headerText.classList.add('animated-text');

    // Add animation to gallery images on hover
    const galleryImages = document.querySelectorAll('.gallery img');
    galleryImages.forEach(img => {
        img.addEventListener('mouseover', () => {
            img.classList.add('zoom-in');
        });
        img.addEventListener('mouseout', () => {
            img.classList.remove('zoom-in');
        });
    });

    // Add animation to fun facts list items on load
    const funFacts = document.querySelectorAll('.fun-facts li');
    funFacts.forEach((fact, index) => {
        setTimeout(() => {
            fact.classList.add('fade-in');
        }, index * 500);
    });
});