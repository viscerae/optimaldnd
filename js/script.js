function getUserPreference() {
    return localStorage.getItem("theme") || "system";
}

function saveUserPreference(userPreference) {
    localStorage.setItem("theme", userPreference);
}

function getAppliedMode(userPreference) {
    if (userPreference === "light") {
        return "light";
    }
    if (userPreference === "dark") {
        return "dark";
    }
    // system
    if (matchMedia("(prefers-color-scheme: light)").matches) {
        return "light";
    }
    return "dark";
}

function setAppliedMode(mode) {
    document.documentElement.dataset.appliedMode = mode;
}

document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('darkModeToggle');
    let userPreference = getUserPreference();

    setAppliedMode(getAppliedMode(userPreference));

    if (userPreference === "dark") {
        toggle.checked = true;
    }

    toggle.addEventListener('change', function() {
        const newUserPref = toggle.checked ? "dark" : "light";
        userPreference = newUserPref;
        saveUserPreference(newUserPref);
        setAppliedMode(getAppliedMode(newUserPref));
    });
});
