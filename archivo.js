/* al seleccionar el icono del mapa */

$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);


     // Cargar dinámicamente el contenido del footer
     fetch('/layout/footer.html')
     .then(response => response.text())
     .then(html => {
         document.getElementById('footer-container').innerHTML = html;
     })
     .catch(error => {
         console.error('Error al cargar el footer:', error);
     });


// /* FUNCION MODAL-DESAYUNO*/

// function modalDesayuno() {
//   var modalIdsDesayuno = ["modalDesayuno1", "modalDesayuno2", "modalDesayuno3", "modalDesayuno4", "modalDesayuno5"];
//   var modalsDesayuno = [];

//   modalIdsDesayuno.forEach(function(id) {
//       var modalDesayuno = document.getElementById(id);
//       if (modalDesayuno) {
//           modalsDesayuno.push(modalDesayuno);
//       } else {
//           console.error("No se pudo encontrar el elemento con el ID: " + id);
//       }
//   });

//   // Obtener los enlaces de información de la página de desayunos
//   var infoLinksDesayuno = document.querySelectorAll(".info-link-desayuno");

//   // Recorrer todos los enlaces de información de la página de desayunos
//   infoLinksDesayuno.forEach(function(infoLink, index) {
//       // Obtener el modal correspondiente al índice actual
//       var modalDesayunoEnlace = document.getElementById("modalDesayuno" + (index + 1));

//       // Cuando se hace clic en el enlace de información, mostrar el modal correspondiente
//       infoLink.onclick = function() {
//           if (modalDesayunoEnlace) {
//               modalDesayunoEnlace.style.display = "block";
//           }
//       }

//       // Obtener el botón de cierre del modal correspondiente
//       var closeButton = modalDesayunoEnlace.querySelector(".close button");

//       // Cuando se hace clic en el botón de cierre, ocultar el modal
//       closeButton.addEventListener("click", function() {
//           modalDesayunoEnlace.style.display = "none";
//       });
//   });

//   // Cuando el usuario hace clic fuera de cualquier modal, también ocultarlo
//   window.addEventListener('click', function(event) {
//       if (event.target.classList.contains('modal-desayuno')) {
//           event.target.style.display = "none";
//       }
//   });
// }

// // Llamar a la función modalDesayuno después de que el DOM haya cargado
// document.addEventListener("DOMContentLoaded", function() {
//   modalDesayuno();
// });

/*----MODAL-DESAYUNO----*/

function modalDesayuno() {
  var modalIdsDesayuno = ["modalDesayuno1", "modalDesayuno2", "modalDesayuno3", "modalDesayuno4", "modalDesayuno5"];

  // Obtener los enlaces de información de la página de desayuno
  var infoLinksDesayuno = document.querySelectorAll(".info-link-desayuno");

  // Recorrer todos los enlaces de información de la página de desayuno
  infoLinksDesayuno.forEach(function (infoLink, index) {
    var modalId = modalIdsDesayuno[index];
    var modalDesayunoEnlace = document.getElementById(modalId);

    if (!modalDesayunoEnlace) {
      console.error("No se pudo encontrar el elemento con el ID: " + modalId);
      return; // Salir del ciclo si no se encuentra el modal
    }

    // Cuando se hace clic en el enlace de información, mostrar el modal correspondiente
    infoLink.onclick = function () {
      modalDesayunoEnlace.style.display = "block";
    };

    // Obtener el botón de cierre del modal correspondiente
    var closeButton = modalDesayunoEnlace.querySelector(".close button");

    // Cuando se hace clic en el botón de cierre, ocultar el modal
    closeButton.addEventListener("click", function () {
      modalDesayunoEnlace.style.display = "none";
    });
  });

  // Cuando el usuario hace clic fuera de cualquier modal, también ocultarlo
  window.addEventListener('click', function (event) {
    if (event.target.classList.contains('modal-desayuno')) {
      event.target.style.display = "none";
    }
  });
}

// Llamar a la función modalsTapas después de que el DOM haya cargado
document.addEventListener("DOMContentLoaded", function () {
  modalDesayuno();
});









/* FUNCION MODAL-TAPAS */
function modalsTapas() {
  var modalIdsTapas = ["modal6", "modal7", "modal8", "modal9", "modal10", "modal11", "modal12", "modal13", "modal14",
    "modal15", "modal16", "modal17", "modal18", "modal19", "modal20", "modal21", "modal22"];

  // Obtener los enlaces de información de la página de tapas
  var infoLinksTapas = document.querySelectorAll(".info-link-tapas");

  // Recorrer todos los enlaces de información de la página de tapas
  infoLinksTapas.forEach(function (infoLink, index) {
    var modalId = modalIdsTapas[index];
    var modalTapasEnlace = document.getElementById(modalId);

    if (!modalTapasEnlace) {
      console.error("No se pudo encontrar el elemento con el ID: " + modalId);
      return; // Salir del ciclo si no se encuentra el modal
    }

    // Cuando se hace clic en el enlace de información, mostrar el modal correspondiente
    infoLink.onclick = function () {
      modalTapasEnlace.style.display = "block";
    };

    // Obtener el botón de cierre del modal correspondiente
    var closeButton = modalTapasEnlace.querySelector(".close button");

    // Cuando se hace clic en el botón de cierre, ocultar el modal
    closeButton.addEventListener("click", function () {
      modalTapasEnlace.style.display = "none";
    });
  });

  // Cuando el usuario hace clic fuera de cualquier modal, también ocultarlo
  window.addEventListener('click', function (event) {
    if (event.target.classList.contains('modal')) {
      event.target.style.display = "none";
    }
  });
}

// Llamar a la función modalsTapas después de que el DOM haya cargado
document.addEventListener("DOMContentLoaded", function () {
  modalsTapas();
});
