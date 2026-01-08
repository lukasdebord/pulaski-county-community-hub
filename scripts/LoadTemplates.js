async function loadPart(id, file) {
  try {
    const res = await fetch(file);
    document.getElementById(id).innerHTML = await res.text();
  } catch (err) {
    console.error(err);
  }
}

window.loadPart = loadPart;

// CALL IMMEDIATELY
loadPart("footer", "/pages/pagesRef/footer.html");
loadPart("header", "/pages/pagesRef/header.html");
