//carga el dom
window.addEventListener("DOMContentLoaded", function () {

    //trae referencias de los elementos del dom y no de sus valores
    //permite referenciar el elemento del dom multiples veces sin escanear el dom cada vez

    let domCategoria = document.getElementById("categoria");
    let domCantidad = document.getElementById("cantidad");
    let resumen = document.getElementById("resumen");
    let domTotal = document.getElementById("total");

    //manejo de eventos de los campos y btn
    resumen.addEventListener("click", mostrarResumen);
    domCategoria.addEventListener("change", mostrarResumen);
    domCantidad.addEventListener("change", mostrarResumen);

    function mostrarResumen() {
        let descuento = 0;

        //determinar el descuento segun categoria elegida
        
        if (domCategoria.value == 0) {
            //Enviar alerta para que el usuario complete el campo
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

        domTotal.innerText = totalAPagar;
        
    }
});
