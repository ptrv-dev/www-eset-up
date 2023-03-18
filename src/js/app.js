const headerMenuButton = document.querySelector('button.header__menu');
const headerNavigation = document.querySelector('nav.nav');

headerMenuButton.addEventListener('click', () => {
  headerMenuButton.classList.toggle('header__menu_active');
  headerNavigation.classList.toggle('nav_active');
});

const sliderButtons = {
  previous: document.querySelector('.testimonials-slider__button_prev'),
  next: document.querySelector('.testimonials-slider__button_next'),
};
const slides = document.querySelectorAll('.testimonial');
let currentSlide = 0;

console.log(slides.length);

const updateSlide = () => {
  slides.forEach((slide) => slide.classList.remove('testimonial_active'));
  slides[currentSlide].classList.add('testimonial_active');
};

const handleNext = () => {
  if (currentSlide >= slides.length - 1) currentSlide = 0;
  else currentSlide++;
  updateSlide();
};
const handlePrevious = () => {
  if (currentSlide <= 0) currentSlide = slides.length - 1;
  else currentSlide--;
  updateSlide();
};

sliderButtons.previous.addEventListener('click', handlePrevious);
sliderButtons.next.addEventListener('click', handleNext);
