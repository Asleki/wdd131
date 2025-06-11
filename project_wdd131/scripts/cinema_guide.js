// scripts/cinema_guide.js
// Handles dynamic loading and filtering of cinema listings, hero section, and marquee text.
// Relies on allShows (from app_core.js) and showMessageBox (from app_core.js).

document.addEventListener("DOMContentLoaded", () => {
    // Crucial check: Ensure global dependencies are loaded
    if (typeof allShows === 'undefined') {
        console.error("Error: allShows data is not available. Ensure scripts/app_core.js is loaded before scripts/cinema_guide.js.");
        return;
    }
    if (typeof showMessageBox === 'undefined') {
        console.error("Error: showMessageBox function is not available. Ensure scripts/app_core.js is loaded before scripts/cinema_guide.js.");
        return;
    }

    const citySelect = document.getElementById('citySelect');
    const dateSelect = document.getElementById('dateSelect');
    const cinemaListingsContainer = document.getElementById('cinemaListings');
    const loadingSpinner = document.getElementById('loadingSpinner');
    const cinemaHeroSection = document.getElementById('cinemaHeroSection');
    const screeningTitlesMarquee = document.getElementById('screeningTitlesMarquee');

    // Hero Background Images (using your provided images assumed to be in 'images/cinema/' folder)
    const cinemaHeroImages = [
        'images/cinema/IMAX.webp',
        'images/cinema/IMAX2.webp'
    ];
    let currentHeroImageIndex = 0;

    // Function to update the cinema hero section background
    function updateCinemaHeroBackground() {
        if (!cinemaHeroSection || cinemaHeroImages.length === 0) {
            console.warn("Cinema hero section or images not found. Skipping hero update.");
            return;
        }
        cinemaHeroSection.style.backgroundImage = `url('${cinemaHeroImages[currentHeroImageIndex]}')`;
        currentHeroImageIndex = (currentHeroImageIndex + 1) % cinemaHeroImages.length;
    }

    // Populate Marquee Text with Titles of Screening Shows
    function populateScreeningTitlesMarquee() {
        if (!screeningTitlesMarquee) {
            console.warn("Screening titles marquee element not found.");
            return;
        }
        // Collect all unique movie titles that are present in our mock cinema data's showtimes
        const screeningMovies = [...new Set(mockCinemaData.flatMap(cinema =>
            cinema.showtimes.map(st => st.showDetails.title)
        ))];
        
        if (screeningMovies.length > 0) {
            screeningTitlesMarquee.textContent = screeningMovies.join('  •  '); // Use a clear separator
        } else {
            screeningTitlesMarquee.textContent = "No movies currently screening.";
        }
    }


    // --- Mock Cinema Data (Generated dynamically using allShows for movie details) ---
    // Function to get a random subset of shows from allShows
    function getRandomShows(count) {
        // Ensure we don't try to get more shows than available
        if (count > allShows.length) {
            console.warn(`Requested ${count} random shows, but only ${allShows.length} are available. Returning all available shows.`);
            return [...allShows]; // Return a copy of all available shows
        }
        const shuffled = [...allShows].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    // Define the base cinema structures including all specified cities
    const mockCinemaData = [
        { id: 'anga-diamond-nairobi', name: 'Anga Diamond Plaza 2', location: 'Parklands, Nairobi', city: 'Nairobi', showtimes: [] },
        { id: 'imax-two-rivers-nairobi', name: 'IMAX Two Rivers', location: 'Ruaka, Nairobi', city: 'Nairobi', showtimes: [] },
        { id: 'century-cinemax-nairobi', name: 'Century Cinemax, Garden City', location: 'Thika Road, Nairobi', city: 'Nairobi', showtimes: [] },
        { id: 'nyali-cinemax-mombasa', name: 'Nyali Cinemax, Mombasa', location: 'Nyali, Mombasa', city: 'Mombasa', showtimes: [] },
        { id: 'city-mall-mombasa', name: 'City Mall Cinema, Mombasa', location: 'Malindi Road, Mombasa', city: 'Mombasa', showtimes: [] },
        { id: 'mega-cinema-kisumu', name: 'Mega Cinema, Kisumu', location: 'Oginga Odinga Street, Kisumu', city: 'Kisumu', showtimes: [] },
        { id: 'mega-city-kisumu', name: 'Mega City Cinema, Kisumu', location: 'Busia Road, Kisumu', city: 'Kisumu', showtimes: [] },
        { id: 'eldoret-movie-theatre', name: 'Eldoret Movie Theatre', location: 'Uganda Road, Eldoret', city: 'Eldoret', showtimes: [] },
        { id: 'rtt-cinema-eldoret', name: 'RTT Cinema, Eldoret', location: 'Oloo Street, Eldoret', city: 'Eldoret', showtimes: [] }
    ];

    // Populate showtimes for each cinema with 9 random shows from allShows
    mockCinemaData.forEach(cinema => {
        const showsForCinema = getRandomShows(9); // Each cinema gets 9 random shows
        showsForCinema.forEach(show => {
            // Generate 3-5 random showtimes
            const showtimes = [
                '10:00 AM', '12:30 PM', '03:00 PM', '05:30 PM', '08:00 PM', '10:30 PM'
            ].sort(() => 0.5 - Math.random()).slice(0, 3 + Math.floor(Math.random() * 3));

            // Determine availability for today, tomorrow, day after (randomly)
            const today = new Date();
            const tomorrow = new Date();
            tomorrow.setDate(today.getDate() + 1);
            const dayAfter = new Date();
            dayAfter.setDate(today.getDate() + 2);

            const formatDate = (date) => date.toISOString().split('T')[0];

            const datesAvailable = [formatDate(today)]; // Always available for today
            if (Math.random() > 0.4) datesAvailable.push(formatDate(tomorrow)); // 60% chance for tomorrow
            if (Math.random() > 0.7) datesAvailable.push(formatDate(dayAfter)); // 30% chance for day after

            cinema.showtimes.push({
                showDetails: show, // Reference the full show object from allShows
                times: showtimes,
                dates: datesAvailable
            });
        });
    });


    /**
     * Creates HTML for a single movie card within a cinema listing.
     * @param {object} movieShowtime - An object containing showDetails and times.
     * @param {string} cinemaName - The name of the cinema this movie is showing in.
     * @returns {string} The HTML string for the movie card.
     */
    function createMovieCardForCinemaHTML(movieShowtime, cinemaName) {
        const show = movieShowtime.showDetails;
        const posterPath = `images/posters/${show.poster}`;
        // Truncate synopsis for display on the card (consistent with CSS line-clamp)
        const synopsisTruncated = show.synopsis.length > 100 ? show.synopsis.substring(0, 100) + '...' : show.synopsis;
        const releaseYear = show.releaseDate.match(/\d{4}/)?.[0] || 'N/A'; // Extract year from releaseDate
        const type = (show.seasons && show.seasons.includes('Film')) || (show.episodes && show.episodes.includes('Film')) ? "Movie" : "Series";

        const showtimeButtonsHTML = movieShowtime.times.map(time =>
            `<button class="showtime-btn" data-movie-title="${show.title}" data-showtime="${time}" data-cinema-name="${cinemaName}">${time}</button>`
        ).join('');

        return `
            <div class="movie-card">
                <img src="${posterPath}" alt="${show.title} Poster" class="movie-card-poster">
                <h4>${show.title}</h4>
                <p class="type-imdb">${type} (${releaseYear}) | IMDb: ${show.imdb}</p>
                <p class="synopsis-text" data-full-synopsis="${show.synopsis}">${synopsisTruncated}</p>
                ${show.synopsis.length > 100 ? `
                <div class="synopsis-controls">
                    <button class="read-more-btn">
                        Read More <i class="fas fa-chevron-down"></i>
                    </button>
                    <button class="read-less-btn" style="display: none;">
                        Read Less <i class="fas fa-chevron-up"></i>
                    </button>
                </div>` : ''}
                <div class="showtime-buttons">
                    ${showtimeButtonsHTML}
                </div>
                <button class="buy-ticket-btn" data-movie-title="${show.title}" data-cinema-name="${cinemaName}">Buy Ticket</button>
            </div>
        `;
    }

    // Function to add "Read More/Less" event listeners for synopsis within a specific container
    function addSynopsisToggleListeners(container) {
        container.querySelectorAll('.movie-card .read-more-btn').forEach(button => {
            button.onclick = function(event) {
                event.stopPropagation(); // Prevent interaction from bubbling up to parent elements
                const synopsisText = this.closest('.movie-card').querySelector('.synopsis-text');
                if (synopsisText) {
                    synopsisText.classList.add('expanded');
                    synopsisText.textContent = synopsisText.dataset.fullSynoposis; // Show full text
                    this.style.display = 'none'; // Hide Read More button
                    const readLessBtn = this.nextElementSibling;
                    if (readLessBtn && readLessBtn.classList.contains('read-less-btn')) {
                        readLessBtn.style.display = 'inline-flex'; // Show Read Less button
                    }
                }
            };
        });

        container.querySelectorAll('.movie-card .read-less-btn').forEach(button => {
            button.onclick = function(event) {
                event.stopPropagation(); // Prevent interaction from bubbling up
                const synopsisText = this.closest('.movie-card').querySelector('.synopsis-text');
                if (synopsisText) {
                    synopsisText.classList.remove('expanded');
                    const synopsisLengthLimit = 100; // Consistent truncation limit for cinema guide cards
                    synopsisText.textContent = synopsisText.dataset.fullSynoposis.substring(0, synopsisLengthLimit) + (synopsisText.dataset.fullSynoposis.length > synopsisLengthLimit ? '...' : '');
                    this.style.display = 'none'; // Hide Read Less button
                    const readMoreBtn = this.previousElementSibling;
                    if (readMoreBtn && readMoreBtn.classList.contains('read-more-btn')) {
                        readMoreBtn.style.display = 'inline-flex'; // Show Read More button
                    }
                }
            };
        });
    }


    /**
     * Renders cinema listings based on filtered data.
     * Displays a loading spinner for 5 seconds before content.
     * @param {Array} cinemasToRender - Array of cinema objects to display.
     */
    function renderCinemaListings(cinemasToRender) {
        cinemaListingsContainer.innerHTML = ''; // Clear previous content
        loadingSpinner.classList.remove('hidden'); // Ensure loading spinner is visible
        
        // Re-append the spinner into the container so it's always the first element when visible
        cinemaListingsContainer.appendChild(loadingSpinner);

        setTimeout(() => { // Simulate loading time for 5 seconds as requested
            loadingSpinner.classList.add('hidden'); // Hide loading spinner after 5 seconds

            let contentFound = false;
            let tempHtml = ''; // Use a temporary string to build HTML efficiently

            cinemasToRender.forEach(cinema => {
                let moviesGridHTML = '';
                const selectedDate = dateSelect.value;

                // Filter movie showtimes for the selected date within this cinema
                const relevantShowtimes = cinema.showtimes.filter(movieST =>
                    movieST.dates.includes(selectedDate)
                );

                if (relevantShowtimes.length === 0) {
                    return; // Skip this entire cinema section if no showtimes for the selected date
                }

                relevantShowtimes.forEach(movieST => {
                    moviesGridHTML += createMovieCardForCinemaHTML(movieST, cinema.name); // Pass cinema name to card
                });

                if (moviesGridHTML) { // Only add cinema section if it actually has movies for the selected date
                    contentFound = true;
                    tempHtml += `
                        <div class="cinema-section">
                            <h3>${cinema.name}</h3>
                            <p class="cinema-location">${cinema.location}</p>
                            <div class="movies-grid">
                                ${moviesGridHTML}
                            </div>
                        </div>
                    `;
                }
            });

            // Set the innerHTML of the container once after the timeout
            if (contentFound) {
                cinemaListingsContainer.innerHTML = tempHtml;
            } else {
                cinemaListingsContainer.innerHTML = '<p class="no-shows-message">No cinema listings found for the selected criteria.</p>';
            }

            // Add event listeners for synopsis toggles and buy ticket/showtime buttons after rendering
            cinemaListingsContainer.querySelectorAll('.cinema-section').forEach(cinemaSection => {
                addSynopsisToggleListeners(cinemaSection); // Apply to current cinema section

                cinemaSection.querySelectorAll('.buy-ticket-btn').forEach(button => {
                    const movieTitle = button.dataset.movieTitle;
                    const cinemaName = button.dataset.cinemaName; // Retrieve cinema name from button's dataset
                    button.addEventListener('click', () => {
                        showMessageBox(`Booking for "${movieTitle}" at ${cinemaName} is coming soon!`, 'fas fa-ticket-alt');
                    });
                });

                 cinemaSection.querySelectorAll('.showtime-btn').forEach(button => {
                    const movieTitle = button.dataset.movieTitle;
                    const showtime = button.dataset.showtime;
                    const cinemaName = button.dataset.cinemaName; // Retrieve cinema name from button's dataset

                    button.addEventListener('click', () => {
                        showMessageBox(`You've selected ${showtime} for "${movieTitle}" at ${cinemaName}. You can now proceed to buy tickets!`, 'fas fa-info-circle');
                    });
                });
            });

        }, 5000); // 5 second loading delay as requested
    }

    /**
     * Filters the cinema data based on selected city and date.
     */
    function filterCinemas() {
        const selectedCity = citySelect.value;
        // The selectedDate is used inside renderCinemaListings for showtime filtering

        let filteredCinemas = mockCinemaData;

        if (selectedCity) {
            filteredCinemas = filteredCinemas.filter(cinema =>
                cinema.city === selectedCity
            );
        }
        
        renderCinemaListings(filteredCinemas);
    }

    // Set default date to today's date
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
    const day = String(today.getDate()).padStart(2, '0');
    dateSelect.value = `${year}-${month}-${day}`; // Set default date input value

    // Initial render on page load
    filterCinemas(); // Call filterCinemas to trigger initial render including loading spinner
    updateCinemaHeroBackground(); // Initial hero background
    populateScreeningTitlesMarquee(); // Initial marquee text content

    // Add event listeners to filter controls
    citySelect.addEventListener('change', filterCinemas);
    dateSelect.addEventListener('change', filterCinemas);

    // Set interval for hero background image change (7 seconds)
    setInterval(updateCinemaHeroBackground, 7000);
});