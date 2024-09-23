let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');

const cadenaC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

function generar() {
  let numero = parseInt(cantidad.value);
  console.log(numero);
  if (numero < 8) {
    alert('La cantidad de caracteres tiene que ser mayor que 8');
  }

  let contra = '';
  if (numero > 8) {
    for (let i = 0; i < numero; i++) {
      let caracterA = cadenaC[Math.floor(Math.random() * cadenaC.length)];
      contra += caracterA;
    }
  }

  contrasena.value = contra;

  // Evaluar la contraseña generada
  evaluarContraseña();
}

function vaciarCampos() {
  // Selecciona todos los campos de tipo text y number
  const campos = document.querySelectorAll('input[type="text"], input[type="number"]');

  // Itera y vacía cada campo
  campos.forEach((campo) => (campo.value = ''));
}

function evaluarContraseña() {
  const estadoContraseña = document.getElementById('estadoContraseña');
  const passwordValue = contrasena.value;

  // Expresiones regulares para evaluar la fuerza de la contraseña
  const longitudSuficiente = passwordValue.length >= 8;
  const tieneMayusculas = /[A-Z]/.test(passwordValue);
  const tieneMinusculas = /[a-z]/.test(passwordValue);
  const tieneNumeros = /\d/.test(passwordValue);
  const tieneCaracteresEspeciales = /[!@#$%^&*(),.?":{}|<>]/.test(passwordValue);

  // Si cumple con varios criterios, es fuerte
  if (longitudSuficiente && tieneMayusculas && tieneMinusculas && tieneNumeros && tieneCaracteresEspeciales) {
    estadoContraseña.textContent = 'Contraseña Fuerte';
    estadoContraseña.className = 'texto__parrafo fuerte';
  } else {
    estadoContraseña.textContent = 'Contraseña Débil';
    estadoContraseña.className = 'texto__parrafo debil';
  }
}
