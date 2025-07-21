//     img {
//         width: 100%;
//         max-width: 600px;
//         display: block;
//         margin: 20px auto;
//         opacity: 0;
//         filter: blur(10px);
//         transition: opacity 2s ease-in-out, filter 2s ease;
//     }

//     img.loaded {
//         opacity: 1;
//         filter: blur(0);
//     }

// <img src="./slide1.jpg" data-src="./slide1.jpg" alt="img-one" loading="lazy">
// <img src="./slide2.jpg" data-src="./slide2.jpg" alt="img-two" loading="lazy">
// <img src="./slide1.jpg" data-src="./slide1.jpg" alt="img-three" loading="lazy">

document.addEventListener("DOMContentLoaded", () => {
  const lazyImages = document.querySelectorAll("img[data-src]");
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute("data-src");
        img.classList.add("loaded");
        observer.unobserve(img);
      }
    });
  });

  lazyImages.forEach((img) => {
    imageObserver.observe(img);
  });
});
