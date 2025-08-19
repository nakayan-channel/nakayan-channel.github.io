fetch("/footer.html")
  .then((response) => response.text())
  .then((data) => document.querySelector("#footer-menu1").innerHTML = data);
