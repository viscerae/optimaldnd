// Immediately set the theme based on user preference or system setting
(function() {
    const userPreference = localStorage.getItem('theme') || 'system';
    const mode = (userPreference === 'light') ? 'light' :
        (userPreference === 'dark') ? 'dark' :
        (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    document.documentElement.dataset.appliedMode = mode;
})();
