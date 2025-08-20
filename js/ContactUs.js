document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    // Simulate sending the message to the business email
    alert(`Thank you, ${username}! Your message has been sent to contact@takeyourtime.com.\n\nMessage:\n${message}`);
    document.getElementById('contactInfo').style.display = 'block';
    // Ensure map is visible and scroll to it
    const mapContainer = document.getElementById('mapContainer');
    if (mapContainer) {
        mapContainer.style.display = 'flex';
        mapContainer.scrollIntoView({ behavior: 'smooth' });
    }
});

// Ensure map is visible on page load
window.addEventListener('DOMContentLoaded', function() {
    const mapContainer = document.getElementById('mapContainer');
    if (mapContainer) {
        mapContainer.style.display = 'flex';
    }
});