document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Simulate successful submission
    setTimeout(function() {
        // Display confirmation message
        document.getElementById('confirmation-message').style.display = 'block';

        // Reset the form fields
        document.getElementById('contact-form').reset();
    }, 500); // Simulated delay for form submission
});












document.getElementById('chat-button').addEventListener('click', function() {
    document.getElementById('chat-popup').style.display = 'block';
});

document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('chat-popup').style.display = 'none';
});

document.getElementById('send-button').addEventListener('click', function() {
    const message = document.getElementById('chat-input').value;
    if (message.trim() !== '') {
        alert('Your message: ' + message);
        document.getElementById('chat-input').value = ''; // Clear the input
    }
});
