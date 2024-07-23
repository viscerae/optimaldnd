// JavaScript for interactive dropdown menu
document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('nav ul li');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseover', function() {
            this.querySelector('ul').style.display = 'block';
        });
        dropdown.addEventListener('mouseout', function() {
            this.querySelector('ul').style.display = 'none';
        });
    });

    // JavaScript for dark mode toggle
    const toggle = document.getElementById('darkModeToggle');
    toggle.addEventListener('change', function() {
        document.body.classList.toggle('dark-mode');
        document.querySelector('header').classList.toggle('dark-mode');
        document.querySelector('nav').classList.toggle('dark-mode');
        document.querySelector('footer').classList.toggle('dark-mode');
    });
});

