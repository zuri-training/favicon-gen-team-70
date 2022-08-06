const form = document.getElementById("form");
const username = document.getElementById("username");
const firstname = document.getElementById("fname");
const lastname = document.getElementById("lname");
const email = document.getElementById("email");
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
function validateFname() {
  const firstnameValue = fname.value.trim();

  if (firstnameValue === "") {
    setErrorFor(fname, "Username cannot be blank");
  } else {
    setSuccessFor(fname);
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
function validateLname() {
  const lastnameValue = lname.value.trim();

  if (lastnameValue === "") {
    setErrorFor(lname, "Username cannot be blank");
  } else {
    setSuccessFor(lname);
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

function validateEmail() {
  const emailValue = email.value.trim();

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Not a valid email");
  } else {
    setSuccessFor(email);
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
  function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
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
  const firstnameValue = fname.value.trim();
  const lastnameValue = lname.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (usernameValue === "") {
    setErrorFor(username, "Username cannot be blank");
    e.preventDefault();
  } else {
    setSuccessFor(username);
  }
  if (firstnameValue  === "") {
    e.preventDefault();
    setErrorFor(fname, "Firstname cannot be blank");
  } else {
    setSuccessFor(fname);
  }
  if (lastnameValue === "") {
    e.preventDefault();
    setErrorFor(lname, "Lastname cannot be blank");
  } else {
    setSuccessFor(lname);
  }

  if (emailValue === "") {
     e.preventDefault();
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Not a valid email");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue.length < 6) {
    e.preventDefault();
    setErrorFor(password, "Minimum of 6 characters");
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

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

