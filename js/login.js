// 1. Diccionario de traducciones
const loginTranslations = {
  en: {
    loginSubtitle: "High-altitude safety companion & expedition trail portal",
    loginEmailLabel: "Email Address",
    exampleEmail: "VitalTrek@example.com",
    loginPasswordLabel: "Password",
    loginBtn: "Log in",
    loginNote: "Offline safety credentials remain encrypted on device memory. No continuous cell tower connection required."
  },
  es: {
    loginSubtitle: "Compañero de seguridad en altitud y portal de expedición",
    loginEmailLabel: "Correo Electrónico",
    exampleEmail: "VitalTrek@ejemplo.com",
    loginPasswordLabel: "Contraseña",
    loginBtn: "Iniciar sesión",
    loginNote: "Las credenciales de seguridad offline permanecen encriptadas en la memoria del dispositivo. No requiere conexión continua a red celular."
  }
};

// 2. Lógica de cambio de idioma
const loginLangBtns = document.querySelectorAll('.login-lang-wrapper .lang-btn');

loginLangBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    // Cambiar color visual
    loginLangBtns.forEach(b => b.classList.remove('is-active'));
    this.classList.add('is-active');

    // Cambiar los textos
    const selectedLang = this.getAttribute('data-lang'); 
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const translationKey = element.getAttribute('data-i18n');
      if (loginTranslations[selectedLang][translationKey]) {
        element.textContent = loginTranslations[selectedLang][translationKey];
      }
    });
  });
});

// 3. Lógica de redirección del Login
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const userEmail = document.getElementById('email').value;
    localStorage.setItem('vitaltrek_user', userEmail);
    window.location.href = 'emergency-contact.html'; 
  });
}