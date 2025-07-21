{
  /* <div class="container">
    </div>
.container {
  display: flex;
  flex-wrap: wrap;
}
img {
  margin: 5px;
  width: 300px;
  height: 300px;
} */
}

const container = document.querySelector(".container");

function getRandom() {
  return Math.floor(Math.random() * 100);
}
function loadImages(numImages = 10) {
  let i = 0;
  while (i < numImages) {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        const img = document.createElement("img");
        img.src = `${data.message}`;
        container.appendChild(img);
      });
    i++;
  }
}
loadImages();

window.addEventListener("scroll", () => {
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    loadImages();
  }
});
