const registerPassword = document.querySelector('#register-password');
const confirmPassword = document.querySelector('#confirm-password');
const registerForm = document.querySelector('.register-form');

const validatePasswords = () => {
    const passwordsMatch = registerPassword.value === confirmPassword.value;
    const shouldShowError = confirmPassword.value.length > 0 && !passwordsMatch;

    confirmPassword.setCustomValidity(
        shouldShowError ? 'As senhas precisam ser iguais.' : ''
    );

    if (shouldShowError) {
        confirmPassword.setAttribute('aria-invalid', 'true');
    } else {
        confirmPassword.removeAttribute('aria-invalid');
    }
};

registerPassword.addEventListener('input', validatePasswords);
confirmPassword.addEventListener('input', validatePasswords);

registerForm.addEventListener('submit', (event) => {
    validatePasswords();

    if (!registerForm.checkValidity()) {
        return;
    }

    event.preventDefault();
    window.location.href = './login.html';
});

document.querySelectorAll('.password-toggle').forEach((toggle) => {
    const passwordInput = document.querySelector(`#${toggle.dataset.target}`);
    const passwordIcon = toggle.querySelector('img');

    toggle.addEventListener('click', () => {
        const isPasswordVisible = passwordInput.type === 'text';
        passwordInput.type = isPasswordVisible ? 'password' : 'text';
        toggle.setAttribute('aria-label', isPasswordVisible ? 'Mostrar senha' : 'Ocultar senha');
        passwordIcon.src = isPasswordVisible
            ? '../assets/image/eye-visibility.svg'
            : '../assets/image/eye-visibility-off.svg';
    });
});