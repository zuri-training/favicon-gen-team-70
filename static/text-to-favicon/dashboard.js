// For mobile navBar!!!
isClicked = false;
const icon = document.querySelector(".icon");
const body = document.querySelector("body");
const links = document.querySelector(".links");
document.addEventListener("DOMContentLoaded", function () {});
function show() {
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
function noShow() {
  if (isClicked) {
    document.querySelector(".mobile-link-div").classList.remove("blur");
    icon.classList.add("fa-bars");
    icon.classList.remove("fa-xmark");
    links.classList.remove("show");
    links.classList.add("left");
    isClicked = false;
  }
}

document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
  const dropZoneElement = inputElement.closest(".drop-zone");

  dropZoneElement.addEventListener("click", (e) => {
    inputElement.click();
  });

  inputElement.addEventListener("change", (e) => {
    if (inputElement.files.length) {
      updateThumbnail(dropZoneElement, inputElement.files[0]);
    }
  });

  dropZoneElement.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZoneElement.classList.add("drop-zone--over");
  });

  ["dragleave", "dragend"].forEach((type) => {
    dropZoneElement.addEventListener(type, (e) => {
      dropZoneElement.classList.remove("drop-zone--over");
    });
  });

  dropZoneElement.addEventListener("drop", (e) => {
    e.preventDefault();

    if (e.dataTransfer.files.length) {
      inputElement.files = e.dataTransfer.files;
      updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
    }

    dropZoneElement.classList.remove("drop-zone--over");
  });
});

/**
 * Updates the thumbnail on a drop zone element.
 *
 * @param {HTMLElement} dropZoneElement
 * @param {File} file
 */
function updateThumbnail(dropZoneElement, file) {
  let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");

  // First time - remove the prompt
  if (dropZoneElement.querySelector(".drop-zone__prompt")) {
    dropZoneElement.querySelector(".drop-zone__prompt").remove();
  }

  // First time - there is no thumbnail element, so lets create it
  if (!thumbnailElement) {
    thumbnailElement = document.createElement("div");
    thumbnailElement.classList.add("drop-zone__thumb");
    dropZoneElement.appendChild(thumbnailElement);
  }

  thumbnailElement.dataset.label = file.name;

  // Show thumbnail for image files
  if (file.type.startsWith("image/")) {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
    };
  } else {
    thumbnailElement.style.backgroundImage = null;
  }
}
