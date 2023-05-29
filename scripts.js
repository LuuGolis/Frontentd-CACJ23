
/*function mostrarCategoria(){
let categoria = document.getElementById("categoria").value;
//console.log(categoria);
return categoria;
}

function valorElemento(id){
    let elemento = document.getElementById(id).value;
    return elemento;
}*/

function tipoDescuento(){
    let descuento;
    let categoria = document.getElementById("categoria").value;
    console.log(categoria);
    if(categoria == 1){
        descuento = 80;
        console.log(descuento);
        return descuento;
    }
    else if(categoria == 2){
        descuento = 50;
        console.log(descuento);
        return descuento;
    }
    else if(categoria == 3){
        descuento = 15;
        console.log(descuento);
        return descuento;
    }
}

function descuento(tipo){
    let desc = tipo;
    let elem = document.getElementById('discount');
    elem.innerHtml = desc;
}


function totalAPagar(cantidad, descuento){
    let total = cantidad * 200;
    let totalDescuento = (total * descuento) / 100;
    let totalPago = total - totalDescuento;
return totalPago;
}
let prueba = totalAPagar(5,tipoDescuento());
console.log(prueba);