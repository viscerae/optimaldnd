document.addEventListener('DOMContentLoaded', function() {
    // Dropdown menu functionality
    const dropdowns = document.querySelectorAll('nav ul li');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseover', function() {
            this.querySelector('ul').style.display = 'block';
        });
        dropdown.addEventListener('mouseout', function() {
            this.querySelector('ul').style.display = 'none';
        });
    });

    // Dark mode toggle functionality
    const toggle = document.getElementById('darkModeToggle');

    // Function to apply dark mode
    function applyDarkMode(isEnabled) {
        document.body.classList.toggle('dark-mode', isEnabled);
        document.querySelector('header').classList.toggle('dark-mode', isEnabled);
        document.querySelector('nav').classList.toggle('dark-mode', isEnabled);
        document.querySelector('footer').classList.toggle('dark-mode', isEnabled);
    }

    // Check localStorage for dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        applyDarkMode(true);
        toggle.checked = true;
    }

    // Toggle dark mode on change event
    toggle.addEventListener('change', function() {
        const isDarkMode = toggle.checked;
        applyDarkMode(isDarkMode);
        localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
    });
});
