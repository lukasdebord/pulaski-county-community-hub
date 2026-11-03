// headerHide.js -> hides the header on the homepage when scrolling past 

const header = document.getElementById("header");

window.addEventListener("scroll", function () {
    if (window.scrollY > 600) {   // change 400 to your trigger point
        header.classList.add("hide");
    } else {
        header.classList.remove("hide");
    }
});