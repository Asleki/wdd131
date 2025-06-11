// js/details.js
// This script handles the dynamic content for the show details page.
// It assumes allShows, showAwards, and castDetails are globally available.

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const showTitle = params.get('title');

    if (!showTitle) {
        console.error('No show title found in URL parameters.');
        document.getElementById('pageTitle').textContent = 'Error';
        document.querySelector('.show-detail-page').innerHTML = '<h1 style="text-align:center; margin-top:50px;">Show Not Found</h1><p style="text-align:center;">The requested show could not be found. Please return to the previous page.</p>';
        return;
    }

    // Decode the title from the URL (e.g., "Breaking%20Bad" becomes "Breaking Bad")
    const decodedTitle = decodeURIComponent(showTitle);

    // Find the show in the globally available allShows array
    // Ensure allShows is accessible (should be if app_core.js is loaded first)
    const show = typeof allShows !== 'undefined' ? allShows.find(s => s.title === decodedTitle) : null;

    if (show) {
        document.getElementById('pageTitle').textContent = show.title;

        // Set Hero Section Backdrop
        const heroBackdropElement = document.getElementById('showHero');
        // Prefer a specific backdrop from heroSlides if title matches, otherwise use poster
        // Ensure heroSlides is accessible (should be if app_core.js is loaded first)
        const heroSlide = typeof heroSlides !== 'undefined' ? heroSlides.find(slide => slide.backdrop.includes(show.title.toLowerCase().replace(/\s/g, ''))) : null;

        if (heroBackdropElement) {
            const backgroundImageUrl = heroSlide ? heroSlide.backdrop : `images/posters/${show.poster}`;
            heroBackdropElement.style.backgroundImage = `url('${backgroundImageUrl}')`;
            heroBackdropElement.style.backgroundSize = 'cover';
            heroBackdropElement.style.backgroundPosition = 'center';
            heroBackdropElement.style.backgroundRepeat = 'no-repeat';
        }

        // Populate Show Details
        document.getElementById('showPoster').src = `images/posters/${show.poster}`;
        document.getElementById('showTitle').textContent = show.title;

        // Synopsis and Read More/Less
        const synopsisElement = document.getElementById('showDescription');
        const synopsisControlsContainer = document.querySelector('.synopsis-controls-container');
        const synopsisLengthLimit = 150; // Character limit for truncated synopsis

        synopsisElement.textContent = show.synopsis; // Set full text initially
        if (show.synopsis && show.synopsis.length > synopsisLengthLimit) {
            synopsisElement.textContent = show.synopsis.substring(0, synopsisLengthLimit) + '...';
            synopsisElement.classList.add('truncated');

            // Create Read More/Less buttons
            const readMoreBtn = document.createElement('button');
            readMoreBtn.classList.add('synopsis-btn', 'read-more-btn');
            readMoreBtn.innerHTML = `Read More <i class="fas fa-chevron-down"></i>`;

            const readLessBtn = document.createElement('button');
            readLessBtn.classList.add('synopsis-btn', 'read-less-btn');
            readLessBtn.innerHTML = `Read Less <i class="fas fa-chevron-up"></i>`;
            readLessBtn.style.display = 'none'; // Initially hidden

            synopsisControlsContainer.innerHTML = ''; // Clear previous
            synopsisControlsContainer.appendChild(readMoreBtn);
            synopsisControlsContainer.appendChild(readLessBtn);

            readMoreBtn.addEventListener('click', () => {
                synopsisElement.textContent = show.synopsis;
                synopsisElement.classList.remove('truncated');
                synopsisElement.classList.add('expanded'); // For CSS transition
                readMoreBtn.style.display = 'none';
                readLessBtn.style.display = 'inline-flex';
            });

            readLessBtn.addEventListener('click', () => {
                synopsisElement.textContent = show.synopsis.substring(0, synopsisLengthLimit) + '...';
                synopsisElement.classList.remove('expanded'); // For CSS transition
                synopsisElement.classList.add('truncated');
                readMoreBtn.style.display = 'inline-flex';
                readLessBtn.style.display = 'none';
            });

        } else {
            synopsisControlsContainer.innerHTML = ''; // No controls needed if short
            synopsisElement.classList.remove('truncated');
            synopsisElement.classList.remove('expanded');
        }


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
            networkLogoElement.style.display = 'inline-block'; // Ensure it's visible
        } else {
            networkLogoElement.style.display = 'none'; // Hide if no logo path
        }

        // Action Icons Functionality (Placeholder Alerts)
        // Using the global showMessageBox function from app_core.js
        document.querySelector('.watch-trailer-btn').addEventListener('click', () => {
            if (typeof showMessageBox !== 'undefined') {
                showMessageBox(`Watching trailer for "${show.title}"! (Functionality to be implemented)`);
            } else {
                alert(`Watching trailer for "${show.title}"! (Functionality to be implemented)`);
            }
        });
        document.getElementById('addToPlaylistIcon').addEventListener('click', () => {
            if (typeof showMessageBox !== 'undefined') {
                showMessageBox(`"${show.title}" added to playlist! (Functionality to be implemented)`);
            } else {
                alert(`"${show.title}" added to playlist! (Functionality to be implemented)`);
            }
        });
        document.getElementById('bookmarkIcon').addEventListener('click', () => {
            if (typeof showMessageBox !== 'undefined') {
                showMessageBox(`"${show.title}" bookmarked! (Functionality to be implemented)`);
            } else {
                alert(`"${show.title}" bookmarked! (Functionality to be implemented)`);
            }
        });
        document.getElementById('markFavoriteIcon').addEventListener('click', () => {
            if (typeof showMessageBox !== 'undefined') {
                showMessageBox(`"${show.title}" marked as favorite! (Functionality to be implemented)`);
            } else {
                alert(`"${show.title}" marked as favorite! (Functionality to be implemented)`);
            }
        });

        // Awards Section (Now uses showAwards from awards_data.js)
        const awardsList = document.getElementById('awardsList');
        // Ensure showAwards is accessible (should be if awards_data.js is loaded first)
        const awards = typeof showAwards !== 'undefined' && showAwards[show.title] ? showAwards[show.title] : [];

        if (awards.length > 0) {
            awardsList.innerHTML = `<ul>${awards.map(award => `<li>${award}</li>`).join('')}</ul>`;
        } else {
            awardsList.innerHTML = `<p>No awards information available for this show. Please check back later!</p>`;
        }

        // Cast Section (First 5 members using castDetails from cast_details_data.js)
        const castThumbnailsContainer = document.getElementById('castThumbnails');
        if (show.cast && typeof castDetails !== 'undefined' && castDetails[show.title]) {
            const castArray = show.cast.split(',').map(c => c.trim()).filter(c => c !== ""); // Filter out empty strings
            const displayCast = castArray.slice(0, 5); // Get first 5 for display
            castThumbnailsContainer.innerHTML = ''; // Clear any existing content

            if (displayCast.length > 0) {
                displayCast.forEach(actorName => {
                    const actorInfo = castDetails[show.title].find(castMember => castMember.name === actorName);
                    // Use a clean version of actor name for image path, or a generic placeholder
                    const actorNameForImage = actorInfo ? actorInfo.name.replace(/\s/g, '') : actorName.replace(/\s/g, '');

                    const castItem = document.createElement('div');
                    castItem.classList.add('cast-item');
                    castItem.innerHTML = `
                        <img src="images/casts/${actorNameForImage}.webp" alt="${actorName}" onerror="this.onerror=null;this.src='https://placehold.co/80x80/cccccc/000000?text=No+Pic';">
                        <p>${actorName}</p>
                    `;
                    castThumbnailsContainer.appendChild(castItem);
                });
            } else {
                castThumbnailsContainer.innerHTML = '<p style="text-align: center; color: #ccc;">No cast members to display.</p>';
                document.getElementById('viewAllCastsBtn').style.display = 'none';
            }


            // "View All Cast Info" button
            const viewAllCastsBtn = document.getElementById('viewAllCastsBtn');
            if (castArray.length > 5) { // Only show button if there are more than 5 casts
                viewAllCastsBtn.style.display = 'block';
                viewAllCastsBtn.addEventListener('click', () => {
                    // Pass the show title to the castbio page
                    window.location.href = `castbio.html?show=${encodeURIComponent(show.title)}`;
                });
            } else {
                viewAllCastsBtn.style.display = 'none'; // Hide if all casts are already displayed or less than 5
            }

        } else {
            castThumbnailsContainer.innerHTML = '<p style="text-align: center; color: #ccc;">No cast information available.</p>';
            document.getElementById('viewAllCastsBtn').style.display = 'none';
        }

    } else {
        document.getElementById('pageTitle').textContent = 'Show Not Found';
        document.querySelector('.show-detail-page').innerHTML = `<h1 style="text-align:center; margin-top:50px;">Show "${decodedTitle}" Not Found</h1><p style="text-align:center;">The show you are looking for could not be found in our database.</p>`;
    }
});