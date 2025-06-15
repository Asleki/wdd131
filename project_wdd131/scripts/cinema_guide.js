        // Data for all shows with selected .webp posters and backdrops
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

        // Mock data for cinemas and their showtimes (as allShows doesn't have this)
        const cinemaData = [
            {
                id: 'nairobi-century',
                name: 'Century Cinemax Garden City',
                city: 'Nairobi',
                welcomeMessage: 'Welcome to Century Cinemax Garden City! We are thrilled to have you!',
                shows: [
                    { title: "Money Heist (La Casa de Papel)", showtimes: ["10:00 AM", "01:00 PM", "04:00 PM", "07:00 PM"] },
                    { title: "Prison Break", showtimes: ["11:00 AM", "02:00 PM", "05:00 PM", "08:00 PM"] },
                    { title: "Inception", showtimes: ["10:30 AM", "01:30 PM", "04:30 PM", "07:30 PM"] },
                    { title: "Breaking Bad", showtimes: ["09:00 AM", "12:00 PM", "03:00 PM", "06:00 PM", "09:00 PM"] },
                    { title: "The Office", showtimes: ["10:00 AM", "01:00 PM", "04:00 PM"] },
                    { title: "3 Idiots", showtimes: ["11:00 AM", "02:00 PM", "05:00 PM"] },
                    { title: "Ghoul", showtimes: ["09:30 AM", "12:30 PM", "03:30 PM", "06:30 PM"] },
                    { title: "Dangal", showtimes: ["10:00 AM", "01:00 PM", "04:00 PM"] },
                    { title: "Nairobi Half Life", showtimes: ["11:30 AM", "02:30 PM", "05:30 PM", "08:30 PM"] },
                ]
            },
            {
                id: 'nairobi-anga',
                name: 'Anga Diamond Plaza',
                city: 'Nairobi',
                welcomeMessage: 'Enjoy your movie at Anga Diamond Plaza! Your comfort is our priority.',
                shows: [
                    { title: "Stranger Things", showtimes: ["10:00 AM", "01:00 PM", "04:00 PM", "07:00 PM"] },
                    { title: "Lupin", showtimes: ["11:00 AM", "02:00 PM", "05:00 PM", "08:00 PM"] },
                    { title: "Squid Game", showtimes: ["10:30 AM", "01:30 PM", "04:30 PM", "07:30 PM"] },
                    { title: "40 Sticks", showtimes: ["09:00 AM", "12:00 PM", "03:00 PM", "06:00 PM", "09:00 PM"] },
                    { title: "Train To Busan", showtimes: ["10:00 AM", "01:00 PM", "04:00 PM"] },
                    { title: "Extraction", showtimes: ["11:00 AM", "02:00 PM", "05:00 PM"] },
                    { title: "All Of Us Are Dead", showtimes: ["09:30 AM", "12:30 PM", "03:30 PM", "06:30 PM"] },
                    { title: "Your Honor", showtimes: ["10:00 AM", "01:00 PM", "04:00 PM"] },
                    { title: "The Day Of The Jackal", showtimes: ["11:30 AM", "02:30 PM", "05:30 PM", "08:30 PM"] },
                ]
            },
            {
                id: 'nairobi-imax',
                name: 'IMAX Two Rivers',
                city: 'Nairobi',
                welcomeMessage: 'Experience cinema like never before at IMAX Two Rivers! Get ready for an immersive journey.',
                shows: [
                    { title: "Inception", showtimes: ["09:00 AM", "12:00 PM", "03:00 PM", "06:00 PM", "09:00 PM"] },
                    { title: "Breaking Bad", showtimes: ["10:00 AM", "01:00 PM", "04:00 PM", "07:00 PM"] },
                    { title: "Train To Busan", showtimes: ["11:00 AM", "02:00 PM", "05:00 PM", "08:00 PM"] },
                    { title: "Extraction", showtimes: ["10:30 AM", "01:30 PM", "04:30 PM", "07:30 PM"] },
                    { title: "Money Heist (La Casa de Papel)", showtimes: ["09:30 AM", "12:30 PM", "03:30 PM", "06:30 PM"] },
                    { title: "Prison Break", showtimes: ["10:00 AM", "01:00 PM", "04:00 PM"] },
                    { title: "Stranger Things", showtimes: ["11:00 AM", "02:00 PM", "05:00 PM"] },
                    { title: "Lupin", showtimes: ["09:30 AM", "12:30 PM", "03:30 PM", "06:30 PM"] },
                    { title: "Dangal", showtimes: ["10:00 AM", "01:00 PM", "04:00 PM"] },
                ]
            },
            {
                id: 'mombasa-nyali',
                name: 'Nyali Cinemax',
                city: 'Mombasa',
                welcomeMessage: 'Greetings from Nyali Cinemax! We hope you have a fantastic time.',
                shows: [
                    { title: "3 Idiots", showtimes: ["10:00 AM", "01:00 PM", "04:00 PM"] },
                    { title: "Dangal", showtimes: ["11:00 AM", "02:00 PM", "05:00 PM"] },
                    { title: "Nairobi Half Life", showtimes: ["09:30 AM", "12:30 PM", "03:30 PM"] },
                    { title: "Crime and Justice", showtimes: ["10:00 AM", "01:00 PM", "04:00 PM"] },
                    { title: "Money Heist (La Casa de Papel)", showtimes: ["11:00 AM", "02:00 PM", "05:00 PM"] },
                    { title: "Prison Break", showtimes: ["09:30 AM", "12:30 PM", "03:30 PM"] },
                    { title: "Inception", showtimes: ["10:00 AM", "01:00 PM", "04:00 PM"] },
                    { title: "Breaking Bad", showtimes: ["11:00 AM", "02:00 PM", "05:00 PM"] },
                    { title: "Train To Busan", showtimes: ["09:30 AM", "12:30 PM", "03:30 PM"] },
                ]
            },
            {
                id: 'mombasa-cinemax',
                name: 'Cinemax Mombasa',
                city: 'Mombasa',
                welcomeMessage: 'Welcome to Cinemax Mombasa! Get ready for a cinematic adventure.',
                shows: [
                    { title: "Stranger Things", showtimes: ["10:00 AM", "01:00 PM", "04:00 PM", "07:00 PM"] },
                    { title: "Lupin", showtimes: ["11:00 AM", "02:00 PM", "05:00 PM", "08:00 PM"] },
                    { title: "Squid Game", showtimes: ["10:30 AM", "01:30 PM", "04:30 PM", "07:30 PM"] },
                    { title: "40 Sticks", showtimes: ["09:00 AM", "12:00 PM", "03:00 PM", "06:00 PM", "09:00 PM"] },
                    { title: "Your Honor", showtimes: ["10:00 AM", "01:00 PM", "04:00 PM"] },
                    { title: "The Day Of The Jackal", showtimes: ["11:00 AM", "02:00 PM", "05:00 PM"] },
                    { title: "Money Heist (K-Drama)", showtimes: ["09:30 AM", "12:30 PM", "03:30 PM", "06:30 PM"] },
                    { title: "Second Wife", showtimes: ["10:00 AM", "01:00 PM", "04:00 PM"] },
                    { title: "The Office", showtimes: ["11:30 AM", "02:30 PM", "05:30 PM", "08:30 PM"] },
                ]
            },
            {
                id: 'kisumu-mega',
                name: 'Mega City Cinemas',
                city: 'Kisumu',
                welcomeMessage: 'Enjoy your visit to Mega City Cinemas! We\'re glad you\'re here.',
                shows: [
                    { title: "Nairobi Half Life", showtimes: ["10:00 AM", "01:00 PM", "04:00 PM"] },
                    { title: "Crime and Justice", showtimes: ["11:00 AM", "02:00 PM", "05:00 PM"] },
                    { title: "Money Heist (La Casa de Papel)", showtimes: ["09:30 AM", "12:30 PM", "03:30 PM"] },
                    { title: "Prison Break", showtimes: ["10:00 AM", "01:00 PM", "04:00 PM"] },
                    { title: "Inception", showtimes: ["11:00 AM", "02:00 PM", "05:00 PM"] },
                    { title: "Breaking Bad", showtimes: ["09:30 AM", "12:30 PM", "03:30 PM"] },
                    { title: "3 Idiots", showtimes: ["10:00 AM", "01:00 PM", "04:00 PM"] },
                    { title: "Dangal", showtimes: ["11:00 AM", "02:00 PM", "05:00 PM"] },
                    { title: "Train To Busan", showtimes: ["09:30 AM", "12:30 PM", "03:30 PM"] },
                ]
            },
            {
                id: 'eldoret-cinemax',
                name: 'Eldoret Cinemax',
                city: 'Eldoret',
                welcomeMessage: 'Welcome to Eldoret Cinemax! Your ultimate entertainment awaits.',
                shows: [
                    { title: "Stranger Things", showtimes: ["10:00 AM", "01:00 PM", "04:00 PM", "07:00 PM"] },
                    { title: "Lupin", showtimes: ["11:00 AM", "02:00 PM", "05:00 PM", "08:00 PM"] },
                    { title: "Squid Game", showtimes: ["10:30 AM", "01:30 PM", "04:30 PM", "07:30 PM"] },
                    { title: "40 Sticks", showtimes: ["09:00 AM", "12:00 PM", "03:00 PM", "06:00 PM", "09:00 PM"] },
                    { title: "Your Honor", showtimes: ["10:00 AM", "01:00 PM", "04:00 PM"] },
                    { title: "The Day Of The Jackal", showtimes: ["11:00 AM", "02:00 PM", "05:00 PM"] },
                    { title: "Money Heist (K-Drama)", showtimes: ["09:30 AM", "12:30 PM", "03:30 PM", "06:30 PM"] },
                    { title: "Second Wife", showtimes: ["10:00 AM", "01:00 PM", "04:00 PM"] },
                    { title: "The Office", showtimes: ["11:30 AM", "02:30 PM", "05:30 PM", "08:30 PM"] },
                ]
            }
        ];

        // Hero section image data
        const heroCinemaImages = [
            'images/cinema/IMAX.webp', // Updated path
            'images/cinema/IMAX2.webp'  // Updated path
        ];
        let currentHeroImageIndex = 0;

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
         * Updates the background image of the hero section.
         */
        function updateCinemaHeroImage() {
            const cinemaHero = document.getElementById('cinemaHero');
            if (cinemaHero && heroCinemaImages.length > 0) {
                cinemaHero.style.backgroundImage = `url('${heroCinemaImages[currentHeroImageIndex]}')`;
                currentHeroImageIndex = (currentHeroImageIndex + 1) % heroCinemaImages.length;
            }
        }

        /**
         * Creates the HTML string for a single cinema show card.
         * @param {object} show - The show object from allShows.
         * @param {string[]} showtimes - An array of screening times for this show at this cinema.
         * @param {string} cinemaName - The name of the cinema where this show is screening.
         * @returns {string} The HTML string for the show card.
         */
        function createShowCardHTML(show, showtimes, cinemaName) {
            // Correctly uses the poster path
            const posterPath = `images/posters/${show.poster}`;

            const imdbRating = show.imdb ? show.imdb.split(' ')[0] : 'N/A'; // Extract just the rating number
            const releaseYear = show.releaseDate ? show.releaseDate.split(', ')[1] : 'N/A'; // Extract year
            const isMovie = show.seasons === "1 (Film)" || show.seasons === "N/A (Film)";
            const type = isMovie ? "Movie" : "Series";

            const synopsisTruncated = show.synopsis.length > 150 ? show.synopsis.substring(0, 150) + '...' : show.synopsis;

            // Construct URL parameters - pass only the filename for poster and backdrop
            const params = new URLSearchParams();
            params.append('title', show.title);
            params.append('poster', show.poster); // Pass just the filename
            params.append('backdrop', show.backdrop); // Pass just the filename
            params.append('cinema', cinemaName); // Pass the cinema name

            return `
                <div class="show-card">
                    <img src="${posterPath}" alt="${show.title} Poster" class="show-poster"
                         onerror="this.onerror=null;this.src='https://placehold.co/350x450/333/fff?text=No+Poster';">
                    <div class="show-info">
                        <h4>${show.title}</h4>
                        <p class="text-sm text-gray-400">${type} &bull; ${releaseYear}</p>
                        <p class="imdb-rating">IMDb: ${imdbRating}</p>
                        <p class="synopsis-text" data-full-synopsis="${show.synopsis}">${synopsisTruncated}</p>
                        ${show.synopsis.length > 150 ? `
                        <button class="read-more-btn">Read More</button>
                        <button class="read-less-btn" style="display: none;">Read Less</button>` : ''}

                        <div class="show-card-actions">
                            <div class="screening-times">
                                ${showtimes.map(time => `<span>${time}</span>`).join('')}
                            </div>
                            <a href="buy_ticket.html?${params.toString()}" class="buy-ticket-btn">Buy Ticket</a>
                        </div>
                    </div>
                </div>
            `;
        }

        /**
         * Renders the cinema listings based on the selected city.
         * @param {string} selectedCity - The city to filter by, or "All Cities".
         */
        function renderShows(selectedCity) {
            const cinemaListingsContainer = document.getElementById('cinemaListings');
            if (!cinemaListingsContainer) {
                console.error("Element with ID 'cinemaListings' not found.");
                return;
            }
            cinemaListingsContainer.innerHTML = ''; // Clear previous listings

            const filteredCinemas = cinemaData.filter(cinema =>
                selectedCity === "All Cities" || cinema.city === selectedCity
            );

            if (filteredCinemas.length === 0) {
                cinemaListingsContainer.innerHTML = `<p class="text-center text-gray-400 text-lg mt-8">No cinemas found for ${selectedCity}.</p>`;
                return;
            }

            filteredCinemas.forEach(cinema => {
                const cinemaSection = document.createElement('div');
                cinemaSection.classList.add('cinema-section');

                const cinemaTitle = document.createElement('h3');
                cinemaTitle.textContent = cinema.name + (selectedCity === "All Cities" ? ` (${cinema.city})` : '');
                cinemaSection.appendChild(cinemaTitle);

                const showsGrid = document.createElement('div');
                showsGrid.classList.add('shows-grid');

                // Map show titles in cinema's data to full show objects from allShows
                cinema.shows.forEach(cinemaShow => {
                    const fullShowDetails = allShows.find(s => s.title === cinemaShow.title);
                    if (fullShowDetails) {
                        // Pass cinema.name as an argument to createShowCardHTML
                        showsGrid.innerHTML += createShowCardHTML(fullShowDetails, cinemaShow.showtimes, cinema.name);
                    }
                });

                cinemaSection.appendChild(showsGrid);
                cinemaListingsContainer.appendChild(cinemaSection);
            });

            // Add event listeners for "Read More" and "Buy Ticket" after content is rendered
            addShowCardEventListeners();
        }

        /**
         * Adds event listeners to all "Read More" and "Read Less" buttons.
         * The "Buy Ticket" buttons are now direct links, so no separate event listener is needed here.
         */
        function addShowCardEventListeners() {
            document.querySelectorAll('.read-more-btn').forEach(button => {
                button.onclick = function() {
                    const synopsisText = this.previousElementSibling; // This is the <p class="synopsis-text">
                    const readLessBtn = this.nextElementSibling;

                    synopsisText.textContent = synopsisText.dataset.fullSynopsis; // Set full text
                    synopsisText.classList.add('expanded');
                    this.style.display = 'none';
                    readLessBtn.style.display = 'inline';
                };
            });

            document.querySelectorAll('.read-less-btn').forEach(button => {
                button.onclick = function() {
                    // Correctly target the synopsisText: it's the element before the read-more-btn, which is before this read-less-btn
                    const synopsisText = this.previousElementSibling.previousElementSibling;
                    const readMoreBtn = this.previousElementSibling;

                    synopsisText.textContent = synopsisText.dataset.fullSynopsis.substring(0, 150) + '...'; // Set truncated text
                    synopsisText.classList.remove('expanded');
                    this.style.display = 'none';
                    readMoreBtn.style.display = 'inline';
                };
            });
        }

        // --- Main Execution Logic ---
        document.addEventListener('DOMContentLoaded', () => {
            const loadingOverlay = document.getElementById('loading-overlay');
            const mainContent = document.getElementById('main-content');
            const citySelect = document.getElementById('city-select');

            // 1. Show loading overlay
            loadingOverlay.style.opacity = '1';
            loadingOverlay.style.visibility = 'visible';

            // 2. Hide loading overlay and show content after 3 seconds
            setTimeout(() => {
                loadingOverlay.style.opacity = '0';
                loadingOverlay.style.visibility = 'hidden';
                setTimeout(() => {
                    loadingOverlay.style.display = 'none'; // Completely remove from flow
                    mainContent.classList.remove('hidden-content');
                    mainContent.style.opacity = '1';
                    mainContent.style.visibility = 'visible';
                    mainContent.style.height = 'auto'; // Restore height
                }, 500); // Allow fade-out transition to complete

                // Initialize hero image rotation
                updateCinemaHeroImage();
                setInterval(updateCinemaHeroImage, 7000); // Change image every 7 seconds

                // Initial render of shows based on "All Cities"
                renderShows(citySelect.value);

                // Add event listener for city selection
                citySelect.addEventListener('change', (event) => {
                    renderShows(event.target.value);
                });

            }, 3000); // 3 seconds for loading animation
        });
