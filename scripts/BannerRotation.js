const bannerImages = [
  "assets/pexels-clement-couturier-546640561-32802427.jpg",
  "assets/pexels-danieljschwarz-34403453.jpg",
  "assets/pexels-kostas-dimopoulos-119583302-34595256.jpg"
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
  }, 8000);
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
