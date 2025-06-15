        // Data for all shows (copied from cinema_guide.html to keep consistent)
        const allShows = [
            {
                title: "Money Heist (La Casa de Papel)",
                categories: ["Trending", "International"],
                poster: "moneyheistposter.webp", // Selected .webp poster
                backdrop: "moneyheistbackdrop1.webp", // Selected .webp backdrop
                imdb: "8.2/10 (Crime)",
                releaseDate: "May 2, 2017",
                seasons: "5 (Netflix Parts)",
                episodes: "41",
                languages: "Spanish",
                genre: "Heist, Crime, Drama, Thriller",
                creators: "Alex Pina",
                cast: "Úrsula Corberó, Álvaro Morte, Itziar Ituño",
                networkLogo: "netflixlogo.webp",
                networkText: "Watch Now",
                subscription: "Subscription Required",
                synopsis: "A mysterious man known as 'The Professor' recruits a band of eight robbers to carry out an ambitious plan: to steal billions of euros from the Royal Mint of Spain. As the heist unfolds, the team grapples with hostages, police, and personal conflicts, turning the robbery into a complex game of cat and mouse. Known for its intricate plot twists and strong character development."
            },
            {
                title: "Money Heist (K-Drama)",
                categories: ["K-Drama", "Coming Soon"],
                poster: "moneyheistkoreaposter1.webp", // Selected .webp poster
                backdrop: "moneheistkoreabackdrop1.webp", // Selected .webp backdrop
                imdb: "Expected",
                releaseDate: "Expected Premier: December 2024 (Season 2)",
                seasons: "2 (Expected)",
                episodes: "N/A",
                languages: "Korean",
                genre: "Heist, Crime, Drama, Thriller",
                creators: "Kim Hong-sun",
                cast: "Yoo Ji-tae, Kim Yun-jin, Park Hae-soo",
                networkLogo: "youtubelogo.webp",
                networkText: "Watch Trailer",
                subscription: "Free",
                synopsis: "A Korean adaptation of the hit Spanish series, 'Money Heist', this version reinterprets the original's compelling narrative with a fresh, distinct Korean perspective, focusing on a major heist orchestrated by the Professor and his team of diverse personalities. Fans eagerly await the next installment."
            },
            {
                title: "Prison Break",
                categories: ["Action", "Hollywood"],
                poster: "prisonbreakposter1.webp", // Selected .webp poster
                backdrop: "prisonbreakbackdrop.webp", // Selected .webp backdrop
                imdb: "8.3/10 (Action)",
                releaseDate: "August 29, 2005",
                seasons: "5",
                episodes: "90",
                languages: "English",
                genre: "Action, Crime, Drama, Thriller",
                creators: "Paul Scheuring",
                cast: "Wentworth Miller, Dominic Purcell, Amaury Nolasco",
                networkLogo: "hululogo.webp",
                networkText: "Watch Now",
                subscription: "Subscription Required",
                synopsis: "When his brother, Lincoln Burrows, is wrongly sentenced to death, a structural engineer, Michael Scofield, devises an elaborate plan to break him out of prison—starting by getting incarcerated himself. A thrilling ride full of twists, tension, and brotherly loyalty as they navigate their escape and evade authorities."
            },
            {
                title: "Inception",
                categories: ["Hollywood"],
                poster: "inceptioposter1.webp", // Selected .webp poster
                backdrop: "inceptionbackdrop1.webp", // Selected .webp backdrop
                imdb: "8.8/10 (Sci-Fi)",
                releaseDate: "July 16, 2010",
                seasons: "1 (Film)",
                episodes: "N/A (Film)",
                languages: "English",
                genre: "Action, Sci-Fi, Thriller",
                creators: "Christopher Nolan",
                cast: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page",
                networkLogo: "hbo.webp", // HBO Max or rent/buy
                networkText: "Watch Now",
                subscription: "Subscription/Rent/Buy",
                synopsis: "A thief who steals corporate secrets through use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the mission and his team to disaster."
            },
            {
                title: "Breaking Bad",
                categories: ["Trending", "Hollywood"],
                poster: "breakingbadposter1.webp", // Selected .webp poster
                backdrop: "breakingbadbackdrop.webp", // Selected .webp backdrop
                imdb: "9.5/10 (Crime)",
                releaseDate: "January 20, 2008",
                seasons: "5",
                episodes: "62",
                languages: "English",
                genre: "Crime, Drama, Thriller",
                creators: "Vince Gilligan",
                cast: "Bryan Cranston, Aaron Paul, Anna Gunn",
                networkLogo: "netflixlogo.webp",
                networkText: "Watch Now",
                subscription: "Subscription Required",
                synopsis: "Breaking Bad follows Walter White, a high school chemistry teacher turned methamphetamine producer, as he partners with former student Jesse Pinkman. Faced with a cancer diagnosis and financial hardship, Walter descends into a criminal underworld that transforms his identity and relationships, exploring themes of morality, family, and ambition."
            },
            {
                title: "The Office",
                categories: ["Hollywood"],
                poster: "theofficeposter1.webp", // Selected .webp poster
                backdrop: "theofficebackdrop1.webp", // Selected .webp backdrop
                imdb: "9.0/10 (Comedy)",
                releaseDate: "March 24, 2005",
                seasons: "9",
                episodes: "201",
                languages: "English",
                genre: "Comedy",
                creators: "Ricky Gervais, Stephen Merchant, Greg Daniels",
                cast: "Steve Carell, Rainn Wilson, John Krasinski",
                networkLogo: "pecock-logo.webp", // Assuming Peacock (US)
                networkText: "Watch Now",
                subscription: "Subscription Required",
                synopsis: "A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium. The everyday lives of the employees are seen through the lens of a documentary film crew."
            },
            {
                title: "Your Honor",
                categories: ["Hollywood", "Coming Soon"],
                poster: "yourhonorposter1.webp", // Selected .webp poster
                backdrop: "yourhonorbackdrop1.webp", // Selected .webp backdrop
                imdb: "Expected",
                releaseDate: "Expected Premier: Coming Soon (Season 3)",
                seasons: "3 (Expected)",
                episodes: "N/A",
                languages: "English",
                genre: "Crime, Drama, Thriller",
                creators: "Peter Moffat",
                cast: "Bryan Cranston",
                networkLogo: "youtubelogo.webp",
                networkText: "Watch Trailer",
                subscription: "Free",
                synopsis: "A respected New Orleans judge's life is turned upside down when his teenage son is involved in a hit-and-run, leading to a high-stakes game of lies, deceit, and impossible choices to protect his family. Season 3 is highly anticipated."
            },
            {
                title: "3 Idiots",
                categories: ["Bollywood"],
                poster: "3idiotsposter1.webp", // Selected .webp poster
                backdrop: "3idiotsbackdrop1.webp", // Selected .webp backdrop
                imdb: "8.4/10 (Comedy)",
                releaseDate: "December 25, 2009",
                seasons: "1 (Film)",
                episodes: "N/A (Film)",
                languages: "Hindi",
                genre: "Comedy, Drama, Romance",
                creators: "Rajkumar Hirani",
                cast: "Aamir Khan, Madhavan, Sharman Joshi",
                networkLogo: "primevideologo.webp", // Assuming Prime Video
                networkText: "Watch Now",
                subscription: "Subscription/Rent/Buy",
                synopsis: "Two friends embark on a quest for a third, long-lost friend, while reminiscing about their college days and the profound impact their eccentric, brilliant buddy had on their lives and perspectives on education and success."
            },
            {
                title: "Ghoul",
                categories: ["Bollywood"],
                poster: "ghoulposter1.webp", // Selected .webp poster
                backdrop: "ghoulbackdrop1.webp", // Selected .webp backdrop
                imdb: "7.1/10 (Horror)",
                releaseDate: "August 24, 2018",
                seasons: "1",
                episodes: "3",
                languages: "Hindi, English",
                genre: "Horror, Thriller",
                creators: "Patrick Graham",
                cast: "Radhika Apte, Manav Kaul, Ratnabali Bhattacharjee",
                networkLogo: "netflixlogo.webp",
                networkText: "Watch Now",
                subscription: "Subscription Required",
                synopsis: "A newly appointed interrogator arrives at a remote military detention center to question a dangerous terrorist, only to discover that the detainee is not what he seems and harbors a terrifying supernatural entity."
            },
            {
                title: "Dangal",
                categories: ["Bollywood"],
                poster: "dangalposter1.webp", // Selected .webp poster
                backdrop: "dangalbackdrop1.webp", // Selected .webp backdrop
                imdb: "8.3/10 (Biography)",
                releaseDate: "December 23, 2016",
                seasons: "1 (Film)",
                episodes: "N/A (Film)",
                languages: "Hindi",
                genre: "Biography, Drama, Sport",
                creators: "Nitesh Tiwari",
                cast: "Aamir Khan, Fatima Sana Shaikh, Sanya Malhotra",
                networkLogo: "netflixlogo.webp", // Also available on Netflix
                networkText: "Watch Now",
                subscription: "Subscription/Rent/Buy",
                synopsis: "Based on the true story of Mahavir Singh Phogat, a former wrestler who trains his daughters Geeta Phogat and Babita Kumari to become world-class female wrestlers, challenging societal norms and achieving international success."
            },
            {
                title: "Nairobi Half Life",
                categories: ["Kenyan Drama"],
                poster: "nairobihalflifeposter1.webp", // Selected .webp poster
                backdrop: "nairobihalflifebackdrop1.webp", // Selected .webp backdrop
                imdb: "7.8/10 (Crime)",
                releaseDate: "October 31, 2012",
                seasons: "1 (Film)",
                episodes: "N/A (Film)",
                languages: "Swahili, Kikuyu, English",
                genre: "Crime, Drama",
                creators: "David 'Tosh' Gitonga (Director)",
                cast: "Joseph Wairimu, Olwenya Maina, Mugambi Nthiga",
                networkLogo: "youtubelogo.webp", // Often available on YouTube or local VOD
                networkText: "Watch Now",
                subscription: "May require Rent/Buy",
                synopsis: "Nairobi Half Life tells the story of Mwas, an aspiring actor from a rural town who travels to Nairobi to pursue his dreams. Faced with harsh city life, he’s pulled into a world of crime and must struggle to stay true to his dreams while surviving the city’s brutal realities. It's a powerful and gritty portrayal of urban life in Kenya."
            },
            {
                title: "Crime and Justice",
                categories: ["Kenyan Drama", "Trending", "Coming Soon"],
                poster: "crimeandjusticeposter1.webp", // Selected .webp poster
                backdrop: "crimeandjusticebackdrop1.webp", // Selected .webp backdrop
                imdb: "7.0/10 (Crime)", // Estimate, as IMDb doesn't show a clear rating
                releaseDate: "February 22, 2021",
                seasons: "3", // As of my last update
                episodes: "N/A",
                languages: "English, Swahili",
                genre: "Crime, Drama, Legal",
                creators: "Showmax Original",
                cast: "Sarah Hassan, Alfred Munyua, Maqbul Mohammed",
                networkLogo: "showmaxlogo.webp", // Assuming Showmax logo if you have it
                networkText: "Watch Now",
                subscription: "Subscription Required",
                synopsis: "A Kenyan police procedural series that follows two detectives as they investigate various crimes in Nairobi. The show delves into the dark side of the city, exploring themes of corruption, greed, and the pursuit of justice."
            },
            {
                title: "The Day Of The Jackal",
                categories: ["International", "Coming Soon"],
                poster: "thedayofthejackalposter1.webp", // Selected .webp poster
                backdrop: "thedayofthejackalbackdrop1.webp", // Selected .webp backdrop
                imdb: "Expected",
                releaseDate: "Expected Premier: November 2024 (Series)",
                seasons: "1 (Upcoming Series)",
                episodes: "N/A",
                languages: "English",
                genre: "Thriller",
                creators: "Ronan Bennett",
                cast: "Eddie Redmayne, Lashana Lynch",
                networkLogo: "pecock-logo.webp", // SkyShowtime/Peacock
                networkText: "Watch Trailer",
                subscription: "Free",
                synopsis: "An upcoming modern-day reimagining of the iconic novel and film, following a professional assassin known as 'The Jackal' as he undertakes a mission to assassinate a high-profile target."
            },
            {
                title: "Train To Busan",
                categories: ["K-Drama"],
                poster: "traintobusanposter2.webp", // Selected .webp poster
                backdrop: "traintobusanbackdrop1.webp", // Selected .webp backdrop
                imdb: "7.6/10 (Action)",
                releaseDate: "July 20, 2016",
                seasons: "1 (Film)",
                episodes: "N/A (Film)",
                languages: "Korean",
                genre: "Action, Horror, Thriller",
                creators: "Yeon Sang-ho (Director)",
                cast: "Gong Yoo, Jung Yu-mi, Ma Dong-seok",
                networkLogo: "amazon-prime-logo-free-png.webp", // Often on Prime/Hulu
                networkText: "Watch Now",
                subscription: "Subscription/Rent/Buy",
                synopsis: "While a zombie apocalypse breaks out in South Korea, a father and daughter, along with other passengers, are trapped on a high-speed train fighting for their lives as the infection spreads rapidly."
            },
            {
                title: "Extraction",
                categories: ["Hollywood", "Coming Soon"],
                poster: "extractionposter1.webp", // Selected .webp poster
                backdrop: "extractionbackdrop1.webp", // Selected .webp backdrop
                imdb: "Expected",
                releaseDate: "Expected Premier: 2025 (Extraction 3)",
                seasons: "3 (Expected)",
                episodes: "N/A",
                languages: "English",
                genre: "Action, Thriller",
                creators: "Sam Hargrave (Director)",
                cast: "Chris Hemsworth",
                networkLogo: "youtubelogo.webp",
                networkText: "Watch Trailer",
                subscription: "Free",
                synopsis: "Extraction follows a black market mercenary who embarks on a deadly mission to rescue the kidnapped son of an imprisoned international crime lord. The highly anticipated third installment will continue the high-octane action."
            },
            {
                title: "All Of Us Are Dead",
                categories: ["K-Drama", "Coming Soon"],
                poster: "allofusaredeadposter1.webp", // Selected .webp poster
                backdrop: "squidgamebackdrop1.webp", // Using a general zombie/thriller backdrop since no direct match was provided
                imdb: "Expected",
                releaseDate: "Expected Premier: 2025 (Season 2)",
                seasons: "2 (Expected)",
                episodes: "N/A",
                languages: "Korean",
                genre: "Action, Drama, Horror",
                creators: "Lee Jae-kyoo, Kim Nam-su",
                cast: "Park Ji-hu, Yoon Chan-young, Cho Yi-hyun",
                networkLogo: "youtubelogo.webp",
                networkText: "Watch Trailer",
                subscription: "Free",
                synopsis: "When a zombie virus breaks out in a high school, trapped students must fight their way out or turn into one of the infected. The second season is set to continue their struggle for survival."
            },
            {
                title: "Stranger Things",
                categories: ["Hollywood"],
                poster: "strangerthingsposter1.webp", // Selected .webp poster
                backdrop: "strangerthingsbackdrop1.webp", // Selected .webp backdrop
                imdb: "8.7/10 (Drama)",
                releaseDate: "July 15, 2016",
                seasons: "5",
                episodes: "34",
                languages: "English",
                genre: "Drama, Fantasy, Horror",
                creators: "The Duffer Brothers",
                cast: "Millie Bobby Brown, Finn Wolfhard, Winona Ryder",
                networkLogo: "netflixlogo.webp",
                networkText: "Watch Now",
                subscription: "Subscription Required",
                synopsis: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl with extraordinary powers."
            },
            {
                title: "Lupin",
                categories: ["International"],
                poster: "lupinposter1.webp", // Selected .webp poster
                backdrop: "lupinbackdrop1.webp", // Selected .webp backdrop
                imdb: "7.5/10 (Crime)",
                releaseDate: "January 8, 2021",
                seasons: "3 (Parts)",
                episodes: "17",
                languages: "French",
                genre: "Crime, Drama, Mystery",
                creators: "George Kay, François Uzan",
                cast: "Omar Sy, Ludivine Sagnier, Clotilde Hesme",
                networkLogo: "netflixlogo.webp",
                networkText: "Watch Now",
                subscription: "Subscription Required",
                synopsis: "Inspired by the adventures of Arsène Lupin, master of disguise and gentleman thief Assane Diop sets out to avenge his father for an injustice inflicted by a wealthy family."
            },
            {
                title: "Squid Game",
                categories: ["Trending", "K-Drama", "Coming Soon"],
                poster: "squidgameposter1.webp", // Selected .webp poster
                backdrop: "squidgamebackdrop1.webp", // Selected .webp backdrop
                imdb: "8.0/10 (Action)",
                releaseDate: "September 17, 2021",
                seasons: "2 (Expected)", // Season 2 is coming soon
                episodes: "9 (Season 1)",
                languages: "Korean",
                genre: "Action, Thriller, Drama",
                creators: "Hwang Dong-hyuk",
                cast: "Lee Jung-jae, Park Hae-soo, Jung Ho-yeon",
                networkLogo: "netflixlogo.webp",
                networkText: "Watch Now", // For Season 1
                subscription: "Subscription Required",
                synopsis: "When a man with a huge debt is invited to play a series of children's games for a life-changing sum of money. The catch is, losing means death. The second season is highly anticipated."
            },
            {
                title: "Second Wife",
                categories: ["Kenyan Drama", "Coming Soon"],
                poster: "secondfamilyposter1.webp", // Selected .webp poster
                backdrop: "secondfamilybackdrop1.webp", // Selected .webp backdrop
                imdb: "Expected",
                releaseDate: "Expected Premier: TBA",
                seasons: "N/A",
                episodes: "N/A",
                languages: "Swahili, English",
                genre: "Drama",
                creators: "N/A",
                cast: "N/A",
                networkLogo: "youtubelogo.webp",
                networkText: "Watch Trailer",
                subscription: "Free",
                synopsis: "Details for 'Second Wife' are scarce, but it's expected to be a compelling Kenyan drama exploring familial and marital complexities, possibly revolving around the theme of polygamy or a new spouse in a family."
            },
            {
                title: "40 Sticks",
                categories: ["Kenyan Drama"],
                poster: "40sticksposter1.webp", // Selected .webp poster
                backdrop: "crimeandjusticebackdrop1.webp", // Using a general crime/drama backdrop since no direct match was provided
                imdb: "6.2/10 (Action)",
                releaseDate: "October 2, 2020",
                seasons: "1 (Film)",
                episodes: "N/A (Film)",
                languages: "Swahili, English",
                genre: "Action, Crime, Thriller",
                creators: "Victor Gatonye (Director)",
                cast: "Robert Agengo, Mwaura Bilal, Andreo Kamau",
                networkLogo: "netflixlogo.webp",
                networkText: "Watch Now",
                subscription: "Subscription Required",
                synopsis: "When a prison bus crashes in the middle of a forest, a group of convicts must work together to survive the harsh wilderness while evading an unknown, deadly threat lurking in the shadows."
            }
        ];

        // Mock data for snacks
        const snacksData = [
            // Updated image paths to point to your local .webp files
            { id: "popcorn-large", name: "Large Popcorn", price: 500, image: "popcorns.webp" },
            { id: "soda-coke", name: "Coca-Cola", price: 200, image: "cocacola.webp" },
            { id: "nachos", name: "Nachos with Cheese", price: 450, image: "nachos.webp" },
            { id: "water-bottle", name: "Bottled Water", price: 100, image: "bottledwater.webp" },
        ];

        // Mock data for cinemas (used for welcome message on final step)
        const cinemaData = [
            { name: 'Century Cinemax Garden City', welcomeMessage: 'Welcome to Century Cinemax Garden City! We are thrilled to have you!' },
            { name: 'Anga Diamond Plaza', welcomeMessage: 'Enjoy your movie at Anga Diamond Plaza! Your comfort is our priority.' },
            { name: 'IMAX Two Rivers', welcomeMessage: 'Experience cinema like never before at IMAX Two Rivers! Get ready for an immersive journey.' },
            { name: 'Nyali Cinemax', welcomeMessage: 'Greetings from Nyali Cinemax! We hope you have a fantastic time.' },
            { name: 'Cinemax Mombasa', welcomeMessage: 'Welcome to Cinemax Mombasa! Get ready for a cinematic adventure.' },
            { name: 'Mega City Cinemas', welcomeMessage: 'Enjoy your visit to Mega City Cinemas! We\'re glad you\'re here.' },
            { name: 'Eldoret Cinemax', welcomeMessage: 'Welcome to Eldoret Cinemax! Your ultimate entertainment awaits.' },
        ];

        // Global variables for selected items
        let selectedMovieTitle = '';
        let selectedCinemaName = '';
        let selectedSeats = [];
        let selectedSnacks = {}; // { snackId: quantity }
        let cabServiceEnabled = false;
        let selectedPickupType = '';
        let selectedCabProvider = '';
        let totalAmount = 0;
        let selectedPaymentMethod = '';

        // Current step tracking
        let currentStep = 1;
        const totalSteps = 6;

        /**
         * Function to display a custom message box (replaces alert()).
         * @param {string} message - The message to display.
         */
        function showMessageBox(message) {
            // Create overlay
            const overlay = document.createElement('div');
            overlay.classList.add('message-overlay');

            // Create message box
            const messageBox = document.createElement('div');
            messageBox.classList.add('message-box');

            const messageText = document.createElement('p');
            messageText.textContent = message;
            messageText.style.marginBottom = '15px';
            messageText.style.fontSize = '1.1em';

            const closeButton = document.createElement('button');
            closeButton.textContent = 'OK';
            closeButton.onclick = () => document.body.removeChild(overlay);

            messageBox.appendChild(messageText);
            messageBox.appendChild(closeButton);
            overlay.appendChild(messageBox);
            document.body.appendChild(overlay);
        }

        /**
         * Navigates to a specific step in the ticket buying process.
         * @param {number} stepNum - The number of the step to navigate to.
         */
        function navigateToStep(stepNum) {
            // Validate step number
            if (stepNum < 1 || stepNum > totalSteps) {
                console.error("Invalid step number:", stepNum);
                return;
            }

            // Hide all step content
            document.querySelectorAll('.step-content').forEach(stepContent => {
                stepContent.classList.add('hidden');
            });

            // Deactivate all stepper items
            document.querySelectorAll('.stepper-item').forEach(item => {
                item.classList.remove('active');
            });

            // Show the target step content and activate its stepper item
            document.getElementById(`step-${getStepId(stepNum)}`).classList.remove('hidden');
            document.querySelector(`.stepper-item[data-step="${stepNum}"]`).classList.add('active');

            currentStep = stepNum;

            // Update summary if navigating to summary step
            if (currentStep === 5) {
                updateOrderSummary();
            }
        }

        /**
         * Helper function to get the ID string for a given step number.
         * @param {number} stepNum - The step number.
         * @returns {string} The ID string.
         */
        function getStepId(stepNum) {
            switch (stepNum) {
                case 1: return 'movie-details';
                case 2: return 'select-seats';
                case 3: return 'snacks';
                case 4: return 'cab-service';
                case 5: return 'order-summary';
                case 6: return 'payment-method';
                default: return '';
            }
        }

        /**
         * Renders the seats grid for selection.
         * @param {number} rows - Number of rows.
         * @param {number} cols - Number of columns.
         */
        function renderSeats(rows, cols) {
            const seatsContainer = document.getElementById('seats-container');
            seatsContainer.innerHTML = ''; // Clear existing seats

            // Mock occupied seats (for demonstration)
            const occupiedSeats = new Set(['A5', 'B3', 'C7', 'D1', 'D2', 'F10', 'H4']);

            for (let r = 0; r < rows; r++) {
                const rowChar = String.fromCharCode(65 + r); // A, B, C...
                for (let c = 1; c <= cols; c++) {
                    const seatId = `${rowChar}${c}`;
                    const seatDiv = document.createElement('div');
                    seatDiv.classList.add('seat');
                    seatDiv.textContent = c; // Display column number

                    if (occupiedSeats.has(seatId)) {
                        seatDiv.classList.add('occupied');
                    } else {
                        seatDiv.addEventListener('click', () => {
                            seatDiv.classList.toggle('selected');
                            if (seatDiv.classList.contains('selected')) {
                                selectedSeats.push(seatId);
                            } else {
                                selectedSeats = selectedSeats.filter(seat => seat !== seatId);
                            }
                            // Keep selected seats sorted
                            selectedSeats.sort((a, b) => {
                                const rowA = a.charCodeAt(0);
                                const rowB = b.charCodeAt(0);
                                if (rowA === rowB) {
                                    return parseInt(a.substring(1)) - parseInt(b.substring(1));
                                }
                                return rowA - rowB;
                            });
                        });
                    }
                    seatsContainer.appendChild(seatDiv);
                }
            }
        }

        /**
         * Renders the available snacks.
         */
        function renderSnacks() {
            const snacksListContainer = document.getElementById('snacks-list');
            snacksListContainer.innerHTML = ''; // Clear existing snacks

            snacksData.forEach(snack => {
                const snackCard = document.createElement('div');
                snackCard.classList.add('bg-gray-700', 'p-4', 'rounded-lg', 'flex', 'items-center', 'gap-4', 'shadow-md');

                // Using snack.image directly now points to the local path.
                // Added onerror to show a placeholder if the image path is incorrect or file is missing
                snackCard.innerHTML = `
                    <img src="images/snacks/${snack.image}" alt="${snack.name}" class="w-16 h-16 object-cover rounded-md" onerror="this.onerror=null;this.src='https://placehold.co/100x100/e94560/fff?text=No+Image';">
                    <div class="flex-grow">
                        <h3 class="text-xl font-semibold">${snack.name}</h3>
                        <p class="text-e94560">Ksh ${snack.price.toFixed(2)}</p>
                    </div>
                    <div class="flex items-center gap-2">
                        <button class="bg-e94560 text-white px-3 py-1 rounded-full text-lg remove-snack-btn" data-snack-id="${snack.id}">-</button>
                        <span id="quantity-${snack.id}" class="text-xl font-bold">${selectedSnacks[snack.id] || 0}</span>
                        <button class="bg-e94560 text-white px-3 py-1 rounded-full text-lg add-snack-btn" data-snack-id="${snack.id}">+</button>
                    </div>
                `;
                snacksListContainer.appendChild(snackCard);
            });

            // Add event listeners for snack quantity buttons
            document.querySelectorAll('.add-snack-btn').forEach(button => {
                button.addEventListener('click', (event) => {
                    const snackId = event.target.dataset.snackId;
                    selectedSnacks[snackId] = (selectedSnacks[snackId] || 0) + 1;
                    document.getElementById(`quantity-${snackId}`).textContent = selectedSnacks[snackId];
                });
            });

            document.querySelectorAll('.remove-snack-btn').forEach(button => {
                button.addEventListener('click', (event) => {
                    const snackId = event.target.dataset.snackId;
                    if (selectedSnacks[snackId] && selectedSnacks[snackId] > 0) {
                        selectedSnacks[snackId]--;
                        document.getElementById(`quantity-${snackId}`).textContent = selectedSnacks[snackId];
                    }
                });
            });
        }

        /**
         * Updates the order summary details.
         */
        function updateOrderSummary() {
            document.getElementById('summary-movie-title').textContent = selectedMovieTitle;
            document.getElementById('summary-cinema').textContent = selectedCinemaName;
            document.getElementById('summary-seats').textContent = selectedSeats.length > 0 ? selectedSeats.join(', ') : 'None';

            let snacksSummary = 'None';
            let snacksCost = 0;
            const chosenSnacks = Object.keys(selectedSnacks).filter(id => selectedSnacks[id] > 0);
            if (chosenSnacks.length > 0) {
                snacksSummary = chosenSnacks.map(id => {
                    const snack = snacksData.find(s => s.id === id);
                    snacksCost += snack.price * selectedSnacks[id];
                    return `${snack.name} (x${selectedSnacks[id]})`;
                }).join(', ');
            }
            document.getElementById('summary-snacks').textContent = snacksSummary;

            let cabServiceSummary = 'No';
            let cabCost = 0;
            if (cabServiceEnabled) {
                cabServiceSummary = `Yes - Provider: ${selectedCabProvider || 'N/A'}`;
                if (selectedPickupType === 'home') {
                    const homeAddress = document.getElementById('home-address').value;
                    cabServiceSummary += ` (Home Address: ${homeAddress || 'Not provided'})`;
                    cabCost = 300; // Example flat rate for home pickup
                } else if (selectedPickupType === 'taxicab') {
                    const taxicabStand = document.getElementById('taxicab-stand').value;
                    cabServiceSummary += ` (Taxicab Stand: ${taxicabStand || 'Not selected'})`;
                    cabCost = 150; // Example flat rate for taxicab stand pickup
                }
            }
            document.getElementById('summary-cab-service').textContent = cabServiceSummary;

            // Calculate total amount
            totalAmount = (selectedSeats.length * 700) + snacksCost + cabCost; // Assuming 700 Ksh per ticket
            document.getElementById('summary-total-amount').textContent = `Ksh ${totalAmount.toFixed(2)}`;
        }


        // --- Event Listeners and Initial Load ---
        document.addEventListener('DOMContentLoaded', () => {
            const urlParams = new URLSearchParams(window.location.search);
            const movieTitleFromUrl = urlParams.get('title');
            const posterFilenameFromUrl = urlParams.get('poster');
            const backdropFilenameFromUrl = urlParams.get('backdrop');
            const cinemaNameFromUrl = urlParams.get('cinema');

            // Find the full movie details using the title from the URL
            const movieDetails = allShows.find(show => show.title === movieTitleFromUrl);

            // Update hero section and movie details based on URL parameters
            if (movieDetails) {
                document.getElementById('hero-movie-title').textContent = movieDetails.title;
                document.getElementById('buyTicketHero').style.backgroundImage = `url('images/backdrops/${backdropFilenameFromUrl}')`; // Use the passed backdrop filename
                document.getElementById('movie-poster').src = `images/posters/${posterFilenameFromUrl}`; // Use the passed poster filename
                
                // Fallback for image loading errors
                document.getElementById('buyTicketHero').onerror = function() {
                    this.style.backgroundImage = `url('https://placehold.co/900x300/333/fff?text=No+Backdrop')`;
                };
                document.getElementById('movie-poster').onerror = function() {
                    this.src = 'https://placehold.co/250x350/333/fff?text=No+Poster';
                };

                document.getElementById('movie-title-display').textContent = movieDetails.title;
                document.getElementById('movie-genre').textContent = movieDetails.genre;
                document.getElementById('movie-imdb').textContent = movieDetails.imdb;
                document.getElementById('movie-release-date').textContent = movieDetails.releaseDate;
                document.getElementById('movie-creators').textContent = movieDetails.creators;
                document.getElementById('movie-cast').textContent = movieDetails.cast;
                document.getElementById('movie-synopsis').textContent = movieDetails.synopsis;

                selectedMovieTitle = movieDetails.title; // Store for summary
                selectedCinemaName = cinemaNameFromUrl || "Unknown Cinema"; // Store for summary
            } else {
                // Fallback if no movie details are found (e.g., direct access without params)
                document.getElementById('hero-movie-title').textContent = "Movie Not Found";
                showMessageBox("Movie details not found. Please select a movie from the Cinema Guide page.");
            }

            // Navigation buttons logic
            document.querySelectorAll('.proceed-btn').forEach(button => {
                button.addEventListener('click', (event) => {
                    const targetStep = parseInt(button.dataset.targetStep);
                    // No validation for buttons that don't have a targetStep (like the final Pay Now button)
                    if (!targetStep) {
                        return;
                    }

                    // Add validation before proceeding to the next step
                    if (currentStep === 2) { // Validate Seat Selection
                        if (selectedSeats.length === 0) {
                            showMessageBox("Please select at least one seat to proceed.");
                            event.stopPropagation(); // Stop default navigation
                            return;
                        }
                    }
                    // No validation needed for snacks (Step 3) as they are optional
                    // Cab service validation is handled by its specific proceed button listener

                    navigateToStep(targetStep);
                });
            });

            document.querySelectorAll('.back-btn').forEach(button => {
                button.addEventListener('click', () => {
                    const targetStep = parseInt(button.dataset.targetStep);
                    if (targetStep) {
                        navigateToStep(targetStep);
                    }
                });
            });

            // Cab service logic
            const cabYesRadio = document.getElementById('cab-yes');
            const cabNoRadio = document.getElementById('cab-no');
            const cabDetailsDiv = document.getElementById('cab-details');
            const pickupHomeRadio = document.getElementById('pickup-home');
            const pickupTaxicabRadio = document.getElementById('pickup-taxicab');
            const homeAddressGroup = document.getElementById('home-address-group');
            const taxicabStandGroup = document.getElementById('taxicab-stand-group');
            const cabProviderSelect = document.getElementById('cab-provider');

            cabYesRadio.addEventListener('change', () => {
                cabServiceEnabled = true;
                cabDetailsDiv.classList.remove('hidden');
            });
            cabNoRadio.addEventListener('change', () => {
                cabServiceEnabled = false;
                cabDetailsDiv.classList.add('hidden');
                selectedPickupType = ''; // Reset pickup type
                homeAddressGroup.classList.add('hidden');
                taxicabStandGroup.classList.add('hidden');
            });

            pickupHomeRadio.addEventListener('change', () => {
                selectedPickupType = 'home';
                homeAddressGroup.classList.remove('hidden');
                taxicabStandGroup.classList.add('hidden');
            });
            pickupTaxicabRadio.addEventListener('change', () => {
                selectedPickupType = 'taxicab';
                taxicabStandGroup.classList.remove('hidden');
                homeAddressGroup.classList.add('hidden');
            });

            cabProviderSelect.addEventListener('change', (event) => {
                selectedCabProvider = event.target.value;
            });

            // Validation for "Proceed to Summary" button from Cab Service (Step 4)
            document.getElementById('proceed-to-summary-btn').addEventListener('click', (event) => {
                if (cabServiceEnabled) {
                    if (selectedPickupType === '') {
                        showMessageBox("Please select a pickup type (Home or Taxicab Stand) to proceed with cab service.");
                        event.stopPropagation();
                        return;
                    }
                    if (selectedPickupType === 'home' && document.getElementById('home-address').value.trim() === '') {
                        showMessageBox("Please enter your home address for cab service.");
                        event.stopPropagation();
                        return;
                    }
                    if (selectedPickupType === 'taxicab' && document.getElementById('taxicab-stand').value === '') {
                        showMessageBox("Please select a taxicab stand for cab service.");
                        event.stopPropagation();
                        return;
                    }
                    if (cabProviderSelect.value === '') {
                         showMessageBox("Please select a cab provider to proceed with cab service.");
                         event.stopPropagation();
                         return;
                    }
                }
                navigateToStep(5);
            });

            // Payment method selection logic
            document.querySelectorAll('.payment-method').forEach(methodDiv => {
                methodDiv.addEventListener('click', () => {
                    // Remove 'selected' class from all payment methods
                    document.querySelectorAll('.payment-method').forEach(div => div.classList.remove('selected'));

                    // Add 'selected' class to the clicked method
                    methodDiv.classList.add('selected');

                    // Check the corresponding radio button
                    const radioButton = methodDiv.querySelector('input[type="radio"]');
                    if (radioButton) {
                        radioButton.checked = true;
                        selectedPaymentMethod = radioButton.value; // Store the selected method
                    }
                });
            });

            // Final Pay Now button handler on the payment method step (Step 6)
            document.getElementById('final-pay-now-btn').addEventListener('click', () => {
                if (!selectedPaymentMethod) {
                    showMessageBox("Please select a payment method to proceed.");
                    return; // Prevent further execution if no payment method is selected
                }

                // Ensure total amount is greater than 0
                if (totalAmount <= 0) {
                    showMessageBox("Cannot process payment. Total amount must be greater than zero. Please select seats or snacks.");
                    return;
                }

                // Determine the cinema welcome message based on selectedCinemaName
                const selectedCinema = cinemaData.find(cinema => cinema.name === selectedCinemaName) || { welcomeMessage: "Thank you for your purchase! We eagerly await your visit!" };

                showMessageBox(`Payment successful! ${selectedCinema.welcomeMessage} Total paid: Ksh ${totalAmount.toFixed(2)}`);
            });


            // Initial load: Go to the first step
            navigateToStep(1);
            renderSeats(8, 10); // Example: 8 rows, 10 columns
            renderSnacks();
        });
