let currentSlideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');


function initCarousel() {
    if (slides.length === 0) return;
    showSlide(currentSlideIndex);


    setInterval(() => {
        changeSlide(1);
    }, 5000);
}


function changeSlide(n) {
    currentSlideIndex += n;

    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }

    showSlide(currentSlideIndex);
}


function currentSlide(n) {
    currentSlideIndex = n - 1;
    showSlide(currentSlideIndex);
}


function showSlide(index) {

    slides.forEach(slide => {
        slide.classList.remove('active');
    });


    dots.forEach(dot => {
        dot.classList.remove('active');
    });


    if (slides[index]) {
        slides[index].classList.add('active');
    }


    if (dots[index]) {
        dots[index].classList.add('active');
    }
}


if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCarousel);
} else {
    initCarousel();
}