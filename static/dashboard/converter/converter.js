// drag and drop
document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
  const dropZoneElement = inputElement.closest(".drop-zone");

  dropZoneElement.addEventListener("click", (e) => {
    inputElement.click();
  });

  inputElement.addEventListener("change", (e) => {
    if (inputElement.files.length) {
      updateThumbnail(dropZoneElement, inputElement.files[0]);
      dropZoneElement.classList.add("drop-zone--over");
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

    dropZoneElement.classList.add("drop-zone--over");
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
const eMessage = document.querySelector('.error-message');
document.addEventListener('DOMContentLoaded',function(){
  const form = document.querySelector('form');
  const image = document.querySelector('#image');
  image.onchange =function(){
    eMessage.classList.remove('block');
    validateSize(image);
  }

  form.addEventListener('submit', (e)=>{
    let imageCont = image.files[0];
    // e.preventDefault();
    if(imageCont == undefined){
      eMessage.innerHTML = 'No Image uploaded!';
      eMessage.classList.add('error');
      eMessage.classList.add('block');
      e.preventDefault();
    }else{
        if(validateSize(image)==false){
            e.preventDefault();
        }
    }
  })
})
function validateSize(input) {
  const fileSize = input.files[0].size / 1024 / 1024; // in MiB
  if (fileSize > 2) {
      eMessage.classList.add('error');
      eMessage.innerHTML = 'File size exceeds 2 MiB, Reupload!';
      eMessage.classList.add('block');
      return false;
  }else{
      eMessage.classList.remove('error');
      eMessage.classList.add('success');
      eMessage.innerHTML = 'File size is less than 2 MiB';
      eMessage.classList.add('block');
  }
}
