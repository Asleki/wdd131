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
let heroSection, heroQuoteElement, heroPosterElement; // Global variables for hero section elements

// Data for all shows (previously in app_core.js)
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

// Quotes data, indexed by show ID for easy lookup (previously in app_core.js)
// Converted to an object for direct ID lookup instead of array index.
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
 * This function is made global for use by other scripts like standalone_header.js.
 * @param {string} message The message to display.
 * @param {string} [iconClass='fas fa-info-circle'] Font Awesome icon class.
 */
function showMessageBox(message, iconClass = 'fas fa-info-circle') {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.classList.add('message-box-overlay');

    // Create message box
    const messageBox = document.createElement('div');
    messageBox.classList.add('message-box-custom');

    // Add icon
    const iconElement = document.createElement('i');
    iconElement.classList.add('message-icon', ...iconClass.split(' '));

    const messageText = document.createElement('p');
    messageText.textContent = message;

    const closeButton = document.createElement('button');
    closeButton.textContent = 'OK';
    closeButton.onclick = () => document.body.removeChild(overlay);

    messageBox.appendChild(iconElement);
    messageBox.appendChild(messageText);
    messageBox.appendChild(closeButton);
    overlay.appendChild(messageBox);
    document.body.appendChild(overlay);
}

/**
 * Renders a single show card for a carousel.
 * @param {object} showData - The data object for the show.
 * @returns {HTMLElement} The created show card element.
 */
function renderShowCard(showData) {
    const showCard = document.createElement('div');
    showCard.classList.add('show-card');
    showCard.dataset.showId = showData.id; // Store show ID for easy access

    // Create container for poster and info
    const infoAndPosterContainer = document.createElement('div');
    infoAndPosterContainer.classList.add('show-info-and-poster-container');

    // Create poster container
    const posterContainer = document.createElement('div');
    posterContainer.classList.add('show-poster-container');
    const posterImg = document.createElement('img');
    posterImg.classList.add('show-poster');
    posterImg.src = `images/posters/${showData.poster}`;
    posterImg.alt = `Poster for ${showData.title}`;
    posterContainer.appendChild(posterImg);

    // Create right section for show details
    const showDetailsRight = document.createElement('div');
    showDetailsRight.classList.add('show-details-right');

    const titleElem = document.createElement('h3');
    titleElem.textContent = showData.title;
    showDetailsRight.appendChild(titleElem);

    const yearElem = document.createElement('p');
    yearElem.textContent = `Year: ${showData.releaseDate.match(/\d{4}/)?.[0] || 'N/A'}`; // Extract year
    showDetailsRight.appendChild(yearElem);

    const genreElem = document.createElement('p');
    genreElem.textContent = `Genre: ${showData.genre.join(', ')}`;
    showDetailsRight.appendChild(genreElem);

    const ratingElem = document.createElement('p');
    ratingElem.innerHTML = `Rating: ${showData.imdb} <img src="images/icons&logos/imdb.svg" alt="IMDb" class="show-info-icon-display">`;
    showDetailsRight.appendChild(ratingElem);

    const creatorsElem = document.createElement('p');
    creatorsElem.textContent = `Creators: ${showData.creators}`;
    showDetailsRight.appendChild(creatorsElem);

    const castElem = document.createElement('p');
    castElem.textContent = `Cast: ${showData.cast}`;
    showDetailsRight.appendChild(castElem);

    // Append poster and details to their container
    infoAndPosterContainer.appendChild(posterContainer);
    infoAndPosterContainer.appendChild(showDetailsRight);

    // Append the combined container to the show card
    showCard.appendChild(infoAndPosterContainer);

    // Add a "More Info" button for small screens
    const moreInfoButton = document.createElement('button');
    moreInfoButton.classList.add('more-info-mobile-btn');
    moreInfoButton.innerHTML = `More Info <img src="images/icons&logos/info.svg" alt="Info">`;
    moreInfoButton.addEventListener('click', () => {
        showSynopsisQuotesModal(showData);
    });
    showCard.appendChild(moreInfoButton);

    return showCard;
}

/**
 * Creates and displays a modal overlay with the show's synopsis and quotes.
 * This modal appears on small screens when "More Info" is clicked.
 * @param {object} showData - The data object for the selected show.
 */
