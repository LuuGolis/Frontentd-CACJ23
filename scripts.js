
function mostrarCategoria(){
let selectedValue = document.getElementById("categoria").value;
console.log(selectedValue);

}

function tipoDescuento(categoria){
    let descuento = 0;
    
    if(categoria === 'estudiante'){
        descuento = 80;
    }
    if(categoria === 'trainee'){
        descuento = 50;
    }
    if(categoria === 'junior'){
        descuento = 15;
    }
    return descuento;
}

function totalAPagar(cantidad, descuento){
    let total = cantidad * 200;
    let totalDescuento = (total * descuento) / 100;
    let totalPago = total - totalDescuento;
return totalPago;
}

let prueba = totalAPagar(5,15);
console.log(prueba);