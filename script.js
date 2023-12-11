function login() {
    var usernameInput = document.getElementById('username');
    var passwordInput = document.getElementById('password');
    var resultMessage = document.getElementById('resultMessage');

    var username = usernameInput.value;
    var password = passwordInput.value;

    // Check if the entered username and password match the predefined values
    if (username === 'dev' && password === 'dev@123') {
        // Authentication successful
        resultMessage.style.color = 'green';
        resultMessage.textContent = 'Login successful!';

        // Redirect to the welcome page
        window.location.href = 'welcome.html';
    } else {
        // Authentication failed
        resultMessage.style.color = 'red';
        resultMessage.textContent = 'Invalid username or password. Please try again.';

        // Clear the input fields for security reasons
        usernameInput.value = '';
        passwordInput.value = '';
    }
}


