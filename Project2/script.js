document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    const messageDiv = document.getElementById('message');
    messageDiv.textContent = `Submitted successfully! Username: ${username}, Email: ${email}`;
    messageDiv.classList.remove('hidden'); // Show the message
});