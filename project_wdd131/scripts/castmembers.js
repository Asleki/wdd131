// Data for all cast members
const allCasts = [
    {
        name: "Úrsula Corberó",
        role: "Tokyo",
        info: "The show's unpredictable and fiery narrator.",
        bio: "Silene Oliveira, known as Tokyo, is the volatile and impulsive narrator of the series. Orphaned at a young age, she becomes a skilled robber. Her deep loyalty to the Professor and her complex relationship with Rio are central to her character arc. Despite her recklessness, she possesses a fierce dedication to her fellow gang members.",
        image: "Úrsula Corberó.webp", // Ensure this path is correct relative to your images folder
        quotes: ["The most important moments are the ones that make you choose."]
    },
    {
        name: "Álvaro Morte",
        role: "The Professor",
        info: "The mastermind behind the heists.",
        bio: "Sergio Marquina, the Professor, is the highly intelligent and meticulous architect of the heists. He is a recluse with a strong moral code, despite leading a life of crime. His brilliant strategic mind and ability to foresee every contingency make him the true brain of the operation, always staying one step ahead of the authorities.",
        image: "Álvaro Morte.webp",
        quotes: ["Every minute I spend here is a minute I add to my life."]
    },
    {
        name: "Itziar Ituño",
        role: "Inspector Raquel Murillo / Lisbon",
        info: "A police inspector who eventually joins the gang.",
        bio: "Raquel Murillo is a brilliant and dedicated police inspector initially tasked with leading the investigation against the Professor's gang. She forms an unlikely bond with the Professor, eventually falling in love with him and abandoning her old life to join the heist crew as Lisbon. Her journey is one of profound transformation and loyalty.",
        image: "Itziar Ituño.webp",
        quotes: ["Sometimes, a truce is the only way to avoid a war."]
    },
    {
        name: "Pedro Alonso",
        role: "Berlin",
        info: "The Professor's brother and a charismatic, albeit problematic, leader.",
        bio: "Andrés de Fonollosa, known as Berlin, is the Professor's older brother and a captivating, often cruel, character. He's a master of manipulation and a charming sociopath, yet fiercely loyal to his family and the heist's vision. His past is slowly revealed, showcasing his complex personality and significant role in the Professor's plans.",
        image: "Pedro Alonso.webp",
        quotes: ["Death can be a beautiful thing, provided it has a final act."]
    },
    {
        name: "Miguel Herrán",
        role: "Rio",
        info: "A young and talented hacker.",
        bio: "Aníbal Cortés, known as Rio, is the youngest member of the gang and a prodigy hacker. He falls in love with Tokyo, and their tumultuous relationship often complicates the heists. Despite his youth, he's crucial for the team's technological needs, though his inexperience sometimes puts him at risk.",
        image: "Miguel Herrán.webp",
        quotes: ["Love can lead you to the worst possible places."]
    },
    {
        name: "Jaime Lorente",
        role: "Denver",
        info: "A hot-headed but loyal member of the gang.",
        bio: "Daniel Ramos, known as Denver, is a hot-headed and impulsive but ultimately good-hearted member of the gang. He's the son of Moscow and is known for his distinctive laugh. His character develops significantly, particularly through his relationship with Monica Gaztambide, transforming from a street thug into a protective father figure.",
        image: "Jaime Lorente..webp", // Double check this filename, it has two dots
        quotes: ["No matter what, we're family."]
    },
    {
        name: "Esther Acebo",
        role: "Monica Gaztambide / Stockholm",
        info: "A hostage who falls for Denver and joins the gang.",
        bio: "Monica Gaztambide begins as a hostage in the Royal Mint of Spain. She develops a complex relationship with Denver, falling in love and eventually choosing to join the gang as Stockholm. Her transformation from a victim to an active member of the crew highlights her resilience and capacity for change.",
        image: "Esther Acebo.webp",
        quotes: ["Sometimes, what you run from is exactly what you need."]
    },
    {
        name: "Enrique Arce",
        role: "Arturo Román",
        info: "A highly annoying and manipulative former hostage.",
        bio: "Arturo Román is the former Director of the Royal Mint and a recurring thorn in the gang's side. He is manipulative, cowardly, and constantly tries to undermine the heists, often putting himself and others in danger. Despite his unpleasant nature, he becomes a significant, albeit irritating, figure throughout the series.",
        image: "Enrique Arce.webp",
        quotes: ["I know how to act like a hero."]
    },
    {
        name: "Darko Perić",
        role: "Helsinki",
        info: "A Serbian ex-soldier, strong and loyal.",
        bio: "Mirko Dragic, known as Helsinki, is a Serbian ex-soldier with a formidable physical presence but a surprisingly gentle heart. He is fiercely loyal to his comrades, especially Oslo and later Palermo and Nairobi. He often provides emotional support and acts as the group's muscle when needed.",
        image: "Darko Peric.webp",
        quotes: ["Family is family."]
    },
    {
        name: "Hovik Keuchkerian",
        role: "Bogotá",
        info: "A deep-sea welder brought in for the Bank of Spain heist.",
        bio: "Bogotá is a skilled deep-sea welder and one of the new members introduced for the Bank of Spain heist. He's a pragmatic and dependable character, crucial for melting the gold. He forms a close bond with Nairobi and is a steadfast member of the team.",
        image: "Hovik Keuchkerian.webp",
        quotes: ["We are the resistance."]
    },
    {
        name: "Najwa Nimri",
        role: "Inspector Alicia Sierra",
        info: "A ruthless and pregnant police inspector.",
        bio: "Alicia Sierra is a cunning, ruthless, and highly intelligent police inspector introduced in later seasons. She is willing to use extreme and unethical methods to achieve her goals, making her a formidable adversary to the Professor and his gang. Her unpredictable nature keeps everyone on their toes.",
        image: "Najwa Nimri.webp",
        quotes: ["I can do anything to get what I want."]
    },
    {
        name: "Fernando Cayo",
        role: "Colonel Tamayo",
        info: "A high-ranking police official.",
        bio: "Colonel Luis Tamayo is a high-ranking and often exasperated police official who takes over the investigation against the gang. He's under immense pressure to end the heists and often clashes with Inspector Sierra's methods, yet relies on her effectiveness.",
        image: "Fernando Cayo.webp",
        quotes: ["We need to end this. Now."]
    },
    {
        name: "Rodrigo de la Serna",
        role: "Palermo",
        info: "An old friend of Berlin and co-mastermind of the Bank of Spain heist.",
        bio: "Martín Berrote, known as Palermo, is an old friend of Berlin and the co-mastermind of the Bank of Spain heist. He is arrogant, brilliant, and deeply in love with Berlin. His leadership style is often confrontational, and his personal issues can complicate the heist, but his loyalty to Berlin's legacy is unwavering.",
        image: "Rodrigo de la Serna.webp",
        quotes: ["We are the ones who decide when we die."]
    },
    {
        name: "José Manuel Poga",
        role: "Gandía",
        info: "The head of security at the Bank of Spain, a major antagonist.",
        bio: "César Gandía is the ruthless and highly dangerous head of security at the Bank of Spain. He becomes a significant antagonist after escaping his binds, systematically hunting down the gang members inside the bank. His military training and cold demeanor make him an incredibly effective and terrifying threat.",
        image: "José Manuel Poga.webp",
        quotes: ["I don't play by their rules."]
    },
    {
        name: "Luka Peroš",
        role: "Marseille",
        info: "The team's animal lover and a skilled pilot.",
        bio: "Marseille is an ex-soldier and the team's reliable pilot and logistician, often working outside the heists to provide crucial support. He's known for his calm demeanor, his love for animals, and his steadfast loyalty, making him a quiet but vital member of the crew.",
        image: "Luka Peroš.webp",
        quotes: ["I just do my job."]
    },
    {
        name: "Belén Cuesta",
        role: "Manila",
        info: "Denver's childhood friend and a new member of the gang in later seasons.",
        bio: "Julia, known as Manila, is Denver's childhood friend and godparent to his son. She joins the Bank of Spain heist as a hidden member among the hostages, eventually revealing herself as a full participant. Her role adds a new dynamic, particularly as she challenges the gang's methods and confronts Denver.",
        image: "Belén Cuesta.webp",
        quotes: ["I'm not a hostage. I'm one of you."]
    }
];

