document.addEventListener("DOMContentLoaded", function() 
{
    const form = document.querySelector('.login-form');
    const passwordInput = document.getElementById('password');
    const passwordError = document.getElementById('password-error');

    form.addEventListener('submit', function(event) 
    {
        const email = document.getElementById('email').value;
        const password = passwordInput.value;

        if (!validateEmail(email)) 
        {
            alert('Please enter a valid email address (e.g., example@gmail.com)');
            event.preventDefault();
        } else if (!validatePassword(password))
        {
            passwordError.textContent = 'Please enter a strong password containing at least one capital letter, one number, and one special character';
            event.preventDefault();
        }
    });

    passwordInput.addEventListener('input', function() 
    {
        passwordError.textContent = ''; 
    });

    function validateEmail(email) 
    {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validatePassword(password) 
    {
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    }
});
