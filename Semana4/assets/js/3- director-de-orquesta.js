// --- LAS HERRAMIENTAS (FUNCIONES) ---

//Esto debe declararse antes para que todo lo que ponemos en ejecutarSistema(opcion)
function calcularDescuento(monto) { // 'monto' es el PARÁMETRO
    if (monto > 40000) return monto * 0.15;
    return 0;
}

// Esta también debemos declararla antes
function clasificarTemperatura(temp) { // 'temp' es el PARÁMETRO
    if (temp > 45) return { msg: "EMERGENCIA", clase: "alerta-roja" };
    if (temp > 30) return { msg: "ALERTA", clase: "alerta-amarilla" };
    return { msg: "ESTABLE", clase: "alerta-verde" };
}




// --- EL SISTEMA DE EJECUCIÓN (SOLO CONSOLA) ---

function ejecutarSistema(opcion) {
    // Eliminamos las líneas de 'pantalla' y 'document' para que no den error
    
    switch (opcion) {
        case 1:
            let montoUsuario = 50000; // ARGUMENTO
            let desc = calcularDescuento(montoUsuario);
            
            console.log("--- CASO 1: CÁLCULO DE DINERO ---");
            console.log("1. Enviando argumento: " + montoUsuario);
            console.log("2. Descuento retornado: " + desc);
            console.log("3. Total a pagar: " + (montoUsuario - desc));
            break;

        case 2:
            let lecturaActual = 38; // ARGUMENTO
            let estado = clasificarTemperatura(lecturaActual);
            
            console.log("--- CASO 2: SENSOR DE TEMPERATURA ---");
            console.log("1. Enviando temperatura: " + lecturaActual + "°C");
            // Usamos console.dir para ver el objeto retornado con sus propiedades
            console.log("2. Objeto de respuesta recibido:");
            console.dir(estado); 
            console.log("3. Mensaje final: " + estado.msg);
            break;
            
        default:
            console.warn("La opción " + opcion + " no existe en el sistema.");
    }
}

// --- PRUEBAS DE EJECUCIÓN ---

// Estas líneas ahora sí funcionarán porque no dependen del navegador/HTML
ejecutarSistema(1);
console.log("\n"); // Espacio en consola
ejecutarSistema(2);