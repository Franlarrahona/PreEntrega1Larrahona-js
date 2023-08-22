//vARIABLES
let dinero_pedido;
let num_cuotas;
let repetir = "no";

//FUNCIONES
function CalculoCuotas(num_cuotas_funcion){
    let interes
    interes = parseInt(interes)

    if(num_cuotas_funcion == 1){
        interes = dinero_pedido * 0
    }
    else if(num_cuotas_funcion == 3){
        interes = dinero_pedido * 0.15
    }
    else if(num_cuotas_funcion == 6){
        interes = dinero_pedido * 0.5
    }
    else if(num_cuotas_funcion == 12){
        interes = dinero_pedido * 1
    }
    else if(num_cuotas_funcion == 24){
        interes = dinero_pedido * 2
    }
    else{
        console.log("error en ejecucion de funcion")
    }
    
    let PrecioFinal=  dinero_pedido + interes;
    let PrecioCuotas= PrecioFinal / num_cuotas;
    console.log("usted a seleccionado:", num_cuotas, "cuotas");
    console.log("el precio por cuota es de: $", PrecioCuotas, "pesos");
    console.log("el costo total del prestamo es de: $",PrecioFinal, "pesos");
    console.log("tienes un interes de: $", interes, "pesos");
}

console.log("Bienvenido al simulador de prestamos");

do{
dinero_pedido = prompt("¿cuanto es el monto que quieres pedir?");
dinero_pedido = parseInt(dinero_pedido);
console.log("usted a ingresado", dinero_pedido,"pesos");
num_cuotas = prompt("¿en cuantas cuotas quieres devolverlo? 1/3/6/12/24");


if(num_cuotas == 1){
    CalculoCuotas(1);
}

else if(num_cuotas == 3){
    CalculoCuotas(3);
}

else if(num_cuotas == 6){
    CalculoCuotas(6);
}
else if(num_cuotas == 12){
    CalculoCuotas(12);
}
else if(num_cuotas == 24){
    CalculoCuotas(24);
}
else{
    console.log("usted a ingresado una opcion incorrecta");
    console.log("recargue pagina y reintentelo")
}


console.log("¿quieres confirmar prestamo?");
let ConfirmarPrestamo = prompt("si= confirmar prestamo / no= cancelar prestamo");

if(ConfirmarPrestamo == "si"){
    console.log("felicitaciones, usted a adiquirido un prestamo");
    console.log(" el dinero se depositara a su cuenta en la brevedad");
}
else if(ConfirmarPrestamo == "no"){
    console.log("prestamo cancelado")
}
else{
    console.log("opcion inexistente, reintentelo")
}

repetir = prompt("quieres solicitar otro prestamo? si / no");
}while(repetir == "si");
console.log("Muchas gracias por utilizar los servicios de prestamos online.com")
