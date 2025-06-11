document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const showTitle = params.get('show');

    if (!showTitle) {
        console.error('No show title found for cast page.');
        document.getElementById('castPageTitle').textContent = 'Error';
        document.querySelector('.show-container').innerHTML = '<h1>Cast Details Not Found</h1><p>The cast information for the requested show could not be found.</p>';
        return;
    }

    const decodedShowTitle = decodeURIComponent(showTitle);
    const show = allShows.find(s => s.title === decodedShowTitle);

    if (show) {
        document.getElementById('castPageTitle').textContent = `Cast of ${show.title}`;
        document.getElementById('dynamicShowTitle').textContent = `Cast of ${show.title}`;
        const castListContainer = document.getElementById('dynamicCastList');
        castListContainer.innerHTML = ''; // Clear existing static content

        if (show.cast && show.cast.length > 0) {
            const castArray = show.cast.split(',').map(c => c.trim());

            castArray.forEach(actorName => {
                const actorNameClean = actorName.replace(/\s/g, ''); // For image filename consistency
                const castItem = document.createElement('li');
                castItem.classList.add('cast-item');
                // Note: You would ideally have more detailed actor objects in watch.js
                // or another data source if you want full bios/roles here.
                castItem.innerHTML = `
                    <div class="cast-details">
                        <div class="cast-name">${actorName}</div>
                        </div>
                    <div class="image-column">
                        <img src="images/casts/${actorNameClean}.webp" alt="${actorName}" onerror="this.onerror=null;this.src='images/placeholder.webp';">
                    </div>
                `;
                castListContainer.appendChild(castItem);
            });
        } else {
            castListContainer.innerHTML = '<p>No detailed cast information available for this show.</p>';
        }
    } else {
        document.getElementById('castPageTitle').textContent = 'Show Not Found';
        document.querySelector('.show-container').innerHTML = `<h1>Show "${decodedShowTitle}" Not Found</h1><p>Cast information for this show could not be retrieved.</p>`;
    }
});