function showSynopsisQuotesModal(showData) {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.classList.add('synopsis-quotes-modal-overlay');

    // Create modal content container
    const modalContent = document.createElement('div');
    modalContent.classList.add('synopsis-quotes-modal-content');

    // Add title
    const titleElem = document.createElement('h3');
    titleElem.textContent = showData.title;
    modalContent.appendChild(titleElem);

    // Add Synopsis
    const synopsisHeading = document.createElement('h4');
    synopsisHeading.textContent = 'Synopsis';
    modalContent.appendChild(synopsisHeading);
    const synopsisText = document.createElement('p');
    synopsisText.classList.add('synopsis-text');
    synopsisText.textContent = showData.synopsis || 'Synopsis not available.';
    modalContent.appendChild(synopsisText);

    // Add Quotes
    const quotesHeading = document.createElement('h4');
    quotesHeading.textContent = 'Famous Quotes';
    modalContent.appendChild(quotesHeading);

    const quotesContainer = document.createElement('div');
    quotesContainer.classList.add('quotes-list'); // A container for individual quotes

    const quotesForShow = allShowQuotes[showData.id] || []; // Lookup by show ID

    if (quotesForShow.length > 0) {
        quotesForShow.forEach(quote => {
            const quoteDiv = document.createElement('div');
            quoteDiv.classList.add('quote-container');
            const quoteText = document.createElement('p');
            quoteText.classList.add('quote-text');
            quoteText.textContent = `"${quote.quote}"`;
            const quoteCharacter = document.createElement('span');
            quoteCharacter.classList.add('quote-character');
            quoteCharacter.textContent = `- ${quote.character}`;
            quoteDiv.appendChild(quoteText);
            quoteDiv.appendChild(quoteCharacter);
            quotesContainer.appendChild(quoteDiv);
        });
    } else {
        const noQuotesMsg = document.createElement('p');
        noQuotesMsg.classList.add('no-quotes-message');
        noQuotesMsg.textContent = 'No famous quotes available for this show.';
        quotesContainer.appendChild(noQuotesMsg);
    }
    modalContent.appendChild(quotesContainer);


    // Add close button
    const closeButton = document.createElement('button');
    closeButton.classList.add('synopsis-quotes-modal-close');
    closeButton.textContent = 'Close';
    closeButton.addEventListener('click', () => {
        document.body.removeChild(overlay);
        document.body.classList.remove('modal-open'); // Remove class when closing modal
    });
    modalContent.appendChild(closeButton);

    overlay.appendChild(modalContent);
    document.body.appendChild(overlay);
    document.body.classList.add('modal-open'); // Add class to body to prevent scrolling
}

/**
 * Resets synopsis "Read More/Less" states for all cards within a container.
 * Used when a carousel navigates to ensure consistent display.
 * @param {HTMLElement} container - The container element (e.g., carouselTrack) to search within.
 */
function resetSynopsisStates(container) {
    container.querySelectorAll('.synopsis-text').forEach(synopsisText => {
        if (synopsisText.classList.contains('expanded')) {
            synopsisText.classList.remove('expanded');
            // Ensure the text is truncated again if it was expanded
            const fullSynopsis = synopsisText.dataset.fullSynopsis;
            synopsisText.textContent = fullSynopsis.length > 150 ? fullSynopsis.substring(0, 150) + '...' : fullSynopsis;

            const parentControls = synopsisText.nextElementSibling;
            if (parentControls && parentControls.classList.contains('synopsis-controls')) {
                parentControls.querySelector('.read-more-btn').style.display = 'inline-flex';
                parentControls.querySelector('.read-less-btn').style.display = 'none';
            }
        }
    });
}


// Array to hold state for each category carousel
const categoryCarousels = [];

