// Select form and inputs
const form = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

// Add submit event
form.addEventListener("submit", function (event) {
  event.preventDefault(); 

  let isValid = true;

  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  // Reset previous errors
  emailError.textContent = "";
  passwordError.textContent = "";

  // Email Validation
  if (emailValue === "") {
    emailError.textContent = "Email is required";
    isValid = false;
  } else if (!isValidEmail(emailValue)) {
    emailError.textContent = "Enter a valid email address";
    isValid = false;
  }

  // Password Validation
  if (passwordValue === "") {
    passwordError.textContent = "Password is required";
    isValid = false;
  } else if (passwordValue.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    isValid = false;
  }

  // If all valid
  if (isValid) {
    alert("Login Successful ");
    form.reset();
  }
});

// Email format check using regex
function isValidEmail(email) {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  return emailPattern.test(email);
}