document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    // Collect form data
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validate form inputs
    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }

    // Display success message
    const successMessage = document.getElementById('successMessage');
    successMessage.classList.remove('hidden');

    // Clear the form
    document.getElementById('contactForm').reset();
});