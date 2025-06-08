document.addEventListener('DOMContentLoaded', () => {
    // Last Modified date for the footer
    const lastModifiedElement = document.getElementById('last-modified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = document.lastModified;
    }

    // Mode Toggle logic
    const modeToggle = document.getElementById('modeToggle');
    const lightIcon = document.getElementById('light-icon');
    const darkIcon = document.getElementById('dark-icon');

    if (modeToggle) {
        modeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            lightIcon.classList.toggle('active');
            darkIcon.classList.toggle('active');

            // Optional: Save user preference to localStorage
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });

        // Optional: Apply saved theme on page load
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
            lightIcon.classList.remove('active');
            darkIcon.classList.add('active');
        } else {
            document.body.classList.remove('dark-mode');
            lightIcon.classList.add('active');
            darkIcon.classList.remove('active');
        }
    }
});