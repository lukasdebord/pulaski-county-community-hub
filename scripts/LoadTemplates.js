
async function loadPart(id, file) {
  try {
    const res = await fetch(file);
  document.getElementById(id).innerHTML = await res.text();
  } catch (err)
  {
    console.log(err);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    loadPart("footer", "/pages/pagesRef/footer.html");
    loadPart("header", "/pages/pagesRef/header.html")
  })
}
