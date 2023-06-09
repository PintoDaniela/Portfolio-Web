/* Show / hide Hamburger Menu */
const hamburgerBtn = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

function toggleButton() {
  navList.classList.toggle('show');
}

hamburgerBtn.addEventListener('click', toggleButton);
navList.addEventListener('click', toggleButton);

/*Para que al enviar el formulario no me lleve al inicio*/
document.addEventListener('DOMContentLoaded', function() {
  var form = document.querySelector('form');
  form.addEventListener('submit', function(event) {
     event.preventDefault(); // Evita el comportamiento predeterminado del formulario
     var form_data = new FormData(form); // Obtengo los datos del formulario
     //Acá iría el código para envíar los datos del form.
     return false; // Evita que la página se recargue
  });
});

/*Para mostrar mensaje de que no se puede enviar el formulario*/
const formulario = document.getElementById('formulario');
const contactSpan = document.getElementById('mensajeEnviar');
const boton = document.getElementById('enviar');

formulario.addEventListener('submit', function(){ 
  const mensajeNoEnviado = document.createElement('p');
  const imagenNoEnviado = document.createElement('img');
  const bloqueErrorMensaje = document.getElementById("falla-mensaje")

  mensajeNoEnviado.textContent = '¡Muchas gracias por tu interés! <br> <i class="fa-solid fa-triangle-exclamation"></i> <br> Por el momento este formulario se encuentra fuera de servicio. <br> Para contactarte, podés enviar un correo haciendo click en el ícono de mensje aquí abajo, en la seccion "ENCONTRAME EN LAS REDES". <br>';
  imagenNoEnviado.src = "https://i.pinimg.com/originals/4d/58/ee/4d58ee3a092e554d6fd6dd29628565ba.gif";
  imagenNoEnviado.alt = "Error img";

  contactSpan.innerHTML =  mensajeNoEnviado.textContent;
  bloqueErrorMensaje.append(imagenNoEnviado);

  boton.scrollIntoView();
  return false;
});





/*Esto estaba para las tarjetas que expanden y esconden contenido. Ahora no se están usando*/
 /* Show more / show less descriptions */
 /*
const expandsMore = document.querySelectorAll('[expand-more]')

function expand(){
  const showContent = document.getElementById(this.dataset.target)
  if(showContent.classList.contains('expand-active')){
    this.innerHTML = this.dataset.showtext;
  }else{
    this.innerHTML = this.dataset.hidetext;
  }
  showContent.classList.toggle('expand-active')
  setTimeout(() => {
    showContent.style.transition = "max-height 0.5s ease-out";
  }, 1000);
}

expandsMore.forEach(expandMore =>{
  expandMore.addEventListener('click',expand)
})
*/