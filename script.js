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
    
    // Check localStorage for the dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        document.querySelector('header').classList.add('dark-mode');
        document.querySelector('nav').classList.add('dark-mode');
        document.querySelector('footer').classList.add('dark-mode');
        toggle.checked = true;
    }

    toggle.addEventListener('change', function() {
        if (toggle.checked) {
            document.body.classList.add('dark-mode');
            document.querySelector('header').classList.add('dark-mode');
            document.querySelector('nav').classList.add('dark-mode');
            document.querySelector('footer').classList.add('dark-mode');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            document.body.classList.remove('dark-mode');
            document.querySelector('header').classList.remove('dark-mode');
            document.querySelector('nav').classList.remove('dark-mode');
            document.querySelector('footer').classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'disabled');
        }
    });
});
