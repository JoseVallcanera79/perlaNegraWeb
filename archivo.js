/* al seleccionar el icono del mapa */

$(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );


  /* FUNCION MODAL*/
  var modalIds = ["modal1", "modal2", "modal3", "modal4", "modal5"];
  var modals = [];
  
  modalIds.forEach(function(id) {
      var modal = document.getElementById(id);
      if (modal) {
          modals.push(modal);
      } else {
          console.error("No se pudo encontrar el elemento con el ID: " + id);
      }
  });
  
// Obtener los enlaces de información
var infoLinks = document.querySelectorAll(".info-link");

// Obtener los elementos de cierre de los modales
var spanCloses = document.querySelectorAll(".modal .close button");

// Recorrer todos los enlaces de información
infoLinks.forEach(function(infoLink, index) {
    // Obtener el modal correspondiente al índice actual
    var modal = document.getElementById("modal" + (index + 1));

    // Cuando se hace clic en el enlace de información, mostrar el modal correspondiente
    infoLink.onclick = function() {
        if (modal) {
            modal.style.display = "block";
        }
    }

    // Cuando se hace clic en el botón de cierre del modal, ocultar el modal correspondiente
    if (spanCloses[index]) {
        spanCloses[index].onclick = function() {
            if (modal) {
                modal.style.display = "none";
            }
        }
    }
});

// Cuando el usuario hace clic fuera de cualquier modal, también ocultarlo
window.onclick = function(event) {
    modals.forEach(function(modal) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}


