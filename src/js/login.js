const passwordInput = document.querySelector('#password');
const passwordToggle = document.querySelector('.password-toggle');
const passwordIcon = passwordToggle.querySelector('img');

passwordToggle.addEventListener('click', () => {
    const isPasswordVisible = passwordInput.type === 'text';
    passwordInput.type = isPasswordVisible ? 'password' : 'text';
    passwordToggle.setAttribute('aria-label', isPasswordVisible ? 'Mostrar senha' : 'Ocultar senha');
    passwordIcon.src = isPasswordVisible
        ? '../assets/image/eye-visibility.svg'
        : '../assets/image/eye-visibility-off.svg';

});