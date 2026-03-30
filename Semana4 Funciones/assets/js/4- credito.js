// --- FUNCIONES ESPECIALIZADAS (Las Herramientas) ---

// 1. Función que solo calcula el interés
function calcularInteres(monto) {
    return monto * 0.05; // 5% de interés fijo
}

// 2. Función que decide si se aprueba (Lógica pura)
// Esto es si el estudiante tiene una nota promedio de 80 o más se le da el crédito, sino se le rechaza 
function validarAprobacion(promedio) {
    return promedio >= 80; // Devuelve true o false
}

// 3. Función que limpia la pantalla (Utilidad)
function limpiarPantalla(elemento) {
    elemento.innerHTML = "";
    elemento.classList.remove("aprobado", "denegado");
}

// --- FUNCIÓN PRINCIPAL (La que conecta con el HTML) ---

function procesarSolicitud() {
    // Capturamos datos del HTML
    let inputPromedio = Number(document.getElementById("promedio").value);
    let inputMonto = Number(document.getElementById("monto").value);
    let pantalla = document.getElementById("resultado-credito");

    // Limpiamos antes de empezar
    limpiarPantalla(pantalla);

    // USAMOS LAS FUNCIONES (Modularización)
    let esAprobado = validarAprobacion(inputPromedio);
    let interes = calcularInteres(inputMonto);
    let total = inputMonto + interes;

    // Mostramos el resultado final
    if (esAprobado) {
        pantalla.classList.add("aprobado");
        pantalla.innerHTML = `
            <h3> CRÉDITO APROBADO</h3>
            <p>Monto: ₡${inputMonto}</p>
            <p>Interés (5%): ₡${interes}</p>
            <strong>Total a pagar: ₡${total}</strong>
        `;
    } else {
        pantalla.classList.add("denegado");
        pantalla.innerHTML = `
            <h3> SOLICITUD RECHAZADA</h3>
            <p>Su promedio (${inputPromedio}) es insuficiente para el crédito.</p>
        `;
    }
}