document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // For now, just log the username and password
    console.log('Username:', username);
    console.log('Password:', password);

    // Add your authentication logic here
});
