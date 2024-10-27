// test.js

// Select the form and error message elements
const form = document.getElementById('loginForm');
const errorMessage = document.getElementById('error-message');

// Event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    
    // Get the username and password values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic validation: check if username and password are not empty
    if (username === '' || password === '') {
        errorMessage.textContent = 'Please fill in both fields.';
    } else if (username === 'admin' && password === '1234') {
        // Simple validation: hardcoded username and password
        alert('Login successful!');
        errorMessage.textContent = ''; // Clear the error message
    } else {
        errorMessage.textContent = 'Invalid username or password.';
    }
});
