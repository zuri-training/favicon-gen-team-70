// For mobile navBar!!!
isClicked = false;
const icon = document.querySelector(".icon");
const body = document.querySelector("body");
const links = document.querySelector(".links");
document.addEventListener("DOMContentLoaded", function () {

});
function show(){
  document.querySelector(".mobile-link-div").classList.toggle("blur");
  body.classList.toggle("overflow");
    if (!isClicked) {
      links.classList.remove("left");
      links.classList.add("show");
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");
      isClicked = true;
    } else {
      icon.classList.add("fa-bars");
      icon.classList.remove("fa-xmark");
      links.classList.remove("show");
      links.classList.add("left");
      isClicked = false;
    }
}
// This function works only if the mobile nav is in display
function noShow(){
  if (isClicked) {
      document.querySelector(".mobile-link-div").classList.remove("blur");
      icon.classList.add("fa-bars");
      icon.classList.remove("fa-xmark");
      links.classList.remove("show");
      links.classList.add("left");
      isClicked = false;
    }
}

// const btn = document.getElementById("button");

// document.getElementById("form").addEventListener("submit", function (event) {
//   event.preventDefault();

//   btn.value = "Sending...";

//   const serviceID = "default_service";
//   const templateID = "template_90pea1x";

//   emailjs.sendForm(serviceID, templateID, this).then(
//     () => {
//       btn.value = "Send Email";
//       alert("Sent!");
//     },
//     (err) => {
//       btn.value = "Send Email";
//       alert(JSON.stringify(err));
//     }
//   );
// });