/**
 * Updates a specific carousel's display, including show card position,
 * button states, pagination, and the quotes sidebar content.
 * @param {HTMLElement} carouselTrack - The inner track of the carousel containing show cards.
 * @param {HTMLElement} paginationContainer - The container for pagination dots.
 * @param {HTMLElement} prevBtn - The previous button for the carousel.
 * @param {HTMLElement} nextBtn - The next button for the carousel.
 * @param {Array<object>} shows - The array of show data for this carousel.
 * @param {number} currentShowIndex - The index of the currently displayed show.
 * @param {HTMLElement} quotesSidebarElement - The sidebar element for quotes.
 */
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
        quotesSidebarElement.innerHTML = '<h3>Famous Quotes</h3><p class="no-quotes-message">No shows in this category.</p>';
        return;
    }

    // Calculate offset based on a single card's width (assuming cards take 100% width of track container)
    // This assumes the carousel track itself is set up to show one card at a time with 100% width for each child.
    const offset = -currentShowIndex * 100;
    carouselTrack.style.transform = `translateX(${offset}%)`;

    // Disable navigation buttons if at start/end
    prevBtn.disabled = currentShowIndex === 0;
    nextBtn.disabled = currentShowIndex === shows.length - 1;

    // Update pagination dots
    paginationContainer.innerHTML = ''; // Clear previous dots
    for (let i = 0; i < shows.length; i++) {
        const dot = document.createElement('span');
        dot.classList.add('pagination-dot');
        if (i === currentShowIndex) {
            dot.classList.add('active');
        }
        dot.dataset.index = i; // Store index for click handling
        dot.addEventListener('click', () => {
            // Find the specific carousel state and update its index
            const carouselState = categoryCarousels.find(state => state.carouselTrack === carouselTrack);
            if (carouselState) {
                carouselState.currentIndex = parseInt(dot.dataset.index);
                updateCarousel(carouselState.carouselTrack, carouselState.paginationContainer, carouselState.prevBtn, carouselState.nextBtn, carouselState.shows, carouselState.currentIndex, carouselState.quotesSidebar);
            }
        });
        paginationContainer.appendChild(dot);
    }

    // Update quotes sidebar
    const currentShow = shows[currentShowIndex];
    updateQuotesSidebar(quotesSidebarElement, currentShow, allShowQuotes[currentShow.id]);

    // Reset "Read More/Less" state for the current card after transition
    setTimeout(() => {
        resetSynopsisStates(carouselTrack);
    }, 500); // Matches CSS transition duration for transform
}

/**
 * Populates the quotes sidebar for a given show.
 * @param {HTMLElement} quotesSidebarElement - The DOM element for the quotes sidebar.
 * @param {object} currentShow - The data object of the currently displayed show.
 * @param {Array<object>} quotesForShow - An array of quote objects for the current show.
 */
function updateQuotesSidebar(quotesSidebarElement, currentShow, quotesForShow) {
    if (!quotesSidebarElement) {
        console.warn('Quotes sidebar element not found.');
        return;
    }
    quotesSidebarElement.innerHTML = '<h3>Famous Quotes</h3>'; // Always add heading

    if (quotesForShow && quotesForShow.length > 0) {
        quotesForShow.forEach(q => {
            const quoteDiv = document.createElement('div');
            quoteDiv.classList.add('quote-container');
            quoteDiv.innerHTML = `<p class="quote-text">"${q.quote}"</p><span class="quote-character">- ${q.character}</span>`;
            quotesSidebarElement.appendChild(quoteDiv);
        });
    } else {
        const noQuotes = document.createElement('p');
        noQuotes.classList.add('no-quotes-message'); // Add class for styling
        noQuotes.textContent = `No prominent quotes available for ${currentShow.title}.`;
        quotesSidebarElement.appendChild(noQuotes);
    }
}


/**
 * Initializes a carousel for a given category, including its shows,
 * navigation buttons, pagination, and quotes sidebar.
 * @param {string} category - The name of the category.
 * @param {Array<object>} showsInCategory - An array of show data objects for the category.
 * @param {HTMLElement} sectionDiv - The div element representing the category section.
 */
