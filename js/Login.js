document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Retrieve the stored user data from localStorage
    var storedUserData = localStorage.getItem('userData');
    
    if (storedUserData) {
        // Parse the stored data back into an object
        storedUserData = JSON.parse(storedUserData);
        
        // Validate the entered email and password against the stored data
        if (email === storedUserData.email && password === storedUserData.password) {
            // If credentials match, simulate a successful login (in real life, you should also sanitize inputs and use secure authentication)
            alert('Login successful!');
            // Redirect to the home page
            window.location.href = 'Home.html';
        } else {
            alert('Incorrect email or password. Please try again.');
        }
    } else {
        alert('No user found. Please register first.');
    }
});