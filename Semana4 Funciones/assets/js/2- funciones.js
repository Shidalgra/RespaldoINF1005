// Función especializada en Dinero
function calcularDescuento(monto) {
    if (monto > 40000) return monto * 0.15;
    
    return 0;
}

// Función especializada en Sensores
function clasificarTemperatura(temp) {
    if (temp > 45) return { msg: "EMERGENCIA", clase: "alerta-roja" };
    if (temp > 30) return { msg: "ALERTA", clase: "alerta-amarilla" };
    return { msg: "ESTABLE", clase: "alerta-verde" };
}






//Para la función de Dinero
// console.log(calcularDescuento(50000)); // Imprime: 7500
// console.log(calcularDescuento(20000)); // Imprime: 0

//Para la función de Sensores
// console.log(clasificarTemperatura(50)); // Imprime: { msg: "EMERGENCIA", clase: "alerta-roja" }

//Para imprimir Caso Dinero
// let miDescuento = calcularDescuento(45000);
// console.log("El descuento aplicado es: " + miDescuento);

// Caso Sensores (Accediendo a propiedades específicas)
let estadoSensor = clasificarTemperatura(35);

// Como devuelve un objeto, puedes imprimir una parte específica:
console.log("Mensaje: " + estadoSensor.clase);   // Imprime: ALERTA
//console.log("Clase CSS: " + estadoSensor.clase); // Imprime: alerta-amarilla


