const bannerImages = [
  "assets/banner/IMG_9263.JPG",
  "assets/banner/IMG_9264.JPG",
  "assets/banner/IMG_9265.JPG",
  "assets/banner/IMG_9266.JPG",
  "assets/banner/Kentucky_Route_80_in_Pulaski_County.jpg",
  "assets/banner/Pulaski_County_Kentucky_courthouse.jpg"
];

const imageViewer = document.getElementById("highlights-images");
const leftButton = document.getElementById("highlights-btns-left");
const rightButton = document.getElementById("highlights-btns-right");

let index = 0;
const fadeDuration = 800; 
let autoRotateInterval;

// Show initial image
imageViewer.src = bannerImages[index];

function changeImage(newIndex) {
  imageViewer.classList.add("fade");

  setTimeout(() => {
    imageViewer.src = bannerImages[newIndex];

    // Force reflow before removing fade
    void imageViewer.offsetWidth;

    imageViewer.classList.remove("fade");
  }, fadeDuration);
}



function startAutoRotate() {
  // Clear existing timer first
  clearInterval(autoRotateInterval);

  autoRotateInterval = setInterval(() => {
    index = (index + 1) % bannerImages.length;
    changeImage(index);
  }, 12000);    // banner autorotate time
}

// Button click handlers
leftButton.addEventListener("click", () => {
  index = (index + 1) % bannerImages.length;
  changeImage(index);
  startAutoRotate(); // reset timer
});

rightButton.addEventListener("click", () => {
  index = (index - 1 + bannerImages.length) % bannerImages.length;
  changeImage(index);
  startAutoRotate(); // reset timer
});

// Start rotation on load
startAutoRotate();
