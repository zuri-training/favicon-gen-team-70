// For mobile navBar!!!
isClicked = false;
const icon = document.querySelector(".icon");
const body = document.querySelector("body");
const links = document.querySelector(".links");
const mobile = document.querySelector(".mobile-link-div");
document.addEventListener("DOMContentLoaded", function () {

});
function show(){
  document.querySelector(".mobile-link-div").classList.toggle("blur");
  mobile.classList.toggle("notseen");
  body.classList.toggle("overflow");
    if (!isClicked) {
      links.classList.remove("left");
      links.classList.add("show");
      icon.classList.remove("fa-bars");
      isClicked = true;
    } else {
      links.classList.remove("show");
      links.classList.add("left");
      icon.classList.add("fa-bars");
      isClicked = false;
    }
}
// This function works only if the mobile nav is in display
function noShow(){
  if (isClicked) {
      document.querySelector(".mobile-link-div").classList.remove("blur");
      mobile.classList.toggle("notseen");
      body.classList.toggle("overflow");
      icon.classList.add('fa-bars');
      links.classList.remove("show");
      links.classList.add("left");
      isClicked = false;
    }
}

var slideIndex = 0;
showSlides();

function showSlides() {
var i;
var slides = document.getElementsByClassName("mySlides");
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}
slideIndex++;
if (slideIndex > slides.length) {slideIndex = 1}
slides[slideIndex-1].style.display = "block";
setTimeout(showSlides, 4000); // Change image every 2 seconds
}
