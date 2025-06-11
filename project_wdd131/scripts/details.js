document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const showTitle = params.get('title');

    if (!showTitle) {
        console.error('No show title found in URL parameters.');
        document.getElementById('pageTitle').textContent = 'Error';
        document.querySelector('.show-detail-page').innerHTML = '<h1>Show Not Found</h1><p>The requested show could not be found. Please return to the previous page.</p>';
        return;
    }

    // Decode the title from the URL (e.g., "Breaking%20Bad" becomes "Breaking Bad")
    const decodedTitle = decodeURIComponent(showTitle);

    // Find the show in the allShows array from watch.js
    // Ensure allShows is globally accessible or loaded before this script
    const show = allShows.find(s => s.title === decodedTitle);

    if (show) {
        document.getElementById('pageTitle').textContent = show.title;

        // Set Hero Section Backdrop from heroSlides if available
        const heroSlide = heroSlides.find(slide => slide.backdrop.includes(show.title.toLowerCase().replace(/\s/g, '')));
        const heroBackdropElement = document.getElementById('showHero');
        if (heroBackdropElement && heroSlide) {
            heroBackdropElement.style.backgroundImage = `url('${heroSlide.backdrop}')`;
            heroBackdropElement.style.backgroundSize = 'cover';
            heroBackdropElement.style.backgroundPosition = 'center';
            heroBackdropElement.style.backgroundRepeat = 'no-repeat';
        } else if (heroBackdropElement) {
            // Fallback: Use poster if no specific backdrop in heroSlides
            heroBackdropElement.style.backgroundImage = `url('images/posters/${show.poster}')`;
            heroBackdropElement.style.backgroundSize = 'cover';
            heroBackdropElement.style.backgroundPosition = 'center';
            heroBackdropElement.style.backgroundRepeat = 'no-repeat';
        }

        // Populate Show Details
        document.getElementById('showPoster').src = `images/posters/${show.poster}`;
        document.getElementById('showTitle').textContent = show.title;
        document.getElementById('showDescription').textContent = show.synopsis;

        const metaData = document.getElementById('showMetaData');
        metaData.innerHTML = `
            <span>IMDb: ${show.imdb}</span> |
            <span>${show.releaseDate.match(/\d{4}/)?.[0] || 'N/A'}</span> |
            <span>${show.seasons === '1 (Film)' ? 'Film' : `${show.seasons} Seasons`}</span> |
            <span>${show.genre}</span>
        `;

        // Network Logo
        const networkLogoElement = document.getElementById('networkLogo');
        if (show.networkLogo) {
            networkLogoElement.src = `images/icons&logos/${show.networkLogo}`;
            networkLogoElement.alt = `${show.networkText} Logo`;
        } else {
            networkLogoElement.style.display = 'none'; // Hide if no logo path
        }

        // Action Icons Functionality (Placeholder Alerts)
        document.getElementById('addToPlaylistIcon').addEventListener('click', () => {
            alert(`"${show.title}" added to playlist! (Functionality to be implemented)`);
        });
        document.getElementById('bookmarkIcon').addEventListener('click', () => {
            alert(`"${show.title}" bookmarked! (Functionality to be implemented)`);
        });
        document.getElementById('markFavoriteIcon').addEventListener('click', () => {
            alert(`"${show.title}" marked as favorite! (Functionality to be implemented)`);
        });

        // Cast Section (First 5 members)
        const castThumbnailsContainer = document.getElementById('castThumbnails');
        if (show.cast) {
            const castArray = show.cast.split(',').map(c => c.trim());
            const displayCast = castArray.slice(0, 5); // Get first 5
            castThumbnailsContainer.innerHTML = ''; // Clear any existing content

            displayCast.forEach(actor => {
                const actorNameClean = actor.replace(/\s/g, ''); // For image filename consistency
                const castItem = document.createElement('div');
                castItem.classList.add('cast-item');
                castItem.innerHTML = `
                    <img src="images/casts/${actorNameClean}.webp" alt="${actor}" onerror="this.onerror=null;this.src='images/placeholder.webp';">
                    <p>${actor}</p>
                `;
                castThumbnailsContainer.appendChild(castItem);
            });

            // "View All Cast Info" button
            document.getElementById('viewAllCastsBtn').addEventListener('click', () => {
                // Pass the show title to the castbio page
                window.location.href = `castbio.html?show=${encodeURIComponent(show.title)}`;
            });
        } else {
            castThumbnailsContainer.innerHTML = '<p>No cast information available.</p>';
            document.getElementById('viewAllCastsBtn').style.display = 'none';
        }

    } else {
        document.getElementById('pageTitle').textContent = 'Show Not Found';
        document.querySelector('.show-detail-page').innerHTML = `<h1>Show "${decodedTitle}" Not Found</h1><p>The show you are looking for could not be found in our database.</p>`;
    }
});