let comprar;
let cantidad = 2.5;
let total = 0;
let precioItem;
let seguir;
let chocolate;
let despacho;

// let name1 = prompt("");

do {
    do {
        precioItem = parseFloat(prompt("Bienvenido a CookieShop, ¿cuántas galletas quieres hoy"));
        if (precioItem <= 0) {
            alert("Cantidad Invalida");
        }
    } while (precioItem <= 0);

    chocolate = prompt("solo tenemos de chocolate, ¿está bien? escribe si / no")
    if (chocolate == "no"){
        alert("Lo sentimos, mañana tendremos las que buscas")
    }

    // cantidad = parseInt(prompt("Ingrese Cantidad"));
    // while (cantidad <= 0) {
    //     cantidad = parseInt(prompt("Cantidad inválida, por favor intente de nuevo"));
    // }

    total = total + precioItem*cantidad;
    seguir = prompt("Desea ingresar otro item? s/n");

    despacho = prompt("Quieres que las enviemos a tu casa? s/n")

} while (seguir == "s");

alert(`El total de tu pedido es: ${total}`);