document.addEventListener('DOMContentLoaded', () => {
    // --- Dark Mode Toggle ---
    const darkModeIcon = document.getElementById('darkModeIcon');
    const lightModeIcon = document.getElementById('lightModeIcon');
    const body = document.body;

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark-mode') {
        body.classList.add('dark-mode');
        darkModeIcon.classList.remove('active');
        lightModeIcon.classList.add('active');
    } else {
        // Default to light mode if no preference or 'light-mode' is saved
        body.classList.remove('dark-mode');
        darkModeIcon.classList.add('active');
        lightModeIcon.classList.remove('active');
    }

    // Toggle theme on icon click
    darkModeIcon.addEventListener('click', () => {
        body.classList.add('dark-mode');
        darkModeIcon.classList.remove('active');
        lightModeIcon.classList.add('active');
        localStorage.setItem('theme', 'dark-mode');
    });

    lightModeIcon.addEventListener('click', () => {
        body.classList.remove('dark-mode');
        darkModeIcon.classList.add('active');
        lightModeIcon.classList.remove('active');
        localStorage.setItem('theme', 'light-mode');
    });

    // --- Last Modified Date for Footer ---
    const lastModifiedElement = document.getElementById('last-modified');
    if (lastModifiedElement) {
        // Get the last modified date of the current document
        const lastModDate = new Date(document.lastModified);

        // Format the date as 'YYYY-MM-DD'
        const year = lastModDate.getFullYear();
        const month = String(lastModDate.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
        const day = String(lastModDate.getDate()).padStart(2, '0');

        lastModifiedElement.textContent = `${year}-${month}-${day}`;
    }

    // --- Custom Alert for "Add Show" ---
    const addShowIcon = document.getElementById('addShowIcon');
    const customAlert = document.getElementById('customAlert');
    const alertMessage = document.getElementById('alertMessage');
    const closeAlertBtn = document.getElementById('closeAlert');

    // IMPORTANT: In a real application, this `isLoggedIn` variable
    // would be determined by checking session storage, a cookie, or
    // calling an API endpoint to verify user authentication status.
    // For this example, we'll just set it to false.
    let isLoggedIn = false; // Assume user is NOT logged in initially for demonstration

    addShowIcon.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior

        if (!isLoggedIn) {
            alertMessage.textContent = "Please log in to add a show to your playlist!";
            customAlert.classList.add('show');
        } else {
            // If logged in, proceed with adding the show (e.g., navigate to add show page)
            alert("Proceeding to add show feature!"); // Replace with actual functionality
            // window.location.href = "add-show-page.html";
        }
    });

    closeAlertBtn.addEventListener('click', () => {
        customAlert.classList.remove('show');
    });

    // Optional: Close alert if user clicks outside of it
    customAlert.addEventListener('click', (event) => {
        if (event.target === customAlert) {
            customAlert.classList.remove('show');
        }
    });

    // You can add more JavaScript functionality here for other header/footer elements as needed.
});