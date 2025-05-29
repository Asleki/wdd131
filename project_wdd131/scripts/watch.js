// Data for all shows
const allShows = [
    {
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
        networkLogo: "netflixwordlogo.webp",
        networkText: "Watch Now",
        subscription: "Subscription Required",
        synopsis: "A mysterious man known as 'The Professor' recruits a band of eight robbers to carry out an ambitious plan: to steal billions of euros from the Royal Mint of Spain. As the heist unfolds, the team grapples with hostages, police, and personal conflicts, turning the robbery into a complex game of cat and mouse. Known for its intricate plot twists and strong character development."
    },
    {
        title: "Money Heist (K-Drama)",
        categories: ["K-Drama", "Coming Soon"],
        poster: "moneyheistkdramaposter1.webp",
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
        poster: "prisonbreakposter1.webp",
        imdb: "8.3/10 (Action)",
        releaseDate: "August 29, 2005",
        seasons: "5",
        episodes: "90",
        languages: "English",
        genre: "Action, Crime, Drama, Thriller",
        creators: "Paul Scheuring",
        cast: "Wentworth Miller, Dominic Purcell, Amaury Nolasco",
        networkLogo: "Hulu-logo-green-on-black-.webp",
        networkText: "Watch Now",
        subscription: "Subscription Required",
        synopsis: "When his brother, Lincoln Burrows, is wrongly sentenced to death, a structural engineer, Michael Scofield, devises an elaborate plan to break him out of prison—starting by getting incarcerated himself. A thrilling ride full of twists, tension, and brotherly loyalty as they navigate their escape and evade authorities."
    },
    {
        title: "Inception",
        categories: ["Hollywood"],
        poster: "inceptionposter1.webp",
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
        poster: "breakingbadposter1.webp",
        imdb: "9.5/10 (Crime)",
        releaseDate: "January 20, 2008",
        seasons: "5",
        episodes: "62",
        languages: "English",
        genre: "Crime, Drama, Thriller",
        creators: "Vince Gilligan",
        cast: "Bryan Cranston, Aaron Paul, Anna Gunn",
        networkLogo: "netflixwordlogo.webp",
        networkText: "Watch Now",
        subscription: "Subscription Required",
        synopsis: "Breaking Bad follows Walter White, a high school chemistry teacher turned methamphetamine producer, as he partners with former student Jesse Pinkman. Faced with a cancer diagnosis and financial hardship, Walter descends into a criminal underworld that transforms his identity and relationships, exploring themes of morality, family, and ambition."
    },
    {
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
        networkLogo: "peacock.webp", // Assuming Peacock (US)
        networkText: "Watch Now",
        subscription: "Subscription Required",
        synopsis: "A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium. The everyday lives of the employees are seen through the lens of a documentary film crew."
    },
    {
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
        networkLogo: "amazon-prime-logo-free-png.webp", // Assuming Prime Video
        networkText: "Watch Now",
        subscription: "Subscription/Rent/Buy",
        synopsis: "Two friends embark on a quest for a third, long-lost friend, while reminiscing about their college days and the profound impact their eccentric, brilliant buddy had on their lives and perspectives on education and success."
    },
    {
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
        networkLogo: "netflixwordlogo.webp",
        networkText: "Watch Now",
        subscription: "Subscription Required",
        synopsis: "A newly appointed interrogator arrives at a remote military detention center to question a dangerous terrorist, only to discover that the detainee is not what he seems and harbors a terrifying supernatural entity."
    },
    {
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
        networkLogo: "netflixwordlogo.webp", // Also available on Netflix
        networkText: "Watch Now",
        subscription: "Subscription/Rent/Buy",
        synopsis: "Based on the true story of Mahavir Singh Phogat, a former wrestler who trains his daughters Geeta Phogat and Babita Kumari to become world-class female wrestlers, challenging societal norms and achieving international success."
    },
    {
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
        networkLogo: "youtubelogo.webp", // Often available on YouTube or local VOD
        networkText: "Watch Now",
        subscription: "May require Rent/Buy",
        synopsis: "Nairobi Half Life tells the story of Mwas, an aspiring actor from a rural town who travels to Nairobi to pursue his dreams. Faced with harsh city life, he’s pulled into a world of crime and must struggle to stay true to his dreams while surviving the city’s brutal realities. It's a powerful and gritty portrayal of urban life in Kenya."
    },
    {
        title: "Crime and Justice",
        categories: ["Kenyan Drama", "Trending", "Coming Soon"],
        poster: "crimeandjusticeposter1.webp",
        imdb: "7.0/10 (Crime)", // Estimate, as IMDb doesn't show a clear rating
        releaseDate: "February 22, 2021",
        seasons: "3", // As of my last update
        episodes: "N/A",
        languages: "English, Swahili",
        genre: "Crime, Drama, Legal",
        creators: "Showmax Original",
        cast: "Sarah Hassan, Alfred Munyua, Maqbul Mohammed",
        networkLogo: "showmax.webp", // Assuming Showmax logo if you have it
        networkText: "Watch Now",
        subscription: "Subscription Required",
        synopsis: "A Kenyan police procedural series that follows two detectives as they investigate various crimes in Nairobi. The show delves into the dark side of the city, exploring themes of corruption, greed, and the pursuit of justice."
    },
    {
        title: "The Day Of The Jackal",
        categories: ["International", "Coming Soon"],
        poster: "thedayofthejackalposter1.webp", // Adjusted to .webp as per requirement
        imdb: "Expected",
        releaseDate: "Expected Premier: November 2024 (Series)",
        seasons: "1 (Upcoming Series)",
        episodes: "N/A",
        languages: "English",
        genre: "Thriller",
        creators: "Ronan Bennett",
        cast: "Eddie Redmayne, Lashana Lynch",
        networkLogo: "peacock.webp", // SkyShowtime/Peacock
        networkText: "Watch Trailer",
        subscription: "Free",
        synopsis: "An upcoming modern-day reimagining of the iconic novel and film, following a professional assassin known as 'The Jackal' as he undertakes a mission to assassinate a high-profile target."
    },
    {
        title: "Train To Busan",
        categories: ["K-Drama"],
        poster: "traintobusanposter1.webp", // Adjusted to .webp as per requirement
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
        networkLogo: "netflixwordlogo.webp",
        networkText: "Watch Now",
        subscription: "Subscription Required",
        synopsis: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl with extraordinary powers."
    },
    {
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
        networkLogo: "netflixwordlogo.webp",
        networkText: "Watch Now",
        subscription: "Subscription Required",
        synopsis: "Inspired by the adventures of Arsène Lupin, master of disguise and gentleman thief Assane Diop sets out to avenge his father for an injustice inflicted by a wealthy family."
    },
    {
        title: "Squid Game",
        categories: ["Trending", "K-Drama", "Coming Soon"],
        poster: "squidgameposter1.webp",
        imdb: "8.0/10 (Action)",
        releaseDate: "September 17, 2021",
        seasons: "2 (Expected)", // Season 2 is coming soon
        episodes: "9 (Season 1)",
        languages: "Korean, English",
        genre: "Action, Thriller, Drama",
        creators: "Hwang Dong-hyuk",
        cast: "Lee Jung-jae, Park Hae-soo, Jung Ho-yeon",
        networkLogo: "netflixwordlogo.webp",
        networkText: "Watch Now", // For Season 1
        subscription: "Subscription Required",
        synopsis: "When a man with a huge debt is invited to play a series of children's games for a life-changing sum of money. The catch is, losing means death. The second season is highly anticipated."
    },
    {
        title: "Second Wife",
        categories: ["Kenyan Drama", "Coming Soon"],
        poster: "secondfamilyposter1.webp", // Assuming this is Second Wife/Family
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
        poster: "40sticksposter1.webp",
        imdb: "6.2/10 (Action)",
        releaseDate: "October 2, 2020",
        seasons: "1 (Film)",
        episodes: "N/A (Film)",
        languages: "Swahili, English",
        genre: "Action, Crime, Thriller",
        creators: "Victor Gatonye (Director)",
        cast: "Robert Agengo, Mwaura Bilal, Andreo Kamau",
        networkLogo: "netflixwordlogo.webp", // Available on Netflix
        networkText: "Watch Now",
        subscription: "Subscription Required",
        synopsis: "When a prison bus crashes in the middle of a forest, a group of convicts must work together to survive the harsh wilderness while evading an unknown, deadly threat lurking in the shadows."
    }
];

