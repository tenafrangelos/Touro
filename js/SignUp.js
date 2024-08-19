document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form data
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
    var nationality = document.getElementById('nationality').value;
    var password = document.getElementById('password').value;

    // Create an object to store user data
    var userData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        mobile: mobile,
        nationality: nationality,
        password: password
    };

    // Store the data in localStorage (WARNING: This is NOT secure for real passwords!)
    localStorage.setItem('userData', JSON.stringify(userData));

    // Optionally, you can redirect or show a success message here
    alert('Signup successful. Data saved to localStorage.');
});