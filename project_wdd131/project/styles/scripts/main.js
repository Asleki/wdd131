// Product Array (provided in the instructions)
const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
];

// Function to populate the product dropdown
function populateProductDropdown() {
    const selectElement = document.getElementById('productName');
    if (!selectElement) return; // Exit if element not found (e.g., on review.html)

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id; // Use product.id for the value
        option.textContent = product.name; // Use product.name for display text
        selectElement.appendChild(option);
    });
}

// Function to update footer dates
function updateFooterDates() {
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    const lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = document.lastModified;
    }
}

// Function to handle the review counter on the review.html page
function handleReviewCounter() {
    let reviewCount = localStorage.getItem('reviewCount');

    // Convert to number, default to 0 if null/undefined
    reviewCount = reviewCount ? parseInt(reviewCount, 10) : 0;

    // Increment the counter
    reviewCount += 1;

    // Store the updated count back into localStorage
    localStorage.setItem('reviewCount', reviewCount);

    // Display the count on the confirmation page
    const counterElement = document.getElementById('reviewCounter');
    if (counterElement) {
        counterElement.textContent = reviewCount;
    }
}

// Event listener for DOMContentLoaded to run functions when the page is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get the current page filename
    const currentPage = window.location.pathname.split('/').pop();

    // Run specific functions based on the current page
    if (currentPage === 'form.html' || currentPage === '') { // '' handles cases where form.html is the root
        populateProductDropdown();
        updateFooterDates();
    } else if (currentPage === 'review.html') {
        handleReviewCounter();
        updateFooterDates(); // Also update footer on review page
    }
});