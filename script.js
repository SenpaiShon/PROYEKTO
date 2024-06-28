document.addEventListener('DOMContentLoaded', function() {
  const registrationForm = document.getElementById('registrationForm');
  const submitButton = document.getElementById('submitRegistration');

  registrationForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

  
    if (!validateForm()) {
      return;
    }

    alert('Registration successful!');
    registrationForm.reset(); 
  });

  function validateForm() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return false;
    }
    return true;
  }
});




function validateRegistrationForm() {
    const inputs = document.querySelectorAll('.input');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
        }
    });
    return isValid;
}
function handleFormSubmission(event) {
    event.preventDefault();
    if (validateRegistrationForm()) {
        window.location.href = "signin.html";
    } else {
        alert("Please fill in all fields before submitting.");
    }
}
const submitButton = document.getElementById('redirectButton');
submitButton.addEventListener('click', handleFormSubmission);
