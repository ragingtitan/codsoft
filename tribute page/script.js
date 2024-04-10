function initializeCarousel(carouselElementId) {
    // Get all carousel elements with the given ID
    const carousels = document.querySelectorAll(carouselElementId);
    
    // Iterate over each carousel element
    carousels.forEach(carousel => {
        // Get the carousel items and indicators
        const items = carousel.querySelectorAll('[data-twe-carousel-item]');
        const indicators = carousel.querySelectorAll('[data-twe-carousel-indicators] button');
    
        // Initialize current slide index
        let currentSlideIndex = 0;
    
        // Function to show a specific slide
        function showSlide(index) {
            // Hide all slides
            items.forEach((item) => {
                item.classList.add('hidden');
            });
            // Show the selected slide
            items[index].classList.remove('hidden');
    
            // Update active indicator
            indicators.forEach((indicator, i) => {
                if (i === index) {
                    indicator.classList.add('carousel-active');
                    indicator.setAttribute('aria-current', 'true');
                } else {
                    indicator.classList.remove('carousel-active');
                    indicator.removeAttribute('aria-current');
                }
            });
        }
    
        // Function to show next slide
        function nextSlide() {
            currentSlideIndex = (currentSlideIndex + 1) % items.length;
            showSlide(currentSlideIndex);
        }
    
        // Function to show previous slide
        function prevSlide() {
            currentSlideIndex = (currentSlideIndex - 1 + items.length) % items.length;
            showSlide(currentSlideIndex);
        }
    
        // Add click event listeners to navigation buttons
        carousel.querySelector('[data-twe-slide="prev"]').addEventListener('click', prevSlide);
        carousel.querySelector('[data-twe-slide="next"]').addEventListener('click', nextSlide);
    
        // Add click event listeners to indicators
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                currentSlideIndex = index;
                showSlide(currentSlideIndex);
            });
        });
    });
}

// Call the initializeCarousel function for each carousel element on the page
initializeCarousel('#carouselExampleIndicators');
// If you have other carousels on the page, call initializeCarousel for each of them like this:
// initializeCarousel('#otherCarouselId');
