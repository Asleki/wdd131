// scripts/auth.js
// Handles client-side validation and submission for signup and login forms.
// Relies on showMessageBox from scripts/app_core.js.

document.addEventListener("DOMContentLoaded", () => {
    // Ensure showMessageBox is available
    if (typeof showMessageBox === 'undefined') {
        console.error("showMessageBox function is not available. Ensure scripts/app_core.js is loaded correctly.");
        return; // Exit if critical dependency is missing
    }

    // --- Signup Form Logic ---
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        const usernameInput = document.getElementById('signupUsername');
        const emailInput = document.getElementById('signupEmail');
        const passwordInput = document.getElementById('signupPassword');
        const confirmPasswordInput = document.getElementById('signupConfirmPassword');

        const usernameError = document.getElementById('usernameError');
        const emailError = document.getElementById('emailError');
        const passwordError = document.getElementById('passwordError');
        const confirmPasswordError = document.getElementById('confirmPasswordError');

        signupForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent default form submission

            let isValid = true;

            // Reset errors
            usernameError.textContent = '';
            emailError.textContent = '';
            passwordError.textContent = '';
            confirmPasswordError.textContent = '';

            // Username validation
            if (usernameInput.value.trim() === '') {
                usernameError.textContent = 'Username is required.';
                isValid = false;
            } else if (usernameInput.value.trim().length < 3) {
                usernameError.textContent = 'Username must be at least 3 characters long.';
                isValid = false;
            }

            // Email validation
            if (emailInput.value.trim() === '') {
                emailError.textContent = 'Email is required.';
                isValid = false;
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
                emailError.textContent = 'Invalid email format.';
                isValid = false;
            }

            // Password validation
            if (passwordInput.value.trim() === '') {
                passwordError.textContent = 'Password is required.';
                isValid = false;
            } else if (passwordInput.value.length < 6) {
                passwordError.textContent = 'Password must be at least 6 characters long.';
                isValid = false;
            }

            // Confirm Password validation
            if (confirmPasswordInput.value.trim() === '') {
                confirmPasswordError.textContent = 'Confirm password is required.';
                isValid = false;
            } else if (passwordInput.value !== confirmPasswordInput.value) {
                confirmPasswordError.textContent = 'Passwords do not match.';
                isValid = false;
            }

            if (isValid) {
                // Simulate successful signup
                showMessageBox('Sign up successful! Redirecting to login...', 'fas fa-check-circle');
                // In a real application, you would send data to a server here.
                // For now, redirect after a short delay.
                setTimeout(() => {
                    window.location.href = 'login.html';
                }, 1500);
            } else {
                showMessageBox('Please correct the errors in the form.', 'fas fa-exclamation-triangle');
            }
        });
    }

    // --- Login Form Logic ---
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        const emailUsernameInput = document.getElementById('loginEmailUsername');
        const passwordInput = document.getElementById('loginPassword');

        const emailUsernameError = document.getElementById('loginEmailUsernameError');
        const loginPasswordError = document.getElementById('loginPasswordError');

        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent default form submission

            let isValid = true;

            // Reset errors
            emailUsernameError.textContent = '';
            loginPasswordError.textContent = '';

            // Email/Username validation
            if (emailUsernameInput.value.trim() === '') {
                emailUsernameError.textContent = 'Email or Username is required.';
                isValid = false;
            }

            // Password validation
            if (passwordInput.value.trim() === '') {
                loginPasswordError.textContent = 'Password is required.';
                isValid = false;
            }

            if (isValid) {
                // Simulate login attempt
                const usernameOrEmail = emailUsernameInput.value;
                const password = passwordInput.value;

                // Simple simulated check (replace with actual backend auth)
                if (usernameOrEmail === 'test@example.com' && password === 'password123') {
                    showMessageBox('Login successful! Welcome back!', 'fas fa-check-circle');
                    // In a real app, you'd handle session/token here and redirect to dashboard.
                    setTimeout(() => {
                        window.location.href = 'discover.html'; // Redirect to homepage
                    }, 1500);
                } else if (usernameOrEmail === 'testuser' && password === 'password123') {
                     showMessageBox('Login successful! Welcome back!', 'fas fa-check-circle');
                     setTimeout(() => {
                         window.location.href = 'discover.html'; // Redirect to homepage
                     }, 1500);
                }
                else {
                    showMessageBox('Invalid email/username or password.', 'fas fa-times-circle');
                }
            } else {
                showMessageBox('Please enter your credentials.', 'fas fa-exclamation-triangle');
            }
        });
    }
});