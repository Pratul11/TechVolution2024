// JavaScript for TechVolution 2024 Registration Form
// alert("HEELLLO!!!");
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registrationForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Perform form validation
    if (validateForm()) {
      // If validation passes, display success message (you can replace this with your own logic)
      alert("Registration successful!");
      // Reset the form after successful submission
      form.reset();
    }
  });
});

function validateForm() {
  // Get form elements
  const name = document.getElementById("name");
  const dob = document.getElementById("dob");
  const gender = document.querySelector('input[name="gender"]:checked');
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const address = document.getElementById("address");
  const city = document.getElementById("city");
  const state = document.getElementById("state");
  const zip = document.getElementById("zip");
  const tshirtSize = document.getElementById("tshirtSize");

  // Regular expressions for validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{10}$/;

  // Flag to track validation status
  let isValid = true;

  // Validate name
  if (name.value.trim() === "") {
    isValid = false;
    displayError(name, "Name is required");
  } else {
    clearError(name);
  }

  // Validate date of birth
  if (dob.value === "") {
    isValid = false;
    displayError(dob, "Date of Birth is required");
  } else {
    clearError(dob);
  }

  // Validate gender
  if (!gender) {
    isValid = false;
    displayError(document.getElementById("male"), "Gender is required");
  } else {
    clearError(document.getElementById("male"));
  }

  // Validate email
  if (!emailRegex.test(email.value)) {
    isValid = false;
    displayError(email, "Enter a valid email address");
  } else {
    clearError(email);
  }

  // Validate phone number
  if (!phoneRegex.test(phone.value)) {
    isValid = false;
    displayError(phone, "Enter a valid phone number");
  } else {
    clearError(phone);
  }

  // Validate address
  if (address.value.trim() === "") {
    isValid = false;
    displayError(address, "Street Address is required");
  } else {
    clearError(address);
  }

  // Validate city
  if (city.value.trim() === "") {
    isValid = false;
    displayError(city, "City is required");
  } else {
    clearError(city);
  }

  // Validate state
  if (state.value === "") {
    isValid = false;
    displayError(state, "State is required");
  } else {
    clearError(state);
  }

  // Validate zip code
  if (zip.value.trim() === "") {
    isValid = false;
    displayError(zip, "Zip Code is required");
  } else {
    clearError(zip);
  }

  // Validate t-shirt size
  if (tshirtSize.value === "") {
    isValid = false;
    displayError(tshirtSize, "T-shirt Size is required");
  } else {
    clearError(tshirtSize);
  }

  return isValid;
}

function displayError(element, message) {
  // Display error message
  const errorSpan = document.createElement("span");
  errorSpan.className = "error-message";
  errorSpan.textContent = message;
  element.parentNode.appendChild(errorSpan);
}

function clearError(element) {
  // Remove error message
  const errorSpan = element.parentNode.querySelector(".error-message");
  if (errorSpan) {
    errorSpan.remove();
  }
}
