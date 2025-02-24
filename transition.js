// transition.js
document.addEventListener('DOMContentLoaded', () => {
    // Handle link clicks for fade-out effect
    document.querySelectorAll('a[href]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent immediate navigation
            const href = link.getAttribute('href');
            document.body.style.opacity = '0'; // Fade out
            setTimeout(() => {
                window.location.href = href; // Navigate after animation
            }, 300); // Match CSS opacity transition duration
        });
    });
});