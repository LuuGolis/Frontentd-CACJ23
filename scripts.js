//carga el dom
window.addEventListener("DOMContentLoaded", function () {

    //trae referencias de los elementos del dom y no de sus valores
    //permite referenciar el elemento del dom multiples veces sin escanear el dom cada vez

    let domCategoria = document.getElementById("categoria");
    let domCantidad = document.getElementById("cantidad");
    let resumen = document.getElementById("resumen");
    let domTotal = document.getElementById("totalP");

    //manejo de eventos de los campos y btn
    resumen.addEventListener("click", calcularTotal );
    domCategoria.addEventListener("change", calcularTotal);
    domCantidad.addEventListener("change", calcularTotal);

    function calcularTotal() {
        let descuento = 0;

        //determinar el descuento segun categoria elegida
        
        if (domCategoria.value == 0) {
            //Enviar alerta para que el usuario complete el campo
            prompt
        }
        else if (domCategoria.value == 1) {
            descuento = 80;      
        }
        else if (domCategoria.value == 2) {
            descuento = 50;
        }
        else if (domCategoria.value == 3) {
            descuento = 15;         
        }
        
        //calcula el valor de tickets

        let total = domCantidad.value * 200;
        let totalDescuento = (total * descuento) / 100;
        let totalAPagar = total - totalDescuento;
        
       
        resumen.onclick = function() { domTotal.innerText = "Total a pagar: $" + totalAPagar;}
        
    }
});

// There are many ways to pick a DOM node; here we get the form itself and the email
// input box, as well as the span element into which we will place the error message.
const form = document.querySelector("form");
const email = document.getElementById("nombre");
const emailError = document.querySelector("#nombre + span.error");

email.addEventListener("input", (event) => {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (email.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    emailError.textContent = ""; // Reset the content of the message
    emailError.className = "error"; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showError();
  }
});

form.addEventListener("submit", (event) => {
  // if the email field is valid, we let the form submit
  if (!email.validity.valid) {
    // If it isn't, we display an appropriate error message
    showError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    emailError.textContent = "You need to enter an email address.";
  } else if (email.validity.typeMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    emailError.textContent = "Entered value needs to be an email address.";
  } else if (email.validity.tooShort) {
    // If the data is too short,
    // display the following error message.
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }

  // Set the styling appropriately
  emailError.className = "error active";
}