// function to change display style
function showData(id) {
  document.getElementById(id).style.display = "contents";
}

// function to change text style
function changeTextStyle(id) {
  document.getElementById(id).style.color = "red";
  document.getElementById(id).style.fontSize = "20px";
}

// function to change background style
function changeBackground(id) {
  document.getElementById(id).style.backgroundColor = "yellow";
}

// function to trigger event manually
function manuallyTrigger() {
  let onchangeId = document.getElementById("onchangeInput");

  let event = new Event("change");
  onchangeId.dispatchEvent(event);
}


// function for form validation
function validateForm() {
  let valid = true;

  // Clear previous error messages
  document.getElementById('usernameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('passwordError').textContent = '';

  // Username validation
  const username = document.getElementById('username').value.trim();
  if (username.length < 3) {
    document.getElementById('usernameError').textContent = 'Username must be at least 3 characters';
    valid = false;
  }

  // Email validation
  const email = document.getElementById('email').value.trim();
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
  if (!emailPattern.test(email)) {
    document.getElementById('emailError').textContent = 'Invalid email format';
    valid = false;
  }

  // Phone number validation 
  const phoneNumber = document.getElementById('phoneNumber').value.trim();
  const phoneNumberPattern = /^[0-9]{10}$/;
  if(!phoneNumberPattern.test(phoneNumber)){
    document.getElementById('phoneNumberError').textContent = 'Invalid phone number';
    valid = false;
  }

  // Password validation
  const password = document.getElementById('password').value.trim();
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
  if (!passwordPattern.test(password)) {
    document.getElementById('passwordError').textContent = 'Password required : at least 8 characters , 1 captital , 1 small , 1 digit , 1 special';
    valid = false;
  }

  // Prevent form submission if validation fails
  return valid;
};


