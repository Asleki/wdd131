document.addEventListener('DOMContentLoaded', () => {

    // Function to initialize a single carousel
    function initializeCarousel(carouselId) {
        const carouselContainer = document.getElementById(carouselId);
        if (!carouselContainer) return; // Exit if carousel not found

        const carouselTrack = carouselContainer.querySelector('.carousel-track');
        const slides = Array.from(carouselTrack.children);
        const prevBtn = carouselContainer.querySelector('.prev-btn');
        const nextBtn = carouselContainer.querySelector('.next-btn');
        const paginationDotsContainer = carouselContainer.querySelector('.pagination-dots');

        let currentIndex = 0;
        const totalSlides = slides.length;

        // Create pagination dots
        function createDots() {
            paginationDotsContainer.innerHTML = ''; // Clear existing dots
            for (let i = 0; i < totalSlides; i++) {
                const dot = document.createElement('span');
                dot.classList.add('dot');
                if (i === currentIndex) {
                    dot.classList.add('active');
                }
                dot.addEventListener('click', () => {
                    moveToSlide(i);
                });
                paginationDotsContainer.appendChild(dot);
            }
        }

        // Update the position of the track
        function updateCarousel() {
            carouselTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
            updateButtons();
            updateDots();
        }

        // Update button states (disabled/enabled)
        function updateButtons() {
            prevBtn.disabled = currentIndex === 0;
            nextBtn.disabled = currentIndex === totalSlides - 1;
        }

        // Update active dot
        function updateDots() {
            const dots = paginationDotsContainer.querySelectorAll('.dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }

        // Move to a specific slide by index
        function moveToSlide(index) {
            currentIndex = index;
            updateCarousel();
        }

        // Event Listeners for buttons
        nextBtn.addEventListener('click', () => {
            if (currentIndex < totalSlides - 1) {
                moveToSlide(currentIndex + 1);
            }
        });

        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                moveToSlide(currentIndex - 1);
            }
        });

        // Initialize on load
        createDots();
        updateCarousel(); // Set initial position and button states
    }

    // Initialize the "TRENDING" carousel
    initializeCarousel('trending-section');

    // Initialize the "COMING SOON" carousel (if it exists)
    initializeCarousel('coming-soon-section');

    // You can add more initializations for other categories here
});