// Quotes data (indexed by show order in allShows array for easy lookup)
const allShowQuotes = [
    // Money Heist
    [
        { quote: "Let the matriarchy begin.", character: "Nairobi" },
        { quote: "The plan is everything.", character: "The Professor" },
        { quote: "We are the resistance.", character: "Tokyo" }
    ],
    // Money Heist K-Drama (Coming Soon - less specific quotes)
    [
        { quote: "Prepare for a new kind of heist.", character: "Trailer Narrator" },
        { quote: "The game is about to change.", character: "Unidentified" }
    ],
    // Prison Break
    [
        { quote: "Have a little faith.", character: "Michael Scofield" },
        { quote: "Just because you have a talent for something doesn't mean you have to do it.", character: "Lincoln Burrows" },
        { quote: "I understand. Sometimes you have to make a choice. And sometimes that choice is going to hurt someone.", character: "Dr. Sara Tancredi" }
    ],
    // Inception
    [
        { quote: "Your mind is the scene of the crime.", character: "Dom Cobb" },
        { quote: "Dreams feel real while we're in them, it's only when we wake up that we realize something was actually strange.", character: "Dom Cobb" }
    ],
    // Breaking Bad
    [
        { quote: "I am the one who knocks!", character: "Walter White" },
        { quote: "Yeah, science!", character: "Jesse Pinkman" },
        { quote: "Tread lightly.", character: "Walter White" }
    ],
    // The Office
    [
        { quote: "I'm not superstitious, but I am a little stitious.", character: "Michael Scott" },
        { quote: "That's what she said.", character: "Michael Scott" },
        { quote: "Bears. Beets. Battlestar Galactica.", character: "Dwight Schrute" }
    ],
    // Your Honor (Coming Soon - less specific quotes)
    [
        { quote: "How far would you go to protect your child?", character: "Bryan Cranston (Trailer)" },
        { quote: "Justice isn't always fair.", character: "Narrator" }
    ],
    // 3 Idiots
    [
        { quote: "All Izz Well.", character: "Rancho" },
        { quote: "Chase excellence, success will follow.", character: "Rancho" }
    ],
    // Ghoul
    [
        { quote: "The truth will set you free, but first it will make you miserable.", character: "Nida Rahim" },
        { quote: "Some demons are not meant to be exorcised.", character: "Colonel Dacunha" }
    ],
    // Dangal
    [
        { quote: "Our daughters are no less than anyone.", character: "Mahavir Singh Phogat" },
        { quote: "You have to fight like a boy, but you can still be a girl.", character: "Geeta Phogat" }
    ],
    // Nairobi Half Life
    [
        { quote: "Nairobi will chew you and spit you out.", character: "Oti" },
        { quote: "You think life is a movie?", character: "Mosquito" },
        { quote: "Dreams are expensive here.", character: "Mwas" }
    ],
    // Crime and Justice (Quotes might be harder to find, general themes)
    [
        { quote: "Justice will prevail, no matter the cost.", character: "Detective Kemi" },
        { quote: "The city never sleeps, and neither do its crimes.", character: "Narrator" }
    ],
    // The Day of the Jackal (Coming Soon - less specific quotes)
    [
        { quote: "The most dangerous weapon is the one you don't see coming.", character: "Trailer voice" }
    ],
    // Train To Busan
    [
        { quote: "Don't ever lose your humanity.", character: "Seok-woo" },
        { quote: "In a world of zombies, the real monsters are human.", character: "Sang-hwa" }
    ],
    // Extraction (Coming Soon - less specific quotes)
    [
        { quote: "Some walls need breaking down.", character: "Tyler Rake" },
        { quote: "The mission is everything.", character: "Saju" }
    ],
    // All Of Us Are Dead (Coming Soon - less specific quotes)
    [
        { quote: "Survival is not a choice, it's a fight.", character: "Trailer voice" },
        { quote: "We are all dead, or we are all alive.", character: "Nam On-jo" }
    ],
    // Stranger Things
    [
        { quote: "Friends don't lie.", character: "Eleven" },
        { quote: "Mornings are for coffee and contemplation.", character: "Chief Hopper" },
        { quote: "She's our friend and she's crazy!", character: "Dustin Henderson" }
    ],
    // Lupin
    [
        { quote: "I'm a gentleman thief. I steal only from the rich.", character: "Assane Diop" },
        { quote: "Lupin is more than just a name, it's an idea.", character: "Assane Diop" }
    ],
    // Squid Game
    [
        { quote: "The games are just to give everyone an equal chance.", character: "The Front Man" },
        { quote: "You don't trust people because they can easily break.", character: "Kang Sae-byeok" },
        { quote: "I'm a Gganbu.", character: "Oh Il-nam" }
    ],
    // Second Wife (Coming Soon - less specific quotes)
    [
        { quote: "Love knows no bounds, but secrets have consequences.", character: "Narrator" }
    ],
    // 40 Sticks
    [
        { quote: "The wild will test your limits.", character: "Prisoner" },
        { quote: "Survival is not a game.", character: "Another Prisoner" }
    ]
];

