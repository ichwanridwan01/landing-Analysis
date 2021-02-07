// dark-mode
const checkbox = document.getElementById("checkbox");
// Massage
const form = document.getElementById("form");
const email = document.getElementById("email");
// burger menu
const burger = document.querySelector(".burger");
const nav = document.querySelector("nav .navbar-home");

// burger Menu

burger.addEventListener("click", function () {
  nav.classList.toggle("show");
});

// dark mode
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

// Massage
form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkdata();
});

function checkdata() {
  const emailValue = email.value;

  if (emailValue === "") {
    setErrorfor(email, "Please Enter Email!!");
  } else {
    setSuccessfor(email);
  }
}

function setErrorfor(input, massage) {
  const control = input.parentElement;
  const small = control.querySelector("small");

  small.innerText = massage;
  control.className = "form-control erorr";
}

function setSuccessfor(input, massage) {
  const control = input.parentElement;
  const small = control.querySelector("small");

  small.innerText = massage;
  control.className = "form-control success";
}
