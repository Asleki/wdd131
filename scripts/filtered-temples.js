// scripts/filtered-temples.js

// Array of Temple Objects (unchanged)
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add 3+ more temple objects here
    {
        templeName: "London England",
        location: "Newchapel, Surrey, England",
        dedicated: "1958, September, 7",
        area: 42700,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/london-england-temple/london-england-temple-53699-thumb.jpg"
    },
    {
        templeName: "Salt Lake",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253000,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-8458.jpg"
    },
    {
        templeName: "Mendoza Argentina Temple",
        location: "Mendoza, Argentina",
        dedicated: "2024, September, 22",
        area: 21999,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/mendoza-argentina-temple/mendoza-argentina-temple-51773-thumb.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 40000,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2616-thumb.jpg"
    },


    
//Added temples
    {
        templeName: "Nairobi Kenya",
        location: "Naiirobi, Kenya",
        dedicated: "2025, May, 18 ",
        area: 1987,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/nairobi-kenya-temple/nairobi-kenya-temple-60488.jpg"
    },
    {
        templeName: "Deseret Peak Utah Temple",
        location: "Utah, United States",
        dedicated: "2024, November, 10",
        area: 71998,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/deseret-peak-utah-temple/deseret-peak-utah-temple-53165-thumb.jpg"
    },
    {
        templeName: "Sapporo Japan",
        location: "Sapporo, Japan",
        dedicated: "2016, August, 21",
        area: 48800,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/sapporo-japan-temple/sapporo-japan-temple-3374-thumb.jpg"
    },
    {
        templeName: "San Pedro Sula Honduras Temple",
        location: "San Pedro, Honduras",
        dedicated: "2024, October, 13",
        area: 35818,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/san-pedro-sula-honduras-temple/san-pedro-sula-honduras-temple-52518-thumb.jpg"
    },
];

const mainContentContainer = document.querySelector('.temple-grid-container'); // Select the main container
const templeCardsArea = document.getElementById('temple-cards-area'); // Select the div where cards go
const navLinks = document.querySelectorAll('.navigation a');
const menuButton = document.getElementById('menuBtn');
const navigation = document.querySelector('.navigation');

// Helper function to create a single temple card element (unchanged)
function createTempleCardElement(temple) {
    const card = document.createElement('section');
    card.classList.add('temple-card');

    const h2 = document.createElement('h2');
    h2.textContent = temple.templeName;

    const location = document.createElement('p');
    location.innerHTML = `<strong>Location:</strong> ${temple.location}`;

    const dedicated = document.createElement('p');
    dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;

    const area = document.createElement('p');
    area.innerHTML = `<strong>Size:</strong> ${temple.area} sq ft`;

    const img = document.createElement('img');
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = 'lazy'; // Native lazy loading

    card.appendChild(h2);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(img);

    return card; // Return the created card element
}

// Function to display temples with dynamic heading
function displayTemples(filteredTemples, headingText) {
    mainContentContainer.innerHTML = ''; // Clear ALL content in the main container

    const heading = document.createElement('h1');
    heading.textContent = headingText;
    heading.id = 'main-heading'; // Assign ID for CSS styling
    mainContentContainer.appendChild(heading); // Append heading directly to main container

    const cardsWrapper = document.createElement('div');
    cardsWrapper.id = 'temple-cards-area'; // Re-create the cards area div
    mainContentContainer.appendChild(cardsWrapper); // Append the cards area to main container

    filteredTemples.forEach(temple => {
        const card = createTempleCardElement(temple);
        cardsWrapper.appendChild(card); // Append cards to the newly created cardsWrapper
    });
}


// Event listener for navigation menu button (for responsiveness)
menuButton.addEventListener('click', () => {
    navigation.classList.toggle('show');
});


// Event listeners for filtering navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior (page reload)

        // Remove 'active' class from all links
        navLinks.forEach(nav => nav.classList.remove('active'));
        // Add 'active' class to the clicked link
        event.target.classList.add('active');

        const filter = event.target.id;
        let filteredTemples = [];
        let headingText = "";

        if (filter === 'home-link') {
            filteredTemples = temples;
           
        } else if (filter === 'old-link') {
            filteredTemples = temples.filter(temple => {
                const year = parseInt(temple.dedicated.split(',')[0]);
                return year < 1900;
            });
            headingText = "Old Temples (Built before 1900)";
        } else if (filter === 'new-link') {
            filteredTemples = temples.filter(temple => {
                const year = parseInt(temple.dedicated.split(',')[0]);
                return year > 2000;
            });
            headingText = "New Temples (Built after 2000)";
        } else if (filter === 'large-link') {
            filteredTemples = temples.filter(temple => temple.area > 90000);
            headingText = "Large Temples (> 90,000 sq ft)";
        } else if (filter === 'small-link') {
            filteredTemples = temples.filter(temple => temple.area < 10000);
            headingText = "Small Temples (< 10,000 sq ft)";
        }

        displayTemples(filteredTemples, headingText);
        // Hide menu on mobile after selection
        if (window.innerWidth <= 768) {
            navigation.classList.remove('show');
        }
    });
});


// Footer dynamic dates
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;

// Initial display of all temples when the page loads
document.addEventListener('DOMContentLoaded', () => {
    displayTemples(temples); // Pass initial heading
});