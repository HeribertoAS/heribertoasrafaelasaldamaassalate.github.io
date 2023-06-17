function showLoginForm() {
    document.getElementById('registrationForm').style.display = 'none';
    document.getElementById('loginContainer').classList.add('show');
  }
  
  function validateRegistrationForm() {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
  
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return false;
    }
  
    return true;
  }
  
  function validateLoginForm() {
    // agregar la lógica de validación inicio de sesión
    return true;
  }