// Function to create HTML for a single show card
function createShowCardHTML(show) {
    const posterPath = `images/posters/${show.poster}`;
    const networkLogoPath = `images/logos/${show.networkLogo}`;
    const synopsisTruncated = show.synopsis.length > 150 ? show.synopsis.substring(0, 150) + '...' : show.synopsis;

    return `
        <div class="show-card">
            <div class="show-info-and-poster-container">
                <div class="show-poster-container">
                    <img src="${posterPath}" alt="${show.title} Poster" class="show-poster">
                </div>
                <div class="show-details-right">
                    <div>
                        <h3>${show.title}</h3>
                        <img src="images/icons&logos/theaters_24dp_green.svg" alt="Show Info" class="show-info-icon-display">
                        <p><strong>IMDb:</strong> ${show.imdb}</p>
                        <p><strong>Release Date:</strong> ${show.releaseDate}</p>
                        <p><strong>Seasons:</strong> ${show.seasons}</p>
                        <p><strong>Episodes:</strong> ${show.episodes}</p>
                        <p><strong>Languages:</strong> ${show.languages}</p>
                        <p><strong>Genre:</strong> ${show.genre}</p>
                        <p><strong>Creators:</strong> ${show.creators}</p>
                        <p><strong>Cast:</strong> ${show.cast}</p>
                    </div>
                    <div class="network-logo-section">
                        <img src="${networkLogoPath}" alt="${show.networkText} Logo" class="network-logo">
                        <p class="watch-now-text">${show.networkText}</p>
                        <p class="subscription-required">${show.subscription}</p>
                    </div>
                </div>
            </div>
            <div class="show-synopsis">
                <h4>Overview:</h4>
                <p class="synopsis-text" data-full-synopsis="${show.synopsis}">${synopsisTruncated}</p>
                ${show.synopsis.length > 150 ? `
                <div class="synopsis-controls">
                    <button class="read-more-btn">
                        Read More
                        <img src="images/icons&logos/readmore.black.icon.svg" alt="Read More">
                    </button>
                    <button class="read-less-btn" style="display: none;">
                        Read Less
                        <img src="images/icons&logos/arrow.up.icon.svg" alt="Read Less">
                    </button>
                </div>` : ''}
            </div>
        </div>
    `;
}

