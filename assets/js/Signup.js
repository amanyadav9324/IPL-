function handleSignIn(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberMe').checked;
    const reEnterPassword = document.getElementById('Re-Enter-pass').value;
    const errorMessageDiv = document.getElementById('error-message');



        // Check if the passwords match
        if (password !== reEnterPassword) {
            errorMessageDiv.textContent = "Passwords are not match. Try again."; 
            errorMessageDiv.style.display = 'block';
            return false;
        }
            
            
        if (email && password) {
            const message = `
            Sign In Successful!
            ---------------------
            Email: ${email}
            Password: ${password} (not displayed for security)
            Remember Me: ${rememberMe ? 'Yes' : 'No'}
        `;
        

        document.getElementById('modalMessage').innerText = message;
        document.getElementById('modal').style.display = 'block';

        document.getElementById('signInForm').style.display = 'none';
        } else {
            alert('Please fill in all fields.');
        } 
        return true;
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('signInForm').style.display = 'block';
}