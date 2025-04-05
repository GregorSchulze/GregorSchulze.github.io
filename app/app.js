document.getElementById("emailButton").addEventListener("click", function () {
  window.location.href =
    "mailto:gr.schulze@t-online.de?subject=Betreff&body=Hier%20ist%20der%20Text%20der%20E-Mail";
});

const slider = document.querySelector(".testimonial-slider");
const slides = document.querySelectorAll(".testimonial-slide");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

let currentIndex = 0;

function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextButton.addEventListener("click", () => {
  currentIndex = Math.min(currentIndex + 1, slides.length - 1);
  updateSlider();
});

prevButton.addEventListener("click", () => {
  currentIndex = Math.max(currentIndex - 1, 0);
  updateSlider();
});