// Function to add "Read More/Less" event listeners to synopsis controls within a container
function addSynopsisToggleListeners(container) {
    container.querySelectorAll('.read-more-btn').forEach(button => {
        button.onclick = function() {
            const synopsisText = this.closest('.show-synopsis').querySelector('.synopsis-text');
            synopsisText.classList.add('expanded');
            synopsisText.textContent = synopsisText.dataset.fullSynopsis;
            this.style.display = 'none';
            this.nextElementSibling.style.display = 'inline-flex';
        };
    });

    container.querySelectorAll('.read-less-btn').forEach(button => {
        button.onclick = function() {
            const synopsisText = this.closest('.show-synopsis').querySelector('.synopsis-text');
            synopsisText.classList.remove('expanded');
            synopsisText.textContent = synopsisText.dataset.fullSynopsis.substring(0, 150) + '...';
            this.style.display = 'none';
            this.previousElementSibling.style.display = 'inline-flex';
        };
    });
}

// Function to reset synopsis states within a container
function resetSynopsisStates(container) {
    container.querySelectorAll('.synopsis-text').forEach(synopsisText => {
        if (synopsisText.classList.contains('expanded')) {
            synopsisText.classList.remove('expanded');
            synopsisText.textContent = synopsisText.dataset.fullSynopsis.substring(0, 150) + '...';
            const parentControls = synopsisText.nextElementSibling;
            if (parentControls && parentControls.classList.contains('synopsis-controls')) {
                parentControls.querySelector('.read-more-btn').style.display = 'inline-flex';
                parentControls.querySelector('.read-less-btn').style.display = 'none';
            }
        }
    });
}

// Function to update the quotes sidebar
function updateQuotesSidebar(quotesSidebarElement, currentShow, quotesForShow) {
    if (!quotesSidebarElement) return; // Robustness check
    quotesSidebarElement.innerHTML = '<h3>Famous Quotes</h3>';
    if (quotesForShow && quotesForShow.length > 0) {
        quotesForShow.forEach(q => {
            const quoteDiv = document.createElement('div');
            quoteDiv.classList.add('quote-container');
            quoteDiv.innerHTML = `<p class="quote-text">"${q.quote}"</p><span class="quote-character">- ${q.character}</span>`;
            quotesSidebarElement.appendChild(quoteDiv);
        });
    } else {
        const noQuotes = document.createElement('p');
        noQuotes.textContent = `No prominent quotes available for ${currentShow.title}.`;
        quotesSidebarElement.appendChild(noQuotes);
    }
}

// Function to update a specific carousel's display
function updateCarousel(carouselTrack, paginationContainer, prevBtn, nextBtn, shows, currentShowIndex, quotesSidebarElement) {
    if (!carouselTrack || !paginationContainer || !prevBtn || !nextBtn || !quotesSidebarElement) {
        console.warn('One or more carousel elements missing for updateCarousel. Skipping update.');
        return;
    }

    if (shows.length === 0) {
        carouselTrack.style.transform = `translateX(0%)`;
        prevBtn.disabled = true;
        nextBtn.disabled = true;
        paginationContainer.innerHTML = ''; // Clear dots
        quotesSidebarElement.innerHTML = '<h3>Famous Quotes</h3><p>No shows in this category.</p>';
        return;
    }

    const offset = -currentShowIndex * 100;
    carouselTrack.style.transform = `translateX(${offset}%)`;

    // Disable navigation buttons if at start/end (this logic is overridden by looping in initializeCarouselForCategory)
    prevBtn.disabled = currentShowIndex === 0 && !carouselTrack.dataset.looping;
    nextBtn.disabled = currentShowIndex === shows.length - 1 && !carouselTrack.dataset.looping;

    // Update pagination dots
    paginationContainer.innerHTML = ''; // Clear previous dots
    for (let i = 0; i < shows.length; i++) {
        const dot = document.createElement('span');
        dot.classList.add('pagination-dot');
        if (i === currentShowIndex) {
            dot.classList.add('active');
        }
        dot.addEventListener('click', () => {
            // Find the specific carousel state and update its index
            const carouselState = categoryCarousels.find(state => state.carouselTrack === carouselTrack);
            if (carouselState) {
                carouselState.currentIndex = i;
                updateCarousel(carouselState.carouselTrack, carouselState.paginationContainer, carouselState.prevBtn, carouselState.nextBtn, carouselState.shows, i, carouselState.quotesSidebar);
            }
        });
        paginationContainer.appendChild(dot);
    }

    // Update quotes sidebar
    const currentShow = shows[currentShowIndex];
    // Find the global index of the current show to get its quotes
    const globalShowIndex = allShows.findIndex(s => s.title === currentShow.title);
    updateQuotesSidebar(quotesSidebarElement, currentShow, allShowQuotes[globalShowIndex]);

    // Reset "Read More/Less" state for the current card
    setTimeout(() => {
        resetSynopsisStates(carouselTrack);
    }, 500); // Match this timeout with the CSS transition duration for transform
}

// Array to hold state for each category carousel
const categoryCarousels = [];

