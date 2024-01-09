if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.style.backgroundColor = 'white';
}
function showPage(pageId) {
  var pages = document.getElementsByClassName("page");
  for (var i = 0; i < pages.length; i++) {
    pages[i].style.display = "none";
  }
  document.getElementById(pageId).style.display = "block";
  var links = document
    .getElementsByClassName("navbar")[0]
    .getElementsByTagName("a");
  for (var i = 0; i < links.length; i++) {
    links[i].classList.remove("active");
  }
  document
    .querySelector(`[onclick="showPage('${pageId}')"]`)
    .classList.add("active");
}
showPage("home");
