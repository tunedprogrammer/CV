// scripts.js

document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const target = document.querySelector(link.getAttribute("href"));
            window.scrollTo({
                top: target.offsetTop,
                behavior: "smooth"
            });
        });
    });

    // Play Mario-inspired background music on load
    const bgMusic = new Audio('assets/music/mario-theme.mp3');
    bgMusic.loop = true;
    bgMusic.volume = 0.5;
    bgMusic.play();

    // Add sound effect on navigation click
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            const jumpSound = new Audio('assets/music/jump-sound.mp3');
            jumpSound.play();
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const jumpButton = document.getElementById('jumpButton');
    const jumpSound = document.getElementById('jumpSound');

    jumpButton.addEventListener('click', function() {
        jumpSound.currentTime = 0; // Reset sound to start
        jumpSound.play();
    });
});
