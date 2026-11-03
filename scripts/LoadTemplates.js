// 1. Map of partials and their optional init functions
const partials = {
  header: { file: "/pages/pagesRef/header.html", init: initHeaderSearch },
  footer: { file: "/pages/pagesRef/footer.html" } // no init needed
};

// 2. Function to load a partial
async function loadPartial(id, file, init) {
  try {
    const res = await fetch(file);
    const html = await res.text();
    document.getElementById(id).innerHTML = html;
    if (init) init(); // run init after insertion
  } catch (err) {
    console.error(err);
  }
}

// 3. Load all partials
document.addEventListener("DOMContentLoaded", () => {
  for (const [id, info] of Object.entries(partials)) {
    loadPartial(id, info.file, info.init);
  }
});

// 4. Example header init function
function initHeaderSearch() {
  const submitButton = document.getElementById("header-submit");
  const searchBar = document.getElementById("header-search-bar");

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Searching:", searchBar.value);
  });
}