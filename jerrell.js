const hamburger = document.querySelector("#hamburger");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", function () {
  this.classList.toggle("hamburger-active");
  navbar.classList.toggle("nav-active");
});
