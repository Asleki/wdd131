document.addEventListener('DOMContentLoaded', () => {
    const modeToggle = document.getElementById('modeToggle');
    const lightIcon = document.getElementById('light-icon');
    const darkIcon = document.getElementById('dark-icon');

    // Function to set theme
    const setTheme = (isDarkMode) => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            lightIcon.classList.remove('active');
            darkIcon.classList.add('active');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            lightIcon.classList.add('active');
            darkIcon.classList.remove('active');
            localStorage.setItem('theme', 'light');
        }
    };

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        setTheme(true);
    } else {
        setTheme(false); // Default to light if no preference or 'light'
    }

    // Toggle theme on button click
    if (modeToggle) {
        modeToggle.addEventListener('click', () => {
            const isDarkMode = document.body.classList.contains('dark-mode');
            setTheme(!isDarkMode);
        });
    }
});