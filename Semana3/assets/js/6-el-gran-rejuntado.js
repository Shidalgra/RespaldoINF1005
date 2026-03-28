function ejecutarSistema(opcion) {
  // Buscamos el elemento HTML donde queremos mostrar los resultados
  let pantalla = document.getElementById("pantalla-salida"); //El "puente" que conecta JS con la etiqueta del HTML
  // Limpiamos cualquier contenido previo para que no se acumule la información
  pantalla.innerHTML = ""; // Limpiamos la pantalla
  switch (
    opcion //opción es el parámetro que recibe la función y es el que evalúa que se recibe para actuar
  ) {
    case 1: // LÓGICA DE VENTAS (Uso de If + Descuentos)
      let subtotal = 50000;
      let descuento = 0;
      let total = 0;
      if (subtotal > 40000) {
        // Estructura de Decisión: Si la compra supera 40,000 colones
        descuento = subtotal * 0.15; // Calculamos el 15% de descuento            }
        total = subtotal - descuento; // le restamos al descuento

        // Inyectamos el resultado usando Template Literals (las comillas invertidas ``) // ${}: Permite meter variables directamente dentro del texto HTML.

        pantalla.innerHTML = `
                <h3>MODO: FACTURACIÓN</h3>
                <p>Subtotal: ₡${subtotal}</p>  
                <p>Descuento aplicado: ₡${descuento}</p>
                <p class="alerta-verde">TOTAL FINAL: ₡${total}</p>
            `;
        break; // Detiene la ejecución del switch aquí, break: Vital. Si no se pone, el código sigue ejecutando el case 2 por error.
      }
    case 2: // LÓGICA DE SENSORES (Uso de For + Temperaturas)
      let sensores = [35, 22, 26, 18, 22]; // Temperaturas
      pantalla.innerHTML = "<h3>MODO: MONITOREO DE TEMPERATURA</h3>";

      // Estructura Iterativa: Recorremos la lista uno por uno for: Repite la lógica tantas veces como datos haya en la lista (sensores.length).
      for (let i = 0; i < sensores.length; i++) {
        let temp = sensores[i];
        let mensaje = "";
        let claseExtra = "";

        // Decisión anidada dentro del bucle
        if (temp > 35) {
          mensaje = "CRÍTICO - ACTIVANDO ENFRIAMIENTO";
          claseExtra = "alerta-roja"; // Clase CSS definida anteriormente
        } else {
          mensaje = "ESTABLE";
          claseExtra = "alerta-verde";
        }

        // Usamos += para ACUMULAR los párrafos en la pantalla, no borrarlos +=: Significa "lo que ya había en el HTML, más esto nuevo". Es lo que permite ver la lista completa de sensores.
        pantalla.innerHTML += `
                    <p class="${claseExtra}">Sensor ${i + 1}: ${temp}°C -> ${mensaje}</p>
                `;
      }
      break;

    // Si el usuario envía algo que no sea 1 o 2 default: Es el "salvavidas" por si algo sale mal o se ingresa una opción inexistente.
    default:
      pantalla.innerHTML = "Error: Opción no reconocida por el núcleo.";
  }
}
