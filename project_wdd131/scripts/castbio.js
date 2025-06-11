// js/castbio.js
// This script dynamically populates the cast details page for a specific show.
// It assumes allShows and castDetails are globally available from app_core.js and cast_details_data.js.

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const showTitle = params.get('show');

    if (!showTitle) {
        console.error('No show title found for cast page.');
        document.getElementById('castPageTitle').textContent = 'Error';
        document.querySelector('.show-container').innerHTML = '<h1 style="text-align:center; margin-top:50px;">Cast Details Not Found</h1><p style="text-align:center;">The cast information for the requested show could not be found.</p>';
        return;
    }

    const decodedShowTitle = decodeURIComponent(showTitle);
    // Ensure allShows is accessible
    const show = typeof allShows !== 'undefined' ? allShows.find(s => s.title === decodedShowTitle) : null;

    if (show) {
        document.getElementById('castPageTitle').textContent = `Cast of ${show.title}`;
        document.getElementById('dynamicShowTitle').textContent = `Cast of ${show.title}`;
        const castListContainer = document.getElementById('dynamicCastList');
        castListContainer.innerHTML = ''; // Clear existing static content

        // Ensure castDetails is accessible and has data for the current show
        if (typeof castDetails !== 'undefined' && castDetails[show.title]) {
            const showSpecificCast = castDetails[show.title];

            if (showSpecificCast.length > 0) {
                showSpecificCast.forEach(actorInfo => {
                    // Clean actor name for image path (e.g., "Úrsula Corberó" becomes "ÚrsulaCorberó")
                    const actorNameCleanForImage = actorInfo.name.replace(/\s/g, '');

                    const castItem = document.createElement('li');
                    castItem.classList.add('cast-item');
                    castItem.innerHTML = `
                        <div class="cast-details">
                            <div class="image-column">
                                <img src="images/casts/${actorNameCleanForImage}.webp" alt="${actorInfo.name}" onerror="this.onerror=null;this.src='https://placehold.co/120x120/cccccc/000000?text=No+Pic';">
                            </div>
                            <div class="text-details">
                                <div class="cast-name">${actorInfo.name}</div>
                                <div class="cast-role"><strong>Role:</strong> ${actorInfo.role}</div>
                                ${actorInfo.info ? `<div class="cast-info"><strong>Info:</strong> ${actorInfo.info}</div>` : ''}
                                <div class="cast-bio"><strong>Biography:</strong> ${actorInfo.bio}</div>
                                ${actorInfo.quotes && actorInfo.quotes.length > 0 ?
                                    `<div class="cast-quotes"><strong>Quotes:</strong><ul>${actorInfo.quotes.map(q => `<li>"${q}"</li>`).join('')}</ul></div>` : ''
                                }
                            </div>
                        </div>
                    `;
                    castListContainer.appendChild(castItem);
                });
            } else {
                castListContainer.innerHTML = '<p style="text-align: center; color: #ccc;">No detailed cast information available for this show.</p>';
            }
        } else {
            castListContainer.innerHTML = '<p style="text-align: center; color: #ccc;">No cast information available for this show.</p>';
        }
    } else {
        document.getElementById('castPageTitle').textContent = 'Show Not Found';
        document.querySelector('.show-container').innerHTML = `<h1 style="text-align:center; margin-top:50px;">Show "${decodedShowTitle}" Not Found</h1><p style="text-align:center;">Cast information for this show could not be retrieved.</p>`;
    }
});