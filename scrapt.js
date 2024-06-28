
const registeredUsers = [
    { email: "example1@example.com", password: "password1" },
    { email: "example2@example.com", password: "password2" }
];


function isUserRegistered(email, password) {
    return registeredUsers.some(user => user.email === email && user.password === password);
}

function handleSignIn(event) {
    event.preventDefault();

    const email = document.querySelector('input[type="email"]').value.trim();
    const password = document.querySelector('input[type="password"]').value.trim();

    if (isUserRegistered(email, password)) {
        window.location.href = "index.html";
    } else {
        alert("Invalid email or password. Please try again.");
    }
}
const signInForm = document.querySelector('.form');
signInForm.addEventListener('submit', handleSignIn);
document.addEventListener('DOMContentLoaded', function() {
  const signInForm = document.getElementById('signInForm');
  const submitSignInButton = document.getElementById('submitSignIn');

  signInForm.addEventListener('submit', function(event) {
    event.preventDefault();  
    if (!validateSignInForm()) {
      return;
    }

    alert('Sign in successful!');
    signInForm.reset();
  });

  function validateSignInForm() {
    const signInEmail = document.getElementById('signInEmail').value;
    const signInPassword = document.getElementById('signInPassword').value;

    
    return true
  }
});
