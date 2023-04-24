// burger-menu

document.getElementById("burger").addEventListener("click", function () {
  document.getElementById("mobile-nav").classList.toggle("open");
});

// carousel

const slides = document.querySelectorAll(".slide");

slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

const sliderButtons = () => {
  if (curSlide == 0) {
  } else {
  }
  if (curSlide == maxSlide) {
  } else {
  }
};

let curSlide = 0;

let maxSlide = slides.length - 1;

const slideButtons = document.querySelectorAll(".slide-btn");
slideButtons.forEach((button, indx) => {
  button.addEventListener("click", function () {
    curSlide = indx;
    slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
    sliderButtons();
  });
});
