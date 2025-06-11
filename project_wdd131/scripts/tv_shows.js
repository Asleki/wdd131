// js/tv_shows.js
// This script dynamically populates the TV Shows list page.
// It relies on 'allShows', 'createShowCardHTML', and 'addSynopsisToggleListeners' from app_core.js.

document.addEventListener('DOMContentLoaded', () => {
    const tvShowsListContainer = document.getElementById('tvShowsList');

    // Ensure allShows is globally available from app_core.js
    if (typeof allShows === 'undefined') {
        console.error("allShows data is not available. Please ensure app_core.js is loaded before tv_shows.js.");
        if (tvShowsListContainer) {
            tvShowsListContainer.innerHTML = '<p class="no-shows-message">Error: Could not load TV shows data.</p>';
        }
        return; // Exit if essential data is missing
    }

    // Filter for TV shows: A show is considered a TV show if its 'seasons' property is not "1 (Film)"
    // and if it's not explicitly an "N/A (Film)" for seasons, implying it's a series (even if coming soon).
    const tvShows = allShows.filter(show =>
        show.seasons !== "1 (Film)" && !(show.seasons === "N/A" && show.episodes === "N/A") // Exclude explicit films, and potential films marked as N/A seasons/episodes
    );


    if (tvShowsListContainer) {
        tvShowsListContainer.innerHTML = ''; // Clear loading message

        if (tvShows.length > 0) {
            tvShows.forEach(show => {
                // Ensure createShowCardHTML is accessible (from app_core.js)
                if (typeof createShowCardHTML === 'function') {
                    const showCardHTML = createShowCardHTML(show);
                    const tempDiv = document.createElement('div');
                    tempDiv.innerHTML = showCardHTML;
                    const showCardElement = tempDiv.firstElementChild; // Get the actual div element

                    // Add a click listener to the entire show card to navigate to details.html
                    // This listener should exclude clicks on the "Read More/Less" buttons.
                    showCardElement.addEventListener('click', (event) => {
                        // Check if the click target is NOT a part of the synopsis toggle buttons
                        if (!event.target.closest('.read-more-btn') && !event.target.closest('.read-less-btn')) {
                            window.location.href = `details.html?title=${encodeURIComponent(show.title)}`;
                        }
                    });

                    tvShowsListContainer.appendChild(showCardElement);
                } else {
                    console.error("createShowCardHTML function is not available. Ensure app_core.js is loaded correctly.");
                    tvShowsListContainer.innerHTML = '<p class="no-shows-message">Error: Display function missing.</p>';
                    return; // Stop processing if essential function is missing
                }
            });

            // After all cards are added, attach synopsis toggle listeners to the container
            // Ensure addSynopsisToggleListeners is accessible (from app_core.js)
            if (typeof addSynopsisToggleListeners === 'function') {
                addSynopsisToggleListeners(tvShowsListContainer);
            } else {
                console.warn("addSynopsisToggleListeners function is not available. Synopsis toggling will not work.");
            }

        } else {
            tvShowsListContainer.innerHTML = '<p class="no-shows-message">No TV shows found at this time.</p>';
        }
    } else {
        console.error('Element with ID "tvShowsList" not found. Cannot render TV shows.');
    }
});