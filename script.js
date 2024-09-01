let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const backgroundBlur = document.querySelector('.background-blur');

function showSlide(index) {
    if (index >= slides.length - 2) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 3;
    } else {
        currentSlide = index;
    }

    // Reset classes for all slides
    slides.forEach(slide => slide.classList.remove('middle'));

    // Add 'middle' class to the current slide
    slides[currentSlide + 1].classList.add('middle');

    const offset = -currentSlide * 33.33;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;

    // Update background image for the background-blur element
    const middleImageSrc = slides[currentSlide + 1].querySelector('img').src;
    backgroundBlur.style.backgroundImage = `url(${middleImageSrc})`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Ensure the slides are initialized correctly
showSlide(currentSlide);

setInterval(nextSlide, 3000); // Auto slide every 3 seconds
