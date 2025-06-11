// Data for hero slides
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
let heroSection, heroQuoteElement, heroPosterElement; // Declare globally to be assigned later

function updateHeroSection() {
    if (!heroSection || heroSlides.length === 0) {
        console.warn("Hero section elements not found or no slides defined. Skipping hero section update.");
        if(heroSection) heroSection.style.display = 'none'; // Hide if no slides
        return;
    }

    const slide = heroSlides[currentSlideIndex];

    // Update background image
    heroSection.style.backgroundImage = `url('${slide.backdrop}')`;
    heroSection.style.backgroundSize = 'cover';
    heroSection.style.backgroundPosition = 'center';
    heroSection.style.backgroundRepeat = 'no-repeat';

    // Update poster image
    heroPosterElement.src = slide.poster;
    heroPosterElement.alt = `Poster for ${slide.quote.substring(0, Math.min(slide.quote.length, 20))}...`; // Use a part of the quote for alt text

    // Update quote
    heroQuoteElement.textContent = slide.quote;

    // Fade effect (optional, requires CSS transitions for .fade-in)
    heroSection.classList.remove('fade-in');
    // A trick to force reflow and restart the CSS animation
    void heroSection.offsetWidth;
    heroSection.classList.add('fade-in');

    currentSlideIndex = (currentSlideIndex + 1) % heroSlides.length;
}

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
        networkLogo: "netflixlogo.webp",
        networkText: "Watch Now",
        subscription: "Subscription Required",
        synopsis: "A mysterious man known as 'The Professor' recruits a band of eight robbers to carry out an ambitious plan: to steal billions of euros from the Royal Mint of Spain. As the heist unfolds, the team grapples with hostages, police, and personal conflicts, turning the robbery into a complex game of cat and mouse. Known for its intricate plot twists and strong character development."
    },
    {
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
        networkLogo: "netflixlogo.webp",
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
        networkLogo: "pecock-logo.webp", // Assuming Peacock (US)
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
        networkLogo: "primevideologo.webp", // Assuming Prime Video
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
        networkLogo: "netflixlogo.webp",
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
        networkLogo: "netflixlogo.webp", // Also available on Netflix
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
        networkLogo: "showmaxlogo.webp", // Assuming Showmax logo if you have it
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
        networkLogo: "pecock-logo.webp", // SkyShowtime/Peacock
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
        networkLogo: "netflixlogo.webp",
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
        networkLogo: "netflixlogo.webp",
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
        networkLogo: "netflixlogo.webp",
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
        networkLogo: "netflixlogo.webp", // Available on Netflix
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
    const networkLogoPath = `images/icons&logos/${show.networkLogo}`;
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


// Main execution logic
document.addEventListener('DOMContentLoaded', () => {
    // Get hero section elements once the DOM is loaded
    heroSection = document.getElementById('heroSection');
    if (heroSection) {
        heroQuoteElement = heroSection.querySelector('.hero-quote');
        heroPosterElement = heroSection.querySelector('.hero-poster');

        // Initial load of the hero section
        if (heroSlides.length > 0) {
            updateHeroSection();
            // Set interval for changing slides every 7 seconds (7000 milliseconds)
            setInterval(updateHeroSection, 7000);
        } else {
            console.warn("No hero slides defined. Hero section will not be displayed.");
            heroSection.style.display = 'none'; // Hide if no slides
        }
    } else {
        console.warn("Hero section container with ID 'heroSection' not found. Hero slideshow functionality will not work.");
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

    // Call the main rendering function for categories when the DOM is fully loaded
    renderAllCategories();
});

// --- Data for Cinema Guide (append this to your existing data in watch.js) ---
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

// --- Cinema Guide Specific JavaScript Logic (append this to your existing watch.js) ---

// Function to create HTML for a featured movie card in Cinema Guide (includes synopsis)
function createCinemaShowcaseCardHTML(show) {
    const posterPath = `images/posters/${show.poster}`;
    return `
        <div class="featured-movie-card" data-show-id="${show.id}">
            <div class="poster-container">
                <img src="${posterPath}" alt="${show.title} Poster" class="poster">
            </div>
            <div class="info-content">
                <h3>${show.title}</h3>
                <p class="meta-info">IMDb: ${show.imdb} | Genre: ${show.genre}</p>
                <p class="synopsis">${show.synopsis.substring(0, 150)}...</p>
                <a href="buy-ticket.html?showId=${show.id}" class="btn buy-ticket-btn-card">Buy Tickets</a>
            </div>
        </div>
    `;
}

// Function to populate the Featured Movies section
function populateFeaturedMovies() {
    const featuredMovieGrid = document.getElementById('featured-movie-grid');
    if (!featuredMovieGrid) {
        console.warn("Featured movie grid container not found on Cinema Guide page.");
        return;
    }

    // Select 9 movies that are NOT marked as 'Coming Soon' (assuming they are "currently showing")
    const featuredShows = allShows.filter(show => !show.categories.includes('Coming Soon') && show.type !== 'series')
                                  .slice(0, 9); // Get up to 9 movies

    if (featuredShows.length === 0) {
        featuredMovieGrid.innerHTML = '<p class="no-content-message">No featured movies available at this time.</p>';
        return;
    }

    featuredShows.forEach(show => {
        featuredMovieGrid.innerHTML += createCinemaShowcaseCardHTML(show);
    });

    // Add event listener to each featured movie card
    // Clicking the card or the 'Buy Tickets' button leads to buy-ticket.html
    featuredMovieGrid.addEventListener('click', (event) => {
        const card = event.target.closest('.featured-movie-card');
        if (card && card.dataset.showId) {
            window.location.href = `buy-ticket.html?showId=${card.dataset.showId}`;
        }
    });
}


// Function to render cinema listings for a given city
function renderCinemaListings(cityKey) {
    const cinemaListingsContainer = document.getElementById('cinema-listings-container');
    if (!cinemaListingsContainer) {
        console.error("Cinema listings container not found.");
        return;
    }
    cinemaListingsContainer.innerHTML = ''; // Clear previous listings

    const cinemas = CINEMA_DATA[cityKey];

    if (!cinemas || cinemas.length === 0) {
        cinemaListingsContainer.innerHTML = '<p class="no-cinema-message">No cinema listings available for this city yet.</p>';
        return;
    }

    cinemas.forEach(cinema => {
        const cinemaCard = document.createElement('div');
        cinemaCard.classList.add('cinema-card');

        let hallsHtml = '';
        cinema.halls.forEach(hall => {
            let screeningsHtml = '';
            hall.screenings.forEach(screening => {
                // Ensure showId, cinemaId, hallId, and time are passed to buy-ticket.html
                const buyTicketLink = `buy-ticket.html?showId=${screening.showId}&cinemaId=${cinema.id}&hallId=${hall.id}&time=${encodeURIComponent(screening.time)}`;

                screeningsHtml += `
                    <li class="screening-item">
                        <span class="movie-title">${screening.movie}</span>
                        <span class="show-time">Time: ${screening.time}</span>
                        <span class="tickets-available">Tickets: ${screening.ticketsAvailable}</span>
                        <a href="${buyTicketLink}" class="buy-ticket-btn" target="_blank">Buy Ticket</a>
                    </li>
                `;
            });
            hallsHtml += `
                <div class="hall-listing">
                    <h4>${hall.name}</h4>
                    <ul class="screening-list">
                        ${screeningsHtml}
                    </ul>
                </div>
            `;
        });

        cinemaCard.innerHTML = `
            <h3>${cinema.name}</h3>
            <p class="address">${cinema.address}</p>
            ${hallsHtml}
        `;
        cinemaListingsContainer.appendChild(cinemaCard);
    });
}

// Event listener for city buttons on cinema guide page
document.addEventListener('DOMContentLoaded', () => {
    const cityButtonsContainer = document.getElementById('city-buttons');
    const cinemaListingsContainer = document.getElementById('cinema-listings-container'); // Re-get for this scope
    const featuredMovieGrid = document.getElementById('featured-movie-grid'); // Re-get for this scope

    if (cityButtonsContainer) {
        cityButtonsContainer.addEventListener('click', (event) => {
            const clickedButton = event.target.closest('.btn-secondary');
            if (clickedButton && clickedButton.dataset.city) {
                document.querySelectorAll('.city-buttons .btn-secondary').forEach(btn => {
                    btn.classList.remove('active');
                });
                clickedButton.classList.add('active');

                const selectedCity = clickedButton.dataset.city;
                renderCinemaListings(selectedCity);
            }
        });

        // Initial render for the first city on page load
        const defaultCityButton = cityButtonsContainer.querySelector('.btn-secondary.active');
        if (defaultCityButton) {
            renderCinemaListings(defaultCityButton.dataset.city);
        } else if (CINEMA_DATA && Object.keys(CINEMA_DATA).length > 0) {
            const firstCityKey = Object.keys(CINEMA_DATA)[0];
            const firstCityBtn = cityButtonsContainer.querySelector(`[data-city="${firstCityKey}"]`);
            if (firstCityBtn) {
                firstCityBtn.classList.add('active');
                renderCinemaListings(firstCityKey);
            }
        }
    } else {
        console.warn("City buttons container not found for Cinema Guide. Functionality limited.");
    }

    // Populate the featured movies grid on page load
    populateFeaturedMovies();
});

document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Elements ---
    const movieSelect = document.getElementById('movieSelect');
    const showtimeSelect = document.getElementById('showtimeSelect');
    const numTicketsInput = document.getElementById('numTickets');
    const decreaseTicketsBtn = document.getElementById('decreaseTickets');
    const increaseTicketsBtn = document.getElementById('increaseTickets');
    const addCabCheckbox = document.getElementById('addCab');
    const cabPriceSpan = document.getElementById('cabPrice');
    const addSnacksCheckbox = document.getElementById('addSnacks');
    const snacksOptionsDiv = document.getElementById('snacksOptions');
    const snackComboSelect = document.getElementById('snackComboSelect');
    const totalAmountSpan = document.getElementById('totalAmount');
    const paymentMethodRadios = document.querySelectorAll('input[name="paymentMethod"]');
    const buyNowBtn = document.getElementById('buyNowBtn');
    const confirmationSection = document.getElementById('confirmationSection');
    const confirmedMovie = document.getElementById('confirmedMovie');
    const confirmedShowtime = document.getElementById('confirmedShowtime');
    const confirmedTickets = document.getElementById('confirmedTickets');
    const confirmedCab = document.getElementById('confirmedCab');
    const confirmedSnacks = document.getElementById('confirmedSnacks');
    const confirmedTotal = document.getElementById('confirmedTotal');
    const confirmedPaymentMethod = document.getElementById('confirmedPaymentMethod');

    // --- CINEMA_DATA (Provided by user) ---
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

    // --- Price Configuration ---
    const TICKET_BASE_PRICE = 12.00; // Base price per ticket
    const CAB_SERVICE_PRICE = 7.50; // Fixed price for cab service
    const SNACK_COMBOS = [
        { id: 'none', name: 'No Snacks', price: 0.00 },
        { id: 'small-popcorn', name: 'Small Popcorn & Drink', price: 5.00 },
        { id: 'medium-combo', name: 'Medium Combo (Popcorn, Drink, Candy)', price: 8.50 },
        { id: 'large-deluxe', name: 'Large Deluxe Combo (Large Popcorn, 2 Drinks, Chocolates)', price: 15.00 }
    ];
    const PAYMENT_METHOD_FEES = { // Example fees per transaction
        'mpesa': 0.50,
        'card': 1.00,
        'paypal': 1.20
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
        populateShowtimes(movieSelect.value, getQueryParams().time);
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
                try { // Use try-catch in case JSON parsing fails
                    const screeningData = JSON.parse(option.value);
                    return screeningData.time === preSelectedTime && screeningData.showId === selectedMovieId;
                } catch (e) {
                    return false;
                }
            });
            if (targetOption) {
                showtimeSelect.value = targetOption.value;
            } else {
                // If the pre-selected time isn't found for the specific movie, select the first available
                showtimeSelect.value = showtimeSelect.options[0].value;
            }
        } else {
            // Otherwise, just select the first showtime
            if (showtimeSelect.options.length > 0) {
                showtimeSelect.value = showtimeSelect.options[0].value;
            }
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
            try {
                currentSelectedScreening = JSON.parse(showtimeSelect.value);
                numTicketsInput.max = currentSelectedScreening.ticketsAvailable;
                // Ensure current value doesn't exceed new max
                if (parseInt(numTicketsInput.value) > currentSelectedScreening.ticketsAvailable) {
                    numTicketsInput.value = currentSelectedScreening.ticketsAvailable;
                }
                // Also ensure it's not less than 1
                if (parseInt(numTicketsInput.value) < 1) {
                    numTicketsInput.value = 1;
                }
            } catch (e) {
                console.error("Error parsing showtime data:", e);
                currentSelectedScreening = null;
                numTicketsInput.max = 1;
                numTicketsInput.value = 1;
            }
        } else {
            currentSelectedScreening = null;
            numTicketsInput.max = 1; // Default min
            numTicketsInput.value = 1; // Reset to 1
        }
        calculateTotal(); // Recalculate total whenever screening or ticket quantity changes
    }

    /**
     * Populates the snack combo dropdown.
     */
    function populateSnackCombos() {
        snackComboSelect.innerHTML = ''; // Clear existing options
        SNACK_COMBOS.forEach(combo => {
            const option = document.createElement('option');
            option.value = combo.id;
            option.textContent = `${combo.name} (+${combo.price.toFixed(2)} USD)`;
            snackComboSelect.appendChild(option);
        });
    }

    /**
     * Calculates the total amount based on selected options and updates the display.
     */
    function calculateTotal() {
        let total = 0;
        const numberOfTickets = parseInt(numTicketsInput.value, 10);

        // 1. Tickets cost
        if (numberOfTickets > 0 && currentSelectedScreening) {
            total += numberOfTickets * TICKET_BASE_PRICE;
        }

        // 2. Cab service cost
        if (addCabCheckbox.checked) {
            total += CAB_SERVICE_PRICE;
        }

        // 3. Snacks cost
        if (addSnacksCheckbox.checked && snackComboSelect.value) {
            const selectedCombo = SNACK_COMBOS.find(combo => combo.id === snackComboSelect.value);
            if (selectedCombo) {
                total += selectedCombo.price;
            }
        }

        // 4. Payment method fee (if any)
        const selectedPaymentMethod = document.querySelector('input[name="paymentMethod"]:checked');
        if (selectedPaymentMethod && PAYMENT_METHOD_FEES[selectedPaymentMethod.value] !== undefined) {
            total += PAYMENT_METHOD_FEES[selectedPaymentMethod.value];
        }

        totalAmountSpan.textContent = `${total.toFixed(2)} USD`;
    }

    /**
     * Handles the "Buy Now" button click event.
     * Validates input and displays a confirmation message.
     */
    function handleBuyNow() {
        const selectedMovieName = movieSelect.options[movieSelect.selectedIndex].textContent;
        const numberOfTickets = parseInt(numTicketsInput.value, 10);
        const currentTotal = totalAmountSpan.textContent; // Get the displayed total

        // Retrieve full screening data from the currently selected showtime option
        if (!currentSelectedScreening) {
            alert('Please select a movie and showtime.');
            return;
        }

        // --- Validation ---
        if (isNaN(numberOfTickets) || numberOfTickets <= 0) {
            alert('Please enter a valid number of tickets (at least 1).');
            return;
        }
        if (numberOfTickets > currentSelectedScreening.ticketsAvailable) {
            alert(`Sorry, only ${currentSelectedScreening.ticketsAvailable} tickets are available for this showtime.`);
            numTicketsInput.value = currentSelectedScreening.ticketsAvailable; // Reset to max available
            calculateTotal(); // Recalculate after correction
            return;
        }

        // Determine selected options for confirmation display
        const cabServiceSelected = addCabCheckbox.checked ? 'Yes' : 'No';
        let snacksSelectedName = 'No';
        if (addSnacksCheckbox.checked && snackComboSelect.value && snackComboSelect.value !== 'none') {
            const selectedCombo = SNACK_COMBOS.find(combo => combo.id === snackComboSelect.value);
            snacksSelectedName = selectedCombo ? selectedCombo.name : 'Selected';
        }
        const paymentMethodSelected = document.querySelector('input[name="paymentMethod"]:checked').value;


        // Display confirmation
        confirmedMovie.textContent = `${selectedMovieName} (${currentSelectedScreening.cinemaName}, ${currentSelectedScreening.hallName})`;
        confirmedShowtime.textContent = currentSelectedScreening.time;
        confirmedTickets.textContent = numberOfTickets;
        confirmedCab.textContent = cabServiceSelected;
        confirmedSnacks.textContent = snacksSelectedName;
        confirmedTotal.textContent = currentTotal;
        confirmedPaymentMethod.textContent = paymentMethodSelected.charAt(0).toUpperCase() + paymentMethodSelected.slice(1);


        confirmationSection.style.display = 'block'; // Show the confirmation section
        buyNowBtn.style.display = 'none'; // Hide the buy button
        // Hide all form sections
        Array.from(document.querySelectorAll('.form-section, .total-amount-section')).forEach(section => section.style.display = 'none');


        // In a real application, you would send this data to a backend,
        // process payment, update ticket availability, etc.
        console.log(`Booking confirmed for:
            Movie: ${selectedMovieName} (ID: ${currentSelectedScreening.showId})
            Cinema: ${currentSelectedScreening.cinemaName} (ID: ${currentSelectedScreening.cinemaId})
            Hall: ${currentSelectedScreening.hallName} (ID: ${currentSelectedScreening.hallId})
            Showtime: ${currentSelectedScreening.time}
            City: ${currentSelectedScreening.city}
            Tickets: ${numberOfTickets}
            Cab Service: ${cabServiceSelected}
            Snacks: ${snacksSelectedName}
            Total: ${currentTotal}
            Payment Method: ${paymentMethodSelected}
        `);
    }

    // --- Event Listeners ---
    movieSelect.addEventListener('change', () => populateShowtimes());
    showtimeSelect.addEventListener('change', updateSelectedScreeningDetails); // This also calls calculateTotal

    // Ticket quantity controls
    decreaseTicketsBtn.addEventListener('click', () => {
        let currentValue = parseInt(numTicketsInput.value, 10);
        if (currentValue > numTicketsInput.min) {
            numTicketsInput.value = currentValue - 1;
            calculateTotal();
        }
    });

    increaseTicketsBtn.addEventListener('click', () => {
        let currentValue = parseInt(numTicketsInput.value, 10);
        if (currentSelectedScreening && currentValue < currentSelectedScreening.ticketsAvailable) {
            numTicketsInput.value = currentValue + 1;
            calculateTotal();
        } else if (!currentSelectedScreening) { // If no screening selected yet, allow increment from 1
            numTicketsInput.value = currentValue + 1;
            calculateTotal();
        }
    });

    // Cab service checkbox
    addCabCheckbox.addEventListener('change', calculateTotal);

    // Snacks checkbox toggle and combo selection
    addSnacksCheckbox.addEventListener('change', () => {
        if (addSnacksCheckbox.checked) {
            snacksOptionsDiv.classList.remove('hidden');
        } else {
            snacksOptionsDiv.classList.add('hidden');
            snackComboSelect.value = 'none'; // Reset snack selection when unchecked
        }
        calculateTotal();
    });
    snackComboSelect.addEventListener('change', calculateTotal);

    // Payment method radios
    paymentMethodRadios.forEach(radio => {
        radio.addEventListener('change', calculateTotal);
    });

    // --- Initial setup on page load ---
    populateSnackCombos(); // Populate snack dropdown first
    cabPriceSpan.textContent = CAB_SERVICE_PRICE.toFixed(2); // Display cab service price

    const urlParams = getQueryParams();
    const preSelectedShowId = urlParams.showId;
    const preSelectedTime = urlParams.time;

    // Start by populating movies, then showtimes, with pre-selection if applicable
    populateMovies(preSelectedShowId);
});
