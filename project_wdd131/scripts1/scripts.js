document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Elements ---
    const movieSelect = document.getElementById('movieSelect');
    const showtimeSelect = document.getElementById('showtimeSelect');
    const numTicketsInput = document.getElementById('numTickets');
    const buyNowBtn = document.getElementById('buyNowBtn');
    const confirmationSection = document.getElementById('confirmationSection');
    const confirmedMovie = document.getElementById('confirmedMovie');
    const confirmedShowtime = document.getElementById('confirmedShowtime');
    const confirmedTickets = document.getElementById('confirmedTickets');

    // --- CINEMA_DATA (Provided by user) ---
    // This data structure defines all available screenings across different cinemas and halls.
    const CINEMA_DATA = {
        "nairobi": [
            {
                id: 'anga-diamond-plaza',
                name: "Anga Diamond Plaza",
                address: "Diamond Plaza, Highridge, Nairobi",
                halls: [
                    {
                        id: 'hall-1',
                        name: "Hall 1",
                        screenings: [
                            { movie: "Nairobi Half Life", showId: "nairobi-half-life", time: "10:00 AM", ticketsAvailable: 120, link: "buy-ticket.html" },
                            { movie: "Crime and Justice", showId: "crime-and-justice", time: "01:00 PM", ticketsAvailable: 90, link: "buy-ticket.html" }
                        ]
                    },
                    {
                        id: 'hall-2',
                        name: "Hall 2",
                        screenings: [
                            { movie: "40 Sticks", showId: "40-sticks", time: "03:00 PM", ticketsAvailable: 150, link: "buy-ticket.html" }
                        ]
                    }
                ]
            },
            {
                id: 'century-cinemax-garden-city',
                name: "Century Cinemax Garden City",
                address: "Garden City Mall, Thika Rd, Nairobi",
                halls: [
                    {
                        id: 'imax-hall',
                        name: "IMAX Hall",
                        screenings: [
                            { movie: "Inception", showId: "inception", time: "11:30 AM", ticketsAvailable: 200, link: "buy-ticket.html" },
                            { movie: "Extraction", showId: "extraction", time: "05:00 PM", ticketsAvailable: 180, link: "buy-ticket.html" }
                        ]
                    }
                ]
            }
        ],
        "new-york": [
            {
                id: 'amc-empire-25',
                name: "AMC Empire 25",
                address: "234 W 42nd St, New York, NY",
                halls: [
                    {
                        id: 'auditorium-1',
                        name: "Auditorium 1",
                        screenings: [
                            { movie: "Breaking Bad (Film)", showId: "breaking-bad", time: "10:00 AM", ticketsAvailable: 80, link: "buy-ticket.html" },
                            { movie: "Stranger Things", showId: "stranger-things", time: "01:00 PM", ticketsAvailable: 70, link: "buy-ticket.html" }
                        ]
                    },
                    {
                        id: 'auditorium-2',
                        name: "Auditorium 2",
                        screenings: [
                            { movie: "The Office (Film)", showId: "the-office", time: "04:00 PM", ticketsAvailable: 100, link: "buy-ticket.html" }
                        ]
                    }
                ]
            },
            {
                id: 'regal-union-square',
                name: "Regal Union Square",
                address: "850 Broadway, New York, NY",
                halls: [
                    {
                        id: 'screen-3',
                        name: "Screen 3",
                        screenings: [
                            { movie: "Your Honor", showId: "your-honor", time: "07:00 PM", ticketsAvailable: 110, link: "buy-ticket.html" }
                        ]
                    }
                ]
            }
        ],
        "beijing": [
            {
                id: 'ume-cineplex-wukesong',
                name: "UME Cineplex (Wukesong)",
                address: "Wukesong Culture & Sports Center, Beijing",
                halls: [
                    {
                        id: 'screen-5',
                        name: "Screen 5",
                        screenings: [
                            { movie: "Train To Busan", showId: "train-to-busan", time: "02:00 PM", ticketsAvailable: 160, link: "buy-ticket.html" },
                            { movie: "Squid Game", showId: "squid-game", time: "06:00 PM", ticketsAvailable: 140, link: "buy-ticket.html" }
                        ]
                    }
                ]
            }
        ],
        "seoul": [
            {
                id: 'cgv-yongsan-ipark-mall',
                name: "CGV Yongsan I'Park Mall",
                address: "I'Park Mall, Yongsan-gu, Seoul",
                halls: [
                    {
                        id: 'screen-3',
                        name: "Screen 3",
                        screenings: [
                            { movie: "Money Heist (K-Drama)", showId: "money-heist-k-drama", time: "11:00 AM", ticketsAvailable: 130, link: "buy-ticket.html" }
                        ]
                    },
                    {
                        id: 'screen-4',
                        name: "Screen 4",
                        screenings: [
                            { movie: "All Of Us Are Dead", showId: "all-of-us-are-dead", time: "03:00 PM", ticketsAvailable: 115, link: "buy-ticket.html" }
                        ]
                    }
                ]
            }
        ]
    };

    // --- Global Variables to store selected screening details ---
    let availableScreenings = []; // A flattened list of all available screenings
    let currentSelectedScreening = null; // Stores the currently selected screening object

    // --- Helper Function to get URL Parameters ---
    function getQueryParams() {
        const params = {};
        window.location.search.substring(1).split('&').forEach(param => {
            const parts = param.split('=');
            if (parts.length === 2) {
                params[parts[0]] = decodeURIComponent(parts[1].replace(/\+/g, ' '));
            }
        });
        return params;
    }

    /**
     * Gathers all available screenings from CINEMA_DATA and flattens them into a single array.
     * Also enriches screening objects with cinema and hall details.
     */
    function gatherAllAvailableScreenings() {
        availableScreenings = []; // Reset the list
        for (const cityKey in CINEMA_DATA) {
            const cinemasInCity = CINEMA_DATA[cityKey];
            cinemasInCity.forEach(cinema => {
                cinema.halls.forEach(hall => {
                    hall.screenings.forEach(screening => {
                        // Only add screenings with tickets available
                        if (screening.ticketsAvailable > 0) {
                            availableScreenings.push({
                                ...screening,
                                cinemaId: cinema.id,
                                cinemaName: cinema.name,
                                hallId: hall.id,
                                hallName: hall.name,
                                city: cityKey // Add city for context
                            });
                        }
                    });
                });
            });
        }

        // Sort movies alphabetically by movie title for dropdown
        availableScreenings.sort((a, b) => a.movie.localeCompare(b.movie));

        // Filter out duplicate movie entries for the movieSelect dropdown,
        // but keep unique combinations of movie/showtime for showtimeSelect
        const uniqueMovies = [];
        const movieIdsAdded = new Set();
        availableScreenings.forEach(screening => {
            if (!movieIdsAdded.has(screening.showId)) {
                uniqueMovies.push({ id: screening.showId, name: screening.movie });
                movieIdsAdded.add(screening.showId);
            }
        });
        return uniqueMovies;
    }


    /**
     * Populates the movie dropdown with unique available movies.
     * @param {string} [preSelectedShowId] - The showId to pre-select, if coming from cinema guide.
     */
    function populateMovies(preSelectedShowId = null) {
        movieSelect.innerHTML = ''; // Clear existing options
        const uniqueMovies = gatherAllAvailableScreenings(); // Get all unique, available movies

        if (uniqueMovies.length === 0) {
            const option = document.createElement('option');
            option.value = '';
            option.textContent = 'No movies available';
            movieSelect.appendChild(option);
            movieSelect.disabled = true;
            return;
        }

        uniqueMovies.forEach(movie => {
            const option = document.createElement('option');
            option.value = movie.id;
            option.textContent = movie.name;
            movieSelect.appendChild(option);
        });

        // Attempt to pre-select movie if provided
        if (preSelectedShowId) {
            movieSelect.value = preSelectedShowId;
        }
        
        // Ensure that if a movie is found, it's selected. Otherwise, select the first one.
        if (movieSelect.value === '' && movieSelect.options.length > 0) {
            movieSelect.value = movieSelect.options[0].value;
        }

        // Populate showtimes immediately after populating movies
        populateShowtimes(preSelectedShowId, getQueryParams().time);
    }

    /**
     * Populates the showtime dropdown based on the currently selected movie.
     * @param {string} [selectedMovieId] - The ID of the movie currently selected in the movie dropdown.
     * @param {string} [preSelectedTime] - The showtime to pre-select, if coming from cinema guide.
     */
    function populateShowtimes(selectedMovieId = movieSelect.value, preSelectedTime = null) {
        showtimeSelect.innerHTML = ''; // Clear existing options
        currentSelectedScreening = null; // Reset selected screening

        if (!selectedMovieId) {
            const option = document.createElement('option');
            option.value = '';
            option.textContent = 'Select a movie first';
            showtimeSelect.appendChild(option);
            showtimeSelect.disabled = true;
            numTicketsInput.disabled = true;
            buyNowBtn.disabled = true;
            return;
        }

        // Find all screenings for the selected movie
        const movieScreenings = availableScreenings.filter(s => s.showId === selectedMovieId);

        if (movieScreenings.length === 0) {
            const option = document.createElement('option');
            option.value = '';
            option.textContent = 'No showtimes available';
            showtimeSelect.appendChild(option);
            showtimeSelect.disabled = true;
            numTicketsInput.disabled = true;
            buyNowBtn.disabled = true;
            return;
        }

        // Sort showtimes by time
        movieScreenings.sort((a, b) => {
            const timeA = new Date(`1/1/2000 ${a.time}`);
            const timeB = new Date(`1/1/2000 ${b.time}`);
            return timeA - timeB;
        });

        movieScreenings.forEach(screening => {
            const option = document.createElement('option');
            // Store comprehensive screening data in value for easy retrieval later
            option.value = JSON.stringify({
                time: screening.time,
                ticketsAvailable: screening.ticketsAvailable,
                cinemaName: screening.cinemaName,
                hallName: screening.hallName,
                city: screening.city,
                showId: screening.showId // Include showId in value for validation
            });
            option.textContent = `${screening.time} (${screening.cinemaName} - ${screening.hallName}) - Available: ${screening.ticketsAvailable}`;
            showtimeSelect.appendChild(option);
        });

        // Attempt to pre-select showtime if provided
        if (preSelectedTime) {
            // Find the exact option that matches the preSelectedTime and showId
            const targetOption = Array.from(showtimeSelect.options).find(option => {
                const screeningData = JSON.parse(option.value);
                return screeningData.time === preSelectedTime && screeningData.showId === selectedMovieId;
            });
            if (targetOption) {
                showtimeSelect.value = targetOption.value;
            } else {
                // If the pre-selected time isn't found for the specific movie, select the first available
                showtimeSelect.value = showtimeSelect.options[0].value;
            }
        } else {
            // Otherwise, just select the first showtime
            showtimeSelect.value = showtimeSelect.options[0].value;
        }

        showtimeSelect.disabled = false;
        numTicketsInput.disabled = false;
        buyNowBtn.disabled = false;

        // Manually trigger change to set currentSelectedScreening and update max tickets
        updateSelectedScreeningDetails();
    }

    /**
     * Updates the currentSelectedScreening object and sets the max attribute for numTicketsInput.
     */
    function updateSelectedScreeningDetails() {
        if (showtimeSelect.value) {
            currentSelectedScreening = JSON.parse(showtimeSelect.value);
            numTicketsInput.max = currentSelectedScreening.ticketsAvailable;
            // Ensure current value doesn't exceed new max
            if (parseInt(numTicketsInput.value) > currentSelectedScreening.ticketsAvailable) {
                numTicketsInput.value = currentSelectedScreening.ticketsAvailable;
            }
        } else {
            currentSelectedScreening = null;
            numTicketsInput.max = 1; // Default min
            numTicketsInput.value = 1; // Reset to 1
        }
    }


    /**
     * Handles the "Buy Now" button click event.
     * Validates input and displays a confirmation message.
     */
    function handleBuyNow() {
        const selectedMovieName = movieSelect.options[movieSelect.selectedIndex].textContent;
        const numberOfTickets = parseInt(numTicketsInput.value, 10);

        // Retrieve full screening data from the currently selected showtime option
        if (!currentSelectedScreening) {
            alert('Please select a movie and showtime.');
            return;
        }

        // --- Advanced Validation ---
        if (isNaN(numberOfTickets) || numberOfTickets <= 0) {
            alert('Please enter a valid number of tickets (at least 1).');
            return;
        }
        if (numberOfTickets > currentSelectedScreening.ticketsAvailable) {
            alert(`Sorry, only ${currentSelectedScreening.ticketsAvailable} tickets are available for this showtime.`);
            numTicketsInput.value = currentSelectedScreening.ticketsAvailable; // Reset to max available
            return;
        }

        // Display confirmation
        confirmedMovie.textContent = `${selectedMovieName} (${currentSelectedScreening.cinemaName}, ${currentSelectedScreening.hallName})`;
        confirmedShowtime.textContent = currentSelectedScreening.time;
        confirmedTickets.textContent = numberOfTickets;

        confirmationSection.style.display = 'block'; // Show the confirmation section
        buyNowBtn.style.display = 'none'; // Hide the buy button
        // Hide form sections to present a clean confirmation
        Array.from(document.querySelectorAll('.form-section')).forEach(section => section.style.display = 'none');


        // In a real application, you would send this data to a backend,
        // process payment, update ticket availability, etc.
        console.log(`Booking confirmed for:
            Movie: ${selectedMovieName} (ID: ${currentSelectedScreening.showId})
            Cinema: ${currentSelectedScreening.cinemaName} (ID: ${currentSelectedScreening.cinemaId})
            Hall: ${currentSelectedScreening.hallName} (ID: ${currentSelectedScreening.hallId})
            Showtime: ${currentSelectedScreening.time}
            City: ${currentSelectedScreening.city}
            Tickets: ${numberOfTickets}
        `);
    }

    // --- Event Listeners ---
    movieSelect.addEventListener('change', () => populateShowtimes());
    showtimeSelect.addEventListener('change', updateSelectedScreeningDetails);
    numTicketsInput.addEventListener('input', () => {
        // Ensure input doesn't exceed max available tickets or fall below min (1)
        let value = parseInt(numTicketsInput.value);
        if (isNaN(value) || value < 1) {
            numTicketsInput.value = 1;
        } else if (currentSelectedScreening && value > currentSelectedScreening.ticketsAvailable) {
            numTicketsInput.value = currentSelectedScreening.ticketsAvailable;
        }
    });
    buyNowBtn.addEventListener('click', handleBuyNow);

    // --- Initial population and pre-selection on page load ---
    const urlParams = getQueryParams();
    const preSelectedShowId = urlParams.showId;
    const preSelectedTime = urlParams.time;

    // Start by populating movies, then showtimes, with pre-selection if applicable
    populateMovies(preSelectedShowId);
});