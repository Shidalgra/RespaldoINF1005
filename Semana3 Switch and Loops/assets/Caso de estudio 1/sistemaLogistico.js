// Pídeles que cambien este número para probar diferentes escenarios
let opcionUsuario = 1; 

function sistemaLogistico(opcion) {
    console.log("--- Iniciando Proceso Logístico ---");
    switch(opcion) {
        case 1:
            let cantidad = 25; // Si ponen 25, verán el 20% de descuento
            let precio = 1200;
            let total = 0;
            
            for(let i=1; i<=cantidad; i++) { 
                total += precio; 
            }

            if(cantidad > 20) total *= 0.80;
            else if(cantidad > 10) total *= 0.90;

            // Uso de Template Literal para la salida
            console.log(`RESULTADO: Se procesaron ${cantidad} unidades.`);
            console.log(`TOTAL FINAL A PAGAR: ₡${total}`);
            break;

        case 2:
            let sensores = [22, 36, 25, 40, 23];
            console.log(`Escaneando ${sensores.length} sensores instalados...`);
            
            sensores.forEach((temp, i) => {
                if(temp > 35) {
                    // Template literal con mensaje de error
                    console.error(`[ALERTA] Sensor #${i+1}: ${temp}°C - ¡Peligro!`);
                } else {
                    console.log(`[OK] Sensor #${i+1}: ${temp}°C`);
                }
            });
            break;
            
        default:
            console.log(`La opción ${opcion} no existe en el núcleo del sistema.`);
    }
}

// EJECUCIÓN DEL SISTEMA
sistemaLogistico(opcionUsuario);