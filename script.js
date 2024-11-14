let index = 0;
const images = document.querySelectorAll('.imagen');
images[index].classList.add('active'); // Muestra la primera imagen

document.getElementById('next').onclick = function() {
    images[index].classList.remove('active');
    index = (index + 1) % images.length; // Incrementa el índice y vuelve al inicio si llega al final
    images[index].classList.add('active');
};

document.getElementById('prev').onclick = function() {
    images[index].classList.remove('active');
    index = (index - 1 + images.length) % images.length; // Decrementa el índice y vuelve al final si llega al principio
    images[index].classList.add('active');
};

document.getElementById('show-register').onclick = function(event) {
    event.preventDefault(); // Evita el comportamiento por defecto del enlace
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('register-section').style.display = 'block';
};

// Mostrar la sección de inicio de sesión
document.getElementById('show-login').onclick = function(event) {
    event.preventDefault(); // Evita el comportamiento por defecto del enlace
    document.getElementById('register-section').style.display = 'none';
    document.getElementById('login-section').style.display = 'block';
};

// Manejo de envío de formularios
document.getElementById('login-form').onsubmit = function(event) {
    event.preventDefault(); // Evita que el formulario se envíe por defecto
    // Aquí puedes agregar la lógica para manejar el inicio de sesión
    alert('Iniciando sesión con: ' + document.getElementById('login-email').value);
};

document.getElementById('register-form').onsubmit = function(event) {
    event.preventDefault(); // Evita que el formulario se envíe por defecto
    // Aquí puedes agregar la lógica para manejar el registro
    alert('Registrando con: ' + document.getElementById('register-name').value + ', Correo: ' + document.getElementById('register-email').value);
};


// navegaciÃ³n
const nav = document.querySelector("header nav");
// botÃ³n que llama al menu
const menuBtn = document.querySelector(".menu-btn");
// el menu
const menu = document.querySelector(".menu");
// vÃ­nculos de los items
const menuLink = document.querySelectorAll(".nav-item a");



/* ------------------------------------
   Se determinan quÃ© eventos
   desencadenarÃ¡n las acciones del menÃº
   ------------------------------------ */

  // al cliquear en el boton
menuBtn.addEventListener("click", toggleMenu);
  // se ejecuta la funcion "toggleMenu"
  
  // para cada vÃ­nculo del menÃº
  menuLink.forEach( el => {
    // cuando se cliquea en un vÃ­nculo
    el.addEventListener('click', toggleMenu);
    // se ejecuta la funciÃ³n "toggleMenu"
  });
  
  

/* --------------------------
   En una funciÃ³n, se definen
   las acciones para el menÃº
   -------------------------- */

function toggleMenu(e) {

  // previene efectos predeterminados de las etiquetas <a>
  e.preventDefault();

  // Si el ancho de la ventana del navegador
  // mide menos de 640px (el botÃ³n "hamburguesa" serÃ¡ visible)
  if (window.innerWidth < 640) {

    // agrega la clase "menuVisible" a nav, si no la tiene
    // y se la saca, si la tiene
    nav.classList.toggle("menuVisible");

  }


  /// si el cliqueado es un vÃ­nculo
  if ( this.hasAttribute("href") ) {

    // guarda la ruta del vÃ­nculo
    let adondeVoy = this.getAttribute("href");

    // redirecciona a destino del vÃ­nculo
    window.location = adondeVoy;  
    
  } // fin de si es cliqueado un vinculo

  
} // fin de las acciones para el menu