// Function to initialize a carousel for a given category
function initializeCarouselForCategory(category, showsInCategory, sectionDiv) {
    if (!sectionDiv) {
        console.warn(`Section div not provided for category: ${category}. Skipping carousel initialization.`);
        return;
    }
    if (showsInCategory.length === 0) {
        // Optionally display a message "No shows in this category"
        sectionDiv.innerHTML = `<h2>${category} Shows</h2><p>No shows available for this category.</p>`;
        return; // Don't create carousel if no shows
    }

    let currentIndex = 0; // Each carousel gets its own index, initialized to 0

    // Create carousel HTML structure within the provided sectionDiv
    sectionDiv.innerHTML = `<h2>${category} Shows</h2>
        <div class="carousel-wrapper">
            <div class="carousel-content">
                <div class="carousel-track-container">
                    <div class="carousel-track"></div>
                    <button class="carousel-btn prev-btn">&lt;</button>
                    <button class="carousel-btn next-btn">&gt;</button>
                </div>
                <div class="carousel-pagination"></div>
            </div>
            <div class="quotes-sidebar"></div>
        </div>`;

    // Get references to elements within this newly created carousel structure
    const carouselTrack = sectionDiv.querySelector('.carousel-track');
    const prevBtn = sectionDiv.querySelector('.prev-btn');
    const nextBtn = sectionDiv.querySelector('.next-btn');
    const paginationContainer = sectionDiv.querySelector('.carousel-pagination');
    const quotesSidebar = sectionDiv.querySelector('.quotes-sidebar');

    // Robustness check: Ensure all elements were found before proceeding
    if (!carouselTrack || !prevBtn || !nextBtn || !paginationContainer || !quotesSidebar) {
        console.error(`Failed to find all carousel elements for category: ${category}.`);
        // Clean up or revert sectionDiv content if elements are critical
        sectionDiv.innerHTML = `<h2>${category} Shows</h2><p>Error loading carousel for this category.</p>`;
        return;
    }


    // Populate the carousel track with show cards for this category
    showsInCategory.forEach(show => {
        carouselTrack.innerHTML += createShowCardHTML(show);
    });

    // Store this carousel's state in the global array
    const carouselState = {
        category: category,
        shows: showsInCategory,
        currentIndex: currentIndex,
        carouselTrack: carouselTrack,
        prevBtn: prevBtn,
        nextBtn: nextBtn,
        paginationContainer: paginationContainer,
        quotesSidebar: quotesSidebar
    };
    categoryCarousels.push(carouselState);

    // Initial update of the carousel display
    updateCarousel(carouselTrack, paginationContainer, prevBtn, nextBtn, showsInCategory, currentIndex, quotesSidebar);

    // Add event listeners for navigation buttons for this specific carousel
    prevBtn.addEventListener('click', () => {
        carouselState.currentIndex = (carouselState.currentIndex > 0) ? carouselState.currentIndex - 1 : carouselState.shows.length - 1; // Loop back
        updateCarousel(carouselState.carouselTrack, carouselState.paginationContainer, carouselState.prevBtn, carouselState.nextBtn, carouselState.shows, carouselState.currentIndex, carouselState.quotesSidebar);
    });

    nextBtn.addEventListener('click', () => {
        carouselState.currentIndex = (carouselState.currentIndex < carouselState.shows.length - 1) ? carouselState.currentIndex + 1 : 0; // Loop to start
        updateCarousel(carouselState.carouselTrack, carouselState.paginationContainer, carouselState.prevBtn, carouselState.nextBtn, carouselState.shows, carouselState.currentIndex, carouselState.quotesSidebar);
    });

    // Add "Read More/Less" event listeners for all cards within this carousel
    addSynopsisToggleListeners(carouselTrack);
}


// Main function to render all categories
function renderAllCategories() {
    const categorySectionsContainer = document.getElementById('categorySections');
    if (!categorySectionsContainer) {
        console.error('Element with ID "categorySections" not found. Cannot render categories.');
        return; // Exit if the container is missing, main functionality might be impacted otherwise.
    }
    // Clear any existing content before rendering to prevent duplicates on re-render
    categorySectionsContainer.innerHTML = '';

    // Define the desired order of categories
    const categories = ["Trending", "Coming Soon", "Hollywood", "Bollywood", "K-Drama", "International", "Kenyan Drama"];

    categories.forEach(category => {
        // Filter shows relevant to the current category
        const showsInCategory = allShows.filter(show => show.categories.includes(category));

        // Always create a div for each category section, even if no shows, to maintain structure
        const sectionDiv = document.createElement('div');
        sectionDiv.classList.add('category-section');
        categorySectionsContainer.appendChild(sectionDiv); // Append before initializing

        // Initialize the carousel for this specific category
        // The initializeCarouselForCategory function handles the case of zero shows internally
        initializeCarouselForCategory(category, showsInCategory, sectionDiv);
    });
}

