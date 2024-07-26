document.addEventListener('DOMContentLoaded', function() {
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

    // Remove preload class after dark mode has been applied
    document.documentElement.classList.remove('preload-dark-mode');
});
