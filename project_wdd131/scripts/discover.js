// scripts/discover.js
// This script contains the main logic for the discover.html homepage.
// It relies on allShows, heroSlides, updateHeroSection, renderAllCategories,
// and showMessageBox being globally available from scripts/app_core.js.

document.addEventListener("DOMContentLoaded", () => {
    // Ensure essential global data/functions are available
    if (typeof allShows === 'undefined' || typeof heroSlides === 'undefined' ||
        typeof updateHeroSection === 'undefined' || typeof renderAllCategories === 'undefined' ||
        typeof showMessageBox === 'undefined') {
        console.error("Critical app_core.js data/functions are missing. Ensure scripts/app_core.js is loaded first.");
        return; // Exit if core dependencies are not met
    }

    // Assign hero section elements to global variables (defined in app_core.js)
    // These need to be assigned here because these elements are in discover.html.
    heroSection = document.getElementById('heroSection');
    heroQuoteElement = document.querySelector('.hero-quote');
    heroPosterElement = document.querySelector('.hero-poster');

    // Initial update and set interval for hero section slides
    if (heroSection && heroQuoteElement && heroPosterElement) {
        updateHeroSection(); // Initial load
        setInterval(updateHeroSection, 5000); // Change slide every 5 seconds
    } else {
        console.warn("Hero section elements not found on discover.html. Hero functionality will not work.");
    }

    // Call the main rendering function for categories when the DOM is fully loaded
    renderAllCategories();

    // --- Dark Mode Initialization ---
    // This is now primarily handled by standalone_header.js, but we ensure the body class is set on load.
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }

    // --- Removed original watch.js header action button logic ---
    // The previous logic for addShowIcon, accountIcon, searchIconBtn, and darkModeToggle
    // is now handled by the standalone_header.js, which is loaded above this script.
    // This script should only contain logic specific to the main content of discover.html.
});