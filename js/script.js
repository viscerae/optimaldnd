function getUserPreference() {
    // Always return dark mode preference
    return "dark";
}

function saveUserPreference(userPreference) {
    // Save dark mode preference
    localStorage.setItem("theme", userPreference);
}

function setAppliedMode(mode) {
    document.documentElement.dataset.appliedMode = mode;
}

document.addEventListener('DOMContentLoaded', function() {
    const userPreference = getUserPreference();

    // Set the applied mode based on the user preference
    setAppliedMode(userPreference);

    // Ensure the preference is saved
    saveUserPreference(userPreference);
});