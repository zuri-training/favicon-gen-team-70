const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");

function validateName() {
  const usernameValue = username.value.trim();

  if (usernameValue === "") {
    setErrorFor(username, "Username cannot be blank");
  } else {
    setSuccessFor(username);
  }
  function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = "form-control error";
    small.innerText = message;
  }

  function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
  }
}

function validatePassword() {
  const passwordValue = password.value.trim();
  if (passwordValue.length < 6) {
    setErrorFor(password, "Minimum of 6 characters");
  } else {
    setSuccessFor(password);
  }

  function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = "form-control error";
    small.innerText = message;
  }

  function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
  }
}

form.addEventListener("submit", (e) => {
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();
  
  if (usernameValue === "") {
    setErrorFor(username, "Username cannot be blank");
    e.preventDefault();
  } else {
    setSuccessFor(username);
  }
  if (passwordValue.length < 6) {
    setErrorFor(password, "Minimum of 6 characters");
    e.preventDefault();
  } else {
    setSuccessFor(password);
  }
});
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
