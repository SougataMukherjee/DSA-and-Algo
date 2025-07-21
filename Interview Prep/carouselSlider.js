let currentIndex = 0;
const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
const sliderImage = document.getElementById("slider-image");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

function updateSlider() {
  sliderImage.src = images[currentIndex];
  sliderImage.alt = `Slide ${currentIndex + 1}`;
  sliderImage.loading = "lazy";
}

function prevSlide() {
  currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
  updateSlider();
}

function nextSlide() {
  currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
  updateSlider();
}
prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);
updateSlider();
