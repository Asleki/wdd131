        /* === Consolidated JavaScript from app_core.js, main_script.js, standalone_header.js, tv_shows.js === */

        // Data for hero slides (from main_script.js, if used)
        const heroSlides = [
            {
                backdrop: 'images/herobackdrops/allofusaredeadbackdrop.webp',
                poster: 'images/heroposters/allofusaredeadheroposter.webp',
                quote: 'We’re trapped, surrounded by dead things… and by dead people.',
            },
            {
                backdrop: 'images/herobackdrops/breakingbadbackdrop.webp',
                poster: 'images/heroposters/breakingbadheroposter.webp',
                quote: 'I am the one who knocks!',
            },
            {
                backdrop: 'images/herobackdrops/extractionbackdrop.webp',
                poster: 'images/heroposters/extractionheroposter.webp',
                quote: 'You send a boy to do a man\'s job.',
            },
            {
                backdrop: 'images/herobackdrops/moneyheistbackdrop.webp',
                poster: 'images/heroposters/moneyheistheroposter.webp',
                quote: 'The police are just like us. They\'re just doing their job.',
            },
            {
                backdrop: 'images/herobackdrops/prisonbreakbackdrop.webp',
                poster: 'images/heroposters/prisonbreakheroposter.webp',
                quote: 'Get yourself a plan and stick to it.',
            },
        ];

        let currentSlideIndex = 0;
        let heroSection, heroQuoteElement, heroPosterElement; // Global variables for hero section elements

        // Data for all shows (canonical source from app_core.js)
        const allShows = [
            {
                id: "moneyheist", // Added unique ID for easier lookup
                title: "Money Heist (La Casa de Papel)",
                categories: ["Trending", "International"],
                poster: "moneyheistposter1.webp",
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
                id: "moneyheistk", // Added unique ID
                title: "Money Heist (K-Drama)",
                categories: ["K-Drama", "Coming Soon"],
                poster: "moneyheistkoreaposter1.webp",
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
                id: "prisonbreak", // Added unique ID
                title: "Prison Break",
                categories: ["Action", "Hollywood"],
                poster: "prisonbreakposter1.webp",
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
                id: "inception", // Added unique ID
                title: "Inception",
                categories: ["Hollywood"],
                poster: "inceptioposter1.webp",
                imdb: "8.8/10 (Sci-Fi)",
                releaseDate: "July 16, 2010",
                seasons: "1 (Film)",
                episodes: "N/A (Film)",
                languages: "English",
                genre: "Action, Sci-Fi, Thriller",
                creators: "Christopher Nolan",
                cast: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page",
                networkLogo: "hbo.webp",
                networkText: "Watch Now",
                subscription: "Subscription/Rent/Buy",
                synopsis: "A thief who steals corporate secrets through use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the mission and his team to disaster."
            },
            {
                id: "breakingbad", // Added unique ID
                title: "Breaking Bad",
                categories: ["Trending", "Hollywood"],
                poster: "breakingbadposter1.webp",
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
                id: "theoffice", // Added unique ID
                title: "The Office",
                categories: ["Hollywood"],
                poster: "theofficeposter1.webp",
                imdb: "9.0/10 (Comedy)",
                releaseDate: "March 24, 2005",
                seasons: "9",
                episodes: "201",
                languages: "English",
                genre: "Comedy",
                creators: "Ricky Gervais, Stephen Merchant, Greg Daniels",
                cast: "Steve Carell, Rainn Wilson, John Krasinski",
                networkLogo: "pecock-logo.webp",
                networkText: "Watch Now",
                subscription: "Subscription Required",
                synopsis: "A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium. The everyday lives of the employees are seen through the lens of a documentary film crew."
            },
            {
                id: "yourhonor", // Added unique ID
                title: "Your Honor",
                categories: ["Hollywood", "Coming Soon"],
                poster: "yourhonorposter1.webp",
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
                id: "3idiots", // Added unique ID
                title: "3 Idiots",
                categories: ["Bollywood"],
                poster: "3idiotsposter1.webp",
                imdb: "8.4/10 (Comedy)",
                releaseDate: "December 25, 2009",
                seasons: "1 (Film)",
                episodes: "N/A (Film)",
                languages: "Hindi",
                genre: "Comedy, Drama, Romance",
                creators: "Rajkumar Hirani",
                cast: "Aamir Khan, Madhavan, Sharman Joshi",
                networkLogo: "primevideologo.webp",
                networkText: "Watch Now",
                subscription: "Subscription/Rent/Buy",
                synopsis: "Two friends embark on a quest for a third, long-lost friend, while reminiscing about their college days and the profound impact their eccentric, brilliant buddy had on their lives and perspectives on education and success."
            },
            {
                id: "ghoul", // Added unique ID
                title: "Ghoul",
                categories: ["Bollywood"],
                poster: "ghoulposter1.webp",
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
                id: "dangal", // Added unique ID
                title: "Dangal",
                categories: ["Bollywood"],
                poster: "dangalposter1.webp",
                imdb: "8.3/10 (Biography)",
                releaseDate: "December 23, 2016",
                seasons: "1 (Film)",
                episodes: "N/A (Film)",
                languages: "Hindi",
                genre: "Biography, Drama, Sport",
                creators: "Nitesh Tiwari",
                cast: "Aamir Khan, Fatima Sana Shaikh, Sanya Malhotra",
                networkLogo: "netflixlogo.webp",
                networkText: "Watch Now",
                subscription: "Subscription/Rent/Buy",
                synopsis: "Based on the true story of Mahavir Singh Phogat, a former wrestler who trains his daughters Geeta Phogat and Babita Kumari to become world-class female wrestlers, challenging societal norms and achieving international success."
            },
            {
                id: "nairobihalflife", // Added unique ID
                title: "Nairobi Half Life",
                categories: ["Kenyan Drama"],
                poster: "nairobihalflifeposter1.webp",
                imdb: "7.8/10 (Crime)",
                releaseDate: "October 31, 2012",
                seasons: "1 (Film)",
                episodes: "N/A (Film)",
                languages: "Swahili, Kikuyu, English",
                genre: "Crime, Drama",
                creators: "David 'Tosh' Gitonga (Director)",
                cast: "Joseph Wairimu, Olwenya Maina, Mugambi Nthiga",
                networkLogo: "youtubelogo.webp",
                networkText: "Watch Now",
                subscription: "May require Rent/Buy",
                synopsis: "Nairobi Half Life tells the story of Mwas, an aspiring actor from a rural town who travels to Nairobi to pursue his dreams. Faced with harsh city life, he’s pulled into a world of crime and must struggle to stay true to his dreams while surviving the city’s brutal realities. It's a powerful and gritty portrayal of urban life in Kenya."
            },
            {
                id: "crimeandjustice", // Added unique ID
                title: "Crime and Justice",
                categories: ["Kenyan Drama", "Trending", "Coming Soon"],
                poster: "crimeandjusticeposter1.webp",
                imdb: "7.0/10 (Crime)",
                releaseDate: "February 22, 2021",
                seasons: "3",
                episodes: "N/A",
                languages: "English, Swahili",
                genre: "Crime, Drama, Legal",
                creators: "Showmax Original",
                cast: "Sarah Hassan, Alfred Munyua, Maqbul Mohammed",
                networkLogo: "showmaxlogo.webp",
                networkText: "Watch Now",
                subscription: "Subscription Required",
                synopsis: "A Kenyan police procedural series that follows two detectives as they investigate various crimes in Nairobi. The show delves into the dark side of the city, exploring themes of corruption, greed, and the pursuit of justice."
            },
            {
                id: "dayofthejackal", // Added unique ID
                title: "The Day Of The Jackal",
                categories: ["International", "Coming Soon"],
                poster: "thedayofthejackalposter1.webp",
                imdb: "Expected",
                releaseDate: "Expected Premier: November 2024 (Series)",
                seasons: "1 (Upcoming Series)",
                episodes: "N/A",
                languages: "English",
                genre: "Thriller",
                creators: "Ronan Bennett",
                cast: "Eddie Redmayne, Lashana Lynch",
                networkLogo: "pecock-logo.webp",
                networkText: "Watch Trailer",
                subscription: "Free",
                synopsis: "An upcoming modern-day reimagining of the iconic novel and film, following a professional assassin known as 'The Jackal' as he undertakes a mission to assassinate a high-profile target."
            },
            {
                id: "traintobusan", // Added unique ID
                title: "Train To Busan",
                categories: ["K-Drama"],
                poster: "traintobusanposter1.webp",
                imdb: "7.6/10 (Action)",
                releaseDate: "July 20, 2016",
                seasons: "1 (Film)",
                episodes: "N/A (Film)",
                languages: "Korean",
                genre: "Action, Horror, Thriller",
                creators: "Yeon Sang-ho (Director)",
                cast: "Gong Yoo, Jung Yu-mi, Ma Dong-seok",
                networkLogo: "amazon-prime-logo-free-png.webp",
                networkText: "Watch Now",
                subscription: "Subscription/Rent/Buy",
                synopsis: "While a zombie apocalypse breaks out in South Korea, a father and daughter, along with other passengers, are trapped on a high-speed train fighting for their lives as the infection spreads rapidly."
            },
            {
                id: "extraction", // Added unique ID
                title: "Extraction",
                categories: ["Hollywood", "Coming Soon"],
                poster: "extractionposter1.webp",
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
                id: "allofusaredead", // Added unique ID
                title: "All Of Us Are Dead",
                categories: ["K-Drama", "Coming Soon"],
                poster: "allofusaredeadposter1.webp",
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
                id: "strangerthings", // Added unique ID
                title: "Stranger Things",
                categories: ["Hollywood"],
                poster: "strangerthingsposter1.webp",
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
                id: "lupin", // Added unique ID
                title: "Lupin",
                categories: ["International"],
                poster: "lupinposter1.webp",
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
                id: "squidgame", // Added unique ID
                title: "Squid Game",
                categories: ["Trending", "K-Drama", "Coming Soon"],
                poster: "squidgameposter1.webp",
                imdb: "8.0/10 (Action)",
                releaseDate: "September 17, 2021",
                seasons: "2 (Expected)",
                episodes: "9 (Season 1)",
                languages: "Korean, English",
                genre: "Action, Thriller, Drama",
                creators: "Hwang Dong-hyuk",
                cast: "Lee Jung-jae, Park Hae-soo, Jung Ho-yeon",
                networkLogo: "netflixlogo.webp",
                networkText: "Watch Now",
                subscription: "Subscription Required",
                synopsis: "When a man with a huge debt is invited to play a series of children's games for a life-changing sum of money. The catch is, losing means death. The second season is highly anticipated."
            },
            {
                id: "secondwife", // Added unique ID
                title: "Second Wife",
                categories: ["Kenyan Drama", "Coming Soon"],
                poster: "secondfamilyposter1.webp",
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
                id: "40sticks", // Added unique ID
                title: "40 Sticks",
                categories: ["Kenyan Drama"],
                poster: "40sticksposter1.webp",
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

        // Quotes data, indexed by show ID for easy lookup (canonical source from app_core.js)
        const allShowQuotes = {
            "moneyheist": [
                { quote: "Let the matriarchy begin.", character: "Nairobi" },
                { quote: "The plan is everything.", character: "The Professor" },
                { quote: "We are the resistance.", character: "Tokyo" }
            ],
            "moneyheistk": [
                { quote: "Prepare for a new kind of heist.", character: "Trailer Narrator" },
                { quote: "The game is about to change.", character: "Unidentified" }
            ],
            "prisonbreak": [
                { quote: "Have a little faith.", character: "Michael Scofield" },
                { quote: "Just because you have a talent for something doesn't mean you have to do it.", character: "Lincoln Burrows" },
                { quote: "I understand. Sometimes you have to make a choice. And sometimes that choice is going to hurt someone.", character: "Dr. Sara Tancredi" }
            ],
            "inception": [
                { quote: "Your mind is the scene of the crime.", character: "Dom Cobb" },
                { quote: "Dreams feel real while we're in them, it's only when we wake up that we realize something was actually strange.", character: "Dom Cobb" }
            ],
            "breakingbad": [
                { quote: "I am the one who knocks!", character: "Walter White" },
                { quote: "Yeah, science!", character: "Jesse Pinkman" },
                { quote: "Tread lightly.", character: "Walter White" }
            ],
            "theoffice": [
                { quote: "I'm not superstitious, but I am a little stitious.", character: "Michael Scott" },
                { quote: "That's what she said.", character: "Michael Scott" },
                { quote: "Bears. Beets. Battlestar Galactica.", character: "Dwight Schrute" }
            ],
            "yourhonor": [
                { quote: "How far would you go to protect your child?", character: "Bryan Cranston (Trailer)" },
                { quote: "Justice isn't always fair.", character: "Narrator" }
            ],
            "3idiots": [
                { quote: "All Izz Well.", character: "Rancho" },
                { quote: "Chase excellence, success will follow.", character: "Rancho" }
            ],
            "ghoul": [
                { quote: "The truth will set you free, but first it will make you miserable.", character: "Nida Rahim" },
                { quote: "Some demons are not meant to be exorcised.", character: "Colonel Dacunha" }
            ],
            "dangal": [
                { quote: "Our daughters are no less than anyone.", character: "Mahavir Singh Phogat" },
                { quote: "You have to fight like a boy, but you can still be a girl.", character: "Geeta Phogat" }
            ],
            "nairobihalflife": [
                { quote: "Nairobi will chew you and spit you out.", character: "Oti" },
                { quote: "You think life is a movie?", character: "Mosquito" },
                { quote: "Dreams are expensive here.", character: "Mwas" }
            ],
            "crimeandjustice": [
                { quote: "Justice will prevail, no matter the cost.", character: "Detective Kemi" },
                { quote: "The city never sleeps, and neither do its crimes.", character: "Narrator" }
            ],
            "dayofthejackal": [
                { quote: "The most dangerous weapon is the one you don't see coming.", character: "Trailer voice" }
            ],
            "traintobusan": [
                { quote: "Don't ever lose your humanity.", character: "Seok-woo" },
                { quote: "In a world of zombies, the real monsters are human.", character: "Sang-hwa" }
            ],
            "extraction": [
                { quote: "Some walls need breaking down.", character: "Tyler Rake" },
                { quote: "The mission is everything.", character: "Saju" }
            ],
            "allofusaredead": [
                { quote: "Survival is not a choice, it's a fight.", character: "Trailer voice" },
                { quote: "We are all dead, or we are all alive.", character: "Nam On-jo" }
            ],
            "strangerthings": [
                { quote: "Friends don't lie.", character: "Eleven" },
                { quote: "Mornings are for coffee and contemplation.", character: "Chief Hopper" },
                { quote: "She's our friend and she's crazy!", character: "Dustin Henderson" }
            ],
            "lupin": [
                { quote: "I'm a gentleman thief. I steal only from the rich.", character: "Assane Diop" },
                { quote: "Lupin is more than just a name, it's an idea.", character: "Assane Diop" }
            ],
            "squidgame": [
                { quote: "The games are just to give everyone an equal chance.", character: "The Front Man" },
                { quote: "You don't trust people because they can easily break.", character: "Kang Sae-byeok" },
                { quote: "I'm a Gganbu.", character: "Oh Il-nam" }
            ],
            "secondwife": [
                { quote: "Love knows no bounds, but secrets have consequences.", character: "Narrator" }
            ],
            "40sticks": [
                { quote: "The wild will test your limits.", character: "Prisoner" },
                { quote: "Survival is not a game.", character: "Another Prisoner" }
            ]
        };

        /**
         * Updates the content of the hero section with the current slide's data.
         * This function is called periodically to cycle through hero slides.
         * (From main_script.js, only relevant if heroSection is present in HTML)
         */
        function updateHeroSection() {
            if (!heroSection || heroSlides.length === 0 || !heroQuoteElement || !heroPosterElement) {
                console.warn("Hero section elements not found or no hero slides defined. Skipping hero section update.");
                if (heroSection) heroSection.style.display = 'none'; // Hide if elements are missing
                return;
            }

            const currentSlide = heroSlides[currentSlideIndex];
            heroSection.style.backgroundImage = `url('${currentSlide.backdrop}')`;
            heroPosterElement.src = currentSlide.poster;
            heroPosterElement.alt = `Poster for ${currentSlide.quote.substring(0, Math.min(currentSlide.quote.length, 20))}...`; // Use part of quote as alt text
            heroQuoteElement.textContent = currentSlide.quote;

            currentSlideIndex = (currentSlideIndex + 1) % heroSlides.length;
        }

        /**
         * Displays a custom styled message box with an icon.
         * This is the canonical showMessageBox function, now using the existing #customAlert element.
         * @param {string} message The message to display.
         * @param {string} [iconClass='fas fa-info-circle'] Font Awesome icon class.
         */
        function showMessageBox(message, iconClass = 'fas fa-info-circle') {
            const customAlert = document.getElementById('customAlert');
            const alertMessage = document.getElementById('alertMessage');
            const alertIcon = customAlert.querySelector('.alert-icon'); // Select by class within customAlert
            const closeAlertBtn = document.getElementById('closeAlert');

            if (!customAlert || !alertMessage || !alertIcon || !closeAlertBtn) {
                console.error("Custom alert elements not found. Cannot display message box.");
                alert(message); // Fallback to browser alert
                return;
            }

            alertMessage.textContent = message;
            // Remove previous icon classes and add new ones
            alertIcon.className = 'alert-icon'; // Reset to base class
            iconClass.split(' ').forEach(cls => alertIcon.classList.add(cls)); // Add new classes

            customAlert.classList.add('show'); // Make visible

            // Remove previous event listener if any to prevent multiple firings
            const oldCloseHandler = customAlert.dataset.closeHandler;
            if (oldCloseHandler) {
                closeAlertBtn.removeEventListener('click', window[oldCloseHandler]); // Assuming handler was globally accessible
            }

            // Create a new unique function for the event listener to avoid re-attachment issues
            const newCloseHandler = () => {
                customAlert.classList.remove('show');
            };
            closeAlertBtn.addEventListener('click', newCloseHandler);
            // Store a reference to the new handler for later removal if needed, though simple removal is often sufficient for single buttons
            customAlert.dataset.closeHandler = newCloseHandler.name || 'anonymousCloseHandler'; // Store a name or placeholder

            // Clear previous timeout for auto-hide if it exists
            if (customAlert.dataset.hideTimeout) {
                clearTimeout(customAlert.dataset.hideTimeout);
            }
            customAlert.dataset.hideTimeout = setTimeout(() => {
                if (customAlert.classList.contains('show')) {
                    customAlert.classList.remove('show');
                }
            }, 5000); // Hide after 5 seconds
        }

        /**
         * Renders a single show card for the TV Shows grid.
         * @param {object} showData - The data object for the show.
         * @returns {HTMLElement} The created show card element.
         * (From app_core.js / tv_shows.js)
         */
        function createShowCardHTML(showData) {
            const showCard = document.createElement('a');
            showCard.href = `details.html?title=${encodeURIComponent(showData.title)}`; // Link to details page
            showCard.classList.add('show-card');

            showCard.innerHTML = `
                <img src="images/posters/${showData.poster}" alt="${showData.title} Poster" onerror="this.onerror=null;this.src='https://placehold.co/250x350/333/fff?text=No+Poster';">
                <div class="show-info">
                    <h3>${showData.title}</h3>
                    <p><strong>Genre:</strong> ${showData.genre}</p>
                    <p><strong>IMDb:</strong> ${showData.imdb}</p>
                    <p><strong>Release Date:</strong> ${showData.releaseDate}</p>
                    <div class="synopsis-controls-container">
                        <p class="synopsis-text" data-full-synopsis="${showData.synopsis}">
                            ${showData.synopsis.length > 150 ? showData.synopsis.substring(0, 150) + '...' : showData.synopsis}
                        </p>
                        ${showData.synopsis.length > 150 ? `
                            <div class="synopsis-controls">
                                <button class="read-more-btn">Read More</button>
                                <button class="read-less-btn">Read Less</button>
                            </div>
                        ` : ''}
                    </div>
                </div>
            `;
            return showCard;
        }

        /**
         * Attaches event listeners for "Read More" and "Read Less" buttons on synopsis text.
         * @param {HTMLElement} container - The parent container to which event delegation should be applied.
         * (From app_core.js / tv_shows.js)
         */
        function addSynopsisToggleListeners(container) {
            container.addEventListener('click', (event) => {
                const target = event.target;
                if (target.classList.contains('read-more-btn')) {
                    event.preventDefault(); // Prevent navigating away
                    const synopsisText = target.closest('.synopsis-controls-container').querySelector('.synopsis-text');
                    if (synopsisText) {
                        synopsisText.classList.add('expanded');
                        synopsisText.textContent = synopsisText.dataset.fullSynopsis;
                        target.style.display = 'none';
                        target.nextElementSibling.style.display = 'inline-flex'; // Show read less
                    }
                } else if (target.classList.contains('read-less-btn')) {
                    event.preventDefault(); // Prevent navigating away
                    const synopsisText = target.closest('.synopsis-controls-container').querySelector('.synopsis-text');
                    if (synopsisText) {
                        synopsisText.classList.remove('expanded');
                        synopsisText.textContent = synopsisText.dataset.fullSynopsis.substring(0, 150) + '...';
                        target.style.display = 'none';
                        target.previousElementSibling.style.display = 'inline-flex'; // Show read more
                    }
                }
            });
        }


        // Global variables for header search functionality (from standalone_header.js)
        let searchScope = null;
        let selectedIndex = -1;
        let userLoggedIn = true; // Placeholder, adjust as needed for actual login
        let currentUsername = "Jane Doe"; // Updated default username



        function getUniqueValues(key) {
            const values = allShows.map(show => show[key]).flat();
            return [...new Set(values)].filter(Boolean).sort();
        }

        function showPrimarySuggestions() {
            const suggestionsBox = document.getElementById("suggestionsBox");
            if (!suggestionsBox) return;
            suggestionsBox.innerHTML = "";
            primaryFilters.forEach((filter, index) => {
                const div = document.createElement("div");
                div.textContent = filter.display;
                div.dataset.type = filter.type;
                div.dataset.index = index;
                if (index === selectedIndex) div.classList.add("selected");
                suggestionsBox.appendChild(div);
            });
            suggestionsBox.classList.add("active");
        }

        function renderScopedValueSuggestions(val) {
            const suggestionsBox = document.getElementById("suggestionsBox");
            if (!suggestionsBox) return;
            suggestionsBox.innerHTML = "";

            let uniqueValues = [];
            if (searchScope === "release year") {
                uniqueValues = [...new Set(allShows.map(show => show.releaseDate.match(/\d{4}/)?.[0]).filter(Boolean))].sort();
            } else {
                uniqueValues = getUniqueValues(searchScope.replace(/\s/g, ''));
            }

            const filteredValues = uniqueValues.filter(value =>
                value.toLowerCase().includes(val.toLowerCase())
            );

            if (filteredValues.length > 0) {
                filteredValues.forEach((value, index) => {
                    const div = document.createElement("div");
                    div.textContent = value;
                    div.dataset.type = `${searchScope}:${value}`; // e.g., "category:Hollywood"
                    div.dataset.index = index;
                    if (index === selectedIndex) div.classList.add("selected");
                    suggestionsBox.appendChild(div);
                });
                suggestionsBox.classList.add("active");
            } else {
                suggestionsBox.classList.remove("active");
            }
        }

        function renderShowTitleSuggestions(val, currentScope = null) {
            const suggestionsBox = document.getElementById("suggestionsBox");
            if (!suggestionsBox) return;
            suggestionsBox.innerHTML = "";

            let filteredShows = allShows;
            if (currentScope && currentScope.includes(':')) {
                const [type, value] = currentScope.split(':');
                filteredShows = allShows.filter(show => {
                    if (Array.isArray(show[type.replace(/\s/g, '')])) {
                        return show[type.replace(/\s/g, '')].includes(value);
                    }
                    return String(show[type.replace(/\s/g, '')]) === value;
                });
            }

            const matchedShows = filteredShows.filter(show =>
                show.title.toLowerCase().includes(val.toLowerCase())
            );

            if (matchedShows.length > 0) {
                matchedShows.forEach((show, index) => {
                    const div = document.createElement("div");
                    div.textContent = show.title;
                    div.dataset.type = "show";
                    div.dataset.title = show.title;
                    div.dataset.index = index;
                    if (index === selectedIndex) div.classList.add("selected");
                    suggestionsBox.appendChild(div);
                });
                suggestionsBox.classList.add("active");
            } else {
                suggestionsBox.classList.remove("active");
            }
        }

        function updateAccountDropdown() {
            const accountDropdown = document.getElementById("accountDropdown");
            if (!accountDropdown) return;
            accountDropdown.innerHTML = ""; // Clear existing content

            if (userLoggedIn) {
                // Logged in menu
                const profileLink = document.createElement("a");
                profileLink.href = "#"; // Link to user profile page
                profileLink.innerHTML = `<i class="fas fa-user-circle"></i> View Profile (${currentUsername})`;
                accountDropdown.appendChild(profileLink);

                const playlistLink = document.createElement("a");
                playlistLink.href = "#"; // Link to playlist page
                playlistLink.innerHTML = `<i class="fas fa-list-ul"></i> Playlist`;
                accountDropdown.appendChild(playlistLink);

                const favoriteLink = document.createElement("a");
                favoriteLink.href = "#"; // Link to favorite page
                favoriteLink.innerHTML = `<i class="fas fa-heart"></i> Favorite`;
                accountDropdown.appendChild(favoriteLink);

                const settingsLink = document.createElement("a");
                settingsLink.href = "#"; // Link to settings page
                settingsLink.innerHTML = `<i class="fas fa-cog"></i> Settings`;
                accountDropdown.appendChild(settingsLink);

                const logoutLink = document.createElement("a");
                logoutLink.href = "#"; // For logout functionality
                logoutLink.classList.add("logout-item");
                logoutLink.innerHTML = `<i class="fas fa-sign-out-alt"></i> Logout`;
                logoutLink.addEventListener("click", (e) => {
                    e.preventDefault();
                    userLoggedIn = false; // Simulate logout
                    updateAccountDropdown(); // Update dropdown immediately
                    showMessageBox("You have been logged out.", "fas fa-check-circle green-icon");
                    accountDropdown.classList.remove("visible"); // Hide dropdown after logout
                });
                accountDropdown.appendChild(logoutLink);
            } else {
                // Not logged in menu
                const loginLink = document.createElement("a");
                loginLink.href = "login.html"; // Link to login page
                loginLink.innerHTML = `<i class="fas fa-sign-in-alt"></i> Login`;
                accountDropdown.appendChild(loginLink);

                const signupLink = document.createElement("a");
                signupLink.href = "signup.html"; // Link to signup page
                signupLink.innerHTML = `<i class="fas fa-user-plus"></i> Sign Up`;
                accountDropdown.appendChild(signupLink);

                const playlistLink = document.createElement("a");
                playlistLink.href = "#";
                playlistLink.classList.add("disabled-link"); // Apply disabled styling
                playlistLink.innerHTML = `<i class="fas fa-list-ul"></i> Playlist`;
                playlistLink.addEventListener("click", (e) => {
                    e.preventDefault();
                    showMessageBox("Please Log in to view your Favourites.", "fas fa-info-circle blue-icon");
                });
                accountDropdown.appendChild(playlistLink);

                const favoriteLink = document.createElement("a");
                favoriteLink.href = "#";
                favoriteLink.classList.add("disabled-link"); // Apply disabled styling
                favoriteLink.innerHTML = `<i class="fas fa-heart"></i> Favorite`;
                favoriteLink.addEventListener("click", (e) => {
                    e.preventDefault();
                    showMessageBox("Please Log in to view your playlist.", "fas fa-info-circle blue-icon"); // Same message as playlist
                });
                accountDropdown.appendChild(favoriteLink);
            }
        }

        // --- Main execution logic for consolidated scripts ---
        document.addEventListener('DOMContentLoaded', () => {
            // Last Modified Date (from main_script.js)
            const lastModifiedSpan = document.getElementById('last-modified');
            if (lastModifiedSpan) {
                lastModifiedSpan.textContent = new Date(document.lastModified).toLocaleDateString();
            } else {
                console.warn("Last Modified span not found.");
            }

            // Dark Mode Toggle (from standalone_header.js and main_script.js combined)
            const darkModeToggle = document.getElementById('darkModeToggle');
            const body = document.body;
            const savedTheme = localStorage.getItem('theme');

            if (savedTheme === 'dark') {
                body.classList.add('dark-mode');
            } else {
                body.classList.remove('dark-mode');
            }

            if (darkModeToggle) {
                darkModeToggle.addEventListener('click', () => {
                    body.classList.toggle('dark-mode');
                    if (body.classList.contains('dark-mode')) {
                        localStorage.setItem('theme', 'dark');
                    } else {
                        localStorage.setItem('theme', 'light');
                    }
                });
            } else {
                console.warn("Dark mode toggle element not found. Dark mode functionality skipped.");
            }

            // Header Action Button Logic (from watch.js, standalone_header.js)
            const addIcon = document.getElementById("addIcon");
            const accountIcon = document.getElementById("accountIcon");
            const accountDropdown = document.getElementById("accountDropdown");
            const searchIcon = document.getElementById("searchIcon");
            const searchSubheader = document.getElementById("searchSubheader");
            const searchInput = document.getElementById("searchInput");
            const clearSearch = document.getElementById("clearSearch");
            const suggestionsBox = document.getElementById("suggestionsBox");


            // Populate initial account dropdown state
            updateAccountDropdown();

            // Add Show Icon click handler
            if (addIcon) {
                addIcon.addEventListener('click', (event) => {
                    event.preventDefault(); // Prevent default link behavior
                    if (userLoggedIn) {
                        showMessageBox("Add to Watchlist functionality is coming soon!", "fas fa-info-circle blue-icon");
                    } else {
                        showMessageBox("You must be logged in to add shows!", "fas fa-exclamation-triangle red-icon");
                    }
                });
            }

            // Account Icon click handler
            if (accountIcon) {
                accountIcon.addEventListener('click', (event) => {
                    event.preventDefault();
                    accountDropdown.classList.toggle("visible");
                });
            }


            // Search Icon/Subheader Logic
            if (searchIcon && searchSubheader && searchInput && suggestionsBox) {
                searchIcon.addEventListener('click', (event) => {
                    event.preventDefault();
                    searchSubheader.classList.toggle("hidden");
                    if (!searchSubheader.classList.contains("hidden")) {
                        searchInput.focus();
                        showPrimarySuggestions();
                    } else {
                        suggestionsBox.classList.remove("active");
                        searchInput.value = "";
                        searchScope = null; // Reset search scope
                    }
                });

                clearSearch.addEventListener("click", () => {
                    searchInput.value = "";
                    searchScope = null;
                    showPrimarySuggestions();
                    searchInput.focus();
                });

                searchInput.addEventListener("focus", () => {
                    if (searchInput.value.trim() === "" && !searchScope) {
                        showPrimarySuggestions();
                    } else if (searchScope && !searchScope.includes(':')) {
                        renderScopedValueSuggestions(searchInput.value.trim());
                    } else if (searchScope && searchScope.includes(':')) {
                        renderShowTitleSuggestions(searchInput.value.trim(), searchScope);
                    }
                });

                searchInput.addEventListener("blur", (e) => {
                    // Delay hiding to allow click events on suggestions to fire
                    setTimeout(() => {
                        if (!suggestionsBox.contains(document.activeElement)) {
                            suggestionsBox.classList.remove("active");
                        }
                    }, 100);
                });

                suggestionsBox.addEventListener("click", (event) => {
                    const target = event.target;
                    // Check if the clicked target is a div inside suggestionsBox
                    if (target.closest('.suggestions-box div')) {
                        const type = target.dataset.type;
                        if (type && type.includes(':')) { // Specific filter selected (e.g., "category:Hollywood")
                            searchScope = type;
                            searchInput.value = `${type} `; // Set input value, add space for next search
                            renderShowTitleSuggestions("", searchScope); // Show all shows for this filter
                            searchInput.focus();
                        } else if (type && type !== "show") { // Primary filter selected (e.g., "category")
                            searchScope = type;
                            searchInput.value = `${type}: `; // Set input value for user to type value
                            renderScopedValueSuggestions(""); // Show all values for this type
                            searchInput.focus();
                        } else if (type === "show") { // Data type is "show" for direct navigation
                            const title = target.dataset.title;
                            window.location.href = `details.html?title=${title}`;
                        }
                        selectedIndex = -1; // Reset keyboard selection after click
                    }
                });

                // Handle input changes in the search bar
                searchInput.addEventListener("input", () => {
                    selectedIndex = -1; // Reset keyboard selection on input
                    const val = searchInput.value.trim();

                    if (!searchScope) {
                        // No search scope selected yet
                        if (val === "") {
                            showPrimarySuggestions(); // Show primary filters if input is empty
                        } else {
                            renderShowTitleSuggestions(val); // Directly search and suggest show titles
                        }
                    } else {
                        // A search scope is active (e.g., "category" or "category:Hollywood")
                        if (searchScope.includes(':')) {
                            // If it's a specific filter (e.g., "category:Hollywood"), now search for show titles within that filter
                            renderShowTitleSuggestions(val, searchScope);
                        } else {
                            // If it's just a primary type (e.g., "category"), show values for that type
                            renderScopedValueSuggestions(val);
                        }
                    }
                });

                // Close search subheader and account dropdown if clicked outside
                document.addEventListener("click", e => {
                    const isClickInsideSearchIcon = searchIcon && searchIcon.contains(e.target);
                    const isClickInsideSearchSubheader = searchSubheader && searchSubheader.contains(e.target);
                    const isClickInsideAccountIcon = accountIcon && accountIcon.contains(e.target);
                    const isClickInsideAccountDropdown = accountDropdown && accountDropdown.contains(e.target);

                    // Hide search subheader if clicked outside its area and icon
                    if (!searchSubheader.classList.contains("hidden") && !isClickInsideSearchIcon && !isClickInsideSearchSubheader) {
                        searchSubheader.classList.add("hidden");
                        suggestionsBox.classList.remove("active");
                        searchInput.value = "";
                        searchScope = null; // Reset search scope
                    }

                    // Hide account dropdown if clicked outside its area and icon
                    if (accountDropdown && accountDropdown.classList.contains("visible") && !isClickInsideAccountIcon && !isClickInsideAccountDropdown) {
                        accountDropdown.classList.remove("visible");
                    }
                });

            } else {
                console.warn("Search elements not found. Search functionality skipped.");
            }

            // --- tv_shows.js specific logic ---
            const tvShowsListContainer = document.getElementById('tvShowsList');

            if (typeof allShows === 'undefined') {
                console.error("allShows data is not available. Please ensure app_core.js is loaded correctly.");
                if (tvShowsListContainer) {
                    tvShowsListContainer.innerHTML = '<p class="no-shows-message">Error: Could not load TV shows data.</p>';
                }
                return;
            }

            // Filter for TV shows: A show is considered a TV show if its 'seasons' property is not "1 (Film)"
            // and if it's not explicitly an "N/A (Film)" for seasons, implying it's a series (even if coming soon).
            const tvShows = allShows.filter(show =>
                show.seasons !== "1 (Film)" && !(show.seasons === "N/A" && show.episodes === "N/A")
            );

            if (tvShowsListContainer) {
                tvShowsListContainer.innerHTML = ''; // Clear loading message

                if (tvShows.length > 0) {
                    tvShows.forEach(show => {
                        const showCardElement = createShowCardHTML(show); // Use the function from app_core.js
                        // Add click listener to the entire card, but prevent if clicking on synopsis toggle buttons
                        showCardElement.addEventListener('click', (event) => {
                            // Only navigate if the click target is NOT a synopsis toggle button
                            if (!event.target.closest('.read-more-btn') && !event.target.closest('.read-less-btn')) {
                                window.location.href = `details.html?title=${encodeURIComponent(show.title)}`;
                            }
                        });

                        tvShowsListContainer.appendChild(showCardElement);
                    });

                    // After all cards are added, attach synopsis toggle listeners to the container
                    addSynopsisToggleListeners(tvShowsListContainer);

                } else {
                    tvShowsListContainer.innerHTML = '<p class="no-shows-message">No TV shows found at this time.</p>';
                }
            } 
        });
