function initHeaderSearch() {
  const searchBar = document.getElementById("header-search-bar");
  const submitButton = document.getElementById("header-submit");

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("searchDir ran...");
    console.log(searchBar.value);
  });
}