function initializeCarouselForCategory(category, showsInCategory, sectionDiv) {
    if (!sectionDiv) {
        console.warn(`Section div not provided for category: ${category}. Skipping carousel initialization.`);
        return;
    }

    // Only add shows if there are any to display
    if (showsInCategory.length === 0) {
        sectionDiv.innerHTML = `<h2>${category} Shows</h2><p class="no-shows-message">No shows available for this category.</p>`;
        return;
    }

    let currentIndex = 0; // Each carousel gets its own index, initialized to 0

    // Create carousel HTML structure within the provided sectionDiv
    sectionDiv.innerHTML = `<h2>${category}</h2>
        <div class="carousel-wrapper">
            <div class="carousel-content">
                <div class="carousel-track-container">
                    <div class="carousel-track"></div>
                    <button class="carousel-btn prev-btn"><i class="fas fa-chevron-left"></i></button>
                    <button class="carousel-btn next-btn"><i class="fas fa-chevron-right"></i></button>
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
        sectionDiv.innerHTML = `<h2>${category}</h2><p>Error loading carousel for this category.</p>`;
        return;
    }

    // Populate the carousel track with show cards for this category
    showsInCategory.forEach(show => {
        carouselTrack.appendChild(renderShowCard(show));
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
    updateCarousel(carouselState.carouselTrack, carouselState.paginationContainer, carouselState.prevBtn, carouselState.nextBtn, carouselState.shows, carouselState.currentIndex, carouselState.quotesSidebar);

    // Add event listeners for navigation buttons for this specific carousel
    prevBtn.addEventListener('click', () => {
        carouselState.currentIndex = (carouselState.currentIndex > 0) ? carouselState.currentIndex - 1 : carouselState.shows.length - 1; // Loop back
        updateCarousel(carouselState.carouselTrack, carouselState.paginationContainer, carouselState.prevBtn, carouselState.nextBtn, carouselState.shows, carouselState.currentIndex, carouselState.quotesSidebar);
    });

    nextBtn.addEventListener('click', () => {
        carouselState.currentIndex = (carouselState.currentIndex < carouselState.shows.length - 1) ? carouselState.currentIndex + 1 : 0; // Loop to start
        updateCarousel(carouselState.carouselTrack, carouselState.paginationContainer, carouselState.prevBtn, carouselState.nextBtn, carouselState.shows, carouselState.currentIndex, carouselState.quotesSidebar);
    });
}


/**
 * Renders all categories and their respective carousels.
 * Assumes 'allShows' is available globally.
 */
function renderAllCategories() {
    const categorySectionsContainer = document.getElementById('categorySectionsContainer'); // Correct ID based on discover2.html
    if (!categorySectionsContainer) {
        console.error('Element with ID "categorySectionsContainer" not found. Cannot render categories.');
        return;
    }
    // Clear any existing content before rendering to prevent duplicates on re-render
    categorySectionsContainer.innerHTML = '';

    // Define the desired order of categories
    const categories = ["Trending", "Coming Soon", "Hollywood", "Bollywood", "K-Drama", "International", "Kenyan Drama"];

    categories.forEach(category => {
        // Filter shows relevant to the current category
        const showsInCategory = allShows.filter(show => show.categories.includes(category));

        // Create a div for each category section
        const sectionDiv = document.createElement('div');
        sectionDiv.classList.add('category-section');
        categorySectionsContainer.appendChild(sectionDiv);

        // Initialize the carousel for this specific category
        initializeCarouselForCategory(category, showsInCategory, sectionDiv);
    });
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

    // --- Mobile Menu Toggle Logic ---
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav'); // The main navigation (Movies, Series, etc.)

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            // Toggle 'menu-active' class on body to control menu visibility via CSS
            document.body.classList.toggle('menu-active');
            // Toggle icon between bars and times (X)
            menuToggle.classList.toggle('fa-bars');
            menuToggle.classList.toggle('fa-times');
        });

        // Close menu when a navigation link is clicked
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                document.body.classList.remove('menu-active');
                menuToggle.classList.remove('fa-times');
                menuToggle.classList.add('fa-bars');
            });
        });

        // Close menu if clicked outside of it
        document.addEventListener("click", e => {
            if (!mainNav.contains(e.target) && e.target !== menuToggle) {
                document.body.classList.remove('menu-active');
                menuToggle.classList.remove('fa-times');
                menuToggle.classList.add('fa-bars');
            }
        });

    } else {
        console.warn("Mobile menu toggle elements (menuToggle or mainNav) not found.");
    }

    // Call the main rendering function for categories when the DOM is fully loaded
    renderAllCategories();
});

