// js/movies.js
// This script dynamically populates the Movies list page.
// It relies on 'allShows', 'createShowCardHTML', and 'addSynopsisToggleListeners' from app_core.js.

document.addEventListener('DOMContentLoaded', () => {
    const moviesListContainer = document.getElementById('moviesList');

    // Ensure allShows is globally available from app_core.js
    if (typeof allShows === 'undefined') {
        console.error("allShows data is not available. Please ensure app_core.js is loaded before movies.js.");
        if (moviesListContainer) {
            moviesListContainer.innerHTML = '<p class="no-shows-message">Error: Could not load movies data.</p>';
        }
        return; // Exit if essential data is missing
    }

    // Filter for Movies: A show is considered a movie if its 'seasons' property is explicitly "1 (Film)"
    // OR if both 'seasons' and 'episodes' are "N/A" (to catch entries like "Second Wife" that are likely films/specials)
    const movies = allShows.filter(show =>
        show.seasons === "1 (Film)" || (show.seasons === "N/A" && show.episodes === "N/A")
    );

    if (moviesListContainer) {
        moviesListContainer.innerHTML = ''; // Clear loading message

        if (movies.length > 0) {
            movies.forEach(movie => {
                // Ensure createShowCardHTML is accessible (from app_core.js)
                if (typeof createShowCardHTML === 'function') {
                    const movieCardHTML = createShowCardHTML(movie);
                    const tempDiv = document.createElement('div');
                    tempDiv.innerHTML = movieCardHTML;
                    const movieCardElement = tempDiv.firstElementChild; // Get the actual div element

                    // Add a click listener to the entire movie card to navigate to details.html
                    // This listener should exclude clicks on the "Read More/Less" buttons.
                    movieCardElement.addEventListener('click', (event) => {
                        // Check if the click target is NOT a part of the synopsis toggle buttons
                        if (!event.target.closest('.read-more-btn') && !event.target.closest('.read-less-btn')) {
                            window.location.href = `details.html?title=${encodeURIComponent(movie.title)}`;
                        }
                    });

                    moviesListContainer.appendChild(movieCardElement);
                } else {
                    console.error("createShowCardHTML function is not available. Ensure app_core.js is loaded correctly.");
                    moviesListContainer.innerHTML = '<p class="no-shows-message">Error: Display function missing.</p>';
                    return; // Stop processing if essential function is missing
                }
            });

            // After all cards are added, attach synopsis toggle listeners to the container
            // Ensure addSynopsisToggleListeners is accessible (from app_core.js)
            if (typeof addSynopsisToggleListeners === 'function') {
                addSynopsisToggleListeners(moviesListContainer);
            } else {
                console.warn("addSynopsisToggleListeners function is not available. Synopsis toggling will not work.");
            }

        } else {
            moviesListContainer.innerHTML = '<p class="no-shows-message">No movies found at this time.</p>';
        }
    } else {
        console.error('Element with ID "moviesList" not found. Cannot render movies.');
    }
});