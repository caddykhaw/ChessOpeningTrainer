// theme.js
function applyTheme(theme) {
    const body = document.body;
    const toggleButton = document.getElementById('themeToggle');
    if (theme === 'dark') {
        body.classList.add('dark');
        toggleButton.textContent = '🌙';
        toggleButton.setAttribute('aria-label', 'Switch to light theme');
    } else {
        body.classList.remove('dark');
        toggleButton.textContent = '☀️';
        toggleButton.setAttribute('aria-label', 'Switch to dark theme');
    }
}

function toggleTheme() {
    const isDark = document.body.classList.contains('dark');
    const newTheme = isDark ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
}

function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Apply saved theme, fall back to system preference, default to light
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        applyTheme(prefersDark ? 'dark' : 'light');
    }
}

// Event listener for theme toggle button
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('themeToggle');
    if (toggleButton) {
        toggleButton.addEventListener('click', toggleTheme);
    }
    initializeTheme();
});

// Optional: Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) { // Only apply if user hasn’t set a preference
        applyTheme(e.matches ? 'dark' : 'light');
    }
});