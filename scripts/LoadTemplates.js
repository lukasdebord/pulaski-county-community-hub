async function loadPart(id, file) {
  try {
    const res = await fetch(file);
    const html = await res.text(); // ← read ONCE

    console.log("FETCHED HTML FOR", file);
    console.log(html);

    document.getElementById(id).innerHTML = html;
  } catch (err) {
    console.error(err);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadPart("footer", "/pages/pagesRef/footer.html");
  loadPart("header", "/pages/pagesRef/header.html");
});