// Function to display a custom message box (replaces alert())
function showMessageBox(message) {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        backdrop-filter: blur(5px); /* Optional: blur background */
    `;

    // Create message box
    const messageBox = document.createElement('div');
    messageBox.style.cssText = `
        background: var(--background-color-dark); /* Use a CSS variable for dark mode compatibility */
        color: var(--text-color); /* Use a CSS variable for dark mode compatibility */
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        text-align: center;
        max-width: 80%;
        font-family: Arial, sans-serif;
        border: 1px solid var(--border-color); /* Optional: subtle border */
    `;

    const messageText = document.createElement('p');
    messageText.textContent = message;
    messageText.style.marginBottom = '15px';
    messageText.style.fontSize = '1.1em';

    const closeButton = document.createElement('button');
    closeButton.textContent = 'OK';
    closeButton.style.cssText = `
        background-color: var(--primary-button-background); /* Use a CSS variable */
        color: var(--primary-button-text); /* Use a CSS variable */
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1em;
        transition: background-color 0.2s ease;
    `;
    closeButton.onmouseover = () => closeButton.style.backgroundColor = 'var(--primary-button-hover-background)';
    closeButton.onmouseout = () => closeButton.style.backgroundColor = 'var(--primary-button-background)';
    closeButton.onclick = () => document.body.removeChild(overlay);

    messageBox.appendChild(messageText);
    messageBox.appendChild(closeButton);
    overlay.appendChild(messageBox);
    document.body.appendChild(overlay);
}


// --- START: Hero Section Logic ---

// Hardcoded lists of available WEBP backdrop and poster filenames based on your provided images
// This assumes these files exist at images/backdrops/ and images/posters/ respectively.
const availableBackdrops = [
    `3idiotsbackdrop1.webp`, `3idiotsbackdrop2.webp`, `3idiotsbackdrop3.webp`, `3idiotsbackdrop4.webp`,
    `40sticksbackdrop1.webp`,
    `allofusaredeadbackdrop1.webp`, `allofusaredeadbackdrop2.webp`, `allofusaredeadbackdrop3.webp`, `allofusaredeadbackdrop4.webp`, `allofusaredeadbackdrop5.webp`,
    `breakingbadbackdrop.webp`, `breakingbadbackdrop1.webp`, `breakingbadbackdrop2.webp`, `breakingbadbackdrop3.webp`, `breakingbadbackdrop4.webp`, `breakingbadbackdrop5.webp`, `breakingbadbackdrop6.webp`, `breakingbadbackdrop7.webp`, `breakingbadbackdrop9.webp`, `breakingbadbackdrop10.webp`, `breakingbadbackdrop11.webp`,
    `crimeandjusticebackdrop1.webp`, `crimeandjusticebackdrop2.webp`,
    `dangalbackdrop1.webp`,
    `extractionbackdrop1.webp`, `extractionbackdrop2.webp`, `extractionbackdrop3.webp`, `extractionbackdrop4.webp`,
    `ghoulbackdrop1.webp`, `ghoulbackdrop2.webp`, `ghoulbackdrop3.webp`, `ghoulbackdrop4.webp`, `ghoulbackdrop5.webp`,
    `inceptionbackdrop1.webp`, `inceptionbackdrop2.webp`, `inceptionbackdrop3.webp`, `inceptionbackdrop4.webp`, `inceptionbackdrop5.webp`, `inceptionbackdrop6.webp`, `inceptionbackdrop7.webp`,
    `lupinbackdrop1.webp`, `lupinbackdrop2.webp`, `lupinbackdrop3.webp`, `lupinbackdrop4.webp`, `lupinbackdrop5.webp`, `lupinbackdrop6.webp`,
    `moneheistkoreabacdrop3.webp`, `moneheistkoreabackdrop1.webp`, `moneheistkoreabackdrop2.webp`, `moneheistkoreabackdrop3.webp`, `moneheistkoreabackdrop4.webp`,
    `moneyheistbackdrop1.webp`, `moneyheistbackdrop2.webp`, `moneyheistbackdrop3.webp`, `moneyheistbackdrop4.webp`, `moneyheistbackdrop5.webp`, `moneyheistbackdrop6.webp`,
    `nairobihalflifebackdrop1.webp`, `nairobihalflifebackdrop2.webp`, `nairobihalflifebackdrop3.webp`,
    `prisonbreakbackdrop.webp`, `prisonbreakbackdrop1.webp`, `prisonbreakbackdrop2.webp`, `prisonbreakbackdrop3.webp`, `prisonbreakbackdrop5.webp`, `prisonbreakbackdrop6.webp`, `prisonbreakbackdrop7.webp`,
    `secondfamilybackdrop1.webp`,
    `squidgamebackdrop1.webp`, `squidgamebackdrop2.webp`, `squidgamebackdrop3.webp`, `squidgamebackdrop4.webp`, `squidgamebackdrop6.webp`, `squidgamebackdrop7.webp`,
    `strangerthingsbackdrop1.webp`, `strangerthingsbackdrop2.webp`, `strangerthingsbackdrop3.webp`, `strangerthingsbackdrop4.webp`, `strangerthingsbackdrop5.webp`,
    `thedayofthejackalbackdrop1.webp`, `thedayofthejackalbackdrop2.webp`, `thedayofthejackalbackdrop3.webp`, `thedayofthejackalbackdrop4.webp`,
    `theofficebackdrop1.webp`, `theofficebackdrop2.webp`, `theofficebackdrop3.webp`, `theofficebackdrop4.webp`, `theofficebackdrop5.webp`, `theofficebackdrop6.webp`, `theofficebackdrop7.webp`
];

const availablePosters = [
    `3idiotsposter1.webp`, `3idiotsposter2.webp`,
    `40sticksposter1.webp`,
    `allofusaredeadposter1.webp`, `allofusaredeadposter2.webp`, `allofusaredeadposter3.webp`, `allofusaredeadposter4.webp`, `allofusaredeadposter5.webp`,
    `breakingbadposter1.webp`, `breakingbadposter2.webp`, `breakingbadposter3.webp`, `breakingbadposter4.webp`, `breakingbadposter5.webp`, `breakingbadposter6.webp`, `breakingbadposter7.webp`,
    `crimeandjusticeposter1.webp`, `crimeandjusticeposter2.webp`,
    `dangalposter1.webp`, `dangalposter2.webp`,
    `extractionposter1.webp`, `extractionposter2.webp`,
    `ghoulposter1.webp`, `ghoulposter2.webp`, `ghoulposter3.webp`, `ghoulposter4.webp`,
    `inceptionposter1.webp`, `inceptionposter2.webp`, `inceptionposter3.webp`, `inceptionposter4.webp`, `inceptionposter5.webp`,
    `lupinposter1.webp`, `lupinposter2.webp`,
    `moneheistkoreaposter1.webp`, `moneheistkoreaposter2.webp`, `moneheistkoreaposter3.webp`, `moneheistkoreaposter4.webp`,
    `moneyheistposter1.webp`, `moneyheistposter2.webp`, `moneyheistposter3.webp`, `moneyheistposter4.webp`, `moneyheistposter5.webp`, `moneyheistposter6.webp`,
    `nairobihalflifeposter1.webp`,
    `prisonbreakposter1.webp`, `prisonbreakposter2.webp`, `prisonbreakposter3.webp`, `prisonbreakposter4.webp`, `prisonbreakposter5.webp`, `prisonbreakposter6.webp`, `prisonbreakposter7.webp`, `prisonbreakposter8.webp`, `prisonbreakposter9.webp`,
    `secondfamilyposter1.webp`, `secondfamilyposter2.webp`, `secondfamilyposter3.webp`,
    `squidgameposter1.webp`, `squidgameposter2.webp`,
    `strangerthingsposter1.webp`, `strangerthingsposter2.webp`, `strangerthingsposter3.webp`, `strangerthingsposter4.webp`, `strangerthingsposter5.webp`,
    `thedayofthejackalposter1.webp`, `thedayofthejackalposter2.webp`,
    `theofficeposter1.webp`, `theofficeposter2.webp`, `theofficeposter3.webp`, `theofficeposter4.webp`, `theofficeposter5.webp`, `theofficeposter6.webp`, `theofficeposter7.webp`, `theofficeposter8.webp`, `theofficeposter9.webp`, `theofficeposter10.webp`,
    `traintobusanposter1.webp`, `traintobusanposter2.webp`, `traintobusanposter3.webp`,
    `yourhonorposter1.webp`, `yourhonorposter2.webp`, `yourhonorposter3.webp`, `yourhonorposter4.webp`, `yourhonorposter5.webp`, `yourhonorposter6.webp`
];

let heroPairs = []; // This will store the filtered and matched hero pairs
let currentHeroPairIndex = 0;

// Function to populate heroPairs based on matching .webp files
function initializeHeroPairs() {
    allShows.forEach(show => {
        // Extract base name and potential number from the show's poster filename
        // e.g., "moneyheistposter1.webp" -> "moneyheist", "1"
        const showPosterBase = show.poster.replace(/\.webp$/, ''); // Remove .webp
        const match = showPosterBase.match(/([a-zA-Z]+?)(\d+)?(poster)?$/); // Extract base name and optional number before 'poster'

        if (!match) {
            console.warn(`Could not parse poster filename for show: ${show.title}. Skipping for hero. Filename: ${show.poster}`);
            return;
        }

        const showName = match[1]; // e.g., "moneyheist"
        const showNumber = match[2] || ''; // e.g., "1" or "" if no number

        // Construct potential backdrop filename
        const potentialBackdrop = `${showName}backdrop${showNumber}.webp`;

        // Check if both the specific poster and the derived backdrop exist as .webp
        const posterExists = availablePosters.includes(show.poster);
        const backdropExists = availableBackdrops.includes(potentialBackdrop);

        if (posterExists && backdropExists) {
            heroPairs.push({
                title: show.title,
                poster: show.poster,
                backdrop: potentialBackdrop,
                synopsis: show.synopsis // Include synopsis for hero section
            });
        }
    });

    // Optional: Shuffle the heroPairs array to get a random order each time the page loads
    // This is good for variety, but might not be desired if a specific order is preferred
    // for (let i = heroPairs.length - 1; i > 0; i--) {
    //     const j = Math.floor(Math.random() * (i + 1));
    //     [heroPairs[i], heroPairs[j]] = [heroPairs[j], heroPairs[i]];
    // }

    if (heroPairs.length === 0) {
        console.warn("No suitable .webp hero poster/backdrop pairs found. Hero section might be empty.");
    }
}

// Function to update the hero section content
function updateHeroSection() {
    const heroBackdropImg = document.getElementById('heroBackdrop');
    const heroPosterImg = document.getElementById('heroPoster');
    const heroTitleElement = document.getElementById('heroTitle');
    const heroSynopsisElement = document.getElementById('heroSynopsis');

    // Robustness: Check if hero elements exist before trying to update them
    if (!heroBackdropImg || !heroPosterImg || !heroTitleElement || !heroSynopsisElement) {
        console.error("One or more hero section elements not found in HTML. Skipping hero update.");
        return; // Exit function if critical elements are missing
    }

    if (!heroPairs.length) {
        console.warn("No suitable hero pairs available to display. Hero section will remain static or empty.");
        heroBackdropImg.style.display = 'none'; // Hide if no content
        heroPosterImg.style.display = 'none';
        heroTitleElement.textContent = "Welcome to CineMax!";
        heroSynopsisElement.textContent = "Discover your next favorite show.";
        return;
    }

    const currentPair = heroPairs[currentHeroPairIndex];

    // Fade out backdrop before changing source
    heroBackdropImg.style.opacity = 0;
    setTimeout(() => {
        heroBackdropImg.src = `images/backdrops/${currentPair.backdrop}`;
        heroBackdropImg.alt = `${currentPair.title} Backdrop`;
        heroBackdropImg.style.opacity = 1; // Fade in after source change
    }, 500); // This delay should match the CSS transition duration for opacity

    heroPosterImg.src = `images/posters/${currentPair.poster}`;
    heroPosterImg.alt = `${currentPair.title} Poster`;
    heroTitleElement.textContent = currentPair.title;

    // Truncate synopsis for hero section if too long
    const truncatedSynopsis = currentPair.synopsis.length > 200 ?
        currentPair.synopsis.substring(0, 200) + '...' :
        currentPair.synopsis;
    heroSynopsisElement.textContent = truncatedSynopsis;


    currentHeroPairIndex = (currentHeroPairIndex + 1) % heroPairs.length; // Move to the next pair, loop back if at end
}

// --- END: Hero Section Logic ---


// Main execution logic
document.addEventListener('DOMContentLoaded', () => {
    // Initialize the hero pairs data
    initializeHeroPairs();

    // Set initial hero section content
    updateHeroSection();

    // Start cycling the hero section every 6 seconds (6000 milliseconds)
    // Only set interval if there's more than one pair to cycle through
    if (heroPairs.length > 1) {
        setInterval(updateHeroSection, 6000);
    } else if (heroPairs.length === 1) {
        console.info("Only one hero pair found. Hero section will display statically.");
    }


    // --- Dark Mode Toggle Logic ---
    const modeToggle = document.querySelector('.mode-toggle');
    const darkModeIcon = document.getElementById('darkModeIcon');
    const lightModeIcon = document.getElementById('lightModeIcon');
    const body = document.body;

    // Robustness: Check if elements exist before adding event listeners or manipulating
    if (modeToggle && darkModeIcon && lightModeIcon && body) {
        // Check for saved preference in localStorage, default to light mode
        const savedMode = localStorage.getItem('theme');
        if (savedMode === 'dark') {
            body.classList.add('dark-mode');
            darkModeIcon.classList.add('active');
            lightModeIcon.classList.remove('active');
        } else {
            body.classList.remove('dark-mode');
            lightModeIcon.classList.add('active');
            darkModeIcon.classList.remove('active');
        }

        modeToggle.addEventListener('click', () => {
            if (body.classList.contains('dark-mode')) {
                // Switch to light mode
                body.classList.remove('dark-mode');
                lightModeIcon.classList.add('active');
                darkModeIcon.classList.remove('active');
                localStorage.setItem('theme', 'light');
            } else {
                // Switch to dark mode
                body.classList.add('dark-mode');
                darkModeIcon.classList.add('active');
                lightModeIcon.classList.remove('active');
                localStorage.setItem('theme', 'dark');
            }
        });
    } else {
        console.warn("Dark mode toggle elements not found. Dark mode functionality skipped.");
    }


    // --- Header Action Button Logic (using showMessageBox) ---
    const addShowIcon = document.getElementById('addShowIcon');
    if (addShowIcon) {
        addShowIcon.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior
            showMessageBox("Add to Playlist functionality is coming soon!");
        });
    } else {
        console.warn("Add Show Icon not found.");
    }

    const accountIcon = document.getElementById('accountIcon');
    if (accountIcon) {
        accountIcon.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior
            showMessageBox("Account management features are under development!");
        });
    } else {
        console.warn("Account Icon not found.");
    }

    const searchIconBtn = document.querySelector('.search-icon-btn');
    if (searchIconBtn) {
        searchIconBtn.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior
            showMessageBox("Search functionality will be enhanced soon!");
        });
    } else {
        console.warn("Search Icon button not found.");
    }

    // Play/My List button handlers for hero section (optional, can be expanded)
    // Using event delegation for these buttons if they are inside the hero-content div which updates
    // Or, add listeners inside updateHeroSection if buttons themselves are dynamic
    // For now, assuming they are static elements within hero-section
    const playButton = document.querySelector('.hero-buttons .play-button');
    const myListButton = document.querySelector('.hero-buttons .my-list-button');

    if (playButton) {
        playButton.addEventListener('click', () => showMessageBox("Play functionality coming soon!"));
    }
    if (myListButton) {
        myListButton.addEventListener('click', () => showMessageBox("Adding to My List coming soon!"));
    }


    // Call the main rendering function for categories when the DOM is fully loaded
    renderAllCategories();
});
