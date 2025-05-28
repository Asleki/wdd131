document.addEventListener('DOMContentLoaded', () => {

    function initializeCarousel(carouselId) {
        const carouselContainer = document.getElementById(carouselId);
        if (!carouselContainer) {
            console.error(`Carousel container with ID "${carouselId}" not found.`);
            return;
        }

        const carouselTrack = carouselContainer.querySelector('.carousel-track');
        const slides = Array.from(carouselTrack.children);
        const prevBtn = carouselContainer.querySelector('.prev-btn');
        const nextBtn = carouselContainer.querySelector('.next-btn');
        const paginationDotsContainer = carouselContainer.querySelector('.pagination-dots');

        const totalRealSlides = slides.length;
        let currentIndex = 0; // This will track the index of the *real* slides

        // --- CLONING FOR SMOOTH LOOPING ---
        // Clone the last slide and prepend it to the track
        const lastSlideClone = slides[totalRealSlides - 1].cloneNode(true);
        carouselTrack.prepend(lastSlideClone);

        // Clone the first slide and append it to the track
        const firstSlideClone = slides[0].cloneNode(true);
        carouselTrack.append(firstSlideClone);

        // Update the 'slides' NodeList to include the clones for correct indexing
        const allSlides = Array.from(carouselTrack.children);
        const totalSlidesWithClones = allSlides.length; // Now it's totalRealSlides + 2

        // Adjust initial position: Start at the first real slide (index 1 in allSlides)
        let currentSlideIndexWithClones = 1; // Index 0 is the cloned last slide

        // Set CSS variable for total slides (important for track width)
        // This should be totalRealSlides + 2 for calc(100% * var(--total-slides)) to work.
        carouselTrack.style.setProperty('--total-slides', totalSlidesWithClones);

        // Function to create pagination dots (uses totalRealSlides)
        function createDots() {
            paginationDotsContainer.innerHTML = '';
            for (let i = 0; i < totalRealSlides; i++) { // Dots only for real slides
                const dot = document.createElement('span');
                dot.classList.add('dot');
                if (i === currentIndex) { // current Index tracks real slides
                    dot.classList.add('active');
                }
                dot.addEventListener('click', () => {
                    moveToSlide(i); // Move to real slide index
                });
                paginationDotsContainer.appendChild(dot);
            }
        }

        // Update the position of the track
        function updateCarousel(smooth = true) {
            // Disable transition for instant snap when looping from clone to real slide
            carouselTrack.style.transition = smooth ? 'transform 0.5s ease-in-out' : 'none';
            carouselTrack.style.transform = `translateX(-${currentSlideIndexWithClones * 100}%)`;
            updateDots();
        }

        // Update active dot (based on real slide index)
        function updateDots() {
            const dots = paginationDotsContainer.querySelectorAll('.dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }

        // Move to a specific slide by index (this is for dot clicks, based on real slides)
        function moveToSlide(realIndex) {
            currentIndex = realIndex;
            // When moving to a real slide, adjust clone index
            currentSlideIndexWithClones = realIndex + 1;
            updateCarousel(true); // Always smooth for direct dot clicks
        }

        // Event Listener for Next button
        nextBtn.addEventListener('click', () => {
            currentSlideIndexWithClones++;
            updateCarousel(true); // Smooth transition
        });

        // Event Listener for Previous button
        prevBtn.addEventListener('click', () => {
            currentSlideIndexWithClones--;
            updateCarousel(true); // Smooth transition
        });

        // Transition End Listener (Crucial for snapping back)
        carouselTrack.addEventListener('transitionend', () => {
            // If we've slid to the cloned first slide, snap back to the real first slide
            if (currentSlideIndexWithClones >= totalRealSlides + 1) {
                currentSlideIndexWithClones = 1; // Go to the real first slide
                currentIndex = 0; // Update real index
                updateCarousel(false); // Snap instantly (no transition)
            }
            // If we've slid to the cloned last slide, snap back to the real last slide
            else if (currentSlideIndexWithClones <= 0) {
                currentSlideIndexWithClones = totalRealSlides; // Go to the real last slide
                currentIndex = totalRealSlides - 1; // Update real index
                updateCarousel(false); // Snap instantly (no transition)
            } else {
                // If we're on a real slide, update currentIndex for dots
                currentIndex = currentSlideIndexWithClones - 1;
            }
            updateDots(); // Ensure dots are updated correctly after any snap
        });

        // Initial setup for THIS carousel
        createDots();
        updateCarousel(false); // Initial position should be instant (no transition)
    }

    // Initialize all carousels by their section IDs
    initializeCarousel('trending-section');
    initializeCarousel('hollywood-section');
    initializeCarousel('international-section');
    initializeCarousel('bollywood-section');
    initializeCarousel('kenyan-films-section');
    initializeCarousel('k-drama-section'); // Fixed K-DRAMA ID based on HTML
